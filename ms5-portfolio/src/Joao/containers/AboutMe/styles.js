import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  max-width: 1200px;
  min-height: 100vh;
  background-color: white;
  padding: 2.5vw;
  margin: 2.5vw;
  margin-top: 4vw;
  border-radius: 1.6vw;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 5vw;
    margin-top: 5vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
  text-align: left;
  color: #444;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 600;

    span {
      color: #c1a615;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;

    span {
      font-weight: bold;
      color: #c1a615;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
