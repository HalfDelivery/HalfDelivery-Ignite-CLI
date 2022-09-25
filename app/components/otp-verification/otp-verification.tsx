import React, { useState } from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import {
  VStack,
  Box,
  HStack,
  Icon,
  Text,
  Link,
  Button,
  Image,
  Hidden,
  IconButton,
  Center,
  FormControl,
  StatusBar,
  Stack,
  Input,
} from "native-base"
import { AntDesign } from "@expo/vector-icons"

export interface OtpVerificationProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */

function PinInput() {
  const [focusedIndex, setFocusedIndex] = useState(0)

  return (
    <HStack space="4" alignSelf={"center"}>
      {[0, 1, 2, 3, 4, 5].map((e, i) => (
        <Input
          key={i}
          // variant="underlined"
          boxSize="12"
          textAlign="center"
          borderBottomWidth="2"
          width="10"
          fontSize="lg"
          bg="white"
          maxLength={1}
          //   onPressOut={
          //     () => {
          //     console.warn(i)
          //   }
          // }

          // isFocused={focusedIndex === i}
          // onKeyPress={() => {
          //   if (i < 5) {
          //     setFocusedIndex(i + 1)
          //   }
          // }}
          clearTextOnFocus
        />
      ))}
    </HStack>
  )
}

export const OtpVerification = observer(function OtpVerification(props: OtpVerificationProps) {
  const { style } = props

  return (
    <>
      <VStack
        px="4"
        py="2"
        // justifyContent="space-between"
        bg="p.100"
        borderRadius="xl"
        w="94%"
        alignSelf="center"
      >
        <Box>
          <VStack>
            <Text color="p.900" fontSize="xl" fontFamily="kr" mt="4">
              인증번호를 입력하세요
            </Text>
            {/* <HStack space="2" alignItems="center">
                    <Text _light={{ color: "coolGray.800" }} _dark={{ color: "coolGray.400" }}>
                      We have sent the OTP code to
                      
                    </Text>
                    <Text
                      fontWeight="bold"
                      _light={{ color: "coolGray.800" }}
                      _dark={{ color: "coolGray.300" }}
                    >
                      87******47
                    </Text>
                  </HStack> */}
          </VStack>
          <VStack space="12" mt="4">
            <FormControl>
              <PinInput />
              <FormControl.HelperText mt="7">
                <HStack>
                  <Link ml="auto" bg="s.100" borderRadius="md" px="3" py="1" mb="3">
                    <Text color="black" fontSize="sm" fontFamily="kr">
                      인증완료
                    </Text>
                  </Link>
                </HStack>
              </FormControl.HelperText>
            </FormControl>
          </VStack>
        </Box>
      </VStack>
    </>
  )
})
