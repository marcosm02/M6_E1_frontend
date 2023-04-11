import styled from "styled-components";

export const StyledDivRegister = styled.div`
  margin: 5rem auto 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .logoBox {
    width: 90%;
    max-width: 400px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      background-color: var(--color-grey-3);
      border: 0.063rem solid var(--color-grey-3);
      border-radius: 0.25rem;
      color: var(--color-grey-0);
      height: 2rem;
      padding: 0 1rem;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;

      :hover {
        background-color: var(--color-grey-2);
        border-color: var(--color-grey-2);
      }
    }
  }

  .registerBox {
    width: 90%;
    max-width: 400px;

    margin: 2rem auto 0;

    background-color: var(--color-grey-3);
  }

  .titleBox {
    width: 90%;
    margin: 2rem auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .registerBox > form {
    width: 90%;
    margin: 1.25rem auto 1.75rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  form > input {
    margin-bottom: 0.5rem;
  }

  .formBox > select {
    height: 3rem;
    padding: 0 1rem;
    background-color: var(--color-grey-2);
    border: 0.063rem solid var(--color-grey-2);
    border-radius: 0.5rem;
    color: var(--color-grey-1);
  }

  form > select:focus {
    outline: none;
    border-color: var(--color-grey-0);
    color: var(--color-grey-0);
  }

  .formBox {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 1rem;
    }

    small {
      margin-top: 0.25rem;
    }
  }
`;
