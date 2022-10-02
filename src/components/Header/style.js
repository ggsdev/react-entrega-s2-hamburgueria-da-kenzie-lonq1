import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: #f5f5f5;
    margin-bottom: 20px;
    padding: 20px 0;
    .header__container {
        margin: 0 auto;
        max-width: 1440px;
        display: flex;
        padding-left: 20px;
        flex-direction: column;
        justify-content: space-between;
        gap: 14px;
        align-items: center;
    }

    form {
        align-items: center;
        width: 100%;
        flex-grow: 1.5;
        max-width: 365px;
        position: relative;
        display: flex;
    }
    input {
        font-family: "Inter";
        padding: 20px 15px;
        width: 100%;
        border-radius: 8px;
        border: 2px solid #e0e0e0;
    }

    input::placeholder {
        color: var(--color-grey-50);
    }

    button {
        position: absolute;

        right: 10px;
    }

    @media (min-width: 1080px) {
        .header__container {
            flex-direction: row;
        }
    }
`;
