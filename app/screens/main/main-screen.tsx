/* eslint-disable react/no-children-prop */
import React, { FC, useEffect, useLayoutEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Animated, LayoutAnimation, Platform, UIManager, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { navigate, NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  Image,
  Pressable,
  Hidden,
  Button,
  Link,
} from "native-base"
import { stores as _stores } from "../../../assets/sampleData/stores"
import { CountUp, useCountUp } from "use-count-up" //? https://github.com/vydimitrov/use-count-up

const Store = ({ imgUri, id, setState, state }) => (
  <Pressable
    onPress={() => {
      setState(id)
    }}
  >
    <Box
    // borderWidth={isPressed ? 2 : 0}
    // borderColor={isPressed ? "amber.300" : null}
    >
      <Image
        source={{
          uri: imgUri,
        }}
        alt="Loading..."
        size="sm"
        borderRadius={"xl"}
        borderWidth={id === state ? 1.5 : 0}
      />
    </Box>
  </Pressable>
)

const DeliveryPlatform = ({ name, setState, state }) => (
  <Pressable
    onPress={() => {
      setState(name)
    }}
  >
    <Box
    // borderWidth={isPressed ? 2 : 0}
    // borderColor={isPressed ? "amber.300" : null}
    >
      <Image
        source={{
          uri:
            name === "배달의 민족"
              ? "https://play-lh.googleusercontent.com/8uMTbCdy6B93EGM5p6tfOVWnkDpee5ZOVYfaBgsWciG77nxZEpjltRtaOTxsI52x8Q"
              : name === "요기요"
              ? "https://play-lh.googleusercontent.com/Zkel_nNv9Hq8met65g2HkbCYMoR0tZR5TaWaV5ZMqsfdwY3naycvlUKkarBJOWNPjpo"
              : name === "쿠팡이츠"
              ? "https://play-lh.googleusercontent.com/VVxIA_jSqBzwzRSE9SXItUNLhT62QYdFNvCWT5msNIV_NXGJHi_C3GnyLvL14-niVQ=w240-h480-rw"
              : name === "배달특급"
              ? "https://play-lh.googleusercontent.com/vDqEOYQ8AYlxTT_cy2e_bvfkk561udtkwQt1aSM1e3xcq5w07Wmsm2_Q50DGrcv_pEU=w240-h480-rw"
              : "https://wallpaperaccess.com/full/317501.jpg",
        }}
        resizeMode="cover"
        alt="Loading..."
        size="sm"
        borderRadius={"xl"}
        borderWidth={name === state ? 1.5 : 0}
      />
    </Box>
  </Pressable>
)

export const MainScreen: FC<StackScreenProps<NavigatorParamList, "main">> = observer(
  function MainScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    let NUM = 1000

    // const handleClicked = () => (

    // )

    const [step, setStep] = useState(1)
    const [stores, setStores] = useState(_stores)
    const [storeId, setStoreId] = useState(null)
    const [role, setRole] = useState("master")
    const [platform, setPlatform] = useState(null)
    const [location, setLocation] = useState(null)

    const [isCounting, setIsCounting] = useState(true)

    // useLayoutEffect(() => {
    //   // setStores(_stores)
    //   console.log(storeId)
    // }, [])

    useEffect(() => {
      console.log(storeId)
    }, [storeId])

    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
      }
    }

    //? 5초에 한번씩 구현을 위한 코드
    useEffect(() => {
      setInterval(() => {
        setIsCounting(!isCounting)
      }, 5000)
    }, [step])

    const { value: recentMatchingNumber } = useCountUp({
      isCounting: isCounting,
      end: 9999,
      duration: 1000,
    })

    return (
      // <Screen style={ROOT} preset="scroll">
      //   <Text preset="header" text="main" />
      // </Screen>
      <>
        {/* <Box safeAreaTop _light={{ bg: "primary.900" }} _dark={{ bg: "coolGray.900" }} /> */}
        <Center
          my="auto"
          _light={{ bg: "white" }}
          _dark={{ bg: "coolGray.900" }}
          flex="1"
          px="4"
          safeAreaTop
          safeAreaBottom
        >
          <VStack mt="4" mb="auto" space="6" w="100%">
            <Box bg="p.900" borderRadius="sm" px="4" py="4" shadow="4">
              <HStack>
                <Text
                  children="최근 매칭 현황"
                  color="white"
                  fontSize="xl"
                  fontWeight="400"
                  fontFamily="kr"
                />
                <Text
                  children={`${parseInt(recentMatchingNumber.toString())
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 명`}
                  color="white"
                  fontSize="xl"
                  fontWeight="600"
                  ml="auto"
                  fontFamily="en"
                />
              </HStack>
            </Box>

            {/* //* 1. 매장 선택 */}
            <Box
              bg={step === 1 ? "p.700" : storeId !== null ? "p.100" : "gray.300"}
              borderRadius="sm"
              px="4"
              py="4"
              shadow="2"
            >
              <Text
                children={
                  step === 2 || step === 3
                    ? storeId !== null
                      ? stores.filter((item) => item.id === storeId)[0].store
                      : "매장 미선택"
                    : "STEP 1. 주문하실 매장을 선택해주세요"
                }
                color={step === 1 ? "white" : "black"}
                fontSize="lg"
                fontWeight={step === 1 ? "600" : "400"}
                fontFamily="kr"
                mb={step === 1 ? "2" : null}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                  setStep(step !== 1 ? 1 : null)
                }}
              />
              {step === 1 && (
                <Center bg="primary.100" borderRadius="sm" px="4" py="4" mt="2" alignSelf="center">
                  <HStack space="4" mb="4">
                    {stores.slice(0, 4).map((item) => (
                      <Store
                        imgUri={item.image}
                        id={item.id}
                        setState={setStoreId}
                        state={storeId}
                      />
                    ))}
                  </HStack>

                  <HStack space="4" mb="4">
                    {stores.slice(4, 8).map((item) => (
                      <Store
                        imgUri={item.image}
                        id={item.id}
                        setState={setStoreId}
                        state={storeId}
                      />
                    ))}
                  </HStack>

                  <HStack space="4">
                    {stores.slice(8, 12).map((item) => (
                      <Store
                        imgUri={item.image}
                        id={item.id}
                        setState={setStoreId}
                        state={storeId}
                      />
                    ))}
                  </HStack>
                </Center>
              )}
            </Box>

            {/* //* 2. 역할 선택 */}
            <Box
              bg={step === 2 ? "primary.700" : platform !== null ? "p.100" : "gray.300"}
              borderRadius="sm"
              px="4"
              py="4"
              shadow="2"
            >
              <Text
                children={
                  step === 2
                    ? "STEP 2. 이용 역할을 선택해주세요"
                    : role === "master"
                    ? platform !== null
                      ? `[마스터] ${platform}`
                      : "[마스터] 플랫폼 미선택"
                    : role === "partner" && "파트너"

                  // `[마스터] 플랫폼 미선택`
                  // : platform !== null
                }
                color={step === 2 ? "white" : "black"}
                fontSize="lg"
                fontWeight={step === 2 ? "600" : "400"}
                fontFamily="kr"
                mb={step === 2 ? "2" : null}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                  setStep(step !== 2 ? 2 : null)
                }}
              />
              {step === 2 && (
                <Center>
                  <HStack alignItems="center" py="2">
                    <Link
                      bg={role === "master" ? "primary.300" : "gray.200"}
                      borderRadius="sm"
                      borderWidth={role === "master" ? 2 : null}
                      borderColor={role === "master" && "white"}
                      px="10"
                      py="2"
                      shadow="6"
                      mr="4"
                      onPress={() => {
                        setRole("master")
                        LayoutAnimation.easeInEaseOut()
                      }}
                    >
                      <Text
                        fontSize={role === "master" ? "lg" : "md"}
                        fontWeight="600"
                        fontFamily="kr"
                        color={role === "master" ? "white" : "gray.400"}
                      >
                        마스터
                      </Text>
                    </Link>

                    <Link
                      bg={role === "partner" ? "primary.300" : "gray.200"}
                      borderRadius="sm"
                      borderWidth={role === "partner" ? 2 : null}
                      borderColor={role === "partner" && "white"}
                      px="10"
                      py="2"
                      shadow="6"
                      onPress={() => {
                        setRole("partner")
                        LayoutAnimation.easeInEaseOut()
                      }}
                    >
                      <Text
                        fontSize={role === "partner" ? "lg" : "md"}
                        fontWeight="600"
                        fontFamily="kr"
                        color={role === "partner" ? "white" : "gray.400"}
                      >
                        파트너
                      </Text>
                    </Link>
                  </HStack>
                  {/* //* 2 - 1. 마스터 설명 */}
                  <>
                    {role === "master" && (
                      <Box bg="primary.100" borderRadius="sm" px="4" py="4" mt="2" w="100%">
                        <Text fontSize="md" fontWeight="600" fontFamily="kr" mb="1">
                          배달을 진행할 플랫폼을 선택해주세요
                        </Text>
                        <Text
                          fontSize="xs"
                          fontWeight={step === 2 ? "600" : "400"}
                          fontFamily="kr"
                          mb="2"
                        >
                          마스터는 파트너의 메뉴를 전달받아 주문을 같이 진행해요! {"\n"}
                          자주쓰는 배달플랫폼을 골라주세요 :)
                        </Text>
                        <HStack space="4" mt="4" alignSelf="center">
                          <DeliveryPlatform
                            name="배달의 민족"
                            setState={setPlatform}
                            state={platform}
                          />
                          <DeliveryPlatform name="요기요" setState={setPlatform} state={platform} />
                          <DeliveryPlatform
                            name="쿠팡이츠"
                            setState={setPlatform}
                            state={platform}
                          />
                          <DeliveryPlatform
                            name="배달특급"
                            setState={setPlatform}
                            state={platform}
                          />
                        </HStack>
                      </Box>
                    )}

                    {/* //* 2 - 1. 파트너 설명 */}
                    {role === "partner" && (
                      <Box bg="primary.100" borderRadius="sm" px="4" py="4" mt="2" w="100%">
                        <Text fontSize="md" fontWeight="600" fontFamily="kr" mb="1">
                          파트너는 매칭을 바로 시작할 수 있어요!
                        </Text>
                        <Text
                          fontSize="xs"
                          fontWeight={step === 2 ? "600" : "400"}
                          fontFamily="kr"
                          mb="2"
                        >
                          함께 주문을 진행할 파트너들의 수는 마스터에 의해 결정돼요
                        </Text>

                        <Text fontSize="md" fontWeight="600" fontFamily="kr" mb="1" mt="4">
                          매칭이 시작되면 메뉴를 골라주세요 :)
                        </Text>
                        <Text
                          fontSize="xs"
                          fontWeight={step === 1 ? "600" : "400"}
                          fontFamily="kr"
                          mb="2"
                        >
                          마스터가 선택한 플랫폼에서 배달이 진행돼요. {"\n"}
                          배달의민족, 요기요, 쿠팡이츠, 배달특급 앱이 설치되어 {"\n"}
                          있는 것을 권장해요. 반드시 마스터가 선택한 플랫폼에 있는 {"\n"}
                          매장의 메뉴로 선택해주세요 :)
                        </Text>
                      </Box>
                    )}
                  </>
                </Center>
              )}
            </Box>

            {/* //* 3. 장소 선택 */}
            <Box
              bg={step === 3 ? "primary.700" : location !== null ? "p.100" : "gray.300"}
              borderRadius="sm"
              px="4"
              py="4"
              shadow="2"
            >
              <Text
                children={
                  step === 3
                    ? "STEP3. 음식을 받을 장소를 선택해주세요"
                    : location !== null
                    ? location
                    : "장소 선택"
                }
                color={step === 3 ? "white" : "black"}
                fontSize="lg"
                fontWeight={step === 3 ? "600" : "400"}
                fontFamily="kr"
                mb={step === 3 ? "2" : null}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                  setStep(step !== 3 ? 3 : null)
                }}
              />
              {step === 3 && (
                <Center>
                  <Box bg="primary.100" borderRadius="sm" px="6" py="6" mt="2">
                    <Center>
                      <HStack space="6">
                        <Link
                          bg={location === "창의관" ? "primary.300" : "gray.200"}
                          borderRadius="sm"
                          borderWidth={location === "창의관" ? 2 : null}
                          borderColor={location === "창의관" && "white"}
                          px="4"
                          py="4"
                          alignItems="center"
                          onPress={() => {
                            setLocation("창의관")
                          }}
                        >
                          <Text
                            fontSize={location === "창의관" ? "lg" : "md"}
                            fontWeight="600"
                            fontFamily="kr"
                            color={location === "창의관" ? "white" : "gray.400"}
                          >
                            창의관
                          </Text>
                        </Link>

                        <Link
                          bg={location === "인재관" ? "primary.300" : "gray.200"}
                          borderRadius="sm"
                          borderWidth={location === "인재관" ? 2 : null}
                          borderColor={location === "인재관" && "white"}
                          px="4"
                          py="4"
                          alignItems="center"
                          onPress={() => {
                            setLocation("인재관")
                          }}
                        >
                          <Text
                            fontSize={location === "인재관" ? "lg" : "md"}
                            fontWeight="600"
                            fontFamily="kr"
                            color={location === "인재관" ? "white" : "gray.400"}
                          >
                            인재관
                          </Text>
                        </Link>

                        <Link
                          bg={location === "행복관" ? "primary.300" : "gray.200"}
                          borderRadius="sm"
                          borderWidth={location === "행복관" ? 2 : null}
                          borderColor={location === "행복관" && "white"}
                          px="4"
                          py="4"
                          alignItems="center"
                          onPress={() => {
                            setLocation("행복관")
                          }}
                        >
                          <Text
                            fontSize={location === "행복관" ? "lg" : "md"}
                            fontWeight="600"
                            fontFamily="kr"
                            color={location === "행복관" ? "white" : "gray.400"}
                          >
                            행복관
                          </Text>
                        </Link>
                      </HStack>
                    </Center>
                  </Box>
                </Center>
              )}
            </Box>
          </VStack>

          <Button w="100%" mt="auto" mb="2" colorScheme="secondary">
            <Text
              fontSize="sm"
              fontWeight="600"
              fontFamily="kr"
              color="white"
              fontSize="xl"
              fontFamily="kr"
              children={step === 3 ? "매칭 시작하기" : "다음"}
              onPress={() => {
                step === 1
                  ? setStep(2)
                  : step === 2
                  ? setStep(3)
                  : step === 3
                  ? navigate("signIn")
                  : alert("지금 하프딜리버리를 가입하고 매칭을 시작해보세요 :) ")
              }}
            />
          </Button>
        </Center>
      </>
    )
  },
)
