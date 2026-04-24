import styled from "styled-components";
import { color, shadow } from "../../styles/themeHelpers";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1240px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

export const NotFoundBox = styled.div`
  background-color: ${color("backgroundSurface")};
  width: 100%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: ${shadow("md")};
  gap: 30px;
`;

export const NotFoundContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundText = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
export const NotFoundTitle = styled.h3`
  font-size: 200px;
  font-weight: 900;
  line-height: 1;
`;

export const NotFoundSubtitle = styled.h4`
  font-size: 48px;
  font-weight: 700;
`;

export const NotFoundDescription = styled.h6`
  font-size: 18px;
  color: ${color("textMuted")};
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const GoBackButton = styled.button`
  padding: 10px 20px;
  background-color: ${color("brandPrimary")};
  border: 2px solid ${color("brandPrimary")};
  color: ${color("textOnBrand")};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: ${shadow("sm")};
  font-weight: 500;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.88;
  }
`;

export const GoHomeButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid ${color("brandPrimary")};
  color: ${color("brandPrimary")};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: ${shadow("sm")};
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 300ms ease;
  &:hover {
    opacity: 1;
  }
`;
