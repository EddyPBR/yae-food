import styled from "styled-components";

export const Foot = styled.footer`
  background-color: #C0C0C0;

  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 96.8rem;
  min-height: 6rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DevDetails = styled.div`
  font-size: 1.4rem;
  color: #FFF;

  > a {
    margin-left: .4rem;
    color: #FFF;
    text-decoration: none;
    transition: color .2s;

    &:hover {
      color: #6C63FF;
    }
  }

`;

export const CompanyDetails = styled.div`
  font-size: 1.4rem;
  color: #FFF;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > li {
      display: flex;
      align-items: center;
      width: 2.8rem;
      height: 2.8rem;

      > a {
        width: 100%;
        height: 100%;
        border-radius: 50%;

        background-color: #FFF;
        color: #000;

        text-decoration: none;
        transition: background-color .2s, color .2s;
        
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #DDD;
          color: #333;
        }

        > svg {
          font-size: 1.6rem;
        }
      }
    }
  }
`;