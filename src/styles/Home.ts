import styled from "styled-components";

export const Container = styled.main`
  width: 90vw;
  max-width: 97.0rem;
  margin: 0 auto;
`;

export const Welcome = styled.section`
  width: 100%;
  display: flex;
  margin-top: 9.6rem;
  margin-bottom: 19.2rem;

  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 19.2rem;

  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.article`
  width: 100%;
  max-width: 37.6rem;

  > h1 {
    font: ${props => props.theme.fonts.title};
    line-height: 5.6rem;
    margin-bottom: 1.6rem;
  }

  > p {
    line-height: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const Button = styled.a`
  height: 4.8rem;
  width: 16rem;

  background-color: #C4C4C4;
  border-radius: 0.8rem;
  
  font: ${props => props.theme.fonts.bold};
  color: #FFF;
  
  cursor: pointer;
  transition: background-color .2s;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #BABABA;
  }
`;

export const Social = styled.a`
  height: 4.2rem;
  width: 4.2rem;
  border-radius: 50%;
  background-color: #C4C4C4;

  cursor: pointer;
  transition: background-color .2s;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #BABABA;
  }

  > svg {
    color: #FFF;
    font-size: 2.4rem
  }
`;

export const GroupLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;