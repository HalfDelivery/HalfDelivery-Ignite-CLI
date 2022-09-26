import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, Text, View, ViewStyle } from "react-native"
import Carousel from "react-native-reanimated-carousel"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Screen } from "../../components"
import Index from "../../components/carousel/carousel"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.offWhite,
  flex: 1,
}

// @ts-ignore
export const MatchingRoomsScreen: FC<
  StackScreenProps<NavigatorParamList, "matchingRooms">
> = observer(function MatchingRoomsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const width = Dimensions.get("window").width
  return (
    <Screen style={ROOT} preset="scroll">
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "orange",
        }}
      >
        <Carousel
          style={{
            backgroundColor: "red",
          }}
          loop
          width={width}
          height={width}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={2000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
            </View>
          )}
        />
      </View> */}

      <Index />
    </Screen>
  )
})
