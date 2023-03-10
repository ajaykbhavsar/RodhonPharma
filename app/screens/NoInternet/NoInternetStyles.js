import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const NoInternetStyles = StyleSheet.create({
    subTitle:{
        fontSize:Typography.FONT_SIZE17,
        textAlign:'center',
        fontFamily:Typography.FONT_REGULAR,
        color:color.COLOR_SECONDARY,
        paddingTop:viewportWidth*0.05
    },
    title:{
        fontSize:Typography.FONT_SIZE17,
        textAlign:'center',
        fontFamily:Typography.FONT_REGULAR,
        color:color.COLOR_SECONDARY,
        paddingTop:viewportWidth*0.05
    },
    ImgContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        //marginTop:-30,
        height:250
       },
    sliderImg:{
        overflow:'visible',
        width:viewportWidth - 150
    },
    buttonGreenMain:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },

    buttonGreen:{
        backgroundColor:color.COLOR_PRIMARY,
        borderRadius:4,
        width:200, 
        paddingVertical:viewportWidth*0.03,
        marginHorizontal:viewportWidth*0.25,
        marginTop:viewportWidth*0.08,
        backgroundColor:color.COLOR_SECONDARY,
    },
    greenButtonText:{
        fontSize:Typography.FONT_SIZE20,
        textAlign:'center', 
        fontFamily:Typography.FONT_REGULAR,       
       
        color:color.COLOR_WHITE, 
        
    },
    flexContent:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"space-around",
        height:'100%'
    }
});

export default NoInternetStyles;
