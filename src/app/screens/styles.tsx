import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const style = StyleSheet.create({
    titleText: {
        fontSize: 22,
        fontWeight: "800",
        alignItems:'center' ,
        lineHeight:44,
        fontStyle:'normal',
        margin:76,
        padding:10,
        color: '#FFFFFF',
      },
      loginBackground: {
        backgroundColor: 'red',
        flex:1
      },
      welcomeName: {
        fontSize:18,
        color: 'blue'
      },
      box: {
        backgroundColor:'black',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      mainPrivacy:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
      },
      text:{
        color:'white',
        fontStyle:'normal',
        fontSize:16,
        alignItems:'center',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        lineHeight:22,
      },
      textLogin:{
        color: '#3694EB',
      },
      textPrivacy:{
        color:'white',
        fontStyle:'normal',
        fontSize:14,
        fontWeight:'400',
        marginTop:250
      },
      button:{
        backgroundColor:'#3694EB',
        padding:10,
        margin:10,
        width:310,
        height:48,
        borderRadius:8,
        color:'white',

      },
      input: {
        width:310,
        height: 48,
        borderColor: '1px solid rgba(255, 255, 255, 0.3)',
        color:'white',
        margin: 12,
        borderRadius:8,
        borderWidth: 1,
        padding: 10,
      },
})

export default style;