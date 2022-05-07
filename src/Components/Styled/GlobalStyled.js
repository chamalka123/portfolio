import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      box-sizing: border-box;
  }
  @-webkit-keyframes titleAnim {
  0%{background-position:93% 0%}
  50%{background-position:0% 100%}
  100%{background-position:93% 0%}
}
@-moz-keyframes titleAnim {
  0%{background-position:93% 0%}
  50%{background-position:0% 100%}
  100%{background-position:93% 0%}
}
@keyframes titleAnim {
  0%{background-position:93% 0%}
  50%{background-position:0% 100%}
  100%{background-position:93% 0%}
}
`;

export default GlobalStyles;
