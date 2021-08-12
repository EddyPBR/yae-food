import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Foot, Container, DevDetails, CompanyDetails } from "./styles";

export function Footer() {
  return (
    <Foot>
      <Container>
        <DevDetails>
          Desenvolvido com 💜 por
          <a
            href="https://eddypbr-website.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @eddypbr
          </a>
        </DevDetails>

        <CompanyDetails>
          &copy; 2021 yel-food! - Alguns direitos reservados
          <ul>
            <li>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </CompanyDetails>
      </Container>
    </Foot>
  );
}
