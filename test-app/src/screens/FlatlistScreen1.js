import React from "react";
import { Text,View,StyleSheet, FlastList, PanResponder } from "react-native";



const FlatlistScreen1 =()=>{
    const Persons=[
        {Name:'Chinu', Age:20},
        {Name:'Tony', Age:22},
        {Name:'Harvard', Age:20},
        {Name:'Stark', Age:19},
        {Name:'Capain',Age:23},
        {Name:'Roger', Age:22},
        {Name:'Winter', Age:20},
        {Name:'Payback', Age:12}
    ];
    return (
        <View style={styles.bigcontenainer}>
            <Text style={styles.header}>MAP OF FONCTION</Text>
            <FlastList
                keyExtractor={Persons=> Persons.name}
                data={Persons}
                renderItem={
                    (item)=>{
                        return(
                            <View style={styles.body}>
                                <Text>Name is:{item.Name} and  Age is: {item.Age} year old</Text>
                                <Text>Id is : 1</Text>
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
        header:{
            marginTop:20,
            fontSize:30,
            backgroundColor:'#A9A9A9',
            textAlign:"center"
        },
        body:{
            fontSize:15,
            borderBottomColor:'#8A2BE2',
            borderRadius:12,
            marginVertical:12,
            justifyContent:"center", 
            marginBottom:20,
            color:'#8A2BE2'

            
        }
    }
)

export default FlatlistScreen1;