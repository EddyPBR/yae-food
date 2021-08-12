import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  max-width: 96.8rem;
  min-height: 5.2rem;

  margin: 0 auto;
  margin-top: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    text-decoration: none;

    > strong {
      font: ${(props) => props.theme.fonts.title};
      font-size: 1.6rem;
      color: #000;
      transition: color 0.2s;
    }

    &:hover {
      > strong {
        color: #505050;
      }
    }
  }
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > li {
      font: ${(props) => props.theme.fonts.title};
      font-size: 1.6rem;

      > a {
        text-decoration: none;
        color: #000;
        transition: color 0.2s;

        &:hover {
          color: #505050;
        }
      }
    }
  }
`;

export const Button = styled.a`
  color: #fff;
  background-color: #c4c4c4;
  font: ${(props) => props.theme.fonts.bold};
  font-size: 1.6rem;
  padding: 1.4rem;
  border-radius: 0.8rem;

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  cursor: pointer;

  &:hover {
    background-color: #aaaaaa;
  }
`;
