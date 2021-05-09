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
export const getProfileSubscribe=(userID, onRetrieved)=>{
    database()
        .ref(`/userProfile/${userID}`)
        .on('value',snapshot=>{
            onRetrieved(snapshot.val());
        });
    return()=>{
        database()
            .ref(`/userProfile/${userID}`)
            .off();
    };
}