import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/Topbar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
