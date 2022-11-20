import React from 'react';
import {
    Button,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    Alert,
    View,
 } from 'react-native';
import style from '../screens/styles'
import { useState } from 'react';




 const AuthScreen = ({navigation}) => {

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



    const onPressRegister = async() =>{
        try {
            await fetch(
                'http://192.168.0.106:3000/api/auth/register',requestOptions
            ).then(Response => {
                Response.json()
                .then(data => {
                    console.log(data)
                    if(data.statusCode !== 400){
                        navigation.navigate('Success', {email})
                    } else {
                        Alert.alert(data.message)
                    }
                })
            })
        } catch (error) {
            console.log(error, "Error")
        }
    }

    const OnLoginPress = () => {
        navigation.navigate('Login')
    }
    

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
             <View style={style.box}>
             <View>
            <Text style={style.titleText}>Create Account</Text>
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

        <Pressable style={style.button} onPress={onPressRegister}>
            <Text style={style.text}>Register</Text>
        </Pressable>

        <View>
            <Text style={style.text}>
                Already Have an account ? <Text style={style.textLogin} onPress={OnLoginPress}>Login</Text>
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


 export default AuthScreen;