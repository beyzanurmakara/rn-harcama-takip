import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/categoryStyles';

const Category = props => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View>
            <View style={styles.containerTouch}>
                <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                    <Text>Kategoriler</Text>
                </TouchableOpacity>
            </View>
            {
                isVisible ?
                    <View>
                        <View>
                            <TouchableOpacity>
                                <Text>Market</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text>Manav</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                :
                null
           }
        </View>
    );
};

export default Category;
