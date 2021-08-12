import { AiOutlineUser } from "react-icons/ai";

import logo from "@assets/logo.png";
import Image from "next/image";
import Link from "next/link";

import { Nav, Logo, NavList, Button } from "./styles";

export function Navbar() {
  return (
    <Nav>
      <Logo>
        <Link href="/" passHref>
          <a>
            <Image src={logo} alt="yea-food" width={42} height={42} />
            <strong>Yea-food!</strong>
          </a>
        </Link>
      </Logo>

      <NavList>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/locais" passHref>
              <a>Locais de entrega</a>
            </Link>
          </li>
          <li>
            <Link href="/contato" passHref>
              <a>Contato</a>
            </Link>
          </li>
        </ul>

        <Link href="/login" passHref>
          <Button>
            <AiOutlineUser size={24} />
            Fazer pedido
          </Button>
        </Link>
      </NavList>
    </Nav>
  );
}
