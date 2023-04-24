// src/components/Hero.tsx
import React, { useMemo } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useBreakpointValue,
  FlexProps,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Globe from "./Globe";
import Footer from "./Footer";

const Hero: React.FC = () => {
  const config = useMemo(
    () => ({
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1.0, 1.0, 1.0],
      markerColor: [0.1, 0.5, 0.8],
      glowColor: [1, 1, 1],
      markers: [
        { location: [40.7128, -74.006], size: 0.07 },
        { location: [-34.603683, -58.381557], size: 0.07 },
        { location: [26.228516, 50.586048], size: 0.07 },
        { location: [19.432608, -99.133209], size: 0.07 },
        { location: [1.352083, 103.819839], size: 0.07 },
        { location: [1.352083, 103.819839], size: 0.07 },
        { location: [6.49985, 3.340319], size: 0.07 },
        { location: [-26.263469, 28.062964], size: 0.07 },
        { location: [52.281729, 21.02983], size: 0.07 },
        { location: [-23.5795, -46.691517], size: 0.07 },
        { location: [4.59435, -73.921071], size: 0.07 },
        { location: [12.890784, 77.711931], size: 0.07 },
        { location: [36.87438, 127.893411], size: 0.07 },
        { location: [-33.787342, 150.912041], size: 0.07 },
      ],
      onRender: (state: Record<string, unknown>) => {
        state.phi = ((state.phi as number) || 0) + 0.01;
      },
    }),
    []
  );
  const flexDirection = useBreakpointValue<FlexProps["direction"]>({
    base: "column",
    md: "row",
  });

  return (
    <Flex
      direction={flexDirection}
      alignItems="center"
      justifyContent="center"
      width="100%"
      minHeight="60vh"
      px={0}
      py={16}
      bg={"#f0f2f5"}
    >
      <Box
        maxW="lg"
        textAlign={{ base: "center", md: "center" }}
        mb={{ base: 8, md: 0 }}
      >
        <Image
          src="./vectium.svg"
          alt="Your Image"
          width={350}
          height={200}
          style={{ marginBottom: "48px" }}
        />

        <Heading
          as="h1"
          size="2xl"
          mb={4}
          textAlign={"start"}
          fontWeight={"black"}
          lineHeight={"120%"} // Add this property
        >
          The Lending Protocol For Emerging Market Real World Assets Products
        </Heading>
        <Flex alignItems="center" style={{ marginBottom: "48px" }}>
          <Text fontSize="md" fontWeight={"bold"} textAlign={"start"}>
            By {""} &nbsp;
          </Text>
          <Link href={"https://num.finance/"}>
            <Image src="./num.svg" alt="Your Image" width={150} height={150} />
          </Link>
        </Flex>

        <Box style={{ marginTop: "64px" }}>
          <Text fontSize="2xl" fontWeight={"black"} textAlign={"start"}>
            Mariano DP
          </Text>
          <Link href={"mailto:mariano@num.finance"}>
            <Text fontSize="md" mb={8} fontWeight={"black"} textAlign={"start"}>
              mariano@num.finance
            </Text>
          </Link>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexShrink={0}
        width={{ base: "100%", md: "50%" }}
        ml={{ md: 8 }}
        alignItems={"center"}
      >
        <Globe width={650} height={650} config={config} />
      </Box>
    </Flex>
  );
};

export default Hero;
