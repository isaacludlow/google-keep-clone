import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Navbar from './navbar'
import OneEmSpacer from '@/components/layout/one-em-spacer'
import { Notes } from "@/components/notes/notes"; 



export default function Home() {
 

  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <OneEmSpacer></OneEmSpacer>
      <Box>
        <Notes />
      </Box>
    </ChakraProvider>
  );
}
