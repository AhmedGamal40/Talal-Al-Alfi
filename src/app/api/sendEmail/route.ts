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


// -------------------------------------------------------------------------------------------------------------------------------------------------


// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Logo from '../../../../public/Assets/Images/logo2.png';

// const initialValue = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   subject: '',
//   message: '',
// };

// const initialState = { values: initialValue };

// function FormContact() {
//   const [state, setState] = useState(initialState);
//   const [touched, setTouched] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const onBlur = ({ target }) =>
//     setTouched((prev) => ({
//       ...prev,
//       [target.name]: true,
//     }));

//   const handleChange = ({ target }) =>
//     setState((prev) => ({
//       ...prev,
//       values: {
//         ...prev.values,
//         [target.name]: target.value,
//       },
//     }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const response = await fetch('/api/sendEmail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(state.values),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }

//       setSuccess('Email sent successfully!');
//       setState(initialState); // Reset the form
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex md:justify-around justify-center md:flex-row flex-col mt-20 pb-20">
//       <div className="md:w-1/2 my-10 lg:px-20 px-10 items-center text-start text-[#C2C2C2]">
//         If you’re seeking personalized legal advice, don’t hesitate to reach out for expert counsel tailored to your specific needs and circumstances.
//       </div>

//       <div className="bg-white p-10 mx-auto shadow-lg w-full max-w-lg">
//         <div className="text-center mb-8">
//           <Image src={Logo} alt="Logo" />
//         </div>
//         <form onSubmit={onSubmit}>
//           <div className="flex mb-4">
//             <div className="w-1/2 pr-2">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={state.values.firstName}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="First Name"
//                 required
//                 onChange={handleChange}
//                 onBlur={onBlur}
//               />
//             </div>
//             <div className="w-1/2 pl-2">
//               <input
//                 type="text"
//                 name="lastName"
//                 value={state.values.lastName}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Last Name"
//                 required
//                 onChange={handleChange}
//                 onBlur={onBlur}
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               value={state.values.email}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Email Address"
//               required
//               onChange={handleChange}
//               onBlur={onBlur}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="subject"
//               value={state.values.subject}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Subject"
//               required
//               onChange={handleChange}
//               onBlur={onBlur}
//             />
//           </div>
//           <div className="mb-4">
//             <textarea
//               name="message"
//               value={state.values.message}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Message"
//               rows="5"
//               required
//               onChange={handleChange}
//               onBlur={onBlur}
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#1B2745] text-white py-2 hover:bg-blue-700 transition duration-300"
//             disabled={
//               isLoading ||
//               !state.values.firstName ||
//               !state.values.lastName ||
//               !state.values.email ||
//               !state.values.subject ||
//               !state.values.message
//             }
//           >
//             {isLoading ? 'Submitting...' : 'Submit'}
//           </button>
//           {error && <p className="text-red-500 mt-2">{error}</p>}
//           {success && <p className="text-green-500 mt-2">{success}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormContact;



// src/app/api/sendEmail/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { to, subject, text, html } = await req.json();

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Your Name" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
