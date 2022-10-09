import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { KeyboardAvoidingView, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { goBack, navigate, NavigatorParamList } from "../../navigators"
import { color } from "../../theme"
import {
  Button,
  HStack,
  VStack,
  Text,
  Link,
  Checkbox,
  Divider,
  Image,
  useColorModeValue,
  IconButton,
  Icon,
  Pressable,
  Center,
  Hidden,
  StatusBar,
  Stack,
  Box,
  FormControl,
} from "native-base"
import { AntDesign, Entypo } from "@expo/vector-icons"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { FloatingLabelInput, IconGoogle } from "../../components"
import { BarInput } from "../../components/bar-input/bar-input"
// import { FloatingLabelInput, IconGoogle } from "#components"
// import { IconGoogle } from "./app/components/icon-google/icon-google"
// import { FloatingLabelInput } from "./app/components/floating-label-input/floating-label-input"

export function SignInForm({ props }: any) {
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] = useState("")

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack
        mt="auto"
        // flex="1"
        px="6"
        py="9"
        _light={{ bg: "white" }}
        _dark={{ bg: "coolGray.800" }}
        space="3"
        justifyContent="space-between"
        borderTopRightRadius={{ base: "2xl", md: "xl" }}
        borderBottomRightRadius={{ base: "0", md: "xl" }}
        borderTopLeftRadius={{ base: "2xl", md: "0" }}
      >
        <VStack space="7">
          <VStack>
            <VStack space="2">
              <VStack space="4">
                <Text color="p.900" fontSize="md" fontFamily="kr">
                  휴대폰번호를 입력하세요
                </Text>
                <BarInput
                  placeholder={"01012345678"}
                  autoCapitalize="none"
                  value={password}
                  stateFn={setPassword}
                  isValued={password ? true : false}
                  error={passwordErrorMessage ? true : false}
                />
                {/* <FloatingLabelInput
                  isRequired
                  label="휴대폰번호를 입력해주세요"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue("#fff", "#1f2937")}
                  py="4"
                  borderRadius="4"
                  defaultValue={text}
                  onChangeText={(txt: any) => setText(txt)}
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                  }}
                  _dark={{
                    borderColor: "coolGray.700",
                  }}
                  _light={{
                    borderColor: "coolGray.300",
                  }}
                /> */}
              </VStack>

              {/* <Link
                ml="auto"
                _text={{
                  fontSize: "xs",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                _light={{
                  _text: {
                    color: "primary.900",
                  },
                }}
                _dark={{
                  _text: {
                    color: "primary.500",
                  },
                }}
              >
                Forgot password?
              </Link> */}

              {/* <Checkbox
                alignItems="flex-start"
                mt="5"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <Text
                  pl="1"
                  fontWeight="normal"
                  _light={{ color: "coolGray.800" }}
                  _dark={{ color: "coolGray.400" }}
                  fontFamily="kr"
                >
                  로그인 상태를 유지합니다
                </Text>
              </Checkbox> */}

              {/* <Text _light={{ color: "coolGray.800" }} _dark={{ color: "coolGray.400" }}>
                인증번호를 받지 못하셨나요?
              </Text> */}
              <Button
                mt="10"
                size="md"
                borderRadius="4"
                _text={{
                  fontWeight: "medium",
                }}
                _light={{
                  bg: "primary.900",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                onPress={() => {
                  alert("인증번호: 1234")
                }}
                fontFamily="en"
              >
                <Text
                  color="white"
                  fontSize={18}
                  py="1"
                  fontSize="lg"
                  fontWeight="600"
                  fontFamily="kr"
                >
                  인증번호 보내기
                </Text>
              </Button>

              <HStack space="2" my="2" alignItems="center" justifyContent="center">
                <Divider w="30%" _light={{ bg: "coolGray.200" }} _dark={{ bg: "coolGray.700" }} />
                <Text
                  fontWeight="medium"
                  _light={{ color: "coolGray.300" }}
                  _dark={{ color: "coolGray.500" }}
                  fontFamily="en"
                >
                  or
                </Text>
                <Divider w="30%" _light={{ bg: "coolGray.200" }} _dark={{ bg: "coolGray.700" }} />
              </HStack>
            </VStack>
            <Center>
              <HStack space="4">
                <Pressable>
                  <IconGoogle />
                </Pressable>
              </HStack>
            </Center>
          </VStack>
        </VStack>
      </VStack>
    </KeyboardAwareScrollView>
  )
}

export const SignInScreen: FC<StackScreenProps<NavigatorParamList, "signIn">> = observer(
  function SignInScreen(props: any) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    const [otp, setOtp] = useState("")

    return (
      <>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <Box safeAreaTop _light={{ bg: "primary.900" }} _dark={{ bg: "coolGray.900" }} />
        <Center my="auto" _dark={{ bg: "coolGray.900" }} _light={{ bg: "primary.900" }} flex="1">
          <Stack
            flexDirection={{ base: "column", md: "row" }}
            w="100%"
            maxW={{ md: "1016px" }}
            flex={{ base: "1", md: "none" }}
          >
            <VStack px="4" mt="4" mb="5" space="9">
              <HStack space="2" alignItems="center">
                <IconButton
                  variant="unstyled"
                  pl="0"
                  onPress={() => {
                    goBack()
                    // navigate("main")
                  }}
                  icon={<Icon size="6" as={AntDesign} name="arrowleft" color="coolGray.50" />}
                />
                <Text color="coolGray.50" fontSize="lg">
                  휴대폰번호로 로그인
                </Text>
              </HStack>
              <VStack space="2">
                <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
                  로그인
                </Text>
                <VStack space="1">
                  <Text
                    fontSize="xs"
                    fontWeight="normal"
                    _dark={{
                      color: "coolGray.400",
                    }}
                    _light={{
                      color: "primary.200",
                    }}
                  >
                    휴대폰 번호로 간단하게
                  </Text>
                  <Text
                    fontSize="xs"
                    fontWeight="normal"
                    _dark={{
                      color: "coolGray.400",
                    }}
                    _light={{
                      color: "primary.200",
                    }}
                  >
                    하프딜리버리를 시작해보세요!
                  </Text>
                </VStack>
              </VStack>
            </VStack>

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
                  <Text color="p.900" fontSize="md" fontFamily="kr" mt="4">
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
                    <BarInput
                      placeholder={"0000"}
                      autoCapitalize="none"
                      value={otp}
                      stateFn={setOtp}
                      style={{
                        height: 40,
                        width: 70,
                        backgroundColor: "white",
                        alignSelf: "center",
                        borderRadius: 20,
                        paddingBottom: 0,
                        borderBottomWidth: 0,
                      }}
                      // isValued={password ? true : false}
                      // error={passwordErrorMessage ? true : false}
                    />

                    <FormControl.HelperText mt="7">
                      <HStack>
                        <Link
                          ml="auto"
                          bg="s.100"
                          borderRadius="md"
                          px="3"
                          py="1"
                          mb="3"
                          onPress={() => {
                            navigate("lottieAnimation")
                          }}
                        >
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
            <SignInForm props={props} />
          </Stack>
        </Center>
      </>
    )
  },
)
