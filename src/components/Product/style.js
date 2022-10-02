import styled from "styled-components";

export const LiCard = styled.li`
    .card__container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        padding: 20px 20px 0 20px;

        div {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }

    h2 {
        font-size: 18px;
        font-weight: 700;
        color: var(--color-grey-100);
    }

    .liCard__category {
        font-size: 12px;
        font-weight: 400;
        color: var(--color-grey-50);
    }

    .liCard__price {
        font-size: 14px;
        font-weight: 600;
        color: var(--color-primary);
    }
`;
