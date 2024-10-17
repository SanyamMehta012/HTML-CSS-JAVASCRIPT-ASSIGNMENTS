

let person = {
    name: 'sanyam mehta',
    age: 20,
    address: {
      street: 'Kalyanpur, e-type, room.no-12',
      city: 'Rohtas',
      state: "Bihar"
    }
  };
  

let result = extractNameAndStreet(person);

function extractNameAndStreet(person) {
    // Destructure the name and street from the nested objects
    const { name, address: { street } } = person;
    
    // Return an object with name and street properties
    return { name, street };
  }
  console.log(result); // Output: { name: 'John Doe', street: '123 Main St' }
  