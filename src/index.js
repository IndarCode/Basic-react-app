import React from 'react';
import ReactDOM from 'react-dom/client';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ColorModeContext from './features/app/colorModeContext';
import { lightTheme, darkTheme } from './themes/muiTheme';

const Body = styled.div`
background-color: ${(props) => props.theme.palette.block[0]};
height: 100vh;
* {
  color: ${(props) => props.theme.palette.font[700]};
}
`;

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark' ? {
      ...darkTheme,
    } : {
      ...lightTheme,
    }),
  },
});

export default function ToggleColorMode() {
  const defaultMode = localStorage.getItem('defaultMode');
  const [mode, setMode] = React.useState(defaultMode || 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const m = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('defaultMode', m);
          return m;
        });
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode],
  );


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Body theme={theme}>
          <App />
        </Body>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleColorMode />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
