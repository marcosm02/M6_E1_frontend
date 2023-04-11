import styled from "styled-components";

export const StyledDivDashboard = styled.div`
  header {
    width: 100%;
    padding: 1rem;

    border-bottom: 1px solid var(--color-grey-2);

    @media (min-width: 769px) {
      padding: 1.75rem 1rem;
    }
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 769px) {
      width: 60%;
      margin: 0 auto;
    }
  }

  .perfilBox {
    width: 100%;
    padding: 2rem 1rem;

    border-bottom: 1px solid var(--color-grey-2);

    @media (min-width: 769px) {
      padding: 2.8rem 1rem;
    }
  }

  .perfilBox__container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background-color: var(--color-grey-3);
    padding: 1rem;
    border-radius: 0.25rem;

    @media (min-width: 769px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      width: 60%;
      margin: 0 auto;
    }
  }

  .perfilBox__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contacts {
    width: 100%;
    padding: 1.5rem 1rem;
  }

  .contacts__container {
    @media (min-width: 769px) {
      width: 60%;
      margin: 0 auto;
    }
  }

  .contactsTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > button {
      font-size: 1.25rem;
      padding: 0.5rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .contactsBox {
    width: 100%;
    margin-top: 1.25rem;
    padding: 1.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary-hover);

    @media (min-width: 769px) {
      padding: 1.25rem;
    }

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    & > ul > li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 3rem;
      padding: 0 0.75rem;
      border-radius: 0.25rem;

      background-color: var(--color-grey-4);

      cursor: pointer;

      :hover {
        background-color: var(--color-grey-2);
      }
    }

    .listTitles {
      background-color: var(--color-primary-hover);
      border-bottom: 0.063rem solid var(--color-grey-3);
      h2 {
        color: var(--color-grey-0);
      }

      :hover {
        background-color: var(--color-primary-hover);
      }
    }
  }
`;
