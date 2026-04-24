import styled from "styled-components";
import { color } from "../../styles/themeHelpers";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: ${color("backgroundSurface")};
  transition:
    background-color 300ms ease,
    color 300ms ease;
`;

export const Copyright = styled.div`
  font-size: 14px;
  color: ${color("textMuted")};
  text-align: center;
  font-family: "Poppins", sans-serif;
`;
