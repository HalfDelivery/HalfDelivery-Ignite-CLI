import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Button, Text, StyleSheet, Image, ScrollView } from "react-native"
import styled from "styled-components"
import colors from "./colors"
import { width, height } from "./utils"
import CollapsibleView from "./CollapsableView"
import DeliveryInfo_DlvTip from "./DeliveryInfo_DlvTip"
import Participant from "./Participant"
import ParticipantEmpty from "./ParticipantEmpty"
import PriceReadyBoxHost from "./PriceReadyBoxHost"
import BarInput from "./BarInput"
// import PriceReadyBoxPartner from "./PriceReadyBoxPartner"
import Timer from "./Timer"
import { users } from "../../../assets/sampleData/users"

const MatchingInfoRoot_HEIGHT = 656

export const MatchingWaitingScreen = () => {
  const navigation = useNavigation()
  const [myPrice, setMyPrice] = useState(null)

  return (
    <Root>
      <View style={{ width: "100%", height: 200, backgroundColor: "pink" }} />
      {/* 배달 정보 */}
      <CollapsibleView sectionTitle={"배달 정보"} maxheight={height * 200} isOpen={true}>
        <DeliveryInfo_DlvTip />
        <View style={{ justifyContent: "center", alignItems: "center", padding: 20 }}>
          <BarInput
            placeholder="내 주문금액       eg. 9,000 원"
            stateFn={setMyPrice}
            value={myPrice || undefined}
          />
        </View>
      </CollapsibleView>

      {/* 매칭 정보 */}
      <CollapsibleView
        sectionTitle={"매칭 정보"}
        maxheight={height * MatchingInfoRoot_HEIGHT}
        style={{ marginTop: height * 4 }}
      >
        <MatchingInfoRoot>
          <MatchingInfoRootRow>
            <Participant user={users[0]} isHost />
            <Participant user={users[1]} style={{ marginLeft: width * 16, marginRight: "auto" }} />
          </MatchingInfoRootRow>
          <MatchingInfoRootRow
            style={{
              marginTop: height * 18,
              // paddingBottom: 10,
            }}
          >
            <ParticipantEmpty />
            <ParticipantEmpty style={{ marginLeft: width * 16, marginRight: "auto" }} />
          </MatchingInfoRootRow>
        </MatchingInfoRoot>
        {/* 내/전체 주문금액 */}
        <PriceReadyBoxHost
          style={{ marginTop: 30 }}
          totalPrice={users.reduce((accum, curValue) => accum + curValue.orderPrice, 0)}
        />
      </CollapsibleView>
    </Root>
  )
}

const Root = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #f5f6f6;
`
// flex: 1;

const MatchingInfoRoot = styled.View`
  background-color: #f5f6f6;
  /* height: ${height * MatchingInfoRoot_HEIGHT}px; */
`

const MatchingInfoHeader = styled.View`
  background-color: #f5f6f6;
  /* background-color: olive; */
  flex-direction: row;
  align-items: center;
  height: ${height * 39}px;
  padding-left: ${width * 24}px;
  padding-right: ${width * 25}px;
`

const MatchingInfoRootRow = styled.View`
  flex-direction: row;
  background-color: #f5f6f6;
  margin-top: ${height * 30}px;
  /* background-color: orange; */
  /* align-items: center; */
  /* justify-content: center; */
  padding-left: ${width * 24}px;
  padding-right: ${width * 24}px;
`
