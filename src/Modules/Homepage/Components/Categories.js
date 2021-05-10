import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { categoryList } from '../categoryList';

import { useThemedColors, colorNames, useThemedStyles } from '../../Theming';

import getStyles from '../styles/CategoriesStyles';

const Categories = props => {
    const [selected, setSelected] = useState(0);

    const styles = useThemedStyles(getStyles);
    const Colors = useThemedColors();

    const onPress_Item = (item) => {
        //setSelected(item.id);
        if (selected === item.id) {
            setSelected(0);
            props.onPress_Item(null);
        }
        else {
            setSelected(item.id);
            props.onPress_Item(item);
        }
    }

    const _renderItem = ({ item }) => {

        return (
            <TouchableOpacity key={item.id} style={[styles.category, selected === item.id ? { backgroundColor: Colors[colorNames.addNew.categoryItemBackground] } : { backgroundColor: 'transparent' }]} onPress={() => onPress_Item(item)}>
                <Text style={styles.itemText}>{item.name}</Text>
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

