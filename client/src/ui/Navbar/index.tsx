import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { BiLink } from "react-icons/bi";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand className="text-xl gap-2">
        <BiLink />
        <p className="text-inherit">Short Linkify</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Url Shortner
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Check Urls
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            pricings
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
