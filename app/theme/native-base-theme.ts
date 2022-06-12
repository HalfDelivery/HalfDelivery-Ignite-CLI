import { extendTheme } from "native-base"

export const nativeBaseTheme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: "Poppins-Regular",
      },
      200: {
        normal: "Poppins-Regular",
      },
      300: {
        normal: "Poppins-Regular",
      },
      400: {
        normal: "Poppins-Regular",
      },
      500: {
        normal: "Poppins-SemiBold",
      },
      600: {
        normal: "Poppins-SemiBold",
      },
      700: {
        normal: "Poppins-Bold",
      },
      800: {
        normal: "Poppins-Bold",
      },
      900: {
        normal: "Poppins-Bold",
      },
    },

    Pretendard: {
      100: {
        normal: "Pretendard-Regular",
      },
      200: {
        normal: "Pretendard-Regular",
      },
      300: {
        normal: "Pretendard-Regular",
      },
      400: {
        normal: "Pretendard-Regular",
      },
      500: {
        normal: "Pretendard-Medium",
      },
      600: {
        normal: "Pretendard-Medium",
      },
      700: {
        normal: "Pretendard-Bold",
      },
      800: {
        normal: "Pretendard-Bold",
      },
      900: {
        normal: "Pretendard-Bold",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Pretendard",
    body: "Pretendard",
    eng: "Poppins",
    kor: "Pretendard",
  },
})
