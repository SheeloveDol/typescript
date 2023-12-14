type User = {
	name: string
	email: string
	phone: string
	isMember: boolean
}

type CPU = {
	serial: number
	processor: number
	isSentient: boolean
}

let newEntity: User | CPU = {name: "Vin Diesel", email: 'vd@mail.com', phone: 555, isMember: true}

newEntity = {serial: 012345, processor: 67890, isSentient: false}

// These examples show the versatility of Unions


// another example of a union type

const getUserId = (id: string | number) => {
	// We still need to do a check to assign type specific methods
	if (typeof id === "string") {
		id.toLowerCase()  // This method is only available to strings
	} else if (typeof id === "number") {
		id += 2
	}
}

console.log(getUserId(5)) // 7 