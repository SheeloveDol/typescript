const createUser = (firstName: string, lastName: string, email: string, address: string, phone: number, occupation: string, gender: string) => {
	return {/* Do something here.. */}
}

// We can make the above function more readable by using a type alias

// First we create a type alias that contains the types for all of our paramaters/arguments
type User = {
	firstName: string;
	lastName: string;
	email: string;
	address: string;
	phone: number;
	occupation: string;
	gender: string;
}

// We then simply pass the User type in our function to not only tell it both the type for its arguments but also the second : User tells it what the output should be as well.

const createUser2 = (user: User): User => {
	return { firstName: '', lastName: '', email: '', address: '', phone: 5, occupation: '', gender: ''}
}
// I had to fill out the return statment because the function expects a User type to be returned. If I didn't fill it out, it would throw an error.



// Now when we invoke the createUser() function, it will require all the arguments and their respective types as a result

createUser2({firstName: 'Vin', lastName: 'Diesel', email: 'vin@mail.com', address: '123 45 Street', phone: 555-555-5555, occupation: 'Actor', gender: 'Male'})




export {}