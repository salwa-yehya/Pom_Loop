import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import StateProvider from "./components/StateProvider.jsx";

const GlobalStyle = createGlobalStyle`
   
    *{
      margin : 0 ;
      padding :0 ;
      box-sizing :border-box ;
      
    }
    html,body{
       background-color :#4f6367;
       font-size : 62.5% ;
 
    }
    body{
      font-size : 1.6rem ;
      color : #fff;
      display :flex;
      justify-content :center;
    }
`;
const theme = {
  colors: {
    primary: "#7a9e9f",
    secondary: "#b8d8d8",
    bg: "#4f6367",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);
