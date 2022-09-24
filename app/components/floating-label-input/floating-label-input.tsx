import React, { Component } from "react"
import { StyleProp, TextStyle, View, ViewStyle, Platform, Animated } from "react-native"
import { observer } from "mobx-react-lite"
import { Input, Box } from "native-base"

export interface FloatingLabelInputProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

export class FloatingLabelInput extends Component<any, any> {
  private _animatedIsFocused: any
  constructor(props: any) {
    super(props)
    this.state = {
      isFocused: false,
    }

    this._animatedIsFocused = new Animated.Value(this.props.defaultValue === "" ? 0 : 1)
  }

  handleFocus = () => this.setState({ isFocused: true })
  handleBlur = () => this.setState({ isFocused: false })

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      duration: 200,
      useNativeDriver: false,
      toValue: this.state.isFocused || this.props.defaultValue !== "" ? 1 : 0,
    }).start()
  }

  render() {
    const { label, ...props } = this.props
    const lableContainerStyles = {
      position: "absolute",
      left: 16,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [12, -7],
      }),
      zIndex: 5,
      paddingLeft: 3,
      paddingRight: 3,
      backgroundColor: this.props.labelBGColor,
    } as any
    const AndroidlabelStyle = {
      fontWeight: "500",
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),
      fontFamily: "Pretendard",
      color: this.props.labelColor,
      fontSize: 18,
    } as any
    const IOSlabelStyle = {
      fontWeight: "500",
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),
      marginTop: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [-3, 0],
      }),
      fontFamily: "Pretendard",
      color: this.props.labelColor,
      fontSize: 18,
    } as any
    return (
      <Box w={this.props.containerWidth}>
        <Animated.View pointerEvents="none" style={lableContainerStyles}>
          <Animated.Text style={Platform.OS === "android" ? AndroidlabelStyle : IOSlabelStyle}>
            {label}
          </Animated.Text>
        </Animated.View>
        <Input
          {...props}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          _hover={{ bg: this.props.labelBGColor }}
        />
      </Box>
    )
  }
}
