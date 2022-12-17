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
  appointmentBox:{flex:1,
    borderWidth:1, borderColor:'#E6E8E9', borderRadius:viewportWidth*0.03, padding:viewportWidth*0.04,
    width:'100%',  display:'flex', flexDirection:'column', marginTop:viewportWidth*0.03, backgroundColor:color.COLOR_WHITE,
    
  },
  
  titleText:{
    color:'#565656', fontFamily:Typography.FONT_RALEWAY_SEMIBOLD, fontSize:viewportWidth*0.045,
    lineHeight:viewportWidth*0.05, marginBottom:viewportWidth*0.02,
    borderBottomWidth:1, borderBottomColor:'#ECECEC', width:'100%',
    paddingBottom:viewportWidth*0.02
  },
  apptdetailBox:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center',
      borderWidth:0,
  },
  apptdetail:{
    width:'100%'
  }, 
  martopten:{
    marginTop:viewportWidth*0.02
  },
  
  marginTopFive:{
    marginTop:viewportWidth*0.03
  },
  ChatTextBox:{
    paddingHorizontal:viewportWidth*0.033, paddingVertical:viewportWidth*0.033, borderRadius:viewportWidth*0.02,
    width:'90%', marginBottom:viewportWidth*0.03, 
  },
  PinkBox:{
    backgroundColor:'#FFE8E8'
  },
  GrayBox:{
    backgroundColor:'#F7F7F7',  display:'flex', alignSelf:'flex-end'
  },
  ChatTextBoxText:{
    fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_RALEWAY_REGULAR
  },
  grayChatTextBoxText:{
    fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_RALEWAY_REGULAR, 
    display:'flex', flexDirection:'row', justifyContent:'flex-end'
  },
  chatTueICon:{
    width:viewportWidth*0.04, height:viewportWidth*0.04, display:'flex', flexDirection:'row', justifyContent:'flex-start', alignSelf:'flex-end'
  },
  ChatTextBoxarea:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',
    paddingHorizontal:viewportWidth*0.05, marginBottom:viewportWidth*0.05, 
  },
  AttachmentTextIcon:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', position:'relative',
    backgroundColor:'#F8F8F8', borderWidth:1, borderColor:'#E6E6E6', borderRadius:viewportWidth*0.03, width:'82%'
  },
  attachmentBox:{
     
  },
  iconAttachments:{
    width:viewportWidth*0.06, height:viewportWidth*0.07, marginRight:viewportWidth*0.03
  },
  iconCamera:{
    width:viewportWidth*0.06, height:viewportWidth*0.07
  },
  iconSend:{
    width:viewportWidth*0.09, height:viewportWidth*0.09
  },
  ChatText:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start', fontFamily:Typography.FONT_RALEWAY_REGULAR,
    fontSize:viewportWidth*0.04, textAlignVertical:'top', width:'70%', borderWidth:0, height:viewportWidth*0.12
  },
  SendbtnBox:{
    backgroundColor:color.COLOR_PRIMARY, display:'flex', flexDirection:'row', justifyContent:'center',
    alignItems:'center', padding:viewportWidth*0.015, borderRadius:viewportWidth*0.02,  
  },
  ChatDate:{
    fontSize:viewportWidth*0.026, width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-end',
    borderWidth:0, alignItems:'flex-end', textAlign:'right', fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  btnAddPrescription:{
    backgroundColor:'#5DBB76', marginHorizontal:viewportWidth*0.045, paddingVertical:viewportWidth*0.03,
    borderRadius:viewportWidth*0.02, marginVertical:viewportWidth*0.03
  },
  btnAddPrescriptionText:{
    color:color.COLOR_WHITE, width:'100%', textAlign:'center', fontFamily:Typography.FONT_POPPINS_MEDIUM
  }
 


 
 
  
});

export default styles;
