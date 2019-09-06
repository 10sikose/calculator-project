// VIEW
import { elements } from './base';

export const deleteLastChar = () => {
    let value = elements.display.textContent;
    if(value.length > 1) {
        value = value.slice(0, -1);
        elements.display.textContent = value;
    } else if(value.length === 1) {
        elements.display.textContent = '0';
    }
}

export const clearValue = () => {
    elements.display.textContent = '0';
}

export const addNumber = input => {
    if(elements.display.textContent === '0') {
        elements.display.textContent = input;
    } else { //ADD CONDITION FOR MAX NO OF DIGITS
        elements.display.textContent += input;
    }
}

export const addDecimal = () => {
    if(!elements.display.textContent.includes(',')) {
        elements.display.textContent += ',';
    }
}

export const displayValue = res => {
    elements.display.textContent = res;
}

/*
1) delete last character (only in type mode) DONE
2) clear whole value DONE
3) type number DONE
4) display operation result DONE
*/