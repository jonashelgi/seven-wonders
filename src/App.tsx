import React from "react";
import { ChakraProvider } from '@chakra-ui/react'

interface PropTypes {
  children: React.ReactNode;
}

function App({ children }: PropTypes) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default App;
