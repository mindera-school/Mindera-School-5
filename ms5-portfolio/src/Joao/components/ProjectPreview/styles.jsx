import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 340px;
  height: 300px;
  margin: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
  margin: 0;
`;

export const PreviewText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const PreviewTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
`;

export const PreviewTechnologies = styled.p`
  margin: 0;
  font-size: 18px;
  color: #666;
  text-align: left;
  margin-top: auto;

  span {
    display: inline-block;
    background-color: black;
    color: white;
    border-radius: 4px;
    padding: 4px 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
  }
`;