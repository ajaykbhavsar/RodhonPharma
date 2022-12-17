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
 
  dateandtime:{
    width:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start'
  },
  dateBox:{
    width:'48%', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'
  },
  datettl:{marginRight:viewportWidth*0.02,
    fontSize:viewportWidth*0.035,color:'#6B6B6B', fontFamily:Typography.FONT_POPPINS_SEMIBOLD
  },
  dateformate:{
    fontSize:viewportWidth*0.035, color:'#6B6B6B',fontFamily:Typography.FONT_POPPINS_REGULAR
  },
  doctorPic:{
    width:viewportWidth*0.2, height:viewportWidth*0.2, marginRight:viewportWidth*0.04
  },
  doctorNameBox:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'
  },
  DoctorImagebox:{
    width:'30%', borderWidth:0,
  },
  DoctorTextDetails:{
    borderWidth:0, width:'70%'
  },
  DegreeText:{color:'#989898'},
  
  subTitle:{
    marginBottom:viewportWidth*0.02
  },
  subTitleText:{
    color:'#3A3A3A', fontSize:viewportWidth*0.048, fontFamily:Typography.FONT_RALEWAY_MEDIUM
  },
  martopten:{
    marginTop:viewportWidth*0.02
  },
  symptomsText:{
    color:'#3a3a3a', fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:viewportWidth*0.04, 
  },
  marginTopFive:{
    marginTop:viewportWidth*0.03
  },
  detailButtonBox:{
    marginTop:viewportWidth*0.03, display:'flex', flexDirection:'row', justifyContent:'flex-start',
    alignItems:'center', marginTop:viewportWidth*0.08, flexWrap:'wrap'
  },
  btnCallNow:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',
    width:viewportWidth*0.33, borderRadius:viewportWidth*0.06, marginLeft:viewportWidth*0.02,
    marginBottom:viewportWidth*0.03
  },
  btnCallNowOrange:{
    backgroundColor:'#E09137', borderWidth:1, borderColor:'#DC7E12',
    paddingVertical:viewportWidth*0.015, paddingHorizontal:viewportWidth*0.03,
  },
  btnCallNowgreen:{
    backgroundColor:'#45BB09', borderWidth:1, borderColor:'#45BB09',
    paddingVertical:viewportWidth*0.015, paddingHorizontal:viewportWidth*0.03,
  },
  btnCallNowText:{
    color:color.COLOR_WHITE, fontFamily:Typography.FONT_RALEWAY_MEDIUM,
    fontSize:viewportWidth*0.04, lineHeight:viewportWidth*0.045,
  },
  btnCallImage:{
    width:viewportWidth*0.05, height:viewportWidth*0.05
  },
  presciptionBox:{
    backgroundColor:'#DCFAE4', borderWidth:1, borderColor:'#E6E6E6', borderRadius:viewportWidth*0.025,
    padding:viewportWidth*0.04, display:'flex', flexDirection:'row', justifyContent:'space-between',
    marginTop:viewportWidth*0.03, marginBottom:viewportWidth*0.03
  },
  symptomsTextDownooad:{
    fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_RALEWAY_REGULAR
  },
  btnDownload:{
    backgroundColor:'#5DBB76',  display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',
    paddingHorizontal:viewportWidth*0.03, paddingVertical:viewportWidth*0.015,
    borderRadius:viewportWidth*0.01
  },
  btnDownloadText:{
    fontSize:viewportWidth*0.035, fontFamily:Typography.FONT_RALEWAY_MEDIUM, color:color.COLOR_WHITE,
    lineHeight:viewportWidth*0.04
  }


 
 
  
});

export default styles;
