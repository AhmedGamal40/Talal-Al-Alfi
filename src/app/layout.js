// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Components/Layout/Navbar";
// import TopHeader from "./Components/Layout/TopHeader";
// import Footer from "./Components/Layout/Footer";
// import Head from "next/head";
// import { Josefin_Sans } from '@next/font/google';
// import Communication from "./Components/Layout/Communication";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Talal Al Alfi",
//   description: "Generated by create next app",
// };

// const josefinSans = Josefin_Sans({
//   subsets: ['latin'], // Choose subsets as per your requirement
//   weight: ['400','500' , '600' , '700'], // Choose weights as per your requirement
// });

// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <Head>
//         </Head>
//       <body >
//       <main className={josefinSans.className}>
//         <TopHeader />
//         <Navbar />
//         {children}
//         <Footer />
//         <Communication />
//       </main>
//       </body>
//     </html>
//   );
// }


// /pages/_app.js (or wherever your RootLayout is defined)
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Layout/Navbar";
import TopHeader from "./Components/Layout/TopHeader";
import Footer from "./Components/Layout/Footer";
import Head from "next/head";
import { Josefin_Sans } from '@next/font/google';
import Communication from "./Components/Layout/Communication";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Talal Al Alfi",
  description: "Generated by create next app",
};

const josefinSans = Josefin_Sans({
  subsets: ['latin'], // Choose subsets as per your requirement
  weight: ['400','500' , '600' , '700'], // Choose weights as per your requirement
});

export default function RootLayout({ children }) {
  return (
    <html>
      <Head >
      <link
            href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
            rel="stylesheet"
          />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <main className={josefinSans.className }>
          <TopHeader />
          <Navbar />
          {children}
          <Communication />
          <Footer />
        </main>
      </body>
    </html>
  );
}