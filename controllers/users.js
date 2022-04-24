import { v4 as uuidv4 } from 'uuid'; // to create a random UUID

let users = [

];

export const getUsers = (req, res) => {     // First Page from /users
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    // let uuid = uuidv4();
    // const userWithId = { ...user, id: uuid }; // ...user = all data in user obj ( { ...user, id: uuid } = all data in user obj + id)
    // users.push(userWithId);
    users.push({ id: uuidv4(), ...user });
    res.send(`${user.firstName} ${user.lastName}'s profile data is added to the database.`);
};

export const findUser = (req, res) => { // :id makes anything after users is defined as id query params
    const { id } = req.params; // get id from parameters of req

    const foundUser = users.find((u) => u.id === id);
    let result;
    if (foundUser) result = foundUser;
    else {
        result = "User Not Found";
    }
    res.send(result);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((u) => u.id !== id);
    res.send(`User with id ${id} is deleted!`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((u) => u.id === id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with id ${id} is updated!`);
};