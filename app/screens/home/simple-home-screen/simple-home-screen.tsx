import React, { FC, useState, useCallback, useEffect, useLayoutEffect } from "react"
import { FlatList, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../../navigators"
import {
  ScreenRootView,
  Row,
  PreBol18,
  PreBol20,
  ServiceChoiceButton,
} from "../../../custom-components"
import { HEIGHT, palette, WIDTH } from "../../../theme"
import { ComeHomeGoToSwitchButton } from "../../../custom-components/buttons/come-home-go-to-switch-button/come-home-go-to-switch-button"
import { RowRoundedButton } from "../../../custom-components/buttons/row-rounded-button/row-rounded-button"
import { petsittersDummy, trainersDummy } from "./dummy-data"
import { DotsIndicator } from "../../../custom-components/dots-indicator/dots-indicator/dots-indicator"
import { Box, Center, HStack, Text, Button, Pressable } from "native-base"
// import IMAGES from "../../../../assets/common-images"

const FLATLIST_PADDING_VERTICAL = HEIGHT * 6 //? FlatList 내부의 있는 요소에 그림자가 있을 경우, FlatList 의 contentContainerStyle 에 padding 이 없을 경우, 그림자가 짤린다
const FLATLIST_PADDING_HORIZONTAL = WIDTH * 10 //? ""

export const SimpleHomeScreen: FC<
  StackScreenProps<NavigatorParamList, "simple-home-screen">
> = observer(({ navigation, route }) => {
  const [isOn, setIsOn] = useState(false)
  const [isStoreOn, setIsStoreOn] = useState(false)
  const [isRoleOn, setIsRoleOn] = useState(false)

  return (
    <ScreenRootView preset="scroll" unsafe={false} backgroundColor={"#F4F6F7"}>
      <Center>
        {/* //? 최근매칭현황 */}
        <Box
          w="full"
          height={HEIGHT * 54}
          mt={HEIGHT * 14}
          bg={
            isOn
              ? {
                  linearGradient: {
                    colors: ["lightBlue.300", "violet.800"],
                    start: [0, 0],
                    end: [1, 0],
                  },
                }
              : "white"
          }
          rounded="sm"
          justifyContent="center"
          px={16}
        >
          <HStack>
            <Text fontSize="md">최근매칭현황</Text>

            <Text fontSize="md" fontFamily="eng" ml="auto">
              {Date.now().toString().slice(-5, -1)} 명
            </Text>
          </HStack>
        </Box>

        {/* //? 매장 선택 */}
        <Pressable
          onPress={() => {
            setIsStoreOn(true)
          }}
          shadow={isStoreOn && "5"}
          w="full"
          mt={HEIGHT * 22}
        >
          <Box
            w="full"
            h={HEIGHT * 62}
            bg={
              isStoreOn
                ? {
                    linearGradient: {
                      colors: ["pink.300", "blue.800"],
                      start: [0, 0],
                      end: [1, 0],
                    },
                  }
                : "white"
            }
            rounded="sm"
            justifyContent="center"
          >
            <Text fontSize="lg" fontWeight={isStoreOn ? "bold" : "semibold"} px={WIDTH * 14}>
              주문하실 매장을 선택해주세요
            </Text>
          </Box>
        </Pressable>

        {/* //? 이용 역할 선택 */}
        <Box
          w="full"
          h={HEIGHT * 62}
          bg={
            isRoleOn
              ? {
                  linearGradient: {
                    colors: ["pink.300", "blue.800"],
                    start: [0, 0],
                    end: [1, 0],
                  },
                }
              : "white"
          }
          mt={HEIGHT * 22}
          rounded="sm"
          justifyContent="center"
        >
          <Text fontSize="lg" fontWeight={isRoleOn ? "bold" : "semibold"} px={WIDTH * 14}>
            이용 역할 선택
          </Text>
        </Box>
      </Center>

      <Button
        w="full"
        h={HEIGHT * 62}
        colorScheme={"primary"}
        bg={isOn ? "blue.600" : "#F1F1F4"}
        mt={"auto"}
        mb={10}
        onPress={() => {
          console.log("hello")
        }}
        disabled={!isOn}
        _text={{
          color: isOn ? "white" : "gray.400",
          fontSize: "lg",
          fontWeight: isOn ? "bold" : "semibold",
        }}
      >
        {isOn ? "같이 주문 시작하기!" : "다음"}
      </Button>
    </ScreenRootView>
  )
})
