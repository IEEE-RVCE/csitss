// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

import Prisma from '../../../lib/pris';
import SendMail from '../../../components/Mailer/mailer';
import { firebaseAdmin } from '../../../lib/firebaseAdmin';

export interface ApiRequest extends NextApiRequest {
  user?: String;
}

export const authenticated = (fn: NextApiHandler) => async (
  req: ApiRequest,
  res: NextApiResponse
) => {
  const atoken = req.headers.cookie?.split('token=')[1];
  try {

    const token = await firebaseAdmin.auth().verifyIdToken(atoken!)
    req.user = token.uid;
    return fn(req, res);
  }
  catch (err) {
    res.status(401).json({ error: "Token Not Found" });
    return
  }

};

export default authenticated(async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {

    const { id } = req.body;
    const newReg = await Prisma.registration.update({
      where: {
        id: id
      },
      data: {
        approved: true,
        paymentStatus: 'Paid'
      },
    })
    await SendMail(newReg);
    res.status(200).json({
      ok: true,
    })
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went Wrong' })
  }
}
)