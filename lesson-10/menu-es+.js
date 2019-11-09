export class Component {
    constructor(element) {
        this._element = element;
    }

    hide() {
        this._element.setAttribute('hidden', true)
    }
};


export class Menu extends Component {
    constructor({element, title, list}) {
        super(element);
        this._title = title;
        this._list = list;
        this.render();
        this._dropDownArea = this._element.querySelector('.dropdown-menu');
        this._element.querySelector('button').addEventListener('click', this.toggle.bind(this));
    };

    close() {
        this._dropDownArea.classList.remove('show');
    }

    open() {
        this._dropDownArea.classList.add('show');
    }

    toggle() {
        this._dropDownArea.classList.toggle('show');
    }

    render() {
        this._element.innerHTML = `
       <div class="dropdown">
             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               ${this._title}
             </button>
             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  ${this._list.map((el) => `<a class="dropdown-item" href="#">${el}</a>`).join('')}
             </div>
        </div>
    `
    };
}






