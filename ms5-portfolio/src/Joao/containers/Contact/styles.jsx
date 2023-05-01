import styled from "styled-components";

export const ContactContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94.3%;
  padding: 3rem;
  background-color: white;
  margin-top: 2vw;
`;

export const ContactTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 3rem;
  color: black;
`;

export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  color: #fff;
  background-color: ${({ color }) => color};
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  svg {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
    svg {
      font-size: 1.4rem;
    }
  }
`;
