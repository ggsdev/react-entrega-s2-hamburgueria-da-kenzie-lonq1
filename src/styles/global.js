import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
div,
ul,
li,
h1,
h2,
h3,
p,
body,
span,
img,figure,section {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

ul,
li {
    list-style: none;
}

body {
    font-family: "Inter", sans-serif;
}

:root {
    --color-primary: #27ae60;

    --color-grey-100: #333333;
    --color-grey-50: #828282;
    --color-grey-20: #e0e0e0;
    --color-grey-0: #f5f5f5;

    --color-feedback-negative: #e60000;
    --color-feedback-warning: #ffcd07;
    --color-feedback-sucess: #168821;
}


`;
