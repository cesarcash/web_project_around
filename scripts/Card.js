export default class Card {

    constructor(data,cardSelector,handleCardClick){
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate(){
        return document.querySelector(this._cardSelector).content.querySelector('.post__item').cloneNode(true);
    }

    _setEventListeners(){

        this._element.querySelector('.button_action_like').addEventListener('click', () => {
            this._handleLikeClick();
        })

        this._element.querySelector('.button_action_delete').addEventListener('click', (e) => {
            this._handleDeleteCard(e)
        })

        this._element.querySelector('.post__image').addEventListener('click', (e) => {
            this._handleCardClick(this._link,this._name)
        })

    }
    
    _handleDeleteCard(e){
        e.target.closest('.post__item').remove();
    }
    
    _handleLikeClick(){
        this._element.querySelector('.button_action_like').classList.toggle('button_is_active');
    }

    generateCard(){

        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.post__image').setAttribute('src',this._link);
        this._element.querySelector('.post__image').setAttribute('alt',this._name);
        this._element.querySelector('.post__name').textContent = this._name;
        return this._element;

    }

}