import React, { Component } from 'react';
import { get } from 'lodash';
import {Image, View, StatusBar ,TouchableOpacity, ImageBackground,  ScrollView, Dimensions, Linking, TurboModuleRegistry } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { FooterComponents } from '../../components/FooterComponents';
import { OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import {Statusbar} from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SelectDropdown from 'react-native-select-dropdown';
import * as navigationActions from '../../actions/navigationActions';  
import Styles from '../../config/styles';  
import { TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const { color, Typography} = Styles;
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
 

class AddPrescriptionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex:0,    
      isModalVisible:false,  
      selectedItems:'', 
      ispaypalSelected:false,
      isgpaySelected:false,
      isupiSelected:false,
      AddPrescriptionMethod:'',
      custom_fields:[]
    } 
  }



  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
    // let fontName = 'Roboto'
    // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
}

  toggleModal = () => {
    this.setState({
      isModalVisible:!this.state.isModalVisible,
    })
 
};
 
  
  setChangeBox=()=>{
    this.setState({ isSelected: !this.state.isSelected });
  }


  navigateToLogin=()=>{
    navigationActions.navigateToLogin()
  }
  navigateToHome=()=>{
    navigationActions.navigateToHome()
  }
  navigateToProfile=()=>{
    navigationActions.navigateToProfile()
  }

  navigateToChatNow=()=>{
    navigationActions.navigateToChatNow()
  }

  AddPrescriptionoption =(value)=>{
    if(value=='paypal'){
      this.setState({
        ispaypalSelected:true,
        isgpaySelected:false,
        isupiSelected:false,
        AddPrescriptionMethod:'paypal'
      })
    }
    if(value=='gpay'){
      this.setState({
        ispaypalSelected:false,
        isgpaySelected:true,
        isupiSelected:false,
        AddPrescriptionMethod:'gpay'
      })
    }
    if(value=='upi'){
      this.setState({
        ispaypalSelected:false,
        isgpaySelected:false,
        isupiSelected:true,
        AddPrescriptionMethod:'upi'
      })
    }
  }
  

  navigateToPrescriptionDetails=()=>{
    navigationActions.navigateToPrescriptionDetails()
  }


  addCustomField = (index) => {   
    this.setState(
      {
        custom_fields: [...this.state.custom_fields, { meta_name: 'value', meta_value: 'value' }]
      }
    ); 
  }
  

  deleteDynamicFieldtwo = (index) => {
    let custom_fields = this.state.custom_fields;
    custom_fields.splice(index, 1);
    this.setState({ custom_fields: custom_fields });
      
  }


  render() {
    const { loading} = this.props; 
   
    const radio_props = [
      {label: 'PayPal', value: 0 },
      {label: 'Gpay', value: 1 }
    ];
    

    const medicinename = ["Fever","Fever with chills/rigors", "Headache", "Vomiting", "Nausea", "Pain abdomen", "Blood in vomiting", "Pedal  odema(swelling in legs)",
    "Chest pain", "Shortness of breath", "Suffocation", "Perspiration"]
    const timeslot = ["Before Meal", "After Meal" ]



   
    
     

      return (

        <View style={[globalStyles.contentSection, styles.container]}>
        {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
         <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={globalStyles.ImageBack}>
        <Statusbar />
            <View style={styles.mainCcnt}>
                <ScrollView>
                    <View style={styles.appointmentForm}>
                      <View style={styles.btnBoxAreas}>
                        <TouchableOpacity style={styles.btnAddmorePre} onPress={() => { this.addCustomField(this.state.custom_fields.length) }}>
                          <Image source={require('../../assets/images/btnplus.png')} resizeMode='contain' style={styles.btnAddmorePreImage}/>
                        </TouchableOpacity>
                      </View>
                        <View style={styles.detailBox}>
                            <View style={styles.medicineTitleBox}>
                              <View style={styles.MedicineBox}>
                                  <SelectDropdown
                                    data={medicinename}
                                    buttonStyle={{backgroundColor:'transparent',   borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.03, marginHorizontal:0, width:'100%', paddingVertical:0, height:viewportWidth*0.11}}
                                    buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE17,  width:'100%' }}
                                    onSelect={(selectedItem, index) => {
                                      console.log(selectedItem, index)
                                    }}
                                    renderDropdownIcon={isOpened => {
                                      return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                    }}
                                    defaultButtonText={'Select Symptoms'}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                      // text represented after item is selected
                                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                                      return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                      // text represented for each item in dropdown
                                      // if data array is an array of objects then return item.property to represent item in dropdown
                                      return item
                                    }}
                                    search
                                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                                    searchPlaceHolder={'Search here'}
                                    searchPlaceHolderColor={'darkgrey'}
                                    // renderSearchInputLeftIcon={() => {
                                    //   return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                    // }}
                                  />
                        
                              </View>
                              <TextInput
                                placeholder='Days'
                                style={styles.TextBoxStyle}
                                placeholderTextColor='#333333'
                              />
                            </View>
                            <View style={styles.medicineTimining}>
                                <View style={styles.medicineTiminingBox}>
                                  <Text style={styles.medicineTime}>Morning</Text>
                                  <View style={styles.medicineTimeTwoBox}>
                                  <TextInput
                                    placeholder='No.'
                                    style={styles.TextBoxStyle}
                                    placeholderTextColor='#333333'
                                  />
                                  <View style={styles.MedicineBox}>
                                    <SelectDropdown
                                      data={timeslot}
                                      buttonStyle={{backgroundColor:'transparent', borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.01, marginHorizontal:0, width:'95%', paddingVertical:0, height:viewportWidth*0.11}}
                                      buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE16,  width:'100%' }}
                                      onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                      }}
                                      renderDropdownIcon={isOpened => {
                                        return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                      }}
                                      defaultButtonText={'Time '}
                                      buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                      }}
                                      rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                      }}
                                    />
                                    </View>
                                  </View>
                                </View>
                                <View style={styles.medicineTiminingBox}>
                                  <Text style={styles.medicineTime}>Noon</Text>
                                  <View style={styles.medicineTimeTwoBox}>
                                  <TextInput
                                    placeholder='No.'
                                    style={styles.TextBoxStyle}
                                    placeholderTextColor='#333333'
                                  />
                                  <View style={styles.MedicineBox}>
                                    <SelectDropdown
                                      data={timeslot}
                                      buttonStyle={{backgroundColor:'transparent', borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.01, marginHorizontal:0, width:'95%', paddingVertical:0, height:viewportWidth*0.11}}
                                      buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE16,  width:'100%' }}
                                      onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                      }}
                                      renderDropdownIcon={isOpened => {
                                        return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                      }}
                                      defaultButtonText={'Time '}
                                      buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                      }}
                                      rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                      }}
                                    />
                                    </View>
                                  </View>
                                </View>
                            </View>
                            <View style={styles.medicineTimining}>
                                <View style={styles.medicineTiminingBox}>
                                  <Text style={styles.medicineTime}>Evening</Text>
                                  <View style={styles.medicineTimeTwoBox}>
                                  <TextInput
                                    placeholder='No.'
                                    style={styles.TextBoxStyle}
                                    placeholderTextColor='#333333'
                                  />
                                  <View style={styles.MedicineBox}>
                                    <SelectDropdown
                                      data={timeslot}
                                      buttonStyle={{backgroundColor:'transparent', borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.01, marginHorizontal:0, width:'95%', paddingVertical:0, height:viewportWidth*0.11}}
                                      buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE16,  width:'100%' }}
                                      onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                      }}
                                      renderDropdownIcon={isOpened => {
                                        return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                      }}
                                      defaultButtonText={'Time '}
                                      buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                      }}
                                      rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                      }}
                                    />
                                    </View>
                                  </View>
                                </View>
                                <View style={styles.medicineTiminingBox}>
                                  <Text style={styles.medicineTime}>Night</Text>
                                  <View style={styles.medicineTimeTwoBox}>
                                  <TextInput
                                    placeholder='No.'
                                    style={styles.TextBoxStyle}
                                    placeholderTextColor='#333333'
                                  />
                                  <View style={styles.MedicineBox}>
                                    <SelectDropdown
                                      data={timeslot}
                                      buttonStyle={{backgroundColor:'transparent', borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.01, marginHorizontal:0, width:'95%', paddingVertical:0, height:viewportWidth*0.11}}
                                      buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE16,  width:'100%' }}
                                      onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                      }}
                                      renderDropdownIcon={isOpened => {
                                        return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                      }}
                                      defaultButtonText={'Time '}
                                      buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                      }}
                                      rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                      }}
                                    />
                                    </View>
                                  </View>
                                </View>
                            </View>
                       
                        </View>


                        {
                                    this.state.custom_fields.map((customInput, key) => {
                                      return (
                                        <View  key={key}>
                                           <TouchableOpacity onPress={() => this.deleteDynamicFieldtwo(key)} style={styles.deleteBtn}>
                                               <Image source={require('../../assets/images/btncross.png')} resizeMode="contain" style={styles.deleteBtnImage}/>
                                            </TouchableOpacity>
                                        <View style={styles.detailBox} >
                                          
                                            <View style={styles.medicineTitleBox}>
                                              <View style={styles.MedicineBox}>
                                                  <SelectDropdown
                                                    data={medicinename}
                                                    buttonStyle={{backgroundColor:'transparent',   borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.03, marginHorizontal:0, width:'100%', paddingVertical:0, height:viewportWidth*0.11}}
                                                    buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE17,  width:'100%' }}
                                                    onSelect={(selectedItem, index) => {
                                                      console.log(selectedItem, index)
                                                    }}
                                                    renderDropdownIcon={isOpened => {
                                                      return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                                    }}
                                                    defaultButtonText={'Select Symptoms'}
                                                    buttonTextAfterSelection={(selectedItem, index) => {
                                                      // text represented after item is selected
                                                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                      return selectedItem
                                                    }}
                                                    rowTextForSelection={(item, index) => {
                                                      // text represented for each item in dropdown
                                                      // if data array is an array of objects then return item.property to represent item in dropdown
                                                      return item
                                                    }}
                                                    search
                                                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                                                    searchPlaceHolder={'Search here'}
                                                    searchPlaceHolderColor={'darkgrey'}
                                                    // renderSearchInputLeftIcon={() => {
                                                    //   return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                                    // }}
                                                  />
                                        
                                              </View>
                                              <TextInput
                                                placeholder='Days'
                                                style={styles.TextBoxStyle}
                                                placeholderTextColor='#333333'
                                              />
                                            </View>
                                            <View style={styles.medicineTimining}>
                                                <View style={styles.medicineTiminingBox}>
                                                  <Text style={styles.medicineTime}>Morning</Text>
                                                  <View style={styles.medicineTimeTwoBox}>
                                                  <TextInput
                                                    placeholder='No.'
                                                    style={styles.TextBoxStyle}
                                                    placeholderTextColor='#333333'
                                                  />
                                                  <View style={styles.MedicineBox}>
                                                    <SelectDropdown
                                                      data={timeslot}
                                                      buttonStyle={{backgroundColor:'transparent', borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.01, marginHorizontal:0, width:'95%', paddingVertical:0, height:viewportWidth*0.11}}
                                                      buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE16,  width:'100%' }}
                                                      onSelect={(selectedItem, index) => {
                                                        console.log(selectedItem, index)
                                                      }}
                                                      renderDropdownIcon={isOpened => {
                                                        return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                                      }}
                                                      defaultButtonText={'Time '}
                                                      buttonTextAfterSelection={(selectedItem, index) => {
                                                        // text represented after item is selected
                                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                        return selectedItem
                                                      }}
                                                      rowTextForSelection={(item, index) => {
                                                        // text represented for each item in dropdown
                                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                                        return item
                                                      }}
                                                    />
                                                    </View>
                                                  </View>
                                                </View>
                                                <View style={styles.medicineTiminingBox}>
                                                  <Text style={styles.medicineTime}>Noon</Text>
                                                  <View style={styles.medicineTimeTwoBox}>
                                                  <TextInput
                                                    placeholder='No.'
                                                    style={styles.TextBoxStyle}
                                                    placeholderTextColor='#333333'
                                                  />
                                                  <View style={styles.MedicineBox}>
                                                    <SelectDropdown
                                                      data={timeslot}
                                                      buttonStyle={{backgroundColor:'transparent', borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.01, marginHorizontal:0, width:'95%', paddingVertical:0, height:viewportWidth*0.11}}
                                                      buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE16,  width:'100%' }}
                                                      onSelect={(selectedItem, index) => {
                                                        console.log(selectedItem, index)
                                                      }}
                                                      renderDropdownIcon={isOpened => {
                                                        return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                                      }}
                                                      defaultButtonText={'Time '}
                                                      buttonTextAfterSelection={(selectedItem, index) => {
                                                        // text represented after item is selected
                                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                        return selectedItem
                                                      }}
                                                      rowTextForSelection={(item, index) => {
                                                        // text represented for each item in dropdown
                                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                                        return item
                                                      }}
                                                    />
                                                    </View>
                                                  </View>
                                                </View>
                                            </View>
                                            <View style={styles.medicineTimining}>
                                                <View style={styles.medicineTiminingBox}>
                                                  <Text style={styles.medicineTime}>Evening</Text>
                                                  <View style={styles.medicineTimeTwoBox}>
                                                  <TextInput
                                                    placeholder='No.'
                                                    style={styles.TextBoxStyle}
                                                    placeholderTextColor='#333333'
                                                  />
                                                  <View style={styles.MedicineBox}>
                                                    <SelectDropdown
                                                      data={timeslot}
                                                      buttonStyle={{backgroundColor:'transparent', borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.01, marginHorizontal:0, width:'95%', paddingVertical:0, height:viewportWidth*0.11}}
                                                      buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE16,  width:'100%' }}
                                                      onSelect={(selectedItem, index) => {
                                                        console.log(selectedItem, index)
                                                      }}
                                                      renderDropdownIcon={isOpened => {
                                                        return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                                      }}
                                                      defaultButtonText={'Time '}
                                                      buttonTextAfterSelection={(selectedItem, index) => {
                                                        // text represented after item is selected
                                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                        return selectedItem
                                                      }}
                                                      rowTextForSelection={(item, index) => {
                                                        // text represented for each item in dropdown
                                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                                        return item
                                                      }}
                                                    />
                                                    </View>
                                                  </View>
                                                </View>
                                                <View style={styles.medicineTiminingBox}>
                                                  <Text style={styles.medicineTime}>Night</Text>
                                                  <View style={styles.medicineTimeTwoBox}>
                                                  <TextInput
                                                    placeholder='No.'
                                                    style={styles.TextBoxStyle}
                                                    placeholderTextColor='#333333'
                                                  />
                                                  <View style={styles.MedicineBox}>
                                                    <SelectDropdown
                                                      data={timeslot}
                                                      buttonStyle={{backgroundColor:'transparent', borderWidth:1, borderColor:'#C8CED4', borderRadius:viewportWidth*0.015,  paddingHorizontal:viewportWidth*0.01, marginHorizontal:0, width:'95%', paddingVertical:0, height:viewportWidth*0.11}}
                                                      buttonTextStyle={{textAlign:'left',   marginVertical:0, marginHorizontal:0, fontFamily:Typography.FONT_RALEWAY_REGULAR, fontSize:Typography.FONT_SIZE16,  width:'100%' }}
                                                      onSelect={(selectedItem, index) => {
                                                        console.log(selectedItem, index)
                                                      }}
                                                      renderDropdownIcon={isOpened => {
                                                        return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                                                      }}
                                                      defaultButtonText={'Time '}
                                                      buttonTextAfterSelection={(selectedItem, index) => {
                                                        // text represented after item is selected
                                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                        return selectedItem
                                                      }}
                                                      rowTextForSelection={(item, index) => {
                                                        // text represented for each item in dropdown
                                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                                        return item
                                                      }}
                                                    />
                                                    </View>
                                                  </View>
                                                </View>
                                            </View>
                                            </View>
                                        </View>
                                      )
                                    })
                        }

                          <View>
                          <TextInput
                              style={globalStyles.TextareaControl}
                              multiline={true}
                              numberOfLines={5}
                              placeholder='Specific instruction by Doctor'
                              placeholderTextColor="#333" 
                              />
                          </View>

                        <View style={globalStyles.formElements}>
                          <TouchableOpacity style={globalStyles.btn}  onPress={()=>this.navigateToLogin()}>
                            <Text style={globalStyles.btnTextwhite}>Submit</Text>
                          </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View>
            </ImageBackground>
        
        <FooterComponents /> 
      </View>
      );
  }

} 
export default AddPrescriptionView;
