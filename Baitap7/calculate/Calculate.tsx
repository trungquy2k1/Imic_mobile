import React,{useReducer, useState} from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../store";
import reducer, {
    Addition,
    Subtraction,
    Multiplication,
    Division,
    selectResult
  } from './calculateSlice';


export default function Calculate() {
    const Result = useAppSelector(selectResult);
    const dispatch = useAppDispatch();
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0)
    const num1Value = Number(num1) || 0;
    const num2Value = Number(num2) || 0;

    const handleNum1Change = (value: any) => {
        setNum1(Number(value));
      };
    
      const handleNum2Change = (value: any) => {
        setNum2(Number(value));
      };
    
      const handleAddition = () => {
        dispatch(Addition({ num1, num2 }));
      };
      const handleSubtraction = () => {
        dispatch(Subtraction({ num1, num2 }));
      };

      const handleMultiplication = () => {
        dispatch(Multiplication({ num1, num2 }));
      };

      const handleDivision = () => {
        dispatch(Division({ num1, num2 }));
      };

    
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    placeholder="số thứ 1"
                    style={{borderWidth: 1, borderColor: '#000', margin: 10}}
                    value={String(num1)}
                    onChangeText={handleNum1Change}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="số thứ 2"
                    style={{borderWidth: 1, borderColor: '#000', margin: 10}}
                    value={String(num2)}
                    onChangeText={handleNum2Change}
                    keyboardType="numeric"
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                <TouchableOpacity 
                    style={{borderWidth: 1, borderColor: '#000', margin: 10, width: 90, height: 40}}
                    onPress={handleAddition}    
                >
                    <Text style={{fontSize: 30, color: '#000', textAlign: 'center'}}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{borderWidth: 1, borderColor: '#000', margin: 10, width: 90, height: 40}}
                    onPress={handleSubtraction}    
                >
                    <Text style={{fontSize: 30, color: '#000', textAlign: 'center'}}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{borderWidth: 1, borderColor: '#000', margin: 10, width: 90, height: 40}}
                    onPress={handleMultiplication}    
                >
                    <Text style={{fontSize: 30, color: '#000', textAlign: 'center'}}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{borderWidth: 1, borderColor: '#000', margin: 10, width: 90, height: 40}}
                    onPress={handleDivision}    
                >
                    <Text style={{fontSize: 30, color: '#000', textAlign: 'center'}}>/</Text>
                </TouchableOpacity>

            </View>
            <Text style={{fontSize: 30, color: '#000'}}>Result: {Result}</Text>
        </View>
    )
}
