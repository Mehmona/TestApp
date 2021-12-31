import {heightRef, widthRef} from './screenSize';

const {StyleSheet} = require('react-native');
export const MEDIA_HEIGHT = 295 * heightRef;
const globalStyles = {
  Theme: {
    backgroundColor: 'white',
    // PrimaryColor: '#222780',
    success: '#00e0e9',
    PrimaryColor: '#75dafd',
    AccentPrimaryColor: '#6392a7',
    SecondaryColor: '#3b6c81',
    TextBackgroundColor: '#F4F8FF',
    rippleColor: '#3AC4F4',
    fail:'#ff7b88'
  },

  image: (height = '100%', width = '100%') => ({
    width: typeof width === 'string' ? width : width * widthRef,
    height: typeof height === 'string' ? height : height * heightRef,
    resizeMode: 'contain',
  }),
  text: (
    fontSize = 14 * heightRef,
    fontWeight = 'normal',
    color = 'black',
  ) => ({
    fontSize,
    fontWeight,
    color,
  }),
  center: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editView: {
    height: MEDIA_HEIGHT,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
};
export default globalStyles;
