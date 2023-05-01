import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 20vw;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1.6vw;
  margin-bottom: 2vw;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 40vw;
    height: 40vw;
    border-radius: 3vw;
  }
`;

export const Icon = styled.img`
  width: 50%;
  height: auto;
  margin-top: 3vw;
  margin-bottom: 1.5vw;
`;

export const Name = styled.h3`
  font-size: 2.5vw;
  margin-top: 1vw;
  margin-bottom: 0.5vw;
  font-weight: bold;
  text-align: center;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;
