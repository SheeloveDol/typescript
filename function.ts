const add5 = (num: number): number => {
    return num + 5;
}


const signUpUser = (name: string, email: string, isAdmin: boolean) => {}

// To pass a default value to a parameter, use the equal sign after setting the type
const loginUser = (email: string, password: string, rememberMe: boolean = false) => {}

let getUpperCase = (str: string) => str.toUpperCase();

// An example of when to use the void type is when you want to log something to the console
const logToConsole = (str: string): void => {
    console.log(str);
}

// The never type is used when you want to throw an error
const throwError = (message: string): never => {
    throw new Error(message);
}


add5(17)
console.log(getUpperCase('hello'));
signUpUser('lol', 'j@mail.com', false)
loginUser('g@mail.com', '1234') // rememberMe is false by default   



















export {}