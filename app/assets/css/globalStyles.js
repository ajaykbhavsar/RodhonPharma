import { StyleSheet, Dimensions, Platform } from 'react-native';
import Styles from '../../config/styles';
const { color, Typography } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


const globalStyles = StyleSheet.create({
  //Common Wrapper class
  margin0:{
    marginBottom:0,
  },  
  container: {
    flex: 1,
    backgroundColor: color.COLOR_PRIMARY,
    height: viewportHeight,
    width: viewportWidth,
    alignItems: 'center',
  },
  innerContainer:{
    minHeight:viewportHeight*0.565,
  },
  contentSection:{
    paddingTop:115,
    marginTop:-125
  },
  eventDetailContentSection:{
    paddingTop:0,
  },
  textHeading:{
    color:color.COLOR_TEXT,fontFamily:Typography.FONT_POPPINS_SEMIBOLD,fontSize:Typography.FONT_SIZE25,
    paddingHorizontal:15,marginBottom:20,marginTop:20,
  },
  blueBtn:{
    display:'flex',alignItems:'flex-start',justifyContent:'center',
    backgroundColor:color.COLOR_SECONDARY,borderRadius:50,
    paddingVertical:6,paddingHorizontal:10,maxWidth:120,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 11,

    ...Platform.select({
      ios: {
        shadowOpacity:0.2,
      }
    })
  },
  blueBtnText:{
    fontSize:Typography.FONT_SIZE14,fontFamily:Typography.FONT_POPPINS_SEMIBOLD,
    color:color.COLOR_WHITE,width:'100%',textAlign:'center',
  },
  blueBtnLink:{

  },
  blueBtnLinkText:{
    fontSize:Typography.FONT_SIZE15,fontFamily:Typography.FONT_POPPINS_SEMIBOLD,
    color:color.COLOR_SECONDARY,width:'100%',
  },
  contentBox:{
    paddingHorizontal: 25, 
    paddingVertical: 30,
    borderWidth: 0, 
    borderRadius: 10,
    backgroundColor: color.COLOR_WHITE,
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal:15,
    shadowColor: color.COLOR_SHADOWCOLOR,
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2.62,
    elevation: 3,
    zIndex: 999,
    ...Platform.select({
      ios: {
        shadowOpacity:0.2,
      }
    })
  },
  Pagemargin:{
    
    ...Platform.select({
      ios: {
        marginTop:viewportWidth*0.22,
      }
    })
  },
  contentBoxNoShadow:{
    paddingHorizontal: 0, 
    paddingVertical: 0,
    borderWidth: 0, 
    borderRadius: 10,
    backgroundColor: color.COLOR_WHITE,
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal:15,
    zIndex: 999
  },
  contentImage:{
    width:'100%',
    borderRadius:20,
    marginBottom:20,
    resizeMode:'cover'
  },  
  contentInfo:{

  },
  contentMainTitle:{
    fontSize:Typography.FONT_SIZE25,
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD,
    color:color.COLOR_PRIMARY, marginBottom:15, 
  },
  contentStyle:{
    fontSize:Typography.FONT_SIZE16,
    fontFamily:Typography.FONT_POPPINS_REGULAR,
    color:color.COLOR_GREY, 
    marginBottom:20
  },
  contentSubTitle:{
    fontSize:Typography.FONT_SIZE18,
    fontFamily:Typography.FONT_POPPINS_MEDIUM,
    color:color.COLOR_PRIMARY, marginBottom:15, 
  },

  logoList:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal:0,
    marginHorizontal:-15
  },
  logoItem:{
    width:'45%',
    paddingHorizontal:5,
    paddingVertical:20,
    backgroundColor:color.COLOR_WHITE,
    borderRadius:10, 
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 8,
    display:'flex',
    alignItems:'center',
    marginBottom:10,
    marginHorizontal:5,
    ...Platform.select({
      ios: {
        shadowOpacity:0.2,
      }
    })
  },
  logoImage:{
    resizeMode:'contain',
    height:viewportWidth*0.2,
   
  },
  logoImagemedia:{
    resizeMode:'contain',
    height:viewportWidth*0.3,
    width:viewportWidth*0.3,
  },
  bulletList:{
    position: 'relative',
    width: '100%',
    marginBottom: viewportWidth * 0.005,
    paddingLeft: viewportWidth * 0.045
  },
  bulletImage: {
    width: viewportWidth * 0.025,
    height: viewportWidth * 0.025,
    position: 'absolute', 
    left: 0,
    top: 5,
  },
  bulletListItem:{
    fontSize: Typography.FONT_SIZE15,
    fontFamily: Typography.FONT_POPPINS_REGULAR,
    color:color.COLOR_GREY
  },
  pageTitle:{
    fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, fontSize:Typography.FONT_SIZE30, color:color.COLOR_WHITE,
    marginBottom:viewportWidth*0.07,  
  },

  btn:{
    width:'100%', backgroundColor:color.COLOR_BTNRED, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',
    marginVertical:viewportWidth*0.03, borderRadius:viewportWidth*0.015, paddingVertical:viewportWidth*0.03  },
  btnwhite:{
    backgroundColor:color.COLOR_WHITE,
  },
  btnText:{
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD, textTransform:'uppercase', fontSize:Typography.FONT_SIZE16, color:color.COLOR_WHITE
  },
  btnTextblack:{
    color:color.COLOR_PRIMARY
  },
  btnTextwhite:{
    color:color.COLOR_WHITE, fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, fontSize:viewportWidth*0.04, lineHeight:viewportWidth*0.05
  },
  btnSignup:{
    color:color.COLOR_WHITE,
  },
  btnSignuptextfirst:{color:color.COLOR_WHITE, opacity:0.4, marginRight:viewportWidth*0.02, fontSize:Typography.FONT_SIZE15 , fontFamily:Typography.FONT_POPPINS_SEMIBOLD},
  btnSignuptext:{ color:color.COLOR_WHITE, fontFamily:Typography.FONT_POPPINS_SEMIBOLD, fontSize:Typography.FONT_SIZE15 },
  Titletext:{
    fontFamily:Typography.FONT_POPPINS_BOLD, fontSize:Typography.FONT_SIZE22, color:color.COLOR_SUBTITLE
  },

  TextBoxControl:{
    borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.03,
    fontFamily:Typography.FONT_RALEWAY_REGULAR
  },
  formElements:{
   marginBottom:viewportWidth*0.03
  },
  TextareaControl:{
    borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.03,
    fontFamily:Typography.FONT_RALEWAY_REGULAR, textAlignVertical:'top'
  },
  ImageBack:{
    height:viewportHeight-viewportWidth*0.3,   flex:1,
  },
  LoginImageBack:{
    height:viewportHeight-viewportWidth*0.03,  
  },
  TextBoxRoundCorner:{
    marginBottom: viewportWidth* 0.032, 
    paddingLeft:viewportWidth* 0.08,
    paddingRight:viewportWidth* 0.15,
    paddingTop:viewportWidth* 0.012,
    paddingBottom:viewportWidth* 0.02,
    fontSize: Typography.FONT_SIZE15, 
    fontWeight: Typography.FONT_WEIGHT_NORMAL, 
    fontStyle: Typography.FONT_STYLE_NORMAL,
    fontFamily:Typography.FONT_RALEWAY_MEDIUM,
    height:50, 
    letterSpacing: 0,  
    backgroundColor:color.COLOR_WHITE,
    position:'relative',
    borderRadius:viewportWidth*0.2,
    color:color.COLOR_BLACK,
    borderWidth:1, 
    borderColor:"transparent",
  },
  TextBoxRoundCornerredback:{
    marginBottom: viewportWidth* 0.032, 
    paddingLeft:viewportWidth* 0.08,
    paddingRight:viewportWidth* 0.15,
    paddingTop:viewportWidth* 0.012,
    paddingBottom:viewportWidth* 0.02,
    fontSize: Typography.FONT_SIZE15, 
    fontWeight: Typography.FONT_WEIGHT_NORMAL, 
    fontStyle: Typography.FONT_STYLE_NORMAL,
    fontFamily:Typography.FONT_RALEWAY_MEDIUM,
    height:50, 
    letterSpacing: 0,  
    backgroundColor:'#ffc3c3',
    position:'relative',
    borderRadius:viewportWidth*0.2,
    color:color.COLOR_BLACK,
    borderWidth:1, 
    borderColor:"transparent",
  },
  btnMaronborder:{
    borderWidth:1, borderColor:color.COLOR_PRIMARY, paddingHorizontal:viewportWidth*0.04, display:'flex',
    flexDirection:'row', justifyContent:'center',
    paddingVertical:viewportWidth*0.018, borderRadius:viewportWidth*0.07, marginTop:viewportWidth*0.025
  },
  btnMaronborderWidth:{
    width:viewportWidth*0.48
  },
  DetailbtnMaronborder:{
    borderWidth:1, borderColor:color.COLOR_PRIMARY, paddingHorizontal:viewportWidth*0.02, display:'flex',
    flexDirection:'row', justifyContent:'center',  width:viewportWidth*0.46,
    paddingVertical:viewportWidth*0.015, borderRadius:viewportWidth*0.07, 
  },
  DetailsbtnMaronText:{
    color:color.COLOR_PRIMARY,
    fontFamily:Typography.FONT_RALEWAY_MEDIUM,fontSize:viewportWidth*0.035, lineHeight:viewportWidth*0.040,
  },

  btnMaronText:{color:color.COLOR_PRIMARY,
    fontFamily:Typography.FONT_RALEWAY_MEDIUM,fontSize:viewportWidth*0.035, lineHeight:viewportWidth*0.040,
  },
  statusBox:{
    borderWidth:1, borderRadius:viewportWidth*0.08, paddingHorizontal:viewportWidth*0.032,
    paddingVertical:viewportWidth*0.01
  },
  statusBoxText:{
    fontSize:viewportWidth*0.032
  },
  pendingStatus:{
    borderColor:'#FFE694',
  },
  cancelledStatus:{
    borderColor:'#F6C1C1',
  },
  approvedStatus:{
    borderColor:'#0DBAD5',
  },
  completedStatus:{
    borderColor:'#52D575',
  },
  
});

export default globalStyles;
