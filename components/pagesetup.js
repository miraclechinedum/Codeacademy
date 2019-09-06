import React from "react";
// import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    purple: "#6400E4"
  },

  styles: { boxShadow: "0 12px 24px 0 rgba(0,0,0,0.09)" }
};

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,900&display=swap');

  html{
    font-size : 12px ;
    scroll-behavior: smooth;
  }
  *, *:before, *:after{
    box-sizing : border-box ;
  }
  body{
    width : 100% ;
    overflow-x : hidden ;
    padding : 0 ;
    margin : 0 ;
    font-size : 12px ;
    color : #000 ;
    line-height : 2 ;
    font-family: 'Montserrat', sans-serif;
    font-weight : 400 ;
  }
  a{
    text-decoration: none;
    color : ${({ theme }) => theme.colors.purple}
  }

  .container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.ant-layout-content{
  padding : 10px 0 ;
}
h1,h2,h3,h4,h5,h6{
  font-weight : 600 ;
}

.redText{
color : #FA1F14 ;
}
.positionCenter {
  position: absolute ;
  top: 50% ;
  left: 50% ;
  transform: translateX(-50%) translateY(-50%) ;
}
`;

export default props => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {/* <Meta /> */}
      <GlobalStyle />
      {props.children}
      {/* <Footer /> */}
    </Fragment>
  </ThemeProvider>
);
