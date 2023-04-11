import styled from "styled-components";

export const StyledDivLogin = styled.div`
  margin: 5rem auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  .loginBox {
    width: 90%;
    max-width: 400px;

    margin: 1.25rem auto 0;

    background-color: var(--color-grey-3);
  }

  .loginBox > form {
    width: 90%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  form > h2 {
    margin-top: 2rem;
    align-self: center;
  }

  form > input {
    margin-bottom: 0.5rem;
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

  .registerBox {
    width: 90%;
    margin: 1.5rem auto 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    a {
      background-color: var(--color-grey-1);
      border: 0.063rem solid var(--color-grey-1);
      border-radius: 0.25rem;
      color: var(--color-grey-0);
      height: 2.375rem;
      padding: 0 1.375rem;
      text-decoration: none;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      :hover {
        background-color: var(--color-grey-2);
        border-color: var(--color-grey-2);
      }

      @media (min-width: 769px) {
        & {
          height: 3rem;
        }
      }
    }
  }
`;
