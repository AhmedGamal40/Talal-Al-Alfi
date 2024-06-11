// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, subject, message } = req.body;

//     console.log('Received request body:', req.body);
//     console.log('Email User:', process.env.EMAIL_USER);
//     console.log('Email Pass:', process.env.EMAIL_PASS ? 'Exists' : 'Does not exist');

//     // Ensure environment variables are set
//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//       return res.status(500).json({ error: 'Email configuration is missing' });
//     }

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


// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

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
//       console.error('Error sending email:', error); // Log the error for debugging
//       res.status(500).json({ error: 'Failed to send email', details: error.message });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }


// ------------------------------------------------------------------------------------------------------------------------------

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer'


// export async function POST(request) {
//     try {
//         const { firstName, lastName, email, subject, message } = await request.json();

//         const transporter = nodemailer.createTransport({
//             service: 'hostinger',
//             host: 'smtp.hostinger.com',
//             port: 465,
//             secure: true,
//             auth: {
//                 user: 'noreplay@mediaverseagency.com',
//                 pass: process.env.NOREPLAY_PASSWORD
//             }
//         })

//         const mailOption = {
//             from: 'noreplay@mediaverseagency.com',
//             to: 'islam@mediaverseagency.com',
//             subject: "Tala Al Alfi",
//             html: `
//         <h3>Hello,</h3>
//         <li> First Name: ${firstName}</li>
//         <li> Last Name: ${lastName}</li>
//         <li> Email: ${email}</li> 
//         <li> Subject: ${subject}</li> 
//         <li> Message: ${message}</li>

//         <p>Tala Al Alfi</p>
//         `
//         }

//         await transporter.sendMail(mailOption)

//         return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
//     }
// }








// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { firstName, lastName, email, subject, message } = await req.json();

//   let transporter = nodemailer.createTransport({
//     service: 'hostinger',
//     host: 'smtp.hostinger.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"Your Name" <${process.env.EMAIL_USER}>`,
//       subject:"Tala Al Alfi",
//       html: `
//         <h3>Hello,</h3>
//         <li> First Name: ${firstName}</li>
//         <li> Last Name: ${lastName}</li>
//         <li> Email: ${email}</li> 
//         <li> Subject: ${subject}</li> 
//         <li> Message: ${message}</li>

//         <p>Tala Al Alfi</p>
//         `
//     });
//     return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
//   }
// }



// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'hostinger',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
