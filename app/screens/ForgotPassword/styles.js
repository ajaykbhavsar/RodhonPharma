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
  ImageBack:{
    height:viewportHeight
  },
  mainTitle:{
    fontSize:viewportWidth*0.2, fontFamily:Typography.FONT_POPPINS_SEMIBOLD, color:color.COLOR_WHITE,
    borderWidth:0,   paddingVertical:0, height:viewportWidth*0.18, lineHeight:viewportWidth*0.23,
    textTransform:'uppercase'    
  },
  tagline:{
    fontSize:viewportWidth*0.032, color:color.COLOR_WHITE, fontFamily:Typography.FONT_POPPINS_SEMIBOLD,
    marginLeft:viewportWidth*0.01
  },
  marTop:{
    marginTop:viewportWidth*0.15
  },
  mainContainer:{
    padding:viewportWidth*0.08, height:viewportHeight*0.45
  },
  loginBoxd:{ position:'relative',
    backgroundColor:'#B82A1B',  width:'100%', paddingHorizontal:viewportWidth*0.08,
    display:'flex', flexDirection:'column', paddingTop:viewportWidth*0.07, borderWidth:0,  paddingBottom:viewportWidth*0.09,
    borderRadius:viewportWidth*0.06
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
    backgroundColor:'#760B00', borderWidth:0
  },
  btnwhite:{
    backgroundColor:color.COLOR_WHITE,
  },
  btnText:{
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD,  fontSize:Typography.FONT_SIZE17, color:color.COLOR_WHITE
  },
  btnTexttwo:{
    fontFamily:Typography.FONT_RALEWAY_MEDIUM,  fontSize:Typography.FONT_SIZE16, color:color.COLOR_WHITE
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
    borderWidth:0, marginVertical:0, paddingVertical:0, display:'flex'
  },
  ButtonArea:{
    borderWidth:0, padding:0, marginTop:viewportWidth*0.03
  },
  linkbtnbox:{
    display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' ,
    marginLeft:viewportWidth*0.02
  },
  loginBottompart:{
    display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
     borderStyle:'dashed', borderTopColor:'rgba(255,255,255,0.3)',   marginTop:viewportWidth*0.06,
    
  },
  btnSignup:{
    color:color.COLOR_WHITE,
  },
  btnSignuptextfirst:{color:color.COLOR_WHITE,  marginBottom:viewportWidth*0.03, fontSize:Typography.FONT_SIZE15 , fontFamily:Typography.FONT_RALEWAY_MEDIUM},
  btnSignuptext:{ color:color.COLOR_WHITE, fontFamily:Typography.FONT_POPPINS_MEDIUM, fontSize:Typography.FONT_SIZE15,  fontFamily:Typography.FONT_POPPINS_SEMIBOLD },
  btnblueRegister:{ backgroundColor:'#C27E77',
    color:color.COLOR_WHITE,  marginBottom:viewportWidth*0.03, fontSize:Typography.FONT_SIZE15 , fontFamily:Typography.FONT_RALEWAY_MEDIUM
  },
  
  pagemaincontainer:{
    height:viewportHeight,
  },
  pagemaincontainerHeight:{
    height:1100, marginTop:-viewportHeight*0.2
  },
  pagemainbox:{
    height:viewportHeight, borderWidth:0,  display:'flex', flexDirection:'column', justifyContent:'center',
    paddingHorizontal:viewportWidth*0.05
  },
  alertMainBox: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  errorMessage: {
      color: color.COLOR_RED,
      fontSize:Typography.FONT_SIZE16,
      fontWeight: Typography.FONT_WEIGHT_NORMAL,
      fontStyle: Typography.FONT_STYLE_NORMAL,
      lineHeight: viewportWidth * 0.05,
      letterSpacing: 0,
      color: color.COLOR_RED,
      paddingLeft: 0,
      position: 'relative',
      borderWidth: 0,
      paddingLeft: 22,
      marginBottom: 24,
  },
  alertIcon: {
      width: viewportWidth * 0.045,
      height: viewportWidth * 0.045,
      position: 'absolute',
      top: 4,
  },
  logoBox:{
    width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'
  },
  companyLogo:{
    width:viewportWidth*0.45, height:viewportWidth*0.25
  },
  ImageWhite:{
    position:'absolute', top:-35, left:-30, width:viewportWidth*0.45, height:viewportWidth*0.45
  },
  ImageWhitetwo:{
    position:'absolute', bottom:-120, right:-60, width:viewportWidth*0.6, height:viewportWidth*0.6
  },
  CheckBoxCotainer:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'
  },
  checkBoxText:{
    fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:viewportWidth*0.036, color:color.COLOR_WHITE,
    marginBottom:viewportWidth*0.035
  },
  checkBoxcss:{
   marginRight:viewportWidth*0.01},
   btnTerms:{},
   btnTermsText:{
    color:color.COLOR_WHITE, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:viewportWidth*0.036
   },
   alreadyRegister:{
    display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'
   },
   marBtm:{
    marginBottom:viewportWidth*0.02
   }
   
   

});

export default styles;
