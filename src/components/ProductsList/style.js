import styled from "styled-components";

export const UlList = styled.ul`
    display: flex;
    gap: 20px;

    align-items: center;
    overflow-x: auto;
    padding-bottom: 8px;
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: var(--color-primary);

        -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
    }
    @media (min-width: 1080px) {
        width: 90%;
        overflow: unset;
        flex-wrap: wrap;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid #e0e0e0;
        min-width: 300px;
        border-radius: 5px;
    }
    figure {
        background-color: var(--color-grey-0);
        width: 100%;
    }
    img {
        width: 160px;
        height: 160px;
        margin: 0 auto;
        display: block;
    }
`;
