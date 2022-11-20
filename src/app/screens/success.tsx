import { View, Text, SafeAreaView } from "react-native"
import style from "./styles"

const SuccesScreen = ({navigation,route}) => {

    const {name} = route.params
    

    const OnLoginPress = () => {
        navigation.navigate('Login')
    }

    return(
        
        <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
             <View style={style.box}>
            <Text style={style.titleText}>Hello <Text style={style.welcomeName}>{name}</Text></Text>
            <Text  style={style.titleText} onPress={OnLoginPress}>Back to Login</Text>
            </View>
        </SafeAreaView>
    )
}
export default SuccesScreen