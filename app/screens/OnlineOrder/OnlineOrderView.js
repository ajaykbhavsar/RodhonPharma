import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import { FooterComponents } from '../../components/FooterComponents';
import { OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import { Statusbar } from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SearchableDropdown from 'react-native-searchable-dropdown';
import * as navigationActions from '../../actions/navigationActions';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';
import DatePicker from 'react-native-date-picker';
import { fetch } from 'app/api/methods/callapi'

class OnlineOrderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      selectedItems: '',
      setOpen: false,
      dated: '',
      isModalVisible: false,
      productId: 0,
      query: "",
      SearchResult:[]
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
      isModalVisible: !this.state.isModalVisible,
    })

  };

  navigateToBookAppointment = () => {
    navigationActions.navigateToBookAppointment();

  }

  navigateToProductDetails = (id) => {
    //console.log('hello')
    navigationActions.navigateToProductDetails(id);

  }



  getParsednewAddDate(strDate) {//get date formate
    console.log('strDateNew');
    console.log(strDate);
    // if (strDate != "") {     
    //   let dateString = strDate;
    //   dateString = new Date(dateString).toUTCString();
    //   dateString = dateString.split(' ').slice(0, 4).join(' ');


    //   let month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //   let strSplitDate = String(dateString).split(', ');

    //     let stringArray = strSplitDate[1];
    //     let dateArray = stringArray.split(' ');
    //     let monthint = month_names.indexOf(dateArray[1])+1;
    //    // var date = new Date(strSplitDate[0]);
    //     let date = dateArray[2] + "-" + monthint + "-" + dateArray[0];


    // }

  }


  openDatepickerNew(value) {

    this.setState({
      setOpenNew: value
    })
  }

  OnSearchProduct = async (query) => {
    this.setState({ query });
    if (query.length >= 3) {
      var result = await fetch(ApiConstants.SEARCHPRODUCT + "?query=" + query, null, "get");
      if (result.Message == "success") {
        this.setState({ SearchResult: result.data });
      }
    }

  }

  onProductSelection = (item)=>{
    this.setState({ query: item.Name })
    navigationActions.navigateToProductDetails(item.Id);
  }
  render() {
    const { loading, homeProduct } = this.props;
    const productList = homeProduct ? homeProduct : [];
    const { productId, query, SearchResult } = this.state;
    
    console.log('productList');
    console.log(productList);
    return (
      <View style={[globalStyles.contentSection, styles.container]}>
        {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={styles.ImageBack}>
          <Statusbar />
          <View style={styles.SearchmainAreaBox}>
            <View style={styles.autocompleteContainer}>
              <Autocomplete
                data={SearchResult}
                hideResults={SearchResult?.length == 0 ? true : false}
                value={this.state.query}
                placeholder="Search Medicine"
                listContainerStyle={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#d1d1d1', padding: 13, }}
                onChangeText={(text) => this.OnSearchProduct(text)}
                flatListProps={{
                  keyboardShouldPersistTaps: 'always',
                  keyExtractor: (item) => item.Id,
                  renderItem: ({ item }) => (
                    <TouchableOpacity onPress={() => this.onProductSelection(item)}>
                      <Text style={styles.itemText}>{item.Name}</Text>
                    </TouchableOpacity>
                  ),
                }}

              />

            </View>
          </View>
          <ScrollView>
            <View style={styles.mainCcnt}>
              <View style={styles.productListMain}>
                {
                  productList.map((product, index) => {
                    let productImgPath = "https://"+product.ProductImageUrl;
                    return (
                      <View style={styles.productListBox} key={index}>
                        {/* <TouchableOpacity style={styles.btnAddcart}>
                                        <Image source={require('../../assets/images/icon_addcart.png')} resizeMode='contain' style={styles.addcartImage}/>
                                    </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => this.navigateToProductDetails(product.Id)}>
                          <View style={styles.productImageBox}>
                            <Image source={{ uri:productImgPath}} resizeMode='contain' style={styles.productImage} />
                          </View>
                          <View style={styles.medicineNameBox}>
                            <Text style={styles.medicineName}>{product.Name}</Text>
                          </View>
                          <View>
                            <Text style={styles.priceText}>Best price*  Rs. {product.Price}{}</Text>
                            <Text style={styles.mktText}>{product.ProductManufacturers?.[0].Manufacturer.Name}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </View>

            </View>
          </ScrollView>
        </ImageBackground>
        <FooterComponents />
      </View>
    );
  }

}
export default OnlineOrderView;
