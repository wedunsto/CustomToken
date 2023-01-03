/*
Show the results of the search criteria
*/
import {React, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, FlatList, TouchableOpacity} from 'react-native';
var HTMLParser = require('fast-html-parser')

const Results =({navigation, route})=>{
    const [tokenURLs, setTokenURLs] = useState(null);
    
    const {searchURL} = route.params
    useEffect(()=>{
        const loadTokens=async()=>{
            const response = await fetch(searchURL);
            const htmlString = await response.text();
            
            try{
                let imageURLs = []
                var root = HTMLParser.parse(htmlString)

                for(let i=0; i<root.querySelectorAll('mtg').length; i++){
                    let rawAttrs = root.querySelectorAll('mtg')[i].rawAttrs
                    let startIndex = rawAttrs.indexOf("https")
                    let stopIndex = rawAttrs.indexOf("jpg")+3
                    let imgObj = {id: i, src: rawAttrs.substring(startIndex, stopIndex)}
                    imageURLs.push(imgObj)
                }
                
                setTokenURLs(imageURLs)
            }
            catch(error){
                console.error(error)
            }
        }
        loadTokens()
    }, []);

    const editToken=({item})=>{
        console.log(item.src)
    }

    const renderItems=({item})=>{
        return(
            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('EditToken', {imageURL: item.src})
            }}
            style={styles.buttonStyle}>
                <Image key={item.id}
                style={styles.buttonImageStyle}
                source={{uri: item.src}}
                />  
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.headerTextStyle}>Token Results</Text>
            <FlatList
                data={tokenURLs}
                renderItem={renderItems}
                keyExtractor={(items)=>{return items.id}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
    },
    headerTextStyle:{
        marginTop: 40,
        fontSize: 30,
        alignSelf: 'center'
    },
    buttonStyle:{
        marginTop: 40
    },
    buttonImageStyle:{
        width: 350,
        height: 350,
        alignSelf: 'center',
        resizeMode:'contain'
    }
});

export default Results;