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