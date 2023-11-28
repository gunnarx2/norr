import css from 'styled-jsx/css';

export const progressBar = css.resolve`
  div {
    pointer-events: none;
    background-color: rgb(49 151 149);
    position: fixed;
    z-index: 1339;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
`;
