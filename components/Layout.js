import Navbar from './Navbar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </footer>
    </>
  );
}