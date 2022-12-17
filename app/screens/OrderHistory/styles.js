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
  OrderNodate:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',
    backgroundColor:'#FAFAFA', paddingVertical:viewportWidth*0.03, paddingHorizontal:viewportWidth*0.035,
    marginBottom:viewportWidth*0.035, borderWidth:1, borderColor:'#E6E8E9', borderRadius:viewportWidth*0.02
  },
  pagelabel:{
    color:'#858585', fontSize:viewportWidth*0.03, fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  valueBox:{
    color:'#333333', fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  fnt5:{
    fontSize:viewportWidth*0.03
  },
  whiteBox:{
    paddingVertical:viewportWidth*0.035
  },
  valueFont:{
    fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:viewportWidth*0.035, lineHeight:viewportWidth*0.04
  },
  timevalue:{
    color:'#858585', fontSize:viewportWidth*0.028, fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  dividerGray:{
    height:1, borderBottomWidth:1, borderBottomColor:'#E8E8E8', width:'100%'
  },
  
  btnContinue:{
    backgroundColor:'#F9CACA',  width:viewportWidth*0.3, paddingVertical:viewportWidth*0.025
  },
  btnContinueText:{
    fontFamily:Typography.FONT_POPPINS_MEDIUM, fontSize:viewportWidth*0.04
  },
  smallText:{
    color:'#858585', fontSize:viewportWidth*0.032, fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  DateText:{
    color:'#464646', fontFamily:Typography.FONT_POPPINS_MEDIUM, fontSize:viewportWidth*0.04
  },
  textBoxArea:{
    position:'relative', paddingBottom:viewportWidth*0.04, borderBottomColor:'#E8E8E8', borderBottomWidth:1,
    marginBottom:viewportWidth*0.03
  },
  btnChange:{
    position:'absolute', right:0, top:0, backgroundColor:'#F9CACA', borderWidth:1, borderColor:'#800000',
    paddingHorizontal:viewportWidth*0.03, paddingVertical:viewportWidth*0.01, borderRadius:viewportWidth*0.01, zIndex:9999,
  },
  btnChangeText:{
    color:'#800000', fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:viewportWidth*0.03
  },
  textAreaBox:{
    borderColor:'#E8E8E8', borderRadius:viewportWidth*0.025, width:'100%', borderWidth:1
  },
  borderZero:{
    borderBottomWidth:0,
  },
  marTopfive:{
    marginTop:viewportWidth*0.03
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
    color:'#5D5D5D', fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:viewportWidth*0.03, lineHeight:viewportWidth*0.035,
  },
  cartPrice:{
    color:'#A30000', fontFamily:Typography.FONT_POPPINS_SEMIBOLD
  },
  qtyCartbox:{
   display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start'
  },
  qtyCartTextbox:{
    borderWidth:0, borderColor:'#D8D8D8', fontSize:viewportWidth*0.035, textAlign:'center', fontFamily:Typography.FONT_POPPINS_REGULAR, 
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
  },
  TotalpriceBox:{
    display:'flex', flexDirection:'row', justifyContent:'flex-end'
  },
  Totallabel:{
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD, fontSize:viewportWidth*0.04
  },
  totalePrice:{
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD, color:'#6C6C6C',fontSize:viewportWidth*0.04
  }

   
 
 
 
 
  
});

export default styles;
