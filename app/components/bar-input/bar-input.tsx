import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, palette, typography } from "../../theme"
import { Text } from "../text/text"
import React from "react"
import styled from "styled-components"

const Container = styled.TextInput`
  padding: 0px 8px 10px;
  padding-top: 0px
  padding-bottom: 10px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ isValued, error }) =>
    error ? color.error : isValued ? color.p[900] : color.p[100]};
  font-family: "kr";
  include-font-padding: false;
  text-align-vertical: center;
  font-size: 22px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

// export interface BarInputProps {
//   /**
//    * An optional style override useful for padding & margin.
//    */
//   style?: StyleProp<ViewStyle>
//   value,
//   placeholder,
//   isPassword = false,
//   autoCapitalize,
//   stateFn,
//   KeyboardType,
//   disabled = false,
//   isValued = false,
//   error = false,

//   value: string
//   placeholder: string
//   isPassword: boolean
//   autoCapitalize: string
//   stateFn: func,
//   disabled: boolean,
//   isValued: bool,
// }

/**
 * Describe your component here
 */
export const BarInput = observer(function BarInput({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
  KeyboardType,
  disabled = false,
  isValued = false,
  error = false,
  style,
}) {
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <Container
      keyboardType={KeyboardType}
      value={value}
      placeholder={placeholder}
      secureTextEntry={isPassword ? true : false}
      autoCapitalize={autoCapitalize}
      onChangeText={(text) => stateFn(text)}
      disabled={disabled}
      editable={disabled ? false : true}
      isValued={isValued}
      error={error}
      style={style}
    />
  )
})
