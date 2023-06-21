import { extendTheme, NativeBaseProvider } from "native-base";
import { OpenSans_300Light, OpenSans_400Regular, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_800ExtraBold } from "@expo-google-fonts/open-sans";
import { Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
const colorTheme = {
  primary: {
    0: "#FFF5E5",
    100: "#FFE4B8",
    200: "#FFD28A",
    300: "#FFC05C",
    400: "#FFAF2E",
    500: "#EF9300",
    600: "#CC7D00",
    700: "#995E00",
    800: "#663F00",
    900: "#331F00",
  },
  base_color:{
    0: "#F7F7F7",
    100: "#CACACA",
    200: "#959595",
    300: "#6A6A6A",
    400: "#404040",
    500: "#21201F",
  },
  red:{
    0: "#FF5F2A",
    100: "#D43500",
    200: "#802000",
  },
  blue:{
    0: "#2E2AFF",
    100: "#0400D4",
    200: "#020080",
  }
};
const typography  = {
    fontSizes: {
        "xs": 12,
        "sm": 14,
        "md": 16,
        "lg": 18,
        "xl": 20,
        "2xl": 24,
        "3xl": 30,
        "4xl": 36,
        "5xl": 48
      },
    fontConfig: {
        openSans: {
            300: {
            normal: OpenSans_300Light,
            },
            400: {
            normal: OpenSans_400Regular,
            },
            500: {
            normal: OpenSans_500Medium,
            },
            600: {
            normal: OpenSans_600SemiBold,
            },
            700: {
            normal: OpenSans_700Bold,
            },
            800: {
            normal: OpenSans_800ExtraBold,
            },
        },
        raleway: {
            300: {
            normal: Raleway_300Light,
            },
            400: {
            normal: Raleway_400Regular,
            },
            500: {
            normal: Raleway_500Medium,
            },
            600: {
            normal: Raleway_600SemiBold,
            },
            700: {
            normal: Raleway_700Bold,
            },
            800: {
            normal: Raleway_800ExtraBold,
            },
        },
    },
    fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },
    fonts: {
        raleway: "raleway",
        openSans: "openSans",
    },
}
const theme = extendTheme({ colors: colorTheme });
export default theme