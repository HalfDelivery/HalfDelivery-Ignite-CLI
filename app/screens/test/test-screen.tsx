import { View, Platform } from "react-native"
import React from "react"
import { Box, Text } from "native-base"

export const TestScreen = () => {
  console.log(Platform.OS)
  return (
    <View>
      <Box bg="primary.400" p="12" rounded="lg">
        Box
      </Box>
      <Text fontSize="xl">{Platform.OS}</Text>
    </View>
  )
}
