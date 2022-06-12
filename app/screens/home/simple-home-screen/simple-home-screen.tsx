import React, { FC, useState, useCallback, useEffect, useLayoutEffect } from "react"
import { FlatList, View, Text } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../../navigators"
// import {
//   ScreenRootView,
//   Row,
//   PreBol18,
//   PreBol20,
//   ServiceChoiceButton,
//   SitterProfileButton,
// } from "../../../../custom-components"

// import { NavigatorParamList } from "../../../../navigators"
// import { HEIGHT, WIDTH } from "../../../../theme"
// import { BODY, SUB_HEAD_LINE } from "../../../../theme/palette"
// import { ComeHomeGoToSwitchButton } from "../../../../custom-components/buttons/come-home-go-to-switch-button/come-home-go-to-switch-button"
// import { RowRoundedButton } from "../../../../custom-components/buttons/row-rounded-button/row-rounded-button"
// import { petsittersDummy, trainersDummy } from "./dummy-data"
// import { DotsIndicator } from "../../../../custom-components/dots-indicator/dots-indicator/dots-indicator"
// import IMAGES from "../../../../../assets/common-images"

// const FLATLIST_PADDING_VERTICAL = HEIGHT * 6 //? FlatList 내부의 있는 요소에 그림자가 있을 경우, FlatList 의 contentContainerStyle 에 padding 이 없을 경우, 그림자가 짤린다
// const FLATLIST_PADDING_HORIZONTAL = WIDTH * 10 //? ""

export const SimpleHomeScreen: FC<
  StackScreenProps<NavigatorParamList, "simple-home-screen">
> = observer(({ navigation, route }) => {
  const [isOn, setIsOn] = useState(false)

  return (
    <View>
      <Text> Hi</Text>
    </View>
  )
})
