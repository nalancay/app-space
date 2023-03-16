import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 80%;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.pink} 0%,
    ${({ theme }) => theme.colors.violetLigth} 100%
  );
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 1em 1em;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-self: flex-start;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    font-family: "Nanum Gothic", sans-serif;
    font-size: 14px;
    white-space: nowrap;
  }

  .table__row {
    display: grid;
    grid-template-columns: 20% 1fr 1fr 14%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    margin-top: 0.2em;
    &:last-child {
      border-bottom: 0;
    }
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background: ${({ theme }) => theme.colors.darkViolet};
    color: ${({ theme }) => theme.colors.white};

    span:hover {
      color: ${({ theme }) => theme.colors.blueLight1};
    }
  }

  @media screen and (max-width: 800px) {
    width: 280%;
  }
`;

export const StyledContainerLaunches = styled.div`
  padding: 1em 0.5em 1em 0.5em;
  width: 95%;
  background: ${({ theme }) => theme.colors.darkViolet};
  margin-bottom: 1em;
  @media screen and (max-width: 800px) {
    overflow-x: auto;
  }
`;
