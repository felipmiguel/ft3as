import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, initializeIcons, FocusZone } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { Ft3asChecklist } from './controls/Ft3asChecklist';
import { Ft3asToolbar } from './controls/Ft3asToolbar';

initializeIcons();

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack verticalFill styles={stackStyles} tokens={stackTokens}>
      <Ft3asToolbar></Ft3asToolbar>
      <FocusZone>
        <Ft3asChecklist></Ft3asChecklist>
      </FocusZone>
    </Stack>
  );
};
