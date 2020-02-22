import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import styled, { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../src/themes';
import '../src/index.css';

const Preview = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const themes = [
  {
    name: 'Dark',
    backgroundColor: darkTheme.bgColor,
    ...darkTheme,
  },
  {
    name: 'Light',
    backgroundColor: lightTheme.bgColor,
    ...lightTheme,
  },
];

addDecorator(withThemesProvider(themes));
addDecorator((storyFn) => <Preview>{storyFn()}</Preview>);
