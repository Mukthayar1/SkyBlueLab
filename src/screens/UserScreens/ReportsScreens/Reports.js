import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import { GetReports } from './GetReports';

import { useNavigation, useIsFocused } from '@react-navigation/native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const Reports = () => {

  const [Data, SetData] = useState([])
  const [loading, Setloading] = useState(true);
  let focus = useIsFocused()


  useEffect(() => {
    Setloading(true)
    GetReports(SetData, Setloading)
  }, [focus])


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item?.Test_Name}</Text>
      <View style={{marginTop:10,padding:2,flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'#000',fontSize:13}}>Required Days : {item?.Required_Days}</Text>
        <Text style={{color:'#000',fontSize:13}}>Charges : Rs-{item?.Charges} </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {loading == true ?

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
          <ActivityIndicator size={'large'} animating={true} color={'blue'} />
        </View>
        :
        <FlatList
          data={Data}
          extraData={loading}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 17,
    color:'#000'
  },
});

export default Reports;