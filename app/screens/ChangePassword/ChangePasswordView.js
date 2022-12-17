import React, { Component } from 'react';
import { get } from 'lodash';
import {Image, View, StatusBar, TextInput ,TouchableOpacity, ScrollView, Linking, ImageBackground } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import Resource_EN from '../../config/Resource_EN';
import { OverlayActivityIndicatorElement,TextBoxElement, FooterComponents } from '../../components';
 
import {Statusbar} from '../../components/Statusbar';
import * as navigationActions from '../../actions/navigationActions';


const { heading } = Resource_EN;
const { content } = Resource_EN;
const { button } = Resource_EN;


class ChangePasswordView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex:0,    
      selectedItems:'',
      username: "",
      password: "",
    } 
  }

  componentDidMount() { 
    // let fontName = 'Roboto'
    // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 


    this.setState({ username: "" });
    this.setState({ password: "" });
}

updateState = (fieldName, value) => {

  this.setState({
    [fieldName]: value
  });

  if (this.state.username != '' && this.state.password != '') {
    this.props.loginresponse.ErrorMessage = '';
    this.submitted = false;
  } else {
    this.submitted = true;
  }
};

navigateToSettings=()=>{
  navigationActions.navigateToSettings();
}



  


  render() {
    const { loading} = this.props;   
    const { username, password } = this.state;

      return (
        <View style={[globalStyles.contentSection, styles.container]}>
        {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <Statusbar />           
          <ScrollView style={[globalStyles.Pagemargin, styles.SettingsContainer]}> 
              <View>
                <View style={styles.lockTextBox}>
                  <Image source={require('../../assets/images/img_lock.png')} resizeMode="contain" style={styles.imgLockPassword}/>
                  <Text style={styles.changePassText}>Your new password must be different
                  from Previously used password. </Text>
                </View>
               
                <View style={styles.FormBox}>
                <View style={styles.loginBoxd}>           
                  
                  <View style={styles.textBoxContainer}>
                    <TextInput
                     style={globalStyles.TextareaControl}
                    placeholder={content.NewPassword}
                    value={username}         
                    secureTextEntry={true}        
                    autoCapitalize={'none'}    
                    onChangeText={value => this.updateState("username", value)}              
                    />
                  </View>
                  <View style={styles.textBoxContainer}>
                    <TextInput
                     style={globalStyles.TextareaControl}
                      placeholder={content.RemPassword}
                      value={password}
                      secureTextEntry={true}                     
                      autoCapitalize={'none'}      
                      onChangeText={value => this.updateState("password", value)}           
                    />
                  </View>
                  <View style={styles.ButtonArea}>
                      <TouchableOpacity style={globalStyles.btn}>
                      <Text style={globalStyles.btnTextwhite}>Submit</Text>
                        </TouchableOpacity>                         
                  </View>
                  </View>
                </View>
              </View>
          </ScrollView>   
       
          <FooterComponents settingstabactive={true}/>        
      </View>
      );
  }

} 
export default ChangePasswordView;
