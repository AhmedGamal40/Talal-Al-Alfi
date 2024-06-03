// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, subject, message } = req.body;

//     // Create a transporter object using SMTP transport
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail', // or any other email service
//       auth: {
//         user: process.env.EMAIL_USER, // your Gmail address
//         pass: process.env.EMAIL_PASS, // your Gmail password or app password
//       },
//     });

//     try {
//       // Send email with defined transport object
//       await transporter.sendMail({
//         from: `"${firstName} ${lastName}" <${email}>`,
//         to: 'gamal.ahmed.xv@gmail.com', // your email address to receive the message
//         subject: subject,
//         text: message,
//         html: `<p>${message}</p>`,
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }


// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, subject, message } = req.body;

//     console.log('Received request body:', req.body);
//     console.log('Email User:', process.env.EMAIL_USER);
//     console.log('Email Pass:', process.env.EMAIL_PASS ? 'Exists' : 'Does not exist');

//     // Create a transporter object using SMTP transport
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail', // or any other email service
//       auth: {
//         user: process.env.EMAIL_USER, // your Gmail address
//         pass: process.env.EMAIL_PASS, // your Gmail password or app password
//       },
//     });

//     try {
//       // Send email with defined transport object
//       await transporter.sendMail({
//         from: `"${firstName} ${lastName}" <${email}>`,
//         to: 'gamal.ahmed.xv@gmail.com', // your email address to receive the message
//         subject: subject,
//         text: message,
//         html: `<p>${message}</p>`,
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('Error sending email:', error); // Log the error for debugging
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer'


// export async function POST(request) {
//     try {
//         const {firstName, lastName, email, subject, message} = await request.json();

//         const transporter = nodemailer.createTransport({
//             service: 'Gmial',
//             auth: {
//               user: process.env.EMAIL_USER, // your Gmail address
//                       pass: process.env.EMAIL_PASS
//             }
//         })

//         const mailOption = {
//           from: `"${firstName} ${lastName}" <${email}>`,
//                   to: 'gamal.ahmed.xv@gmail.com', // your email address to receive the message
//                   subject: subject,
//                   text: message,
//                   html: `<p>${message}</p>`,
//         }

//         await transporter.sendMail(mailOption)

//         return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
//     }
// }



// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, subject, message } = req.body;

//     console.log('Received request body:', req.body);
//     console.log('Email User:', process.env.EMAIL_USER);
//     console.log('Email Pass:', process.env.EMAIL_PASS ? 'Exists' : 'Does not exist');

//     // Create a transporter object using SMTP transport
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail', // or any other email service
//       auth: {
//         user: process.env.EMAIL_USER, // your Gmail address
//         pass: process.env.EMAIL_PASS, // your Gmail password or app password
//       },
//     });

//     try {
//       // Send email with defined transport object
//       await transporter.sendMail({
//         from: `"${firstName} ${lastName}" <${email}>`,
//         to: 'gamal.ahmed.xv@gmail.com', // your email address to receive the message
//         subject: subject,
//         text: message,
//         html: `<p>${message}</p>`,
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('Error sending email:', error); // Log the error for debugging
//       res.status(500).json({ error: 'Failed to send email', details: error.message });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }



import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, subject, message } = req.body;

    console.log('Received request body:', req.body);
    console.log('Email User:', process.env.EMAIL_USER);
    console.log('Email Pass:', process.env.EMAIL_PASS ? 'Exists' : 'Does not exist');

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or any other email service
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail password or app password
      },
    });

    try {
      // Send email with defined transport object
      await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`,
        to: 'gamal.ahmed.xv@gmail.com', // your email address to receive the message
        subject: subject,
        text: message,
        html: `<p>${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error); // Log the error for debugging
      res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
