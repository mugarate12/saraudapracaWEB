import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      borderColor: string;
      inputContainerColor: string;
      inputBackgroundColor: string;
      buttonColor: string;
    }
  }
}