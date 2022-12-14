import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${p => p.theme.sizes.form};
  background-color: ${p => p.theme.colors.bgAccent};
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: ${p => p.theme.sizes.l};
  height: ${p => p.theme.sizes.l};
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  opacity: ${p => p.theme.styles.opacity};
  transition: opacity ${p => p.theme.styles.transition};
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: ${p => p.theme.sizes.searchInput};
  height: ${p => p.theme.sizes.l};
  padding-right: ${p => p.theme.sizes.l};
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.sm};
  border: none;
  outline: none;
  background-color: ${p => p.theme.colors.bgPrimary};
`;
