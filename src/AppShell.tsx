import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { lightTheme, darkTheme } from './themes';

import './index.css';

const getTheme = (themeName: string) =>
  themeName === 'light' ? lightTheme : darkTheme;

const AppWrapper = styled.main`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.bgColor};
  width: 100%;
  height: 100vh;
`;

interface AppShellProps {
  children: any;
  theme: string;
}

const AppShell = ({ children, theme }: AppShellProps) => (
  <ThemeProvider theme={getTheme(theme)}>
    <AppWrapper>{children}</AppWrapper>
  </ThemeProvider>
);

AppShell.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

AppShell.defaultProps = {
  theme: 'dark',
};

export { AppShell };
