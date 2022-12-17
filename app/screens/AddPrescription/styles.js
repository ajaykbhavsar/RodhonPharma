import { StyleSheet, Dimensions, Platform } from 'react-native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
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
  ImageBack:{
    height:viewportHeight-viewportWidth*0.05,   flex:1,
  },
  appointmentForm:{
    display:'flex', flexDirection:'column', paddingHorizontal:viewportWidth*0.05
  },
  downIcon:{
    width:viewportWidth*0.04, height:viewportWidth*0.04 
  },
  CheckBoxCotainer:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'
  },
  checkBoxText:{
    fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:viewportWidth*0.036
  },
  appointmentBox:{
    borderWidth:1, borderColor:'#E6E8E9', borderRadius:viewportWidth*0.03, padding:viewportWidth*0.04,
    width:'100%',  display:'flex', flexDirection:'column', marginTop:viewportWidth*0.03, backgroundColor:color.COLOR_WHITE,
    
  },
  
  detailBox:{
    borderWidth:1, borderColor:'#DAE4EA', borderRadius:viewportWidth*0.03, padding:viewportWidth*0.03, marginBottom:viewportWidth*0.1,
    position:'relative', zIndex:1, backgroundColor:color.COLOR_WHITE
  },
  medicineTitleBox:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  medicineTitle:{
    fontSize:viewportWidth*0.04, fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  medicineNos:{
    fontSize:viewportWidth*0.03, fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  medicineTimining:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  medicineTiminingBox:{
    marginTop:viewportWidth*0.02, width:'46%'
  },
  medicineTime:{
    fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_POPPINS_MEDIUM, color:'#6B6B6B'
  },
  medicineTimeTwoBox:{
    display:'flex', flexDirection:'row', justifyContent:'space-between'
  },
  medicineTimeNos:{
    fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_POPPINS_REGULAR, color:'#6B6B6B', marginRight:viewportWidth*0.05
  },
  medicineTimeMeal:{
    fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_POPPINS_REGULAR, color:'#6B6B6B'
  },
  MedicineBox:{
    width:'77%', paddingVertical:0, margin:0,fontFamily:Typography.FONT_RALEWAY_REGULAR,
  },
  TextBoxStyle:{
    borderWidth:1, borderColor:'#C8CED4', height:viewportWidth*0.11,  borderRadius:viewportWidth*0.015,
    paddingVertical:0, paddingHorizontal:viewportWidth*0.02,fontSize:Typography.FONT_SIZE17, 
    marginRight:viewportWidth*0.012

  },
  btnAddmorePreImage:{
    width:viewportWidth*0.1, height:viewportWidth*0.1, marginBottom:viewportWidth*0.05
  },
   
  btnBoxAreas:{
    display:'flex', flexDirection:'row', justifyContent:'flex-end', borderWidth:0, width:'100%'
  },
  deleteBtn:{
    position:'absolute', top:-20, right:-10, zIndex:9999,
  },
  deleteBtnImage:{
    width:viewportWidth*0.08, height:viewportWidth*0.08
  },
  TextareaBox:{
    borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,
    paddingVertical:0, paddingHorizontal:viewportWidth*0.02,fontSize:Typography.FONT_SIZE17, 
    marginRight:viewportWidth*0.012
  }
 
 


 
 
  
});

export default styles;
