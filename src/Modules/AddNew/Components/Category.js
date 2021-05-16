import React, { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { categoryList } from '../../Homepage/categoryList';
import { useThemedStyles } from '../../Theming';
import { useLocalization, Texts, categories } from '../../Localization';

import getStyles from '../styles/categoryStyles';

const Category = props => {
    const [isVisible, setIsVisible] = useState(false);

    const styles = useThemedStyles(getStyles);

    const loc = useLocalization();

    const _onPressItem = (item) => {
        setIsVisible(false);
        props.onPress_item(item);
    }

    return (
        <View>
            <View style={styles.containerTouch}>
                <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                    <Text style={styles.textHeader}>{loc.t(Texts.categories)}</Text>
                </TouchableOpacity>
            </View>
            {
                isVisible ?
                    <View style={styles.flatContainer}>
                        <ScrollView>
                            {categoryList.map(item => {
                                return (
                                    <>
                                        <TouchableOpacity key={item.id} style={styles.textContainer} onPress={() => _onPressItem(item)}>
                                            <Text style={styles.text}>{loc.t(categories[item.name])}</Text>
                                        </TouchableOpacity>
                                        <View style={styles.separator} />
                                    </>
                                )
                            })}
                        </ScrollView>
                    </View>
                    :
                    null
            }
        </View>
    );
};

export default Category;
