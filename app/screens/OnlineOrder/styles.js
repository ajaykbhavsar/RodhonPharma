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
 
 
  ReadMore:{
   paddingVertical:viewportWidth*0.03
  },
  ReadMoreText:{
    fontSize:viewportWidth*0.032
  },
  topSearchBox:{
    fontFamily:Typography.FONT_RALEWAY_MEDIUM,paddingLeft:viewportWidth*0.036,
    width:'85%', borderWidth:0, fontSize:viewportWidth*0.04
  },
  SearchmainAreaBox:{
    backgroundColor:'#860D0D', padding:viewportWidth*0.035, position:'relative', zIndex:99,
   display:'flex', flexDirection:'row', justifyContent:'center', paddingTop:viewportWidth*0.06,
    borderWidth:0, height:58
  },
  SearchAreaBox:{
    backgroundColor:color.COLOR_WHITE, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  SearchIcon:{
    width:viewportWidth*0.06, height:viewportWidth*0.06, marginRight:viewportWidth*0.035
  },
  productListMain:{
    position:'relative', padding:viewportWidth*0.035, display:'flex', 
    flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start',
    flexWrap:'wrap', flex:1
  },
  productListBox:{
    position:'relative', width:'48%', display:'flex', flexDirection:'column', justifyContent:'center',
    borderWidth:1, borderColor:'#DFDFDF', padding:viewportWidth*0.03, marginBottom:viewportWidth*0.038,
    backgroundColor:'#ffffff'
  
  },
  btnAddcart:{
    position:'absolute', right:viewportWidth*0.015, top:viewportWidth*0.015, zIndex:9999
  },
  addcartImage:{
    width:viewportWidth*0.08, height:viewportWidth*0.08
  },
  productImageBox:{
    width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'
  },
  productImage:{
    width:viewportWidth*0.3, height:viewportWidth*0.3
  },
  medicineNameBox:{
    marginTop:viewportWidth*0.027, borderWidth:0, minHeight:viewportWidth*0.13
  },
  medicineName:{
    color:'#4F4F4F', fontFamily:Typography.FONT_POPPINS_MEDIUM, fontSize:viewportWidth*0.032
  },
  priceText:{
    color:'#8C0000', fontFamily:Typography.FONT_POPPINS_MEDIUM, fontSize:viewportWidth*0.033
  },
  mktText:{
    color:'#A8A8A8', fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:viewportWidth*0.025
  },
  autocompleteContainer: {
    flex: 1,
    left: viewportWidth*0.03,
    position: 'absolute',
    right: 0, width:'100%',
    top:viewportWidth*0.02,
    zIndex: 1
  }
  
});

export default styles;
