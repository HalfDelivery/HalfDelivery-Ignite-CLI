import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StatusBar, Text } from "native-base"
import { StackScreenProps } from "@react-navigation/stack"
import { navigate, NavigatorParamList } from "../navigators"
import { Screen } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../theme"
import Lottie from "lottie-react-native"

const ROOT: ViewStyle = {
  backgroundColor: color.p[700],
  flex: 1,
}

const TEXT: TextStyle = {
  // backgroundColor: color.palette.black,
  // flex: 1,
  alignSelf: "center",
  marginTop: 100,
}

// @ts-ignore
export const LottieAnimationScreen: FC<
  StackScreenProps<NavigatorParamList, "lottieAnimation">
> = observer(function LottieAnimationScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const [text, setText] = useState("주문을 함께 할 파트너를 찾고 있습니다...")

  return (
    <Screen style={ROOT} preset="scroll">
      {/* <StatusBar translucent backgroundColor="primary.200" barStyle="light-content" /> */}

      <Text color="s.100" fontSize="xl" fontFamily="kr" style={TEXT}>
        {text}
      </Text>
      <Lottie
        source={require("./89179-waitingloadingcheck.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          setText("파트너를 찾았습니다!")
          setTimeout(() => {
            navigate("waiting")
          }, 1000)
        }}
      />
    </Screen>
  )
})
