import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar} from "react-native";
import Styles from "../config/styles";


class Statusbar extends Component {

  constructor(props) {
      super(props);
  }
  

 
  render() {
    return (
       
        <StatusBar
            barStyle="light-content"
            // dark-content, light-content and default
            //To hide statusBar
            //hidden
            backgroundColor="#800000"
           // translucent={true}
            //allowing light, but not detailed shapes
           // networkActivityIndicatorVisible={true}
        />
     
    );
  }
}

const styles = StyleSheet.create({
    
});

export { Statusbar };