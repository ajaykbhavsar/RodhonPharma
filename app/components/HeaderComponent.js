import React , { Component }from "react";
import { StyleSheet, Text, View, TouchableOpacity, StatusBar ,Dimensions,Platform,Image ,Animated, Alert} from "react-native";
import { Header,  Icon } from 'native-base';
import * as navigationActions from 'app/actions/navigationActions';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiConstants from '../api/ApiConstants';
import { fetch } from 'app/api/methods/callapi'


import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';

const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');


import Styles from "../config/styles";
import { ScrollView } from "react-navigation";
const { color,Typography} = Styles;
let cartCount = 0;
class HeaderComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: true,
      isModalVisible:false,
      isModalfilterVisible:false,
      user_name: '',
      user_role: ''
    };
  }

  async componentDidMount() {
    //this.getCartCount();
  }
  getCartCount = async ()=>{
    let count = await this._retrieveData("cartCount"); 
    console.log("cart count "+count);
    if(count != "undefined"){
      return count;
    };  
    return 0;
  }

  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      }
    } catch (error) {
    }
  };

  async toggleModal() {  
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  closeModal=()=>{
    this.setState({ isModalVisible: false });
  }

  toggleModalfilter() {
    // this.setState({FilterDropdwn:''});
     this.setState({ isModalfilterVisible: !this.state.isModalfilterVisible });
   }
   
  navigateToLogin = () =>{
    this._storeData("login_token","")
    this._storeData("loginuser","");
    this._storeData("password","");
    this._storeData("user_name","");
    this._storeData("user_role","");
    navigationActions.navigateToLogin();
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  navigateToDashboard = () =>{
    navigationActions.navigateToDashboard();
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  navigateToOrderHistory = () =>{
    navigationActions.navigateToOrderHistory();
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  navigateToSetting = () =>{
    navigationActions.navigateToSetting();
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  
  //====== alert popup on logout press=========//
  logoutButtonClicked = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out of your account?",
      [
        { text: "Cancel", style:'cancel'},
        { text: "Log Out", onPress: () => {this.navigateToLogin();} ,style:'cancel'}
      ],
      { cancelable: false }
    );
  };
//===============================//

_storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return value;
  } catch (error) {
    // Error saving data
    return null;
  }
};

navigateToProfile=()=>{
  navigationActions.navigateToProfile();
  this.setState({ isModalVisible: !this.state.isModalVisible });
}

navigateToOnlineOrder=()=>{
  navigationActions.navigateToOnlineOrder();
  this.setState({ isModalVisible: !this.state.isModalVisible });
}

navigateToBookAppointment=()=>{
  navigationActions.navigateToBookAppointment();
  //this.setState({ isModalVisible: !this.state.isModalVisible });
}

navigateToChangePassword=()=>{
  navigationActions.navigateToChangePassword();
  this.setState({ isModalVisible: !this.state.isModalVisible });
}

navigateToMyAppointment=()=>{
  navigationActions.navigateToMyAppointment();
  this.setState({ isModalVisible: !this.state.isModalVisible });
}

navigateToDoctorAppointment=()=>{ 
  navigationActions.navigateToDoctorAppointment();
  this.setState({ isModalVisible: !this.state.isModalVisible });
}
navigateToCartPage = ()=>{
  navigationActions.navigateToCartPage();
}



  render(){
    const props = this.props;
    const {       
      back=false,     
      sidemenu=false,
      addmenu=false,    
      addCart=false
    } = props; 
    const { headerStyle, 
      backStyle,addmenustyle
      } = styles;
      const onClose = () => {
          props.navigation.goBack();
      }
     
    return (
      <View>
        <Modal animationIn={"slideInLeft"} animationOut={"slideOutLeft"} 
        isVisible={this.state.isModalVisible} style={styles.modalStyle}
        onBackdropPress={() => this.closeModal()}
        onBackButtonPress={() => this.closeModal()}>
          <View style={styles.menuContent}>
            <TouchableOpacity style={styles.closeIcon} onPress={() => { this.toggleModal()}}>
                <Image source={require('../assets/images/icon_white.png')}  resizeMode="contain" style={styles.btnClose}/>
            </TouchableOpacity>
            <View style={styles.menuList}>
                <TouchableOpacity  style={styles.menuLink} onPress={()=>this.navigateToProfile()}>
                  <Image source={require('../assets/images/icon_profile.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>My Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink} onPress={()=>this.navigateToMyAppointment()}>
                  <Image source={require('../assets/images/icon_appointment.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink} onPress={()=>this.navigateToDoctorAppointment()}>
                  <Image source={require('../assets/images/icon_appointment.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>Doctor Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink} onPress={()=>this.navigateToOnlineOrder()}>
                  <Image source={require('../assets/images/icon_ordermedicine.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>Order Medicine</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink}>
                  <Image source={require('../assets/images/icon_consulation.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>Add Consulation</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink}>
                  <Image source={require('../assets/images/icon_manageaddress.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>Manage Address</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink}>
                  <Image source={require('../assets/images/icon_uploadprescription.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>Upload Prescription</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink} onPress={()=>this.navigateToOrderHistory()}>
                  <Image source={require('../assets/images/icon_myorders.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink}  onPress={()=>this.navigateToChangePassword()}>
                  <Image source={require('../assets/images/icon_changepass.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.menuLink} onPress={()=>this.logoutButtonClicked()}>
                  <Image source={require('../assets/images/icon_logout.png')}  resizeMode="contain" style={styles.iconLinkmenu}/>
                  <Text  style={styles.menuLinkText}>Logout</Text>
                </TouchableOpacity>
            </View>            
            </View>
        </Modal>
        <Header style={headerStyle}>
        <StatusBar
          barStyle="light-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="#092868"
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
        <View style={styles.HeaderMainbox}>          
            {back === true &&
              <TouchableOpacity style={backStyle} onPress={() => { onClose() }}>
                <Image source={require('../assets/images/back.png')} resizeMode="contain" style={styles.backArrow}/>
              </TouchableOpacity>
            }
            {sidemenu === true &&
              <TouchableOpacity style={backStyle} onPress={() => { this.toggleModal()}}>
                <Image source={require('../assets/images/hamburger.png')}  style={styles.menuIcon}/>
              </TouchableOpacity>
            }
            {addmenu === true &&
              <TouchableOpacity style={addmenustyle} onPress={() => { this.navigateToBookAppointment()}}>
                <Image source={require('../assets/images/add.png')}  style={styles.addBtnIcon}/>
              </TouchableOpacity>
            }

            {addCart === true &&
              <TouchableOpacity style={addmenustyle} onPress={() => { this.navigateToCartPage()}}>
                <Text style={styles.badgeIcon}>{()=>this.getCartCount()}</Text>
                <Image source={require('../assets/images/icon_carttop.png')}  style={styles.addBtnIcon}/>
              </TouchableOpacity>
            }


            <Text style={styles.textStyle}>{props.title}</Text>
         </View>
      </Header>
     </View>
    );
  }
}

//const majorVersionIOS = parseInt(Platform.Version , 13 );
const styles = StyleSheet.create({
  backArrow:{
    width:viewportWidth*0.07, height:viewportWidth*0.07
  },
  HeaderMainbox:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center',
     width:viewportWidth, borderWidth:0,
  },
  menuList:{
    paddingHorizontal:viewportWidth*0.04, marginTop:viewportWidth*0.07
  },
  addmenustyle:{
    position:'absolute', right:viewportWidth*0.06,
  },
  addBtnIcon:{width:viewportWidth*0.06, height:viewportWidth*0.06},
  menuLink:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center',
    borderBottomWidth:1, paddingVertical:viewportWidth*0.028, borderBottomColor:'#702E2E'
  },
  menuLinkText:{
    color:color.COLOR_WHITE, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:viewportWidth*0.04,
    opacity:0.8
  },
  iconLinkmenu:{
    width:viewportWidth*0.07, height:viewportWidth*0.07, marginRight:viewportWidth*0.02
  },
  headerStyle: {
    backgroundColor: color.COLOR_BLUE,
    height: Platform.OS === 'ios' ?  viewportHeight* 0.11 : viewportHeight* 0.09,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderWidth:0,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    overflow:'visible',
    borderBottomWidth:0,
    position:"relative"
  },
  menuIcon:{
    width:viewportWidth*0.08, height:viewportWidth*0.08
  },
  btnClose:{
    width:viewportWidth*0.05, height:viewportWidth*0.05, marginTop:viewportWidth*0.02
  },
  textStyle: {
    color:'#800000',
    fontSize:Typography.FONT_SIZE25,
    justifyContent:"center",   
    alignContent:"flex-start",
    textAlign:'left', borderWidth:0,
    fontFamily:Typography.FONT_RALEWAY_SEMIBOLD,
    
  },

  textStyleOne: {
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE18,
    paddingHorizontal:viewportWidth* 0.04,
    justifyContent:"center",   
    alignContent:"center",
    textAlign:'center',
    fontFamily:Typography.FONT_MEDIUM,
  },
  titleStyle:{
    fontSize:Typography.FONT_SIZE10,
    fontFamily:Typography.FONT_REGULAR,
    color: color.COLOR_WHITE,
    paddingTop:viewportWidth*0.006,
    paddingBottom:viewportWidth*0.03,
  },
  titleStyleOne:{
    fontSize:Typography.FONT_SIZE10,
    fontFamily:Typography.FONT_REGULAR,
    color: color.COLOR_WHITE,
    paddingBottom:viewportWidth*0.01,
  },
  SmalltitleText: {
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE28,
    paddingTop:Platform.OS === 'ios' ? viewportHeight* 0.033 : viewportHeight* 0.025,
    paddingBottom:Platform.OS === 'ios' ? 0 : viewportHeight* 0.01,
    paddingHorizontal:viewportWidth* 0.015,
    borderWidth:0,  
    display:"flex",
    justifyContent:"flex-start",
    flexDirection:"row",
    alignItems:"flex-start",
    alignSelf:"flex-start",
    width:"100%",
    fontFamily:Typography.FONT_MEDIUM,
  },
  SmalltitleTextHide:{borderWidth:1},
  iconStyle:{
    color: color.COLOR_WHITE,
    position:'absolute',
    right:0,
    bottom:Platform.OS === 'ios' ? viewportHeight* 0.016 : viewportHeight* 0.014,
    paddingHorizontal:20,
    fontSize:Typography.FONT_SIZE28,
    borderWidth:0,
  },
  userStyle:{
    position:'absolute',
    right:0,
    bottom:Platform.OS === 'ios' ? viewportHeight* 0.027 : viewportHeight* 0.025,
    paddingHorizontal:20,
  },
  iconUserStyle:{
    height:viewportWidth*0.045,
    width:viewportWidth*0.045
  },
  addImg:{
    height:viewportWidth*0.05,
    width:viewportWidth*0.05
  },
  addImgStyle:{
    paddingHorizontal:25,
    position:'absolute',
    right:0,
    bottom:Platform.OS === 'ios' ? viewportHeight* 0.03 : viewportHeight* 0.025
  },
  iconClearStyle:{
    color: color.COLOR_WHITE,
    position:'absolute',
    left:0,  
    top:25,
    paddingHorizontal:20,
    paddingVertical:5,
    fontSize:Typography.FONT_SIZE28,
    borderWidth:0,
  },
  iconBackStyle:{
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE25,
  },
  subTitleText:{
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE,
    borderWidth:0,  
    paddingHorizontal:viewportWidth*0.03,
  },
  backStyle:{
    
    paddingHorizontal:viewportWidth*0.041,
   // bottom:Platform.OS === 'ios' ? viewportHeight* 0.03 : viewportHeight* 0.025,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"center"
  },
  titleHead:{
    display:"flex",
    alignItems:'center',
    width:viewportWidth*0.6,
    marginLeft:'auto',
    marginRight:'auto',
    // paddingTop:viewportWidth*0.03,
    paddingBottom:viewportWidth*0.006,
  },
  menuWrapper:{
    position:'absolute' , 
    right:8 , 
    bottom: Platform.OS === 'ios' ? viewportHeight* 0.01 : 10, 
    width:'50%' , 
    height:'100%',
    overflow:'visible'
  },
  MenuProviderStyle:{
    marginLeft:'auto' , 
    position:'relative' , 
    marginRight:15
  },
  MenuIconStyle:{
    color: '#fff', 
    paddingLeft: 30, 
    paddingTop: Platform.OS === 'ios' ? viewportHeight* 0.04 : viewportHeight* 0.05
  },
  MenuOptionStyle:{
    fontSize: 16
  },
  MenuOptionInner:{
    display:'flex',
    flexDirection:'row'
  },
  imgStyle:{
    width:viewportWidth*0.045,
    height:viewportWidth*0.045,
    alignItems: 'center',
    marginRight:viewportWidth*0.02
  },
  // ======================================//
  
  closeIcon:{
   position:'absolute',
   paddingHorizontal:viewportWidth*0.06,
   paddingVertical:viewportWidth*0.03,
   zIndex:9999,
   right:0
  },
  close:{
    color:color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE30
  },
menuContent:{
    height:viewportHeight,
    width:viewportWidth - viewportWidth*.15,
    backgroundColor:'#580303',
    paddingVertical:viewportWidth*0.04,
},
headrMenu:{
    alignItems:'center',
    paddingTop:viewportWidth*0.15,
    paddingBottom:viewportWidth*0.06,
    borderBottomWidth:1,
    borderBottomColor:color.COLOR_BLUETWO,
    paddingHorizontal:viewportWidth*0.04
},
userName:{
    color:color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE30,
    fontFamily:Typography.FONT_MEDIUM,
    paddingTop:viewportWidth*0.025,
    paddingBottom:viewportWidth*0.015
},
userPost:{
    fontSize:Typography.FONT_SIZE,
    color:color.COLOR_WHITE,
    fontFamily:Typography.FONT_REGULAR
},
listBox:{
    paddingTop:viewportWidth*0.1,
    paddingHorizontal:viewportWidth*0.04
},
linkBox:{
    display:"flex",
    flexDirection:'row',
    paddingVertical:viewportWidth*0.03,
    alignItems:'center'
},
listIcon:{
    width:viewportWidth*0.055,
    height:viewportWidth*0.055
},
listLink:{
    fontSize:Typography.FONT_SIZE20,
    color:color.COLOR_WHITE,
    marginLeft:viewportWidth*0.05,
    fontFamily:Typography.FONT_REGULAR
},
userImg:{        
    width:"100%",
    height:"100%",
    aspectRatio: 1,
    resizeMode:"cover"
},
userImgBox:{
    width:viewportWidth*0.25,
    height:viewportWidth*0.25,
    borderWidth:5,
    borderRadius:50,
    overflow:"hidden",
    borderColor:color.COLOR_DARKRED
},
modalStyle:{
  marginTop:0,
  marginBottom:0,
  marginLeft:0,
  marginRight:0,
  height:"100%"
},
badgeIcon:{
  backgroundColor:'#a11212', color:'#ffffff', borderRadius:viewportWidth*0.08, width:20, height:20,
  textAlign:'center', position:'absolute', top:-10, right:-5, zIndex:9, fontSize:viewportWidth*0.03
}
});


export {HeaderComponent} ;
