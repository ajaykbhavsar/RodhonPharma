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
  ImageBack:{
    height:viewportHeight
  },
  SettingsContainer:{
      borderTopLeftRadius:viewportWidth*0.09,borderTopRightRadius:viewportWidth*0.09,
    paddingVertical:viewportWidth*0.08, paddingHorizontal:viewportWidth*0.05, width:'100%', marginTop:-30, zIndex:2, position:'relative',
    paddingBottom:viewportWidth*0.08
  },
  settingsHeader:{
    paddingVertical:viewportWidth*0.05, paddingHorizontal:viewportWidth*0.05,
     zIndex:1, position:'relative', display:'flex', flexDirection:'row', paddingBottom:viewportWidth*0.14,
    justifyContent:'flex-start', alignItems:'flex-start'
  },
  settingsHeaderText:{
    color:color.COLOR_WHITE, fontSize:Typography.FONT_SIZE20, fontFamily:Typography.FONT_POPPINS_BOLD,
  },
  SettingsContainer:{
      borderTopLeftRadius:viewportWidth*0.09,borderTopRightRadius:viewportWidth*0.09,
    paddingVertical:viewportWidth*0.08, paddingHorizontal:viewportWidth*0.05, width:'100%', marginTop:-30, zIndex:2, position:'relative',
    paddingBottom:viewportWidth*0.08
  },
   
  BtnClose:{
    width:viewportWidth*0.12, height:viewportWidth*0.06,  borderWidth:0, marginTop:-5,
  },
  BtnCloseImage:{
    width:viewportWidth*0.1, height:viewportWidth*0.1
  },
  profilePicBox:{
    display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', width:'100%',
    borderWidth:0
  },
  propicBox:{
    width:viewportWidth*0.35, height:viewportWidth*0.35,  borderRadius:viewportWidth*0.8, overflow:'hidden'
  },
  profilepic:{
    width:viewportWidth*0.35, height:viewportWidth*0.35,  
  },
  profileCntBox:{
    display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',   width:'100%'
  },
  profileName:{
    fontFamily:Typography.FONT_POPPINS_BOLD, fontSize:Typography.FONT_SIZE20, color:color.COLOR_BLACK,
    marginTop:viewportWidth*0.025
  },
  AddressBox:{
    display:'flex', flexDirection:'row', marginTop:viewportWidth*0.02
  },
  locationImage:{
    width:viewportWidth*0.035, height:viewportWidth*0.035, marginRight:viewportWidth*0.01
  },
  AddressBoxText:{
    fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:Typography.FONT_SIZE12, color:color.COLOR_BLACK
  },
  btn:{
    width:'100%',  display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',
     borderRadius:viewportWidth*0.03, paddingVertical:viewportWidth*0.03,   marginTop:viewportWidth*0.03, borderWidth:0 }, 

  btnblue:{
    backgroundColor:'#5271FF', borderWidth:0
  },
  btnlogOut:{
    width:'100%',  display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',
     borderRadius:viewportWidth*0.02, paddingVertical:viewportWidth*0.03,   marginTop:viewportWidth*0.03
  },
  btnwhite:{
    backgroundColor:color.COLOR_WHITE,
  },
  btndarkBlue:{
    backgroundColor:color.COLOR_SUBTITLE,
  },
  btnText:{
    fontFamily:Typography.FONT_POPPINS_SEMIBOLD, textTransform:'uppercase', fontSize:Typography.FONT_SIZE16, color:color.COLOR_WHITE
  },
  titleProfile:{
    color:color.COLOR_SUBTITLE, fontSize:Typography.FONT_SIZE24, fontFamily:Typography.FONT_POPPINS_BOLD, borderBottomColor:'#E0E8F0', borderBottomWidth:1,
    paddingBottom:viewportWidth*0.02, marginBottom:viewportWidth*0.04
  },
  profileData:{
    paddingHorizontal:viewportWidth*0.045, paddingBottom:85
  },
  profileLabel:{
    fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:Typography.FONT_SIZE17, color:color.COLOR_BLACK
  },
  profileDataBox:{
    display:'flex', flexDirection:'row', justifyContent:'space-between',   alignItems:'center',
    borderWidth:0, marginBottom:viewportWidth*0.025
    
  },
  profileValue:{
    fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:Typography.FONT_SIZE14, color:'#1C4D8F', textAlign:'right'
  },
  dividerbox:{
    borderBottomColor:'#E0E8F0', borderBottomWidth:1, width:'100%'
  },
  mtbfour:{
    marginVertical:viewportWidth*0.035
  },
  BtnEdit:{
    display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:"center", paddingVertical:viewportWidth*0.02
  },
  formGroup:{
    marginBottom:viewportWidth*0.05
  },
  labelText:{
    fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:Typography.FONT_SIZE15, color:color.COLOR_BLACK,
  },
  formFields:{
    borderBottomWidth:1, borderBottomColor:'#C8CED4', height:viewportWidth*0.1, paddingBottom:0,
    fontFamily:Typography.FONT_POPPINS_REGULAR, fontSize:Typography.FONT_SIZE17, color:color.COLOR_BLACK, lineHeight:Typography.FONT_SIZE20
  },
  SelectDropdownBox:{
    backgroundColor:'#000000'
  }
 
   

});

export default styles;
