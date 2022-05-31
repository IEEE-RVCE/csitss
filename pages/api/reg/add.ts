// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

import Prisma from '../../../lib/pris';
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
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {

    const { fullName,
      email,
      phoneNumber,
      ieeeMemNo,
      exeComIeeeName,
      college,
      noOfExecom,
      exeComIeeeNo,
      anyOtherMembers,
      otherMembers,
      otherIeeeName,
      link,
      paymentAmount } = req.body;
    console.log(req.body)
    await Prisma.registration.create({
      data: {
        name: fullName as string,
        email: email as string,
        phone: phoneNumber as string,
        college: college as string,
        ieeeNumber: ieeeMemNo as string,
        execomMemberNumber: noOfExecom as number,
        execomMemberNames: exeComIeeeName as string,
        execomMemberIeeeNumbers: exeComIeeeNo as string,
        otherMembers: anyOtherMembers as boolean,
        otherMembersNames: otherMembers as string,
        otherMembersIeeeNumbers: otherIeeeName as string,
        paymentInfo: link as string,
        paymentAmount: paymentAmount as number,
      },
    })
    const user = await firebaseAdmin.auth().getUserByEmail(email as string)
    await firebaseAdmin.auth().setCustomUserClaims(user.uid, {
      alreadyReg: true
    })
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