import React from 'react';
import {Text, View} from 'react-native';

const About = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>About</Text>
    </View>
  );
};

export default About;