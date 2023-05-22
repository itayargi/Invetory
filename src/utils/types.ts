import {StyleProp, ViewStyle} from 'react-native/types';

export interface Inventory {
  name: string;
  age: number;
}

export interface TableProps {
  headers: string[];
  data: string[][];
  style?: StyleProp<ViewStyle>;
}
