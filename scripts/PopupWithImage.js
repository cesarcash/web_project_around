import Popup from './Popup.js';
import {modalImage} from './utils.js';

export default class PopupWithImage extends Popup {

    constructor(selectorPopup){
        super(selectorPopup);
    }
    
    open(){
        
        super.open();
        // console.log(this._popup)
        console.log(modalImage)
        // return this._popup;

        // console.log('abrir')

        // this._popup.querySelector('.popup__view-image').setAttribute('src',this._link);
        // this._popup.querySelector('.popup__view-image').setAttribute('alt',this._name);
        // this._popup.querySelector('.popup__text').textContent = this._name;

        // modalImage.querySelector('.popup__view-image').setAttribute('src',this._link);
        // modalImage.querySelector('.popup__view-image').setAttribute('alt',this._name);
        // modalImage.querySelector('.popup__text').textContent = this._name;

        console.log("🚀 ~ PopupWithImage ~ open ~ this._link:", this._link)
    }

}