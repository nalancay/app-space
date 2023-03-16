import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.blueLight1} 0%,
    ${({ theme }) => theme.colors.lightNavyBlue} 100%
  );
  h2 {
    margin: 1em 1em;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    h2 {
      font-size: 18px;
    }
  }
`;

export const StyledContainerTimer = styled.div`
  width: 80%;
  margin-bottom: 2em;
  background: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1em;

  p {
    font-family: "Nanum Gothic", sans-serif;
    text-align: center;
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    margin: 5px;
  }

  .info_data {
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const StyledContainerSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    margin-right: 10px;
    font-family: "Nanum Gothic", sans-serif;
    color: ${({ theme }) => theme.colors.white};
  }
  .social_share_redes {
    margin: 0 6px;
  }
`;
