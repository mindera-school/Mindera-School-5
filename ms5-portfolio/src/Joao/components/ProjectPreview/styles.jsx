import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 16.5px;
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 6.6px;
  box-shadow: 0px 4.4px 22px 0 #636262;

  @media (min-width: 1116px) {
    max-width: none;
    width: 448.8px;
    height: 396px;
  }

  @media (max-width: 1116px) {
    max-width: 90vw;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 14.85px 14.85px 0 0;
  margin: 0;
`;

export const PreviewText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
`;

export const PreviewTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;

  @media (min-width: 1116px) {
    font-size: 31.68px;
    margin-bottom: 10.56px;
  }
`;

export const PreviewTechnologies = styled.p`
  margin: 0;
  font-size: 20px;
  color: #666;
  text-align: left;
  margin-top: auto;
  line-height: 1.2;

  span {
    display: inline-block;
    background-color: black;
    color: white;
    border-radius: 4.4px;
    padding: 5.28px 10.56px;
    margin-right: 10.56px;
    margin-bottom: 10.56px;
    font-size: 14px;
    font-weight: bold;
  }

  @media (min-width: 1116px) {
    font-size: 25.92px;
    line-height: 1.1;

    span {
      font-size: 18.48px;
      padding: 5.28px 8px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
`;