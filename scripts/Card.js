export default class Card {

    constructor(data,cardSelector){
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate(){
        return document.querySelector(this._cardSelector).content.querySelector('.post__item').cloneNode(true);
    }

    _setEventListener(){
        
    }

    generateCard(){

        this._element = this._getTemplate();
        this._element.querySelector('.post__image').setAttribute('src',this._link);
        this._element.querySelector('.post__name').textContent = this._name;
        return this._element;

    }

}