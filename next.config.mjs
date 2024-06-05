/** @type {import('next').NextConfig} */
const nextConfig = {
   // Enable API routes
   api: {
    // Enable API routes
    enabled: true,
  },
};

export default nextConfig;


// module.exports = {
//     // ... other configurations ...
//     target: 'serverless',
//     // Enable API routes
//     api: {
//       // Enable API routes
//       enabled: true,
//       // Specify the allowed HTTP methods for each route
//       routes: [
//         {
//           path: '/api/sendEmail',
//           method: 'POST',
//         },
//       ],
//     },
//   };