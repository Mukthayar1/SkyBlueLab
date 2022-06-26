import React from 'react'
import { Logo, User } from '../../../constants/images';
import { Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import {
  Delivery,
  DoctorApointment,
  LabTest,
  LocationMarker,
  Reports,
  Search,
  Seetings,
} from '../../../constants/images'

export default function Home() {

  const ViewsData = [
    { name: 'Sample Collection', icon: Delivery },
    { name: 'View Reports', icon: Reports },
    { name: 'Search Test', icon: Search },
    { name: 'Location', icon: LocationMarker },
    { name: 'Book Lab Test', icon: LabTest },
    { name: 'Book Doctor Appointment', icon: DoctorApointment },
  ]

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ backgroundColor: '#F2F3F4', height: 100, width: '45%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', margin: '2.5%' ,padding:3}}>
     <Image source={item.icon} style={{height:40,width:40}} resizeMode={'contain'} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <ScrollView style={{ flex: 1, marginBottom: 60, backgroundColor: '#fff', }}>

      <Image source={Logo} style={{ height: 130, marginTop: 50 }} resizeMode={'contain'} />

      <View style={{ height: 150, width: '90%', backgroundColor: '#2b2a7e', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
        <Text style={{ color: '#fff', fontSize: 60, fontWeight: 'bold' }}>Slider</Text>
      </View>

      <Text style={{ color: '#2b2a7e', fontSize: 35, fontWeight: 'bold', textAlign: 'center', marginTop: 10, marginBottom: 20 }}>Sky Blue Labs</Text>
      <FlatList
        data={ViewsData}
        renderItem={renderItem}
        style={{ flex: 1, marginBottom: 20 }}
        extraData={ViewsData}
        numColumns={2}
        keyExtractor={item => item.name}
      />
    </ScrollView>
  )
}
