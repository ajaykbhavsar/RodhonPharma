import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from "react-native";
import { Footer} from 'native-base';
import * as navigationActions from '../actions/navigationActions';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Styles from "../config/styles";
const { color, Typography } = Styles;

class FooterComponents extends Component {
  constructor(props) {
      super(props);
  }
  
  navigateToHome = () => {
      navigationActions.navigateToHome();
  }
 
 

  
  render() {

    const props = this.props;
    const {
      hometabactive = false,
      coursetab = false,
      faqtabactive=false,
      settingstabactive = false,
      registrationtabactive = false

    } = props;
  
    return (
      
        <View style={styles.bottomTab}>
          <View style={styles.tabListing}>
            <TouchableOpacity style={styles.tabBox}
                onPress={() => this.navigateToHome()}>
               <Image source={require("../assets/images/icon_home.png")} resizeMode='contain' style={hometabactive == true ? styles.tabIconActive : styles.tabIcon}/> 
            </TouchableOpacity>
            <TouchableOpacity style={ styles.tabBox}
                onPress={() => this.navigateToCourseList()}>
               <Image source={require("../assets/images/support.png")} resizeMode='contain' style={coursetab == true ? styles.tabIconActive : styles.tabIcon}/>
            </TouchableOpacity>            
            <TouchableOpacity style={ styles.tabBox}
                onPress={() => this.navigateToFaq()}>
              <Image source={require("../assets/images/help.png")} resizeMode='contain' style={faqtabactive == true ? styles.tabIconActive : styles.tabIcon}/> 
            </TouchableOpacity>            
          </View>
        </View>
     
      
    );
  }
}

const styles = StyleSheet.create({
  bottomTab:{
    backgroundColor:'#800000', position:'relative', zIndex:3, height:60,
  },
  tabListing:{
    display:'flex',
    flexDirection:'row',
    width:viewportWidth,
  },
  tabBox:{
    width:'33%',
    textAlign:'center',
    paddingVertical:12,
    paddingHorizontal:5,
    display:'flex',
    justifyContent:'center',
    alignItems:'center', borderWidth:0,
  },
  tabBoxActive:{
    width:'20%', 
    textAlign:'center',
    paddingVertical:12,
    paddingHorizontal:5,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:color.COLOR_PRIMARY,
  },
  tabTitle:{
    fontSize:Typography.FONT_SIZE12,
    textAlign:'center',
    color:color.COLOR_WHITE,
    fontFamily:Typography.FONT_Montserrat_REGULAR,
  },
  tabIcon:{
    height:viewportHeight * 0.045,  width:viewportHeight * 0.045,
    
  },
  tabIconActive:{
    opacity:1
  },
  tabIconBarcode:{
    opacity:1
  },
  btnbarcodeBox:{
    width:60, height:60, backgroundColor:'#EDF6FF', borderRadius:viewportWidth*0.6, display:'flex', flexDirection:'row', justifyContent:'center',
    alignItems:'center', marginTop:-30,
    shadowColor: "#000000",
    
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 11,

    ...Platform.select({
      ios: {
        shadowOpacity:0.3,
      }
    })
  }
});

export { FooterComponents };