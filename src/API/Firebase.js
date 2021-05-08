import database from '@react-native-firebase/database';
import { getCurrentUser } from '../Modules/Auth';
import { converterRawData } from './Converter';

export const subscribeToItemData = (onDataRetrieved) => {
    const userId=getCurrentUser().uid;

    database()
        .ref(`/itemTumbnailList/${userId}`)
        .on('value', snapshot =>{
            const rawData=snapshot.val();
            const  convertedList = converterRawData(rawData);
            onDataRetrieved(convertedList);
        });
    return ()=>{
        database()
            .ref(`/itemTumbnailList/${userId}`)
            .off('value');
    };
}

export const getItemDetail = (itemKey, onRetrieved) =>{
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
            item: item.title,
            date: item.momentDate,
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