import styled, { css } from "styled-components";
import { BaseText } from "./components/typography";

interface iStyledTextProps {
  textType: string;
  textColor: String;
}

export const StyledText = styled(BaseText)<iStyledTextProps>`
  ${({ textType }) => {
    if (textType === "logo") {
      return css`
        font-size: 1.25rem;
        font-weight: 700;
      `;
    } else if (textType === "title") {
      return css`
        font-size: 1rem;
        font-weight: 700;
      `;
    } else if (textType === "headline") {
      return css`
        font-size: 0.75rem;
        font-weight: 400;
      `;
    } else if (textType === "headlineBold") {
      return css`
        font-size: 0.75rem;
        font-weight: 700;
      `;
    } else if (textType === "label") {
      return css`
        font-size: 0.609rem;
        font-weight: 400;
      `;
    }
  }}

  ${({ textColor }) => {
    if (textColor === "white") {
      return css`
        color: var(--color-grey-0);
      `;
    } else if (textColor === "grey") {
      return css`
        color: var(--color-grey-1);
      `;
    } else if (textColor === "primary") {
      return css`
        color: var(--color-primary);
      `;
    } else if (textColor === "negative") {
      return css`
        color: var(--color-negative);
      `;
    }
  }}
`;
