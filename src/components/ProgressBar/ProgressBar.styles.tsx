import css from 'styled-jsx/css';

export const progressBar = css.resolve`
  :global(#nprogress) {
    position: fixed;
    z-index: 1339;
    top: 0;
    right: 0;
    left: 0;
  }

  div {
    pointer-events: none;
    background-color: rgb(49 151 149);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
`;
