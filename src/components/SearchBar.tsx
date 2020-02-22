import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  &,
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }

  padding: 0.6em 1em;
  border: 2px solid transparent;
  border-radius: 2.2em;
  outline: 0;
  background: ${(props) => props.theme.primaryColor};
  margin: 20px;

  &:focus {
    border: 3px solid ${(props) => props.theme.secondaryColor};
  }
`;

export const SearchBar = () => (
  <SearchInput type="text" placeholder="Search..." />
);
