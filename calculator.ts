

const calculator = (a:number, b:number, operation: 'multiply' | 'add' | 'divide') =>{  
    if (operation == 'multiply') return a*b;
    if (operation === 'add') return a+b;
    if (operation == 'divide'){
        if (b === 0) return 'can\'t divide by 0! sorry';
        return a/b;
    }
}
const result = calculator(3, 0, 'add');
console.log(result);