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
  mainCcnt:{
    flex:1
  },
  containerPadding:{
    paddingHorizontal:viewportWidth*0.06, flex: 1,
  },
  Homebanner:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',
     
  },
  bannerImage:{
    width:viewportWidth*0.5, height:viewportWidth*0.5
  },
  ModalbannerImage:{
    width:viewportWidth*0.42, height:viewportWidth*0.42, marginBottom:viewportWidth*0.03
  },
  bannerText:{
    width:viewportWidth*0.5, borderWidth:0,
  },
  bannerImageBox:{
    width:viewportWidth*0.55,borderWidth:0, marginRight:viewportWidth*0.03
  },
  DrName:{
    fontFamily:Typography.FONT_RALEWAY_EXTRABOLD,  color:color.COLOR_PRIMARY, fontSize:viewportWidth*0.056,
 
  },
  desigNation:{
    color:color.COLOR_GREY, fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, fontSize:viewportWidth*0.03,    marginBottom:viewportWidth*0.025
  },
  drProfiletext:{ fontSize:viewportWidth*0.03, color:color.COLOR_GREY},
  modaldrProfiletext:{ fontSize:viewportWidth*0.035, color:color.COLOR_GREY, marginBottom:viewportWidth*0.03},
  ButtonArea:{
    backgroundColor:color.COLOR_WHITE, borderRadius:viewportWidth*0.05,borderWidth:0, marginTop:-10,
    paddingVertical:viewportWidth*0.04, display:'flex', flexDirection:'row', justifyContent:'space-between'
  },
  btn:{width:'48%',  display:'flex', flexDirection:'row', justifyContent:'center', paddingVertical:viewportWidth*0.025,
   alignItems:'center', borderRadius:viewportWidth*0.02},
  btnConsult:{backgroundColor:color.COLOR_REDBTN, borderWidth:1, borderColor:color.COLOR_BTNBORDER},
  btnText:{fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, color:color.COLOR_WHITE, fontSize:viewportWidth*0.04, lineHeight:viewportWidth*0.04},
  btnMedicine:{backgroundColor:color.COLOR_PRIMARY, borderColor:color.COLOR_BTNDARBRDR },
  SubTitle:{fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, marginBottom:viewportWidth*0.05, fontSize:viewportWidth*0.055, color:color.COLOR_SUBTTLCOLOR, marginTop:viewportWidth*0.05},
  iconImage:{width:viewportWidth*0.15, height:viewportWidth*0.15},
  servicesBoxMain:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap',
    marginBottom:viewportWidth*0.05
  },
  serviceBox:{
    borderWidth:1, borderColor:'#FFD2D2', width:'31%', borderRadius:viewportWidth*0.03, display:'flex', flexDirection:'column',
    justifyContent:'center', alignItems:'center', padding:viewportWidth*0.015, marginBottom:viewportWidth*0.03, backgroundColor:color.COLOR_WHITE,
    height:viewportWidth*0.32,
    shadowColor: "#F05E5E",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,

    ...Platform.select({
      ios: {
        shadowOpacity:0.2,
      }
    })
  },
  serviceText:{
    fontSize:viewportWidth*0.030, fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, color:color.COLOR_PRIMARY, marginTop:viewportWidth*0.015,
    marginBottom:viewportWidth*0.01, width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',
    borderWidth:0, textAlign:'center'
  },
  ImageBack:{
    height:viewportHeight-viewportWidth*0.05,   flex:1,
  },
  ModayBody:{
    backgroundColor:color.COLOR_WHITE, flex:1, padding:viewportWidth*0.06
  },
  CloseBtnImage:{
    width:viewportWidth*0.04, height:viewportWidth*0.04
  },
  btnClose:{
    position:'absolute', right:0, top:0, padding:viewportWidth*0.05, zIndex:999, borderWidth:0
  },
  ReadMore:{
   paddingVertical:viewportWidth*0.03
  },
  ReadMoreText:{
    fontSize:viewportWidth*0.032
  }
  
});

export default styles;
