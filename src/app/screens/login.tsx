import React, { useState } from "react";
import { Alert, Pressable, TextInput, View } from "react-native";
import { SafeAreaView,Text } from "react-native";
import style from './styles';
import axios from "axios";





const LoginScreen = ({navigation}) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('')

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email:email,
            password: password, 
        }),
    };

    const OnLoginPress = async() => {
        try {
            await fetch(
                'http://192.168.0.106:3000/api/auth/login',requestOptions
            ).then(Response => {
                Response.json()
                .then(data => {
                    console.log(data)
                    if(data.statusCode !== 400){
                        navigation.navigate('Success',{name: email})
                    } else {
                        Alert.alert(data.message)
                    }
                })
            })
        } catch (error) {
            console.log(error, "Error")
        }
       
    }

    const onPress = () => {
        console.log()
    }
    
    const OnLoginBack = () => {
        navigation.navigate('Auth')
    }
    
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
             <View style={style.box}>
             <View>
            <Text style={style.titleText}>Login</Text>
        </View>

        <TextInput style={style.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholderTextColor="rgba(255, 255, 255, 0.9)"
        placeholder="Email"/>

        <TextInput style={style.input}
        onChangeText={onChangePassword}
        value={password}
        placeholderTextColor="rgba(255, 255, 255, 0.9)"
        placeholder="Password"/>

        <Pressable style={style.button} onPress={OnLoginPress}>
            <Text style={style.text}>Login</Text>
        </Pressable>

        <View>
            <Text style={style.text}>
                Havn't an account ? <Text style={style.textLogin} onPress={OnLoginBack}>Register</Text>
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