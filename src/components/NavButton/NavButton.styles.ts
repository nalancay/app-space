import styled from "styled-components";

export const ContainerButtons = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.2em;
  margin-bottom: 0.7em;
  .btn-link {
    font-family: ${({ theme }) => theme.fonts.mainSans};
    margin-top: 0.7em;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    border: 0.1em solid ${({ theme }) => theme.colors.black};
    padding: 5px 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.pink};
      background-color: ${({ theme }) => theme.colors.darkViolet};
    }
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
  @media screen and (max-width: 300px) {
    .btn-link {
      padding: 0;
      font-size: ${({ theme }) => theme.fonts.size14};
    }
  }
`;
