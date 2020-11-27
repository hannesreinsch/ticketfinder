import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  // RESET DEFAULT STYLES ADDED BY BROWSER TO AVOID INCONSISTENCIES BETWEEN BROWSERS
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  html {
    height: 100%;
    body {
      height: 100%;
      #root {
        height: 100%;
      }
    }
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    line-height: 1;
    font-size: ${({ theme }) => theme.fontNormal};
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	  display: block;
  }

  ol, ul {
	  list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
	  content: '';
	  content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
`

export default GlobalStyles
