import {Dimensions} from 'react-native';

export const STATE_STATUS = {
  PENDING: 'PENDING',
  EMPTY: 'EMPTY',
  SUCCESS: 'SUCCEESS',
  ERROR: 'ERROR',
};
const pageHieght = Dimensions.get('window').height;
const pageWidth = Dimensions.get('window').width;

export const sizes = {
  PageHieght: pageHieght,
  PageWidth: pageWidth,
};
export const colors = {
  headerBackground: '#F3EDCC',
  colorSeafoamBlue: '#50d2c2',
  background: '#B9E9FC',
  backgroundOpacity: 'rgb(185, 233, 252)',
  white: '#ffffff',
};
