import React from "react";
import {
  ChakraProvider,
  Heading,
  Text,
  Image,
  Container,
  VStack,
  Box,
  Divider,
} from "@chakra-ui/react";
import {AppProps} from "next/app";

import theme from "../theme";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
        <Container
          backgroundColor="white"
          borderRadius="sm"
          boxShadow="md"
          maxWidth="container.xl"
          padding={4}
        >
          <VStack marginBottom={6}>
            <Image borderRadius={9999} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQb_HccIKfAURQa-kFKfdZvOglOhaHI2T2RYnVOdj5vTRELiZkOIPV6KzXPdvNrwtAHY&usqp=CAU" />
            <Heading>El almacen del Androide</Heading>
            <Text>Comic Store</Text>
          </VStack>
          <Divider marginY={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
