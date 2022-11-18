import React from 'react';
import {
    Button,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    View,
 } from 'react-native';
 import axios from 'axios'
import style from '../screens/styles'
import { userLogin } from './../api/register';
import { useState } from 'react';



 const AuthScreen = ({navigation}) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('')

    const onPress = () => {
        const params = {
            email:'gio@gmail.com',
            password: 'Berobero1'
        }
        axios.post('http://109.172.240.103:3000/api/auth/login',params).then(() => {
            navigation.navigate('Success')
            console.log('Response', Response?.data);
        }).catch(error => {
            console.log('Error',error)
        })
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

        <Pressable style={style.button} onPress={onPress}>
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