console.clear();

const users = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Smith",
    },
    {
        id: 5,
        name: "Bob",
    },
];
//console.log('users: ', users);

// const name = "Alpha";
// const id = null;
// if(users.length === 0) {
//     console.log(`id = 1`);
// }
// else if (users.length === 1) {
//     console.log(`id = ${users[0].id + 1}`);
// }
// else {
//     for(let r=0; r<users.length-1; r++) {
//         if(users[r].id+1 !== users[r+1].id) {
//             console.log(`id = ${users[r].id + 1}`);
//             break;
//         }
//     }
// }

// users.forEach(r => {
//     if(r.name === 'Bob') {
//         r.name = 'telor';
//     }
// });
// console.log(users);

// const data = users.filter(r => r.id === 1);
// console.log(data.id);

console.log(users);
users = users.filter(r => r.name !== 'Bob')
console.log(users);
