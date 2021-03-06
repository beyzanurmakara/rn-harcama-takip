import database from '@react-native-firebase/database';
import { getCurrentUser } from '../../Auth';

export const createProfile = async (profile, onComplete) => {
    try {
        const userID = getCurrentUser().uid;
        await database()
            .ref(`/userProfile/${userID}`)
            .set(profile);
        onComplete();
    } catch (error) {
    }
}
export const getProfileSubscribe = (onRetrieved) => {
    const userID = getCurrentUser().uid;
    database()
        .ref(`/userProfile/${userID}`)
        .on('value', snapshot => {
            onRetrieved(snapshot.val());
        });
    return () => {
        database()
            .ref(`/userProfile/${userID}`)
            .off('value');
    };
}

export const updateProfile = async (profile) => {
    try {
        const userID = getCurrentUser().uid;
        const userProfile = {
            expense: profile.expense,
            income: profile.income,
            total: profile.total,
        }
        await database()
            .ref(`/userProfile/${userID}`)
            .update(userProfile)
    } catch (error) {
    }
}

export const getProfile = (userID, onRetrieved) => {
    database()
        .ref(`/userProfile/${userID}`)
        .once('value')
        .then(snapshot => {
            onRetrieved(snapshot.val());
        })
}
