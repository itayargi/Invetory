import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Inventory} from '../../utils/types';

type Props = {
  data: Inventory[];
  style?: StyleProp<ViewStyle>;
};

const Card: React.FC<Inventory> = ({name, age}) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.age}>{age}</Text>
  </View>
);

const RenderPersons: React.FC<Props> = ({data, style}) => (
  <FlatList
    bounces={false}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={style}
    data={data}
    renderItem={({item}) => Card(item)}
    keyExtractor={(item, index) => index.toString()}
  />
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  age: {
    fontSize: 18,
  },
});

export default RenderPersons;
