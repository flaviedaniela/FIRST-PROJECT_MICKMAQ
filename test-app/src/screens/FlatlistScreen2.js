import React from "react";
import { Text,View,StyleSheet, FlastList, PanResponder } from "react-native";



const FlatlistScreen1 =()=>{
    const Language=[
        {Name:'c'},
        {Name:'c++'},
        {Name:'java'},
        {Name:'javaScript'},
        {Name:'Go'},
        {Name:'Kotlin'},
        {Name:'swift'}
    ];
    return (
        <View style={styles.bigcontenainer}>
            <FlastList
                keyExtractor={Language=> Language.name}
                data={Language}
                renderItem={
                    (item)=>{
                        return(
                            <View style={styles.body}>
                                <Text>{item.Name} </Text>
                            </View>
                        )
                    }
                }
            />

        </View>
    );

};

const styles= StyleSheet.create(
    {
        bigcontenainer:{
            backgroundColor:'#FFFAFA',
            display: "flex",
        },
        body:{
            fontSize:15,
            marginVertical:12,
            justifyContent:"center", 
            marginBottom:20,
            color:'#0000',
            backgroundColor:'#FFFF00'

            
        }
    }
)

export default FlatlistScreen1;