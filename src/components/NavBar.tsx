import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    //justifyContent="space-between"
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="30px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />{" "}
    </HStack>
  );
};

export default NavBar;
