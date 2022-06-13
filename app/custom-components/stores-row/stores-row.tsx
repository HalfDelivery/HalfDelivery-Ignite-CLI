import { View, Text } from "react-native"
import React from "react"
import { HStack, Image } from "native-base"
import IMAGES from "../../../assets/common-images"
import { HEIGHT, WIDTH } from "../../theme"

export const StoresRow = (props) => {
  const { four_images } = props

  return (
    <HStack
      //   style={{
      //     justifyContent: "space-evenly",
      //   }}
      space={3}
    >
      {/* {four_images.map((item, index) => (
        <Image
          key={index} //? Key Warning 에러 해결.
          //   source={item.image}
          source={IMAGES.small_logo}
          style={{
            width: HEIGHT * 72,
            height: HEIGHT * 72,
            borderWidth: 1,
            borderRadius: 16,
          }}
        />
      ))} */}

      <Image
        source={IMAGES.small_logo}
        style={{
          width: HEIGHT * 72, //! Web 화면시 이미지 크기 대응을 위해 의도적으로 이렇게 함
          height: HEIGHT * 72,
          borderWidth: 1,
          borderRadius: 16,
        }}
      />
      <Image
        source={IMAGES.small_logo}
        style={{
          width: HEIGHT * 72,
          height: HEIGHT * 72,
          borderWidth: 1,
          borderRadius: 16,
        }}
      />
      <Image
        source={IMAGES.small_logo}
        style={{
          width: HEIGHT * 72,
          height: HEIGHT * 72,
          borderWidth: 1,
          borderRadius: 16,
        }}
      />
      <Image
        source={IMAGES.small_logo}
        style={{
          width: HEIGHT * 72,
          height: HEIGHT * 72,
          borderWidth: 1,
          borderRadius: 16,
        }}
      />
    </HStack>
  )
}
