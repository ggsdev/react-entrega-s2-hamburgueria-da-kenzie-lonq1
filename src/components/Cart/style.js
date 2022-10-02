import styled from "styled-components";

export const CartAside = styled.aside`
    width: 100%;
    margin: 0 auto;
    max-width: 600px;

    @media (min-width: 1080px) {
        max-width: 365px;
    }
    > div {
        background-color: var(--color-grey-0);
        border-radius: 0px 0px 5px 5px;
    }
    .cart__header {
        background: var(--color-primary);
        border-radius: 5px 5px 0px 0px;
        padding: 20px 18px;

        h2 {
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
        }
    }
    ul {
        padding: 17px 12px;
        gap: 16px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        max-height: 300px;

        li {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            width: 100%;

            h2 {
                width: 140px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .card__container {
                align-items: flex-start;
                justify-content: space-between;
                gap: 12px;
                display: flex;
                flex-direction: row;
                padding: 0;
            }
            .card__container > div {
                padding: 0;
            }
            figure {
                border-radius: 5px;
                display: flex;
                align-items: center;
                background-color: var(--color-grey-20);
                padding: 0 6px;
                max-width: 80px;
                min-width: 80px;

                height: 80px;
            }

            img {
                max-width: 100%;
            }

            .liCard__price {
                display: none;
            }

            button {
                background-color: transparent;
                font-weight: 500;
                font-size: 12px;
                color: #bdbdbd;
                border: none;
                padding: 0 20px;
            }
        }
    }

    @media (min-width: 1080px) {
        margin: 0;
    }

    .cart__empty {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #f5f5f5;
        border-radius: 0px 0px 5px 5px;
        max-height: 223px;
        height: 100%;
    }
    .cart__total {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
        padding: 12px 17px;
    }
    .total__container {
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        border-top: 2px solid var(--color-grey-20);

        h3,
        p {
            font-weight: 600;
            font-size: 14px;
            color: var(--color-grey-100);
        }

        p {
            color: var(--color-grey-50);
        }
    }

    .cart__remove--all {
        border: none;
        color: var(--color-grey-50);
        background: var(--color-grey-20);
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        padding: 20px;
        border-radius: 8px;
    }

    .scroll::-webkit-scrollbar {
        width: 6px;
    }

    .scroll::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }

    .scroll::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: var(--color-primary);

        -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
    }

    .btn__container {
        align-items: center;
    }

    .btn__container span {
        font-size: 12px;
        font-weight: 400;
        color: var(--color-grey-50);
    }
`;
