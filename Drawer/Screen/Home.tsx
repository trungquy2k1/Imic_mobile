import React, {useContext} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { AppContext } from './AppContext';
import { MainStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// eslint-disable-next-line react-hooks/rules-of-hooks

export function Home({navigation}:NativeStackScreenProps<MainStackParamList>) {
  const {ten} = useContext(AppContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', fontWeight: '600'}}>
        Chào mừng_{ten}
      </Text>
      <Button 
        title='Music'
        onPress={() => navigation.navigate('Category', {title: 'Music'})}
      />

<Button 
        title='Picture'
        onPress={() => navigation.navigate('Category', {title: 'Picture'})}
      />

<Button 
        title='Story'
        onPress={() => navigation.navigate('Category', {title: 'Story'})}
      />
    </View>
  );
}
