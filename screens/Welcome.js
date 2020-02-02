import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Block, Text, Button } from 'expo-ui-kit'
import  background from "../constansts/images"
export default class Welcome extends Component {
     render() {
          const bacgrounds=[
               {
               title:"secured ,forever.",
                    img=background.wellcom,
               description:"Software: React-Native, Expo.io, SketchApp, VSCode, iOS Simulator"
          },
               {
                    title: "secured ,forever.",
                    img=background.,
                    description: "Software: React-Native, Expo.io, SketchApp, VSCode, iOS Simulator"
               },
               {
                    title: "secured ,forever.",
                    img=background.wellcom,
                    description: "Software: React-Native, Expo.io, SketchApp, VSCode, iOS Simulator"
               },
          ]
          return (
               <Block safe>
                    <Block center>

                         <Image

                              source={background.wellcom}
                              resizeMode="center"
                         />

                    </Block>

                    <Block center middle margin={60}>
                         <Text h1 semibold  > secured ,forever. </Text>
                         <Text h3 gray margin={[10,0]}  center caption >Software: React-Native, Expo.io, SketchApp, VSCode, iOS Simulator
  </Text>

                    </Block>
                    <Block flex={false} center bottom>
                         <Button primary>
                              <Text white center margin={[6,26]}>
                                   Get start
                    </Text>
                         </Button>

                    </Block>
               </Block>
          )
     }
}
