import moment from 'moment';

const  getDayText=(date)=>{
    return moment(date).toDate().toDateString().split(' ')[0];
}
export const createShoppingListForRender = (itemList, localeDateFormat)=>{
    if(itemList?.length === 0){
        return [];
    }

    let convertedList=[];
    let item={};

    for(let items in itemList){
        item.key=itemList[items].key;
        item.title=itemList[items].item;
        item.price=itemList[items].price;
        item.date=itemList[items].date;
        item.day=getDayText(itemList[items].date);
        convertedList.push(item);
        item={};
    }
    return convertedList;
}