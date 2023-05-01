import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 1200px;
  min-height: 80vh;
  background-color: white;
  padding: 2.5vw;
  margin: 2.5vw;
  margin-top: 4vw;
  border-radius: 1.6vw;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-top: 2rem;
    border-radius: 0;
  }
`;

export const Title = styled.h2`
  font-size: 3.5vw;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (min-width: 1116px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2vw;
  }
`;
