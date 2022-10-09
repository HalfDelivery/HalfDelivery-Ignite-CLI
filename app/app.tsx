/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignore-warnings"
import React, { useState, useEffect } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { initFonts } from "./theme/fonts" // expo
import * as storage from "./utils/storage"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { RootStore, RootStoreProvider, setupRootStore } from "./models"
import { ToggleStorybook } from "../storybook/toggle-storybook"
import { ErrorBoundary } from "./screens/error/error-boundary"
import { extendTheme, NativeBaseProvider } from "native-base"
import { RecoilRoot } from "recoil"

const theme = extendTheme({
  colors: {
    // primary: nbTheme.colors.blue,
    primary: {
      50: "#e8eaf6",
      100: "#c4cae8",
      200: "#9da9d9",
      300: "#7687c9",
      400: "#576dbe",
      500: "#3753b3",
      600: "#314ba9",
      700: "#27419d",
      800: "#1e3791",
      900: "#0E257C",
    },
    p: {
      50: "#e8eaf6",
      100: "#c4cae8",
      200: "#9da9d9",
      300: "#7687c9",
      400: "#576dbe",
      500: "#3753b3",
      600: "#314ba9",
      700: "#27419d",
      800: "#1e3791",
      900: "#0E257C",
    },
    secondary: {
      50: "#FFF3F4",
      100: "#FFE8E9",
      200: "#FFDDDF",
      300: "#FFD5D7",
      400: "#FFCDCF",
      500: "#FFC2C3",
      600: "#FFB6B6",
      700: "#FF9FA1",
      800: "#FF888C",
      900: "#FF7177",
    },
    s: {
      50: "#FFF3F4",
      100: "#FFE8E9",
      200: "#FFDDDF",
      300: "#FFD5D7",
      400: "#FFCDCF",
      500: "#FFC2C3",
      600: "#FFB6B6",
      700: "#FF9FA1",
      800: "#FF888C",
      900: "#FF7177",
    },
  },

  fontConfig: {
    Pretendard: {
      100: {
        normal: "Pretendard-Regular",
      },
      200: {
        normal: "Pretendard-Regular",
      },
      300: {
        normal: "Pretendard-Regular",
      },
      400: {
        normal: "Pretendard-Medium",
      },
      500: {
        normal: "Pretendard-Medium",
      },
      600: {
        normal: "Pretendard-Bold",
      },
    },

    Poppins: {
      100: {
        normal: "Poppins-Regular",
      },
      200: {
        normal: "Poppins-Regular",
      },
      300: {
        normal: "Poppins-Regular",
      },
      400: {
        normal: "Poppins-Regular",
      },
      500: {
        normal: "Poppins-Regular",
      },
      600: {
        normal: "Poppins-SemiBold",
      },
    },
  },

  fonts: {
    kr: "Pretendard",
    en: "Poppins",
  },
})

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

/**
 * This is the root component of our app.
 */
function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      await initFonts() // expo
      setupRootStore().then(setRootStore)
    })()
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!rootStore || !isNavigationStateRestored) return null

  // otherwise, we're ready to render the app

  return (
    <ToggleStorybook>
      <RecoilRoot>
        <RootStoreProvider value={rootStore}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ErrorBoundary catchErrors={"always"}>
              <NativeBaseProvider theme={theme}>
                <AppNavigator
                  initialState={initialNavigationState}
                  onStateChange={onNavigationStateChange}
                />
              </NativeBaseProvider>
            </ErrorBoundary>
          </SafeAreaProvider>
        </RootStoreProvider>
      </RecoilRoot>
    </ToggleStorybook>
  )
}

export default App
