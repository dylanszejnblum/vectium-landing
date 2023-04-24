import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Flex } from "@chakra-ui/react";

const index = () => {
  return (
    <>
      <Head>
        <title>Vectium Finance</title>
        <meta
          name="description"
          content="     The Lending Protocol For Emerging Market Real World Assets Products"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Vectium Finance" />
        <meta
          property="og:description"
          content="     The Lending Protocol For Emerging Market Real World Assets Products"
        />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://vectium.finance" />
        <meta property="og:type" content="website" />
      </Head>
      <Flex minHeight="100vh" flexDirection="column">
        <Flex flexGrow="1">
          <Hero />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default index;
