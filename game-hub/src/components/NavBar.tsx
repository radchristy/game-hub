import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Colormodeswitch from "./Colormodeswitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Colormodeswitch />
    </HStack>
  );
};

export default NavBar;
