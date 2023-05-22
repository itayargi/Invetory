import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StyleProp,
  ViewStyle,
  RefreshControl,
} from 'react-native';
import {InvetoryStore} from '../../store/invetory.store';
import strings from '../../utils/strings';
import {TableProps} from '../../utils/types';

const TableRow: React.FC<{
  data: string[];
  bold?: boolean;
  style?: StyleProp<ViewStyle>;
}> = ({data, bold}) => (
  <View style={styles.row}>
    {data?.map((cell, index) => (
      <View style={[styles.cell]} key={index}>
        <Text style={[styles.text, bold && {fontWeight: 'bold'}]}>{cell}</Text>
      </View>
    ))}
  </View>
);

const Table: React.FC<TableProps> = ({headers, data, style}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    InvetoryStore.getDataFromSheets();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const flatListParams = {
    refreshControl: (
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    ),
    bounces: false,
    showsVerticalScrollIndicator: false,
    contentContainerStyle: styles.content,
    ListEmptyComponent: (
      <Text style={styles.noData}>{strings.table_noData_message}</Text>
    ),
    data: data,
    renderItem: ({item}: any) => <TableRow data={item} />,
    keyExtractor: (item: unknown, index: number) => index.toString(),
  };
  return (
    <View style={[style, styles.container]}>
      <TableRow data={headers} bold />
      {data && <FlatList {...flatListParams} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 17,
  },
  noData: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default Table;
