import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { categoryList } from '../../Homepage/categoryList';
import { useThemedStyles } from '../../Theming';

import getStyles from '../styles/categoryStyles';

const Category = props => {
    const [isVisible, setIsVisible] = useState(false);

    const styles=useThemedStyles(getStyles);

    const _onPressItem=(item)=>{
        setIsVisible(false);
        props.onPress_item(item);
    }

    const _renderList = ({ item }) => {
        return (
            <TouchableOpacity style={styles.textContainer} onPress={()=>_onPressItem(item)}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const _separatorComponent=()=>{
        return(
            <View style={styles.separator}/>
        )
    }
    return (
        <View>
            <View style={styles.containerTouch}>
                <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                    <Text style={styles.textHeader}>Kategoriler</Text>
                </TouchableOpacity>
            </View>
            {
                isVisible ?
                    <View>
                        <FlatList
                            data={categoryList}
                            renderItem={_renderList}
                            keyExtractor={(item, index) => item.id}
                            ItemSeparatorComponent={_separatorComponent}
                            style={styles.flatContainer}
                        />
                    </View>
                    :
                    null
            }
        </View>
    );
};

export default Category;
