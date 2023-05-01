import styled from "styled-components";

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
`;


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;

  @media screen and (max-width: 1116px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
`;

export const Separator = styled.div`
  width: 91%;
  height: 1px;
  background-color: #434343;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;

  .page-info {
    display: flex;
    align-items: center;
    margin: 0 10px;
    font-weight: bold;
  }

  .page-info span {
    display: block;
    color: #434343;
    padding: 5px 8px;
    border-radius: 8px;
    max-width: 35px;
    min-width: 35px;
    background-color: #d9d9d9;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #434343;
  color: white;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  font-weight: bold;

  &:hover {
    background-color: #636262;
  }
`;

export const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProjectsTitle = styled.h2`
  font-size: 2.8vw;
  margin: 0;

  @media (max-width: 1116px) {
    font-size: 4vw;
  }
  
  @media (max-width: 768px) {
    font-size: 8vw;
    text-align: center;
    width: 100%;
  }
`;


export const SearchBar = styled.input`
  border: none;
  border-radius: 1.6vw;
  padding: 5px 8px;
  background-color: #f3f3f3;
  font-size: 15px;
  width: 200px;
  height: 30px;
  box-shadow: inset 0 0.5vw 1vw 0 rgba(0, 0, 0, 0.1);
  outline: none;

  @media (max-width: 768px) {
    width: 70vw;
    height: 4vw;
    margin-top: 2vw;
    font-size: 2.5vw;
    align-self: center;
  }

  @media (max-width: 490px) {
    height: 8vw;
    font-size: 5vw;
  }
`;