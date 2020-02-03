import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Block, Text, Button, Utils } from 'expo-ui-kit'
import { icons } from "../constansts/images"

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
export default class Vpn extends Component {
     state = { currentState: false }
     handaleConection () {
          this.setState({ currentState: !currentState });
     }
     renderServer() {
          
     }
     render() {
          const { connect, dotes, uppercase, imageStyle, server } = Styles;
          const { connected } = this.state.currentState;

          return (
               <Block safe center>
                    <Block flex={false} padding={[20, 2]}>

                         <Text semibold title>Vpn</Text>
                    </Block>


                         <Block center middle>
                         <Block flex={false}
                              row
                              white
                              center
                              shadow
                              radius={SIZES.base * 2}
                              padding={[SIZES.base, SIZES.padding]}>

                              <Button onPress={}  >
                                   <Text subtitle gray semibold style={connect} >
                                        {connected? " Disconnected" : "Connected"}
                                   </Text>

                              </Button>
                              <Block radius={10}
                                   color={connected ? COLORS.success : rgba(COLORS.gray,0.5)}
                                   style={dotes} />
                              </Block>

                    </Block>
                         <Block center middle>
                         <Image
                              style={imageStyle}
                              source={icons[connected ? "online" : "offline"]}
                         />
                         <Button outline={} margin={[10, 2]} style={!connected} onPress={this.handaleConection()} >
                              <Text
                                   margin={[SIZES.padding/2.0]}
                                   white
                                        caption
                                        center
                                        bold
                                   style={uppercase}>
                                   {connected ? " Disconnected" : "Connected Now"}</Text>
                         </Button>



                         </Block>

                    <Block
                         center
                         shadow
                         middle
                         flex={false}
                         style={server}
                         white>
                         <Button transparent>
                              <Text>Server</Text>

                         </Button>

                    </Block>

               </Block >

          )
     }
}
const styles = StyleSheet.create({
     connect: {
          width: SIZES.width / 2,
          textTransform: "     "


     }, imageStyle: {
          width: 180,
          height: 180,
          marginVertical: 20

     },
     dotes: {
          width: 8,
          height: 8
     },
     uppercase: {
          textTransform:"uppercase"
     },
     server: {
          width: SIZES.width,
          height:SIZES.base*9

     }
})
