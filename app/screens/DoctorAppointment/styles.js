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
    width:'100%',  display:'flex', flexDirection:'column', marginTop:viewportWidth*0.03, backgroundColor:color.COLOR_WHITE
  },
  
  titleText:{
    color:'#565656', fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, fontSize:viewportWidth*0.05,
    lineHeight:viewportWidth*0.05, marginBottom:viewportWidth*0.02
  },
  apptdetailBox:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center',
      borderWidth:0,
  },
  apptdetail:{
    width:'100%'
  },
 
  dateandtime:{
    width:'75%', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start'
  },
  dateBox:{
    width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'
  },
  datettl:{marginRight:viewportWidth*0.02,
    fontSize:viewportWidth*0.035,color:'#6B6B6B', fontFamily:Typography.FONT_POPPINS_SEMIBOLD
  },
  dateformate:{
    fontSize:viewportWidth*0.035, color:'#6B6B6B',fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  tabMenuBox:{
    width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',
    paddingHorizontal:viewportWidth*0.03, borderBottomWidth:1, borderBottomColor:'#E6E6E6'
  },
  btntabMenuBox:{
    padding:viewportWidth*0.03, 
  },
  btntabMenuBoxActive:{
    borderBottomWidth:2, borderBottomColor:'#800000',  padding:viewportWidth*0.03,paddingVertical:viewportWidth*0.03
  },
  btntabMenuBoxText:{
    fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, color:'#838383', fontSize:viewportHeight*0.022
  },
  btntabMenuBoxTextActive:{
    fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, color:'#800000', fontSize:viewportHeight*0.022
  }

 
 
  
});

export default styles;
