import React, {useContext} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {AppContext} from './AppContext';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line react-hooks/rules-of-hooks
// import CategoryScreen from './Category';
export function Home() {
  const {ten} = useContext(AppContext);
  const navigation = useNavigation();
 
  const handleCategoryPress = (category: string) => {
    navigation.navigate('Category', { category });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', fontWeight: '600'}}>
        Chào mừng_{ten}
      </Text>
      <View style={{padding: 20}}>
      <Button title="Story" onPress={() => handleCategoryPress('Story')} />
      <Button title="Music" onPress={() => handleCategoryPress('Music')} />
      <Button title="Picture" onPress={() => handleCategoryPress('Picture')} />
    </View>
    
    </View>
  );
}
