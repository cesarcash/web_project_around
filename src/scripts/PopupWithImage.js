import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

    constructor(selectorPopup){
        super(selectorPopup);
    }

    open(link,name){

        super.open();

        this._popup.querySelector('.popup__view-image').setAttribute('src',link);
        this._popup.querySelector('.popup__view-image').setAttribute('alt',name);
        this._popup.querySelector('.popup__text').textContent = name;

    }

    setEventListeners(){
        super.setEventListeners();
    }

}