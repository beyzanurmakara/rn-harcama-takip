import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const CreateProfile = props => {
    const navigation = useNavigation();
    return (
        <View style={{flexDirection:'column'}}>
            <Text>Profil oluşturmak sana iyi gelecek :)</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('settings-screen',true)}>
                <Text style={{color:'blue'}}>Buradan oluşturabilirsin</Text>
            </TouchableOpacity>
        </View>

    
    );
};

export default CreateProfile;
