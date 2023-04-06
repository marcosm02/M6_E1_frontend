import styled from "styled-components";

export const StyledInput = styled.input`
  height: 3rem;
  padding: 0 1rem;
  background-color: var(--color-grey-2);
  border: 0.063rem solid var(--color-grey-2);
  border-radius: 0.5rem;
  color: var(--color-grey-0);

  &::placeholder {
    color: var(--color-grey-1);
  }

  &:focus {
    outline: none;
    border-color: var(--color-grey-0);

    &::placeholder {
      color: var(--color-grey-0);
    }
  }
`;
