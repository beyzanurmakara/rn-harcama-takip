import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { categoryList } from '../categoryList';



const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'center',
    },
    category: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        padding: 5,
        margin: 5,
        borderRadius: 5,
    }
});



const Categories = props => {
    const [selected, setSelected] = useState(0);

    const onPress_Item = (item) => {
        //setSelected(item.id);
        if(selected ===item.id){
            setSelected(0);
            props.onPress_Item(null);
        }
        else{
            setSelected(item.id);
            props.onPress_Item(item);
        }
    }

    const _renderItem = ({ item }) => {

        return (
            <TouchableOpacity key={item.id} style={[styles.category,selected===item.id?{backgroundColor:'red'}:{backgroundColor:'transparent'}]} onPress={() => onPress_Item(item)}>
                <Text>{item.name}</Text>
            </TouchableOpacity >
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={categoryList}
                renderItem={_renderItem}
                keyExtractor={(item, index) => item.id}
                horizontal={true}
            // numColumns={categoryList.length}
            />
        </View>
    );
};

export default Categories;

