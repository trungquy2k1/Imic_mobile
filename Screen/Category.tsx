
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;

  const handleGoBackHome = () => {
    // navigation.navigate('Home', { category });
    navigation.goBack();
    // navigation.navigate('Home', { cate })
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', fontWeight: '600'}}>{category}</Text>
      <Button title="Go Back Home" onPress={handleGoBackHome} />
      
    </View>
  );
};

export default CategoryScreen;