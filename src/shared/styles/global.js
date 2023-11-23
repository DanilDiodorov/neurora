import { createGlobalStyle, css } from 'styled-components'

const dark = css`
    pre code.hljs {
        display: block;
        overflow-x: auto;
        padding: 1em;
    }
    code.hljs {
        padding: 3px 5px;
    }
    /*!
    Theme: a11y-dark
    Author: @ericwbailey
    Maintainer: @ericwbailey
  
    Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
  */
    .hljs {
        background: #2b2b2b;
        color: #f8f8f2;
    }
    /* Comment */
    .hljs-comment,
    .hljs-quote {
        color: #d4d0ab;
    }
    /* Red */
    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-regexp,
    .hljs-deletion {
        color: #ffa07a;
    }
    /* Orange */
    .hljs-number,
    .hljs-built_in,
    .hljs-literal,
    .hljs-type,
    .hljs-params,
    .hljs-meta,
    .hljs-link {
        color: #f5ab35;
    }
    /* Yellow */
    .hljs-attribute {
        color: #ffd700;
    }
    /* Green */
    .hljs-string,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-addition {
        color: #abe338;
    }
    /* Blue */
    .hljs-title,
    .hljs-section {
        color: #00e0e0;
    }
    /* Purple */
    .hljs-keyword,
    .hljs-selector-tag {
        color: #dcc6e0;
    }
    .hljs-emphasis {
        font-style: italic;
    }
    .hljs-strong {
        font-weight: bold;
    }
    @media screen and (-ms-high-contrast: active) {
        .hljs-addition,
        .hljs-attribute,
        .hljs-built_in,
        .hljs-bullet,
        .hljs-comment,
        .hljs-link,
        .hljs-literal,
        .hljs-meta,
        .hljs-number,
        .hljs-params,
        .hljs-string,
        .hljs-symbol,
        .hljs-type,
        .hljs-quote {
            color: highlight;
        }
        .hljs-keyword,
        .hljs-selector-tag {
            font-weight: bold;
        }
    }
`

const light = css`
    pre code.hljs {
        display: block;
        overflow-x: auto;
        padding: 1em;
    }
    code.hljs {
        padding: 3px 5px;
    }
    /*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/
    .hljs {
        background: #fefefe;
        color: #545454;
    }
    /* Comment */
    .hljs-comment,
    .hljs-quote {
        color: #696969;
    }
    /* Red */
    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-regexp,
    .hljs-deletion {
        color: #d91e18;
    }
    /* Orange */
    .hljs-number,
    .hljs-built_in,
    .hljs-literal,
    .hljs-type,
    .hljs-params,
    .hljs-meta,
    .hljs-link {
        color: #aa5d00;
    }
    /* Yellow */
    .hljs-attribute {
        color: #aa5d00;
    }
    /* Green */
    .hljs-string,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-addition {
        color: #008000;
    }
    /* Blue */
    .hljs-title,
    .hljs-section {
        color: #007faa;
    }
    /* Purple */
    .hljs-keyword,
    .hljs-selector-tag {
        color: #7928a1;
    }
    .hljs-emphasis {
        font-style: italic;
    }
    .hljs-strong {
        font-weight: bold;
    }
    @media screen and (-ms-high-contrast: active) {
        .hljs-addition,
        .hljs-attribute,
        .hljs-built_in,
        .hljs-bullet,
        .hljs-comment,
        .hljs-link,
        .hljs-literal,
        .hljs-meta,
        .hljs-number,
        .hljs-params,
        .hljs-string,
        .hljs-symbol,
        .hljs-type,
        .hljs-quote {
            color: highlight;
        }
        .hljs-keyword,
        .hljs-selector-tag {
            font-weight: bold;
        }
    }
`

const GlobalStyles = createGlobalStyle`
    @import url('a11y-dark.css');

    body {
        padding: 0;
        margin: 0;
        height: 100%;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.bgContent};
    }

    * {
        font-family: 'Roboto', sans-serif;
    }

    html {
        height: 100%;
    }
    #root {
        height: 100%;
    }

    button:hover {
        cursor: pointer;
    }

    textarea:focus, input:focus{
        outline: none;
    }

    *::-webkit-scrollbar {
        width: 8px; /* ширина scrollbar */
        border-radius: 50%;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        background: rgb(160, 158, 158); /* цвет дорожки */
    }
    *::-webkit-scrollbar-thumb {
        background-color: #5f5f5f; /* цвет плашки */
        border-radius: 20px; /* закругления плашки */
    }
    code {
        font-family: Consolas, monospace;
        background-color: transparent !important;
        padding: 0 !important;
    }

    pre {
        border-radius: 8px;
        width: calc(100% - 30px);
        overflow-x: auto;
        overflow-y: hidden;
        padding: 15px;
        background-color: ${({ theme }) => theme.colors.bgContent};
    }

    .copy-button {
        width: 30px;
        height: 30px;
        background-color: white; 
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;

        &:hover {
            cursor: pointer;
        }
    }

    .copy-button img {
        width: 25px;
        height: 25px;
    }

    pre > div {
        display: flex;
        justify-content: flex-end;
        margin-bottom: -35px;
    }

    pre p {
    display: block;
    }
        pre p:before {
        counter-increment: line;
        content: counter(line);
        display: inline-block;
        border-right: 1px solid #ddd;
        padding: 0 .5em;
        margin-right: .5em;
        color: #888
    }
    ${({ theme }) => (theme.mode === 'light' ? light : dark)}

`

export default GlobalStyles
