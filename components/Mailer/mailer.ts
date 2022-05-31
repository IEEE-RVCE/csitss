import { Registration } from "@prisma/client";
import Template from "./template";
// import fs from "fs";
// import path from "path";
import transporter from "./lib";

// function ReadAttachments() {
//   const attachments: any = [];
//   const files = fs.readdirSync(path.join(process.cwd(), "images"));
//   if (files.length === 0) return null;
//   files.map((file) => {
//     attachments.push({
//       filename: file,
//       path: path.join(process.cwd(), "images", file),
//     });
//   });
//   return attachments;
// }

async function SendMail(EmailData: Registration) {
  return transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: EmailData.email, // list of receivers
    subject: "Confirmation of Payment", // Subject line
    text: "Confirmation of Payment", // plain text body
    html: await Template(EmailData), // html body
  });
}

export default SendMail;