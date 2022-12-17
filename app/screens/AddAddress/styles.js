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
  DetailpageContainer:{
    padding:viewportWidth*0.04
  },
  drProfiletext:{ fontSize:viewportWidth*0.03, color:color.COLOR_GREY},
  modaldrProfiletext:{ fontSize:viewportWidth*0.035, color:color.COLOR_GREY, marginBottom:viewportWidth*0.03},
  ButtonArea:{
    backgroundColor:color.COLOR_WHITE, borderRadius:viewportWidth*0.05,borderWidth:0, marginTop:-10,
    paddingVertical:viewportWidth*0.04, display:'flex', flexDirection:'row', justifyContent:'space-between'
  },
  btn:{width:'48%',  display:'flex', flexDirection:'row', justifyContent:'center', paddingVertical:viewportWidth*0.04,
   alignItems:'center', borderRadius:viewportWidth*0},
  btnConsult:{backgroundColor:color.COLOR_REDBTN, borderWidth:1, borderColor:color.COLOR_BTNBORDER, width:'100%'},
  btnText:{fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, color:color.COLOR_WHITE, fontSize:viewportWidth*0.04, lineHeight:viewportWidth*0.04},
  btnMedicine:{backgroundColor:color.COLOR_PRIMARY, borderColor:color.COLOR_BTNDARBRDR },
  SubTitle:{fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, marginBottom:viewportWidth*0.05, fontSize:viewportWidth*0.055, color:color.COLOR_SUBTTLCOLOR, marginTop:viewportWidth*0.05},
  iconImage:{width:viewportWidth*0.15, height:viewportWidth*0.15},
  servicesBoxMain:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap',
    marginBottom:viewportWidth*0.05
  },
 
 
  ImageBack:{
    height:viewportHeight-viewportWidth*0.05,   flex:1,
  },
  TextBoxArea:{
    borderWidth:1, borderColor:'#E2E2E2', paddingHorizontal:viewportWidth*0.04, borderRadius:viewportWidth*0.01, color:'#333333',
    backgroundColor:'#ffffff'
  },
  TextBoxontainer:{
    marginBottom:viewportWidth*0.03
  }
   
 
 
 
 
  
});

export default styles;
