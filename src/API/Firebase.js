import database from '@react-native-firebase/database';
import { getCurrentUser } from '../Modules/Auth';
import { converterRawData } from './Converter';

export const subscribeToItemData = (onDataRetrieved) => {
    const userId = getCurrentUser().uid;

    database()
        .ref(`/itemTumbnailList/${userId}`)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedList = converterRawData(rawData);
            onDataRetrieved(convertedList);
        });
    return () => {
        database()
            .ref(`/itemTumbnailList/${userId}`)
            .off('value');
    };
}

export const getItemDetail = (itemKey, onRetrieved) => {
    database()
        .ref(`/itemList/${itemKey}`)
        .once('value')
        .then(snapshot => {
            onRetrieved(snapshot.val());
        })
}

export const addItem = async (item, onComlete) => {
    try {

        const itemTumbnail = {
            title: item.title,
            date: item.date,
            price: item.price,
        };

        const userId = getCurrentUser().uid;

        const newItemThumbnailRef = database()
            .ref(`/itemTumbnailList/${userId}`)
            .push();

        await newItemThumbnailRef.set(itemTumbnail);

        const itemKey = newItemThumbnailRef.key;

        await database()
            .ref(`/itemList/${itemKey}`)
            .set(item);

        onComlete();
    } catch (error) {
        console.log(error);
    }
}

export const updateItem = async (item, onComplete) => {
    try {

        const itemList = {
            title: item.title,
            date: item.date,
            price: item.price,
            detail: item.detail,
        }

        await database()
            .ref(`/itemList/${item.key}`)
            .update(itemList)

        const userID = getCurrentUser().uid;

        const itemTumbnail = {
            title: item.title,
            date: item.date,
            price: item.price,
        };



        await database()
            .ref(`/itemTumbnailList/${userID}/${item.key}`)
            .update(itemTumbnail)

        onComplete();

    } catch (error) {

        console.log(error)
    }
}

export const deleteItem = (itemKey) => {
    const userID=getCurrentUser().uid;
    database()
        .ref(`/itemTumbnailList/${userID}/${itemKey}`)
        .remove()
    database()
        .ref(`/itemList/${itemKey}`)
        .remove()
}