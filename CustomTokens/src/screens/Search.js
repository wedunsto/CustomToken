/*
Generate the search criteria for desired tokens
*/

import {React, useState} from "react";
import {Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import EditedToken from "../components/EditedToken";

const SearchScreen =({navigation, route})=>{
    const [searchTerm, setSearchTerm] = useState(null);
    let editedTokenURLArray = []
    let searchTokenId = 0

    if(route.params){
        const {editedTokenURLs, updateTokenId} = route.params
        editedTokenURLArray = editedTokenURLs
        searchTokenId = updateTokenId
    }

    const storeSearchTerm =()=>{
        const parsedSearchTerm = {searchTerm}.searchTerm.replace(/ /g,'+').toLowerCase();
        const searchURL = 'https://www.cardkingdom.com/catalog/search?search=header&filter%5Bname%5D='+parsedSearchTerm;
        
        navigation.navigate("Results",{
            searchURL: searchURL,
            editedTokenURLs: editedTokenURLArray,
            updateTokenId: searchTokenId})
    }

    const renderItems =({item})=>{
        return(
            <EditedToken
                imageURL={item.src}
            />
        );
    };

    return(
        <View>
            <TextInput
                style={styles.searchBar}
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="Token Name"
            />
            <TouchableOpacity 
            style={styles.searchButton}
            onPress={storeSearchTerm}>
                <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
            <FlatList
                data={editedTokenURLArray}
                renderItem={renderItems}
                keyExtractor={(items)=>{return items.id}}
            />
        </View>
    )};

const styles = StyleSheet.create({
    searchBar:{
        fontSize: 25,
        textAlign: "center",
        margin: 15,
        marginTop:30,
        borderWidth: 4,
        borderColor:"black",
        borderRadius: 20
    },
    searchButton:{
        alignSelf: "center",
        marginTop: 150
    },
    searchText:{
        fontSize: 25,
        textAlign: "center",
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 10,
        padding: 5
    }
});

export default SearchScreen;