import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CategoryRouteProp } from '../types/navigation';
const Category = () => {
    const route = useRoute<CategoryRouteProp>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', fontWeight: '600'}}>
        {route.params.title}
      </Text>
    </View>
  );
}
export default Category;