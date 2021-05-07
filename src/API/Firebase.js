import database from '@react-native-firebase/database';
import { getCurrentUser } from '../Modules/Auth';

export const addItem=async item =>{
    try {

        const itemTumbnail={
            item:item.title,
            date:item.momentDate,
            price:item.price,
        };

        const userId=getCurrentUser().uid;

        const newItemThumbnailRef = database()
            .ref(`/itemTumbnailList/${userId}`)
            .push();
        
        await newItemThumbnailRef.set(itemTumbnail);

        const itemKey=newItemThumbnailRef.key;
        
        await database()
            .ref(`/itemList/${itemKey}`)
            .set(item);
        
    } catch (error) {
        console.log(error);
    }
}