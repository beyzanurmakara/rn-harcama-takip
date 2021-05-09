// hex
const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    mainColor1:'#73B5C9', //blue
    mainColor2:'#FF9257',
    greys: {
        1: '#383838', //koyu gri
        2: '#ACACAC', //orta ayar gri
        3: '#868686', //orta  koyu arası gri
        4: '#BCBCBC', // açık gri
    },
    delete:'#FF5739', //red
    today:'#0036C7', //lacivert
};

export const colorNames = {
    auth: {
        background: 'auth/background',
        inputBorder: 'auth/inputBorder',
        inputBackground: 'auth/inputBackground',
        inputText: 'auth/inputText',
        inputPlaceholder: 'auth/inputPlaceholder',
        coloredButtonBackground: 'auth/coloredButtonBackground',
        coloredButtonText: 'auth/coloredButtonText',
        paleButtonBackground: 'auth/paleButtonBackground',
        paleButtonText: 'auth/paleButtonText',
        appNameText: 'auth/appNameText',
    },
    homePage:{
        background:'homePage/background',
        shoppingItemBackround:'homePage/shoppingItemBackround',
        shoppingItemBorder:'homePage/shoppingItemBorder',
        shoppingItemHeaderText:'homePage/shoppingItemHeaderText',
        shoppingItemPriceText:'homePage/shoppingItemPriceText',
        shoppingItemDateText:'homePage/shoppingItemDateText',
        shoppingItemDayText:'homePage/shoppingItemDayText',
        shoppingItemCheckIconSelectedBackground:'homePage/shoppingItemCheckIconBackground',
        shoppingItemCheckIconUnSelectedBackground:'homePage/shoppingItemCheckIconBackground',
        addButtonBackground:'homePage/addButtonBackground',
        deleteButtonBackground:'homePage/deleteButtonBackground',
        buttonText:'homePage/buttonText'
    },
    addNew:{
        background:'addNew/background',
        textInputBackground:'addNew/textInputBackground',
        textInputPlaceHolder:'addNew/textInputPlaceHolder',
        textInputText:'addNew/textInputText',
        textInputBorder:'addNew/textInputBorder',
        calendarIcon:'addNew/calendarIcon',
        todayText:'addNew/todayText',
        addButtonBackground:'addNew/addButtonBackground',
        addButtonText:'addNew/addButtonText',
        calendarDayTextColor:'addNew/calendarDayTextColor' , 
        calendarBackgroundColor:'addNew/calendarBackgroundColor',
        calendarDayDisabledTextColor:'addNew/calendarDayDisabledTextColor'
    },
    settings:{
        background: 'settings/background',
        usernameText: 'settings/usernameText',
        userEmailText: 'setting/userEmailText',
        titleText: 'settings/titleText',
        radioButtonUnselectedIcon: 'settings/radioButtonUnselectedIcon',
        radioButtonSelectedIcon: 'settings/radioButtonSelectedIcon',
        radioButtonText: 'settings/radioButtonText',
        signOutButtonBackground: 'settings/signOutButtonBackground',
        signOutButtonBorder: 'settings/signOutButtonBorder',
        signOutButtonText: 'settings/signOutButtonText',
    },
    header:{
        background: 'header/background',
        text: 'header/text',
        backIcon: 'header/backIcon',
        rightIcon: 'header/rightIcon',
    },
    error:{
        background:'error/background',
        containerBorderColor:'error/containerBorderColor',
        messageTextColor:'error/messageTextColor',
        errorTextColor:'error/errorTextColor',
        errorTextBackground:'error/errorTextBackground',
        modalBackdropColor:'error/modalBackdropColor',
        iconColor:'error/iconColor',
    },
    editProfile:{
        background:'editProfile/background',
        text:'editProfile/text',
        placeHolder:'editProfile/placeHolder',
        borderColor:'editProfile/borderColor',
        inputBackground:'editProfile/inputBackground',
        buttonBackground:'editProfile/buttonBackground',
    }
};

export const darkColors = {
    // auth
    //[colorNames.auth.background]: constantColors.pink, // örnek
    [colorNames.auth.background]: constantColors.mainColor1,
    [colorNames.auth.inputBorder]: constantColors.greys[1],
    [colorNames.auth.inputBackground]: 'rgba(56, 56, 56, 10)',
    [colorNames.auth.inputText]: constantColors.greys[1],
    [colorNames.auth.inputPlaceholder]: 'rgba(56, 56, 56, 40)',
    [colorNames.auth.coloredButtonBackground]: constantColors.greys[1],
    [colorNames.auth.coloredButtonText]: constantColors.white,
    [colorNames.auth.paleButtonBackground]: constantColors.transparent,
    [colorNames.auth.paleButtonText]: constantColors.greys[1],
    [colorNames.auth.appNameText]: constantColors.greys[1],
    //homepage
    [colorNames.homePage.background]:constantColors.greys[1],
    [colorNames.homePage.shoppingItemBackround]:constantColors.transparent,
    [colorNames.homePage.shoppingItemBorder]:constantColors.greys[2],
    [colorNames.homePage.shoppingItemHeaderText]:constantColors.mainColor2,
    [colorNames.homePage.shoppingItemPriceText]:constantColors.white,
    [colorNames.homePage.shoppingItemDateText]:constantColors.greys[2],
    [colorNames.homePage.shoppingItemDayText]:constantColors.greys[2],
    [colorNames.homePage.shoppingItemCheckIconSelectedBackground]:constantColors.mainColor2,
    [colorNames.homePage.shoppingItemCheckIconUnSelectedBackground]:constantColors.greys[2],
    [colorNames.homePage.addButtonBackground]:constantColors.mainColor2,
    [colorNames.homePage.deleteButtonBackground]:constantColors.delete,
    [colorNames.homePage.buttonText]:constantColors.white,
    //addNew
    [colorNames.addNew.background]:constantColors.greys[1],
    [colorNames.addNew.textInputBackground]:constantColors.transparent,
    [colorNames.addNew.textInputPlaceHolder]:'rgba(255,255,255,0.4)',
    [colorNames.addNew.textInputText]:constantColors.white,
    [colorNames.addNew.textInputBorder]:constantColors.greys[2],
    [colorNames.addNew.calendarIcon]:constantColors.white,
    [colorNames.addNew.todayText]:constantColors.mainColor1,
    [colorNames.addNew.addButtonBackground]:constantColors.mainColor2,
    [colorNames.addNew.addButtonText]:constantColors.white,
    [colorNames.addNew.calendarDayTextColor]:constantColors.black,
    [colorNames.addNew.calendarDayDisabledTextColor]:constantColors.greys[2],
    [colorNames.addNew.calendarBackgroundColor]:'rgba(115, 181, 201, 0.3)',
    //settings
    [colorNames.settings.background]: constantColors.greys[1],
    [colorNames.settings.usernameText]: constantColors.white,
    [colorNames.settings.userEmailText]: constantColors.white,
    [colorNames.settings.titleText]: constantColors.mainColor2,
    [colorNames.settings.radioButtonUnselectedIcon]: constantColors.greys[2],
    [colorNames.settings.radioButtonSelectedIcon]: constantColors.mainColor2,
    [colorNames.settings.radioButtonText]: constantColors.white,
    [colorNames.settings.signOutButtonBackground]: constantColors.transparent,
    [colorNames.settings.signOutButtonBorder]: constantColors.mainColor2,
    [colorNames.settings.signOutButtonText]: constantColors.white,
    //header
    [colorNames.header.background]: constantColors.mainColor1,
    [colorNames.header.text]: constantColors.greys[1],
    [colorNames.header.backIcon]: constantColors.greys[1],
    [colorNames.header.rightIcon]: constantColors.greys[1],
    //error
    [colorNames.error.background]:constantColors.greys[4],
    [colorNames.error.containerBorderColor]:constantColors.delete,
    [colorNames.error.messageTextColor]:constantColors.white,
    [colorNames.error.errorTextColor]:constantColors.white,
    [colorNames.error.errorTextBackground]:constantColors.delete,
    [colorNames.error.modalBackdropColor]:constantColors.transparent,
    [colorNames.error.iconColor]:constantColors.delete,
    //editProfile
    [colorNames.editProfile.background]:constantColors.greys[1],
    [colorNames.editProfile.text]:constantColors.white,
    [colorNames.editProfile.placeHolder]:'rgba(255,255,255,0.4)',
    [colorNames.editProfile.borderColor]:constantColors.white,
    [colorNames.editProfile.inputBackground]:'rgba(0,0,0,0.5)',
    [colorNames.editProfile.buttonBackground]:constantColors.mainColor2,

};

export const lightColors = {
    // auth
    [colorNames.auth.background]: constantColors.mainColor1,
    [colorNames.auth.inputBorder]: constantColors.white,
    [colorNames.auth.inputBackground]: 'rgba(255,255,255,0.2)',//toRGBA(constantColors.white, 20)
    [colorNames.auth.inputText]: constantColors.white,
    [colorNames.auth.inputPlaceholder]: 'rgba(255,255,255,0.6)',
    [colorNames.auth.coloredButtonBackground]: constantColors.white,
    [colorNames.auth.coloredButtonText]: constantColors.mainColor2,
    [colorNames.auth.paleButtonBackground]: constantColors.transparent,
    [colorNames.auth.paleButtonText]: constantColors.white,
    [colorNames.auth.appNameText]: constantColors.white,
    //homepage
    [colorNames.homePage.background]:constantColors.white,
    [colorNames.homePage.shoppingItemBackround]:constantColors.transparent,
    [colorNames.homePage.shoppingItemBorder]:constantColors.greys[2],
    [colorNames.homePage.shoppingItemHeaderText]:constantColors.mainColor2,
    [colorNames.homePage.shoppingItemPriceText]:constantColors.black,
    [colorNames.homePage.shoppingItemDateText]:constantColors.greys[2],
    [colorNames.homePage.shoppingItemDayText]:constantColors.greys[2],
    [colorNames.homePage.shoppingItemCheckIconSelectedBackground]:constantColors.mainColor2,
    [colorNames.homePage.shoppingItemCheckIconUnSelectedBackground]:constantColors.greys[2],
    [colorNames.homePage.addButtonBackground]:constantColors.mainColor2,
    [colorNames.homePage.deleteButtonBackground]:constantColors.delete,
    [colorNames.homePage.buttonText]:constantColors.white,
    //addNew
    [colorNames.addNew.background]:constantColors.white,
    [colorNames.addNew.textInputBackground]:constantColors.transparent,
    [colorNames.addNew.textInputPlaceHolder]:'rgba(0,0,0,0.4)',
    [colorNames.addNew.textInputText]:constantColors.black,
    [colorNames.addNew.textInputBorder]:constantColors.greys[2],
    [colorNames.addNew.calendarIcon]:constantColors.black,
    [colorNames.addNew.todayText]:constantColors.mainColor1,
    [colorNames.addNew.addButtonBackground]:constantColors.mainColor2,
    [colorNames.addNew.addButtonText]:constantColors.white,
    [colorNames.addNew.addButtonBorder]:constantColors.greys[2],
    [colorNames.addNew.calendarDayTextColor]:constantColors.black,
    [colorNames.addNew.calendarDayDisabledTextColor]:constantColors.greys[2],
    [colorNames.addNew.calendarBackgroundColor]:'rgba(115, 181, 201, 0.3)',
    //settings
    [colorNames.settings.background]: constantColors.white,
    [colorNames.settings.usernameText]: constantColors.black,
    [colorNames.settings.userEmailText]: constantColors.black,
    [colorNames.settings.titleText]: constantColors.mainColor2,
    [colorNames.settings.radioButtonUnselectedIcon]: constantColors.greys[2],
    [colorNames.settings.radioButtonSelectedIcon]: constantColors.mainColor2,
    [colorNames.settings.radioButtonText]: constantColors.black,
    [colorNames.settings.signOutButtonBackground]: constantColors.transparent,
    [colorNames.settings.signOutButtonBorder]: constantColors.mainColor2,
    [colorNames.settings.signOutButtonText]: constantColors.black,
    // header
    [colorNames.header.background]: constantColors.mainColor1,
    [colorNames.header.text]: constantColors.white,
    [colorNames.header.backIcon]: constantColors.white,
    [colorNames.header.rightIcon]: constantColors.white,
    //error
    [colorNames.error.background]:constantColors.white,
    [colorNames.error.containerBorderColor]:constantColors.delete,
    [colorNames.error.messageTextColor]:constantColors.black,
    [colorNames.error.errorTextColor]:constantColors.white,
    [colorNames.error.errorTextBackground]:constantColors.delete,
    [colorNames.error.modalBackdropColor]:constantColors.transparent,
    [colorNames.error.iconColor]:constantColors.delete,
    //editProfile
    [colorNames.editProfile.background]:constantColors.white,
    [colorNames.editProfile.text]:constantColors.black,
    [colorNames.editProfile.placeHolder]:constantColors.greys[2],
    [colorNames.editProfile.borderColor]:constantColors.greys[2],
    [colorNames.editProfile.inputBackground]:'rgba(0,0,0,0.5)',
    [colorNames.editProfile.buttonBackground]:constantColors.mainColor2,
 
};
