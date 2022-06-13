import { Dimensions, Platform } from "react-native"

// export const basicDimensions = Platform.select({
//   ios: {
//     width: 390,
//     height: 844,
//   },

//   //* 기존 Android Artboard 사이즈
//   // android: {
//   //   width: 360,
//   //   height: 780,
//   // },

//   //? 임시용 사이즈 (Android Artboard 디자인 GUI 미완)
//   android: {
//     width: 390,
//     height: 844,
//   },

//   //? 임시용 사이즈 (웹)
//   web: {
//     width: 390,
//     height: 844,
//   },
// })

//* iPhone 12/13 기준, 와이어프레임-UI 아트보드 사이즈
export const basicDimensions = {
  width: 390,
  height: 844,
}

//* 반응형 디자인 대비용, width 보정 계수
export const WIDTH = parseFloat(
  Platform.OS !== "web"
    ? (Dimensions.get("screen").width * (1 / basicDimensions.width)).toFixed(2)
    : (Dimensions.get("window").width * (1 / basicDimensions.width)).toFixed(2),
)

//* 반응형 디자인 대비용, height 보정 계수
export const HEIGHT = parseFloat(
  Platform.OS !== "web"
    ? (Dimensions.get("screen").height * (1 / basicDimensions.height)).toFixed(2)
    : (Dimensions.get("window").height * (1 / basicDimensions.height)).toFixed(2),
)

// ? toFixed(): number -> string
// ~ JS, TS 에서는 string * "number" 결과값은 number 이다.

// * header 높이
export const HEADER_HEIGHT = HEIGHT * 56
