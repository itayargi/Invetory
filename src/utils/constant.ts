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
  headerBackground: 'F3EDCC',
};
