import React from "react";
import Head from "next/head";
import Logo from "../../public/logo.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>OneNumber | Data Privacy and Protection Policy</title>
        <meta name="description" content="Connect the world with OneNumber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/logo.png"} />
        
      </Head>

      <main className="relative">
        <Header />
        <section>
            <h5 text-4xl text-center font-bold text-red-500>Data Privacy and Protection Policy</h5>
        </section>
        <Footer />
      </main>
    </>
  );
}
