import React ,  {Component} from 'react';
import {Text , View , Stylesheet } from 'react-native'

export default class TransactionScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>TransactionScreen</Text>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container:{
        flex:1 ,
        justifyContent : 'center',
        alignItems :'center',
        backgroundColor : "green"
    },
    text:{
        fontSize : 20 , 
        color:'#2398f4',
        fontFamily: 'sans'

    }
})

