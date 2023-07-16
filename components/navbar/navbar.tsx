import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import logoImage from "../../public/logo.png";

export default function Navbar() {
  // TODO: Replace this with React context.
  var navbarTitle;
  var navbarHeading;

  if (navbarTitle) {
    navbarHeading = (
      <Heading className="ml-3 text-indigo-900">{navbarTitle}</Heading>
    );
  } else {
    navbarHeading = (
      <>
        <Image
          width={50}
          height={50}
          src={logoImage}
          alt="Logo"
          className="rounded-md"
        ></Image>
        <Heading className="ml-3 text-indigo-900">Noter</Heading>
      </>
    );
  }

  return (
    <>
      <Flex
        pr={3}
        pl={3}
        align={"center"}
        style={{
          height: "4em",
          width: "100%",
          borderBottom: "1px solid #D6D6D6",
        }}
      >
        {navbarHeading}
        <InputGroup className="ml-3">
          <InputLeftElement pointerEvents="none">
            <span className="material-symbols-outlined">search</span>
          </InputLeftElement>
          <Input variant="filled" width="auto" placeholder="Search"></Input>
        </InputGroup>

        <Spacer></Spacer>
      </Flex>
    </>
  );
}
