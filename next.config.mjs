// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    // Enable API routes
//    api: {
//     // Enable API routes
//     enabled: true,
//   },
// };

// export default nextConfig;


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



// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    LOCAL_HOST: 'http://localhost:3000',
    HOST:"https://talal-al-alfi-r6qw.vercel.app"
  },
}

export default nextConfig
