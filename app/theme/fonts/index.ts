import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    Poppins: require("./Poppins-Regular.ttf"),
    "Poppins-Regular": require("./Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./Poppins-SemiBold.ttf"),

    Pretendard: require("./Pretendard-Regular.ttf"),
    "Pretendard-Bold": require("./Pretendard-Bold.ttf"),
    "Pretendard-Medium": require("./Pretendard-Medium.ttf"),
    "Pretendard-Regular": require("./Pretendard-Regular.ttf"),
  })
}
