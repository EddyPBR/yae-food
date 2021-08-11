import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { Nav, Logo, NavList, Button } from "./styles";
import logo from "@assets/logo.png";

export function Navbar() {
  return(
    <Nav>
      <Logo>
        <Link href="/">
          <a>
            <Image src={logo} alt="yea-food" width={42} height={42} />
            <strong>Yea-food!</strong>
          </a>
        </Link>
      </Logo>

      <NavList>
        <ul>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/locais">
              <a>Locais de entrega</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>

        <Link href="/login">
          <Button>
            <AiOutlineUser size={24} />
            Fazer pedido
          </Button>
        </Link>
      </NavList>
    </Nav>
  )
};
