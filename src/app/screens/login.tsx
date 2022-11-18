import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { SafeAreaView,Text } from "react-native";
import style from './styles';
import axios from "axios";





const LoginScreen = ({navigation}) => {

    const [text, onChangeText] = useState("");

    const onPress = () => {
        console.log(onChangeText)
    }
    
    const OnLoginPress = () => {
        navigation.navigate('Auth')
    }
    
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
             <View style={style.box}>
             <View>
            <Text style={style.titleText}>Login</Text>
        </View>

        <TextInput style={style.input}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor="rgba(255, 255, 255, 0.9)"
        placeholder="Email"/>

        <TextInput style={style.input}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor="rgba(255, 255, 255, 0.9)"
        placeholder="Password"/>

        <Pressable style={style.button} onPress={onPress}>
            <Text style={style.text}>Login</Text>
        </Pressable>

        <View>
            <Text style={style.text}>
                Havn't an account ? <Text style={style.textLogin} onPress={OnLoginPress}>Register</Text>
            </Text>
        </View>

        <View style={style.mainPrivacy}>
            <Text style={style.textPrivacy}>
                Terms of use
            </Text>
            <Text style={style.textPrivacy}>
                Privacy Policy
            </Text>
        </View>
            </View>
       

    </SafeAreaView>
       
    )
}

export default LoginScreen;