/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  WelcomeScreen,
  DemoScreen,
  DemoListScreen,
  TestScreen,
  SignInScreen,
  MainScreen,
  MatchingRoomsScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { SimpleHomeScreen } from "../screens/home/simple-home-screen/simple-home-screen"
import { MatchingWaitingScreen } from "../screens/MatchingWaitingScreen/MatchingWaitingScreen"
import { ChatRoomScreen } from "../screens/ChatRoomScreen/ChatRoomScreen"
import { LottieAnimationScreen } from "../screens/LottieAnimation-screen"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  welcome: undefined
  demo: undefined
  demoList: undefined
  // 🔥 Your screens go here
  "test-screen": undefined
  signIn: undefined
  main: undefined
  lottieAnimation: undefined
  waiting: undefined
  chat: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="main"
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
      <Stack.Screen name="demoList" component={DemoListScreen} />
      <Stack.Screen name="test-screen" component={TestScreen} />
      <Stack.Screen name="simple-home-screen" component={SimpleHomeScreen} />
      {/** 🔥 Your screens go here */}
      <Stack.Screen name="main" component={MainScreen} />
      <Stack.Screen name="signIn" component={SignInScreen} />
      {/* <Stack.Screen name="matchingRooms" component={MatchingRoomsScreen} /> */}
      <Stack.Screen name="lottieAnimation" component={LottieAnimationScreen} />
      <Stack.Screen name="waiting" component={MatchingWaitingScreen} />
      <Stack.Screen name="chat" component={ChatRoomScreen} />
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
