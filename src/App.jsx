import { ThemeProvider, createTheme, } from '@mui/material/styles';
import { useMemo, useState, useLayoutEffect } from "react";
import Home from './Home';
import axios from 'axios';




function App() {

  const [themeObj, setThemeObj] = useState({});
  const [themePrepare, setThemePrepare] = useState(false);


  useLayoutEffect(() => {
    let themeName = localStorage.getItem('themeName') || 'theme.json';
    axios.get(`/${themeName}`).then(response => {
      const theme = response.data;
      if(themeName == 'theme2.json'){
        themeName = 'theme.json'
      }else{
        themeName = 'theme2.json'
      }
      localStorage.setItem('themeName', themeName);
      setThemeObj(theme);
      setThemePrepare(true);
    })
  }, [])

  const theme = useMemo(() => {
    return createTheme(themeObj)
  }, [themeObj]);

  return (
    <ThemeProvider theme={theme}>
      {themePrepare ? <Home /> : null}
    </ThemeProvider>
  )
}

export default App
