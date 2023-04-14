type Operation = 'multiply' | 'add' | 'divide';
type Result = number;

const calculator = (a:number, b:number, operation: Operation): Result  =>{  
    if (operation == 'multiply') return a*b;
    if (operation === 'add') return a+b;
    if (operation == 'divide'){
        if (b === 0) throw new Error('can\'t divide by 0! sorry');
       
        return a/b;
    }
    throw new Error("Operation is not valid");
    
}
try {
    const result = calculator(3, 0, 'add');
    console.log(result);
} catch (error) {
    console.log("Something went wrong", error)
}