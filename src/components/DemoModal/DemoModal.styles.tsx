import css from 'styled-jsx/css';

export const inline = css`
  .inner {
    height: 100%;
    overflow: auto;
  }

  .middle {
    display: table;
    width: 100%;
    table-layout: fixed;
    height: 100%;
    outline: none;
    padding: 1.5rem;
  }

  .body {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
  }

  .modal {
    background-color: rgb(34, 34, 34);
    border-radius: 8px;
    position: relative;
    padding: 2rem;
  }

  .heading {
    color: rgba(241, 245, 249);
    letter-spacing: -0.015em;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .paragraph {
    line-height: 1.75rem;
    margin-bottom: 1rem;
  }

  .close-holder {
    display: flex;
    justify-content: flex-end;
  }
`;

export const overlay = css.resolve`
  div {
    position: fixed;
    z-index: 1337;
    inset: 0;
    background-color: rgba(17, 17, 17, 0.75);
  }
`;

export const dialog = css.resolve`
  div {
    width: 100%;
    margin: 0 auto;
    max-width: 500px;
  }
`;
