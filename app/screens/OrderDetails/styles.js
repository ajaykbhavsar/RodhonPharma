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
 
 
  ImageBack:{
    height:viewportHeight-viewportWidth*0.05,   flex:1,
  },
  DescriptionBox:{
    borderWidth:1, borderColor:'#EEEEEE', borderRadius:viewportWidth*0.05, padding:viewportWidth*0.04
  },
  detailtitleBox:{
    marginBottom:viewportWidth*0.023
  },
  detailtitleText:{
    color:'#272727', fontFamily:Typography.FONT_POPPINS_MEDIUM,  fontSize:viewportWidth*0.06, lineHeight:viewportWidth*0.075
  },
  DetailpageContainer:{
    padding:viewportWidth*0.04
  },
  BoxTop:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  BoxTopTablet:{
    backgroundColor:'#F7F7F7', borderWidth:1, borderColor:'#e7e7e7', paddingVertical:viewportWidth*0.012,
    paddingHorizontal:viewportWidth*0.018, borderRadius:viewportWidth*0.012,  
  },
  BoxTopTabletText:{
    fontSize:viewportWidth*0.03, fontFamily:Typography.FONT_POPPINS_REGULAR, color:'#888888'
  },
  InstockBox:{
    marginTop:viewportWidth*0.02
  },
  InstockBoxText:{
    color:'#0BAC00',fontSize:viewportWidth*0.03, fontFamily:Typography.FONT_POPPINS_REGULAR,
  },
  DetailimageBox:{
    display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', paddingVertical:viewportWidth*0.036
  },
  detailPriceBox:{
    display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center',
  },
  detailPrice:{
    color:'#A30000', fontFamily:Typography.FONT_POPPINS_MEDIUM, fontSize:viewportWidth*0.045
  },
  QtymainBox:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',
    marginTop:viewportWidth*0.02, marginBottom:viewportWidth*0.028
  },
  qtyBoxview:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center',
    width:'48%'
  },
  qtyTextBox:{
    borderWidth:1, borderColor:'#e7e7e7', fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_POPPINS_MEDIUM,
    paddingHorizontal:viewportWidth*0.015, marginLeft:viewportWidth*0.02,   paddingVertical:viewportWidth*0.01, width:viewportWidth*0.2,
    borderRadius:viewportWidth*0.01, textAlign:'center'
  },
  DetailAddtoCart:{
    backgroundColor:'#B90808', borderWidth:0, 
  },
  TextBtnCart:{
    color:color.COLOR_WHITE, fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, textTransform:'uppercase'
  },
  titleTwo:{
    color:'#5D5D5D', fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, fontSize:viewportWidth*0.04,
    marginBottom:viewportWidth*0.02
  },
  ParaText:{
    color:'#5D5D5D', fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:viewportWidth*0.035
  }
 
 
 
 
  
});

export default styles;
