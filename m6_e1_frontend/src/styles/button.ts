import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonType: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ buttonType }) => {
    if (buttonType === "defaultPrimary") {
      return css`
        background-color: var(--color-primary);
        border: 0.063rem solid var(--color-primary);
        border-radius: 0.25rem;
        color: var(--color-grey-0);
        height: 2.375rem;
        padding: 0 1.375rem;

        :hover {
          background-color: var(--color-primary-hover);
          border-color: var(--color-primary-hover);
        }

        @media (min-width: 769px) {
          & {
            height: 3rem;
          }
        }
      `;
    } else if (buttonType === "defaultGrey") {
      return css`
        background-color: var(--color-grey-1);
        border: 0.063rem solid var(--color-grey-1);
        border-radius: 0.25rem;
        color: var(--color-grey-0);
        height: 2.375rem;
        padding: 0 1.375rem;

        :hover {
          background-color: var(--color-grey-2);
          border-color: var(--color-grey-2);
        }

        @media (min-width: 769px) {
          & {
            height: 3rem;
          }
        }
      `;
    } else if (buttonType === "medium") {
      return css`
        background-color: var(--color-grey-3);
        border: 0.063rem solid var(--color-grey-3);
        border-radius: 0.25rem;
        color: var(--color-grey-0);
        height: 2rem;
        padding: 0 1rem;

        :hover {
          background-color: var(--color-grey-2);
          border-color: var(--color-grey-2);
        }
      `;
    }
  }}
`;
