import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import { FooterComponents } from '../../components/FooterComponents';
import { TextBoxElement,OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import { Statusbar } from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SearchableDropdown from 'react-native-searchable-dropdown';
import * as navigationActions from '../../actions/navigationActions';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import { fetch } from 'app/api/methods/callapi'
import AsyncStorage from '@react-native-async-storage/async-storage';

class ProductDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      selectedItems: '',
      isModalVisible: false,
      productDetail: null,
      showTotal:false,
      OrderQuantity:1,
      itemTotal:0.00
    }
  }

  componentDidMount = async () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)

    var result = await fetch(ApiConstants.GETPRODUCTBYID + "?productId=" + this.props.productId, null, "get")
    if (result.Message == "success") {
      this.setState({ productDetail: result.data });
      console.log('resultdata');
      console.log(result.data );
    }
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    })

  };

  navigateToBookAppointment = () => {
    navigationActions.navigateToBookAppointment();

  }

  addToCart = async () => {
    let customerId = this.props.loginUserId;
    const { OrderQuantity,productDetail } = this.state;
    console.log(customerId);
    console.log("getting customer");
    var result = await fetch(ApiConstants.ADDCART + "?customerId="+customerId+"&productId=" + this.props.productId + "&quantity="+OrderQuantity, null, "get")
    if(result.Message == "Success"){
      let itemTotal = OrderQuantity * productDetail.Price
      this.setState({showTotal:true,itemTotal});
      alert("Product added to cart");
      var cartresult = await fetch(ApiConstants.ORDERSUMMARY + "?customerId=" +customerId+"&cart=true&wishlist=false&compare=false", null, "post");
      console.log("cart result");
      console.log(cartresult);
      if (cartresult.Message == "Success") {
        cartCount = cartresult.data.CartItemsCount; 
        await AsyncStorage.setItem("cartCount",cartCount.toString());
      }
    }else{
      alert(result.Message);
    }
   

  }

  navigateToCart = () =>{
    let customerId = 235;
    navigationActions.navigateToCartPage(customerId);
  }

  OnQuantityChange = (value)=>{
    const { productDetail } = this.state;
    if(value == ""){
      this.setState({OrderQuantity:value});
    }
    if(!isNaN(value)){
      this.setState({OrderQuantity:value});
    }
  }

  ValidatedQuantity = (value)=>{
    const { productDetail } = this.state;
    if(value == ""){
      this.setState({OrderQuantity:value});
    }
    
    if(!isNaN(value)){
      if(value >= productDetail?.OrderMinimumQuantity && value <= productDetail?.OrderMaximumQuantity){
        this.setState({OrderQuantity:value});
      }else{
        this.setState({OrderQuantity:""});
        alert("Please check min/max order quantity");
      }
    }
  }

  render() {
    const { loading } = this.props;
    const { productDetail,itemTotal } = this.state;
    let productImgPath = "https:"+productDetail?.ProductImageUrl



 
    
    return (

      <View style={[globalStyles.contentSection, styles.container]}>
        {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={styles.ImageBack}>
          <Statusbar />
          <ScrollView>
            {
              productDetail != null &&

             
              <View style={styles.mainCcnt}>
                <View style={styles.DetailpageContainer}>
                  <View style={styles.detailtitleBox}>
                    <Text style={styles.detailtitleText}>{productDetail.Name}</Text>
                  </View>
                  <View style={styles.BoxTop}>
                    <View style={styles.BoxTopTablet}>
                      <Text style={styles.BoxTopTabletText}>Pack of {productDetail.OrderMinimumQuantity}</Text>
                    </View>
                    <Text style={styles.BoxTopTabletText}>{productDetail.ProductManufacturers?.[0].Manufacturer.Name}</Text>
                  </View>
                  <View style={styles.InstockBox}>
                    <Text style={styles.InstockBoxText}>In Stock</Text>
                  </View>
                  <View style={styles.DetailimageBox}>
                    <Image source={{ uri:productImgPath}}  resizeMode='contain' style={styles.productDetailImage} />
                  </View>
                  <View style={styles.detailPriceBox}>
                    <Text style={styles.detailPrice}><Text style={styles.detailBlackPrice}>Price :</Text> Rs. {productDetail.Price}</Text>
                  </View>
                  <View style={styles.QtymainBox}>
                    <View style={styles.qtyBoxview}>
                      <Text style={styles.qtyBoxText} >
                        Qty.
                      </Text>
                      <TextInput
                        value={this.state.OrderQuantity.toString()}
                        onEndEditing={(e) => 
                          {
                            this.ValidatedQuantity(e.nativeEvent.text)
                          }}
                        onChangeText={(value)=>this.OnQuantityChange(value)}
                        placeholder='Add Qty.'
                        placeholderTextColor='#787878'
                        style={styles.qtyTextBox}
                      />
                    </View>
                    <TouchableOpacity style={[styles.btn, styles.DetailAddtoCart]} onPress={() => this.addToCart()}>
                      <Text style={styles.TextBtnCart}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.DescriptionBox}>
                    <Text style={styles.titleTwo}>Uses / Indications</Text>
                    <Text style={styles.ParaText}>{productDetail.ShortDescription}</Text>
                  </View>
                </View>
              </View>
            }

          </ScrollView>
        </ImageBackground>
        {
          this.state.showTotal &&
          <View style={styles.CartBottompage}>
            <View style={styles.bottomPriceBox}>
                <Text  style={styles.bottomPriceBoxTitle}>Total:</Text>
                <Text  style={styles.bottomPriceBoxPrice}>Rs. {itemTotal}</Text>
            </View>
            <TouchableOpacity  style={[styles.btn, styles.btnContinue]} onPress={()=>this.navigateToCart()}>
              <Text style={styles.btnContinueText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        }
        
      </View>
    );
  }

}
export default ProductDetailsView;
