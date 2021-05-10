import database from '@react-native-firebase/database';
import { getCurrentUser } from '../../Auth';

export const createProfile=async(profile, onComplete)=>{
    try {
        const userID=getCurrentUser().uid;
        await database()
            .ref(`/userProfile/${userID}`)
            .set(profile);
        onComplete();
    } catch (error) {
        console.log(error);
    }
}
export const getProfileSubscribe=(onRetrieved)=>{
    const userID=getCurrentUser().uid;
    database()
        .ref(`/userProfile/${userID}`)
        .on('value',snapshot=>{
            onRetrieved(snapshot.val());
            //console.log('firebase',snapshot.val())
        });
    return()=>{
        database()
            .ref(`/userProfile/${userID}`)
            .off('value');
    };
}