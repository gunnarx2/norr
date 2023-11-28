import css from 'styled-jsx/css';

export const inline = css`
  button {
    display: inline-flex;
    background-color: hsl(
      var(--nextra-primary-hue) var(--nextra-primary-saturation) 40% / 1
    );
    color: rgb(241, 245, 249);
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: hsl(
        var(--nextra-primary-hue) var(--nextra-primary-saturation) 35% / 1
      );
    }
  }
`;
