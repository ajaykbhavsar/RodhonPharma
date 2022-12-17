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
  Cartbox:{
    borderWidth:1, borderColor:'#E0E0E0', borderRadius:viewportWidth*0.02, position:'relative',
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start', padding:viewportWidth*0.03,
    marginBottom:viewportWidth*0.04
  },
  btnClosecart:{
    position:'absolute', right:-10, top:-10, zIndex:999
  },
  btnClosecartImage:{
    width:viewportWidth*0.075, height:viewportWidth*0.075
  },
  cartImageBox:{
    display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start',
    marginRight:viewportWidth*0.03, borderWidth:0
  },
  cartImage:{
    width:viewportWidth*0.2,  height:viewportWidth*0.2
  },
  productDesc:{
    width:'55%',  marginRight:viewportWidth*0.03, 
  },
  titleTwo:{
    color:'#5D5D5D', fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, fontSize:viewportWidth*0.04,
    marginBottom:viewportWidth*0.02
  },
  ParaText:{
    color:'#5D5D5D', fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:viewportWidth*0.035
  },
  cartPrice:{
    color:'#A30000', fontFamily:Typography.FONT_POPPINS_SEMIBOLD
  },
  qtyCartbox:{
   display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start'
  },
  qtyCartTextbox:{
    borderWidth:1, borderColor:'#D8D8D8', fontSize:viewportWidth*0.04, textAlign:'center', fontFamily:Typography.FONT_POPPINS_REGULAR, 
    lineHeight:viewportWidth*0.06, width:viewportWidth*0.1, paddingTop:0, marginTop:viewportWidth*0.02
  },
  CartBottompage:{
    backgroundColor:'#800000',  padding:viewportWidth*0.04, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  bottomPriceBox:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start'
  },
  bottomPriceBoxTitle:{
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD, color:'#ffffff', fontSize:viewportWidth*0.045, marginRight:viewportWidth*0.03
  },
  bottomPriceBoxPrice:{
    fontFamily:Typography.FONT_POPPINS_MEDIUM, color:'#ffffff', fontSize:viewportWidth*0.045
  },
  btnContinue:{
    backgroundColor:'#F9CACA',  width:viewportWidth*0.3, paddingVertical:viewportWidth*0.025
  },
  btnContinueText:{
    fontFamily:Typography.FONT_POPPINS_MEDIUM, fontSize:viewportWidth*0.04
  }
   
 
 
 
 
  
});

export default styles;
