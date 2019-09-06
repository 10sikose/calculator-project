import { elements } from './views/base';
import * as view from './views/view';

// CONTROL
elements.ctrlsCont.addEventListener('click', evt => {
    if(evt.target.matches('.m-nums')) {
        view.displayInput(evt.target.textContent);
    }
})


