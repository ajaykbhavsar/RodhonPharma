/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
import {  Dimensions} from 'react-native';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const AppStyles = {
    color: {
        COLOR_TRANSPARENT:'transparent',
        COLOR_PRIMARY: '#800000',
        COLOR_SECONDARY: '#5271FF',
        COLOR_WHITE: '#FFFFFF',
        COLOR_BLACK: '#000000',
        COLOR_GREY:'#7E7E7E',
        COLOR_TEXT: '#313131',
        COLOR_PLACEHOLDER: '#888888',
        COLOR_LIGHTPURPLE:'#B78CC9',
        COLOR_SHADOWCOLOR:'#00000080',
        COLOR_SUBTITLE:'#444444',
        COLOR_LIGHTBLUE:'#EDF6FF',
        COLOR_REDBTN:'#DF0707',
        COLOR_BTNBORDER:'#CB0000',
        COLOR_BTNDARBRDR:'#9F2619',
        COLOR_SUBTTLCOLOR:'#484848',
        COLOR_BTNRED:'#BE0202'

        
    },
    Typography: {
        FONT_POPPINS_REGULAR: 'Poppins-Regular',
        FONT_POPPINS_MEDIUM: 'Poppins-Medium',
        FONT_POPPINS_SEMIBOLD: 'Poppins-SemiBold',
        FONT_POPPINS_BOLD: 'Poppins-Bold',
        FONT_Italic: 'Poppins-Italic',

        FONT_RALEWAY_REGULAR:'Raleway-Regular',
        FONT_RALEWAY_MEDIUM:'Raleway-Medium',
        FONT_RALEWAY_SEMIBOLD: 'Raleway-Bold',
        FONT_RALEWAY_BOLD: 'Raleway-Bold',
        FONT_RALEWAY_EXTRABOLD: 'Raleway-ExtraBold',
    


    
        
        FONT_SIZE10:viewportWidth* 0.022,
        FONT_SIZE11:viewportWidth* 0.024,
        FONT_SIZE12:viewportWidth* 0.026,
        FONT_SIZE14:viewportWidth* 0.029, 
        FONT_SIZE15:viewportWidth* 0.032,
        FONT_SIZE16:viewportWidth* 0.035,
        FONT_SIZE17:viewportWidth* 0.038,
        FONT_SIZE18:viewportWidth* 0.041,
        FONT_SIZE20:viewportWidth* 0.044,
        FONT_SIZE22:viewportWidth* 0.047,
        FONT_SIZE24:viewportWidth* 0.050,
        FONT_SIZE25:viewportWidth* 0.053,
        FONT_SIZE26:viewportWidth* 0.065,
        FONT_SIZE28:viewportWidth* 0.07,
        FONT_SIZE30:viewportWidth* 0.072,
        FONT_SIZE32:viewportWidth* 0.074,
        FONT_SIZE34:viewportWidth* 0.076,
        FONT_SIZE36:viewportWidth* 0.078,
        FONT_SIZE38:viewportWidth* 0.08,
        FONT_SIZE40:viewportWidth* 0.082,

        FONT_WEIGHT_NORMAL: "normal",
        FONT_WEIGHT_500: "600",
        FONT_WEIGHT_BOLD: "bold",
        FONT_STYLE_NORMAL: "normal",
    }
};
export default AppStyles;
