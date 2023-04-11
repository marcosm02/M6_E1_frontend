import styled from "styled-components";

export const StyledModalEdit = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(18, 18, 20, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  .modalBox {
    background-color: var(--color-grey-3);
    border-radius: 0.25rem;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 769px) {
      width: 30%;
    }
  }

  .modalBox__title {
    background-color: var(--color-grey-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

    & > button {
      background-color: var(--color-grey-2);
      border: none;
      color: var(--color-grey-1);
      font-size: 1rem;
    }
  }

  .modalBox__form {
    padding: 1.25rem 1rem;

    & > form {
      display: flex;
      flex-direction: column;

      & > input {
        margin: 0.5rem 0;
      }

      & > small {
        margin-bottom: 1rem;
      }

      .buttonBox {
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        width: 100%;

        & > button {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #btnSaveAlt {
          width: 100%;
        }
      }
    }
  }
`;
