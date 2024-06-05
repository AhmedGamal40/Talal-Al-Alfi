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



import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, subject, message } = req.body;

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