import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
import Styles from '../../config/styles';
const { color, Typography} = Styles;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor:color.COLOR_WHITE, zIndex:0, marginTop:-132, paddingTop:130,
    borderWidth:0,
  }, 
  settingsHeader:{
    backgroundColor:color.COLOR_SUBTITLE, paddingVertical:viewportWidth*0.05, paddingHorizontal:viewportWidth*0.05,
    height:viewportWidth*0.32, zIndex:1, position:'relative', display:'flex', flexDirection:'row',
    justifyContent:'flex-start', alignItems:'flex-start'
  },
  settingsHeaderText:{
    color:color.COLOR_WHITE, fontSize:Typography.FONT_SIZE20, fontFamily:Typography.FONT_POPPINS_BOLD,
  },
  SettingsContainer:{
    backgroundColor:color.COLOR_WHITE, borderTopLeftRadius:viewportWidth*0.09,borderTopRightRadius:viewportWidth*0.09,
    paddingVertical:viewportWidth*0.08, paddingHorizontal:viewportWidth*0.05, width:'100%', marginTop:-30, zIndex:2, position:'relative'
  },
  btnBackHeader:{

  } ,
  btnBackHeaderImage:{

  },
  BtnClose:{
    width:viewportWidth*0.12, height:viewportWidth*0.06,  borderWidth:0, marginTop:-5,
  },
  BtnCloseImage:{
    width:viewportWidth*0.1, height:viewportWidth*0.1
  },

  loginBoxd:{
     width:viewportWidth,  
    display:'flex', flexDirection:'column', paddingTop:viewportWidth*0.07, borderWidth:0,  paddingBottom:viewportWidth*0.09
  },
  imgBookread:{
    position:'relative',  
  },
  bookReadimgs:{
    position:'absolute', bottom:0, left:viewportWidth*0.08, zIndex:999,
    width:viewportWidth*0.5
  },
  btn:{
    width:'100%',  display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',
     borderRadius:viewportWidth*0.5, paddingVertical:viewportWidth*0.03,  marginBottom:viewportWidth*0.04,  },
  
  

  btnblue:{
    backgroundColor:color.COLOR_SECONDARY, borderWidth:0
  },
  btnwhite:{
    backgroundColor:color.COLOR_WHITE,
  },
  btnText:{
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD, textTransform:'uppercase', fontSize:Typography.FONT_SIZE16, color:color.COLOR_WHITE
  },
  btnTexttwo:{
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD,  fontSize:Typography.FONT_SIZE16, color:color.COLOR_WHITE
  },
  btnTextblack:{
    color:color.COLOR_BLACK
  },
  btnTextwhite:{
    color:color.COLOR_WHITE
  },
  pageTitle:{
    textTransform:'uppercase'
  },
  landingTop:{
    height:viewportWidth*0.3
  },
  textBoxContainer:{
    borderWidth:0, marginVertical:0, paddingVertical:0, display:'flex',
    maxWidth:'90%', marginBottom:viewportWidth*0.03
  },
  ButtonArea:{
    borderWidth:0, padding:0, maxWidth:'90%'
  },
  imgLockPassword:{
    width:'65%', height:viewportWidth*0.6
  },
  lockTextBox:{
    display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'
  },
  changePassText:{
    fontFamily:Typography.FONT_POPPINS_MEDIUM, fontSize:Typography.FONT_SIZE15, color:color.COLOR_BLACK, textAlign:'center',
    paddingHorizontal:viewportWidth*0.06
  },
  FormBox:{marginTop:viewportWidth*0.07},
  
 
   
 


   

});

export default styles;
