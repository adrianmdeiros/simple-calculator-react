import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    TITLE: string;
    COLORS: {
      HEADER_BAR: string;
      BACKGROUND: string;
      TEXT: string;
      CALCULATOR: string;
    }
  }
}
