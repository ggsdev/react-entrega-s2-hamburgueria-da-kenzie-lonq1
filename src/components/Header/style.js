import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 16px;
    background: #f5f5f5;
    align-items: center;

    form {
        justify-content: center;
        width: 90%;
        max-width: 365px;
        position: static;
        display: flex;
    }
    input {
        padding: 20px 15px;
        width: 100%;
        max-width: 365px;
        border-radius: 8px;
        border: 2px solid #e0e0e0;
    }

    button {
        position: relative;
        /* width: 30%; */
        right: 100px;
    }

    @media (min-width: 1080px) {
        flex-direction: row;
    }
`;
