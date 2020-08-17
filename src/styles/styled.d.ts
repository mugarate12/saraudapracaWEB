import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      fontColor: string;
      
      borderColor: string;
      inputContainerColor: string;
      inputBackgroundColor: string;
      
      buttonColor: string;

      iconsColor: string,
      
      sideBarIconsColor: string;
      sideBarColor: string;
      sideBarOpenClosedIconColor: string;
    }
  }
  
  export interface DarkTheme {
    title: string;

    colors: {
      fontColor: string;
      
      borderColor: string;
      inputContainerColor: string;
      inputBackgroundColor: string;
      
      buttonColor: string;

      iconsColor: string,
      
      sideBarIconsColor: string;
      sideBarColor: string;
      sideBarOpenClosedIconColor: string;
    }
  }
}