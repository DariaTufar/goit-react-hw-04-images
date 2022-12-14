import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;

  margin-left: auto;
  margin-right: auto;
  min-width: ${p => p.theme.sizes.buttonWidth};
  margin-top: ${p => p.theme.sizes.l};
  margin-bottom: ${p => p.theme.sizes.l};
  padding-top: ${p => p.theme.sizes.s};
  padding-bottom: ${p => p.theme.sizes.s};
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 500;
  font-style: normal;
  line-height: ${p => p.theme.fontSizes.l};
  text-decoration: none;
  text-align: center;
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgAccent};
  border: 0;
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadows.buttonShadow};
  transition: all ${p => p.theme.styles.transition};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.bgHover};
  }
`;
