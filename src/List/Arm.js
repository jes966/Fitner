import React, {useState} from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Arm = ({navigation})=>{

return (
    <View style={{
        flex: 1,
        backgroundColor: 'white',
        }}>
        <View style={{ flexDirection: "row" }}>
            <AntDesign name="arrowleft" size={24}
            style={{marginTop: 55, marginLeft: 16,}}
            onPress={()=>navigation.goBack()}
            />
            <Text style={styles.title}>팔 운동</Text>
        </View>
        <View style={{borderBottomWidth:1, borderColor: '#e8e8e8', marginTop: 20}} />
    </View>        
)
}

export default Arm