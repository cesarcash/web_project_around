export default class Section {
    
    constructor({data,renderer}, containerSelector){
        this._items = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(){

        this._clear();

        this._items.forEach(item => {
            this._renderer(item);
        })

    }

    addItem(element){
        this._container.append(element);
    }

    _clear(){
        this._container.innerHTML = '';
    }

}