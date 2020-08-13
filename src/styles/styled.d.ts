import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      fontColor: string;
      
      borderColor: string;
      inputContainerColor: string;
      inputBackgroundColor: string;
      
      buttonColor: string;

      iconsColor: string,
      
      sideBarIconsColor: string;
      sideBarColor: string;
    }
  }
}