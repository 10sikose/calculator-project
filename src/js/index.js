import { elements } from './views/base';
import * as view from './views/view';

// CONTROL
elements.ctrlsCont.addEventListener('click', evt => {
    if(evt.target.matches('.m-nums')) {
        view.addNumber(evt.target.textContent);
    } else if(evt.target.matches('#decimal')) {
        view.addDecimal();
    } else if(evt.target.closest('#backspace')) {
        view.deleteLastChar();
    } else if(evt.target.matches('#correct')) {
        view.clearValue();
    }
})


