import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }

  @media screen and (max-width: 400px) {
    img {
      width: 80%;
    }
  }
`;
