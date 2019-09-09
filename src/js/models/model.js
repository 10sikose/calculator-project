export { add } from 'mathjs/number';

export class State { // to keep track of operands and operator
    constructor() {
        this.operands = [];
    }
    addOperand(num) {
        this.operands.push(num);
    }
    resetOperands() {
        this.operands.length = 0;
    }
    replaceFirstOperand(num) {
        /* for edge cases where 5 + 5 = 10 and 
        then another press of = equals 15 */
        this.operands.shift();
        this.operands.unshift(num);
    }
    setOperator(operator) {
        this.operator = operator;
    }
    resetOperator() {
        delete this.operator;
    }
}