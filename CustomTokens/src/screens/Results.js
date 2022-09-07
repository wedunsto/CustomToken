/*
Show the results of the search criteria
*/
import {React, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
var HTMLParser = require('fast-html-parser')

const Results =({route})=>{
    const [tokenURLs, setTokenURLs] = useState(null);

    const {searchURL} = route.params
    useEffect(()=>{
        const loadTokens=async()=>{
            const response = await fetch(searchURL);
            const htmlString = await response.text();
            
            try{
                let imageURLs = []
                var root = HTMLParser.parse(htmlString)
                
                for(let i=0; i<root.querySelectorAll('img').length; i++){
                    if(root.querySelectorAll('img')[i].classNames.includes("cardSrc")){
                        let rawAttrs = root.querySelectorAll('img')[i].rawAttrs
                        let startIndex = rawAttrs.indexOf("https")
                        let stopIndex = rawAttrs.indexOf("jpg")+3
                        let imgObj = {id: i, src: rawAttrs.substring(startIndex, stopIndex)}
                        imageURLs.push(imgObj)
                    }
                }
                
                setTokenURLs(imageURLs)
            }
            catch(error){
                console.error(error)
            }
        }
        loadTokens()
    }, []);

    return(
        <View style={styles.headerTextStyle}>
            <FlatList
                data={tokenURLs}
                renderItem={({item})=>{
                    return(<Image key={item.id}
                        style={styles.buttonStyle}
                        source={{uri: item.src}}
                    />);
                }}
                keyExtractor={(items)=>{return items.id}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerTextStyle:{
        flex: 1,
    },
    buttonStyle:{
        marginTop: 40,
        width: 350,
        height: 350,
        alignSelf: 'center',
        resizeMode:'contain'
    }
});

export default Results;