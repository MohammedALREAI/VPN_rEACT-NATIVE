import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Block, Text, Button, Utils } from 'expo-ui-kit'
import background from "../constansts/images"

const { theme, rgba } = Utils;
const { SIZE, COLORS } = theme;
const backgrounds = [
     {
          title: "secured ,forever.",
          img=background.welcome,
          description: "Software: React-Native, Expo.io, SketchApp, VSCode, iOS Simulator"
     },
     {
          title: "secured ,forever.",
          img=background.encrypted,
          description: "Software: React-Native, Expo.io, SketchApp, VSCode, iOS Simulator"
     },
     {
          title: "privacy is secure.",
          img=background.privacy,
          description: "Software: React-Native, Expo.io, SketchApp, VSCode, iOS Simulator"
     },
]
export default class Welcome extends Component {

     renderImage = () => (
          <ScrollView horizontal scrollEnabled showsHorizontalScrollIndicator={false}
               snapToAlignment="center"
               scrollEventThrottle={16}
               decelerationRate={0}
          >{backgrounds.map((item, index) => (

               <Block key={`img-${index}`} center style={{ width: SIZE.width }}>

                    <Image
                         style={{ width: SIZE.width / 1.5, height: SIZE.height }}
                         source={item.img}
                         resizeMode="center"
                    />
               </Block>
          ))}


          </ScrollView>

     );
     renderDots = () => (
          <Block flex={false} row center middle margin={[20, 0, 40, 0]}>
               <Block
                    flex={false}
                    gray margin={[0, 6]}
                    radius={8}
                    style={{ width: 8, height: 8 }}
                    color={COLORS.gray}
               />
               <Block
                    flex={false}
                    gray margin={[0, 6]}
                    radius={3}
                    style={{ width: 8, height: 6 }}
                    color={rgba(COLORS.gray, 0.5)}
               />
               <Block
                    flex={false}
                    gray margin={[0, 6]}
                    radius={3}
                    style={{ width: 6, height: 6 }}
                    color={rgba(COLORS.gray, 0.5)}
               />
          </Block>
     )
     render() {
          //we want make as map
          const { navigation } = this.props;
          return (
               <Block safe>
                    <Block center middle>
                         {this.renderImage}


                    </Block>

                    <Block center middle margin={60}>
                         <Text h1 semibold  > secured ,forever. </Text>
                         <Text h3 gray margin={[10, 0]} center caption >Software: React-Native, Expo.io, SketchApp, VSCode, iOS Simulator
  </Text>
                         {this.renderDots}

                    </Block>
                    <Block flex={false} center bottom>
                         <Button primary

                              onPress={() => navigation.navigate("VPN")}
                              style={{ borderRadius: 30 }}>
                              <Text white center margin={[6, 26]}>
                                   Get start
                    </Text>
                         </Button>

                    </Block>
               </Block>
          )
     }
}
