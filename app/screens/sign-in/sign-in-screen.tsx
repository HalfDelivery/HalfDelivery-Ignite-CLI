import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
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
} from "native-base"
import { AntDesign, Entypo } from "@expo/vector-icons"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { FloatingLabelInput, IconGoogle } from "../../components"
// import { FloatingLabelInput, IconGoogle } from "#components"
// import { IconGoogle } from "./app/components/icon-google/icon-google"
// import { FloatingLabelInput } from "./app/components/floating-label-input/floating-label-input"

export function SignInForm({ props }: any) {
  // const router = useRouter(); //use incase of Nextjs
  const [text, setText] = useState("")
  const [pass, setPass] = useState("")
  const [showPass, setShowPass] = React.useState(false)
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack
        flex="1"
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
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal" fontFamily="kr">
              매칭을 진행하기 위해서는 로그인이 필요해요!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="3">
              <VStack space={{ base: "7", md: "4" }}>
                <FloatingLabelInput
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
                />
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
              <Checkbox
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
              </Checkbox>
              <Button
                mt="5"
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
                  props.navigation.navigate("OTP")
                }}
                fontFamily="en"
              >
                <Text fontFamily="kr" color="white">
                  인증번호 보내기
                </Text>
              </Button>
              <HStack
                mt="5"
                space="2"
                mb={{ base: 6, md: 7 }}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{ bg: "coolGray.200" }}
                  _dark={{ bg: "coolGray.700" }}
                ></Divider>
                <Text
                  fontWeight="medium"
                  _light={{ color: "coolGray.300" }}
                  _dark={{ color: "coolGray.500" }}
                  fontFamily="en"
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{ bg: "coolGray.200" }}
                  _dark={{ bg: "coolGray.700" }}
                ></Divider>
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
        <HStack
          mb="4"
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{ base: "auto", md: "8" }}
        >
          <Text
            _light={{ color: "coolGray.800" }}
            _dark={{ color: "coolGray.400" }}
            fontFamily="en"
          >
            Don't have an account?
          </Text>
          {/* Opening Link Tag navigateTo:"SignUp" */}
          <Link
            _text={{
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
            onPress={() => {
              props.navigation.navigate("SignUp")
            }}
          >
            Sign up
          </Link>
          {/* Closing Link Tag */}
        </HStack>
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
            <Hidden from="md">
              <VStack px="4" mt="4" mb="5" space="9">
                <HStack space="2" alignItems="center">
                  <IconButton
                    variant="unstyled"
                    pl="0"
                    // onPress={() => {}}
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
                      fontSize="md"
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
                      fontSize="md"
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
            </Hidden>
            <Hidden till="md">
              <Center
                flex="1"
                bg="primary.700"
                borderTopLeftRadius={{ base: "0", md: "xl" }}
                borderBottomLeftRadius={{ base: "0", md: "xl" }}
              >
                <Image
                  h="24"
                  size="80"
                  alt="NativeBase Startup+ "
                  resizeMode={"contain"}
                  source={require("../../../assets/common-images/small_logo.png")}
                />
              </Center>
            </Hidden>
            <SignInForm props={props} />
          </Stack>
        </Center>
      </>
    )
  },
)
