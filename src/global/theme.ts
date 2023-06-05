import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    screen : {
      phone: number
    }


    color: {
      primaryColor: string,
      secondaryColor: string
      darkColor: string,
      whiteColor: string,
    },
  }
}

export const theme: DefaultTheme = {
    color: {
      primaryColor: "#171717fb",
      secondaryColor: "#FBBA12",
      darkColor: "#0F0F0F",
      whiteColor: "#D9D9D9",
    },
    
    screen: {
      phone: 576,
    },
  };