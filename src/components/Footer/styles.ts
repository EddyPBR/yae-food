import styled from "styled-components";

export const Foot = styled.footer`
  background-color: #c0c0c0;

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
  color: #fff;

  > a {
    margin-left: 0.4rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #6c63ff;
    }
  }
`;

export const CompanyDetails = styled.div`
  font-size: 1.4rem;
  color: #fff;

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

        background-color: #fff;
        color: #000;

        text-decoration: none;
        transition: background-color 0.2s, color 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #ddd;
          color: #333;
        }

        > svg {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
