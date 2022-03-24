const express = require('express');
const router = express.Router();
const users = require('./users')

// GET Default
router.get('/', (req, res) => {
    res.send(`
        <h1>Group 1</h1>
        <p>Ryven Rainhard Robot</p>
        <p>Aditya Ananda</p>
        <p>Christian Hendrik Pratasis</p>
        <p>Gillvend Floistan Lumba</p>
        <p>Chundi Edward Runtuwene</p>
    `);
});

// GET users
router.get('/users', (req, res) => {
    res.send(users);
});

// GET users name
router.get('/users/:name', (req, res) => {
    const data = users.filter(r => r.name.toLowerCase() === req.params.name.toLowerCase());

    if(data.length === 0) {
        res.send(JSON.stringify({
            message: "Data user tidak ditemukan."
        }));
    }
    else {
        res.send(JSON.stringify({
            id: data[0].id,
            name: data[0].name,
        }));
    }
});

// POST users
router.post('/users', (req, res) => {
    const {name} = req.body;

    if(name.length > 0 && name.match(/[0-z]/i)) {
        if(users.filter(r => r.name.toLowerCase() === name.toLowerCase()).length === 0) {
            if(users.length === 0)  {
                id = 1;
            }
            else if (users.length === 1) {
                id = users[0].id + 1;
            }
            else {
                let com = true;

                for(let r=0; r<users.length-1; r++) {
                    if(users[r].id+1 !== users[r+1].id) {
                        id = users[r].id + 1;
                        com = false;
                        break;
                    }
                }
                
                if(com) {
                    id = users.length + 1;
                }
            }

            let obj = {
                id, name
            };
            users.splice(id-1, 0, obj);
        }

        res.send(users);
    }
    else {
        res.status(400).send(JSON.stringify({
            message: "Masukkan data yang akan diubah."
        }));
    }
});

// PUT users name
router.put('/users/:name', (req, res) => {
    const {name} = req.body;
    
    if(users.filter(r => r.name.toLowerCase() === req.params.name.toLowerCase()).length === 0) {
        res.status(400).send(JSON.stringify({
            message: "Masukkan data yang akan diubah."
        }));
    }
    else if(name.length < 0 || !name.match(/[0-z]/i)) {
        res.status(400).send(JSON.stringify({
            message: "Masukkan data untuk mengubah data yang sudah ada."
        }));
    }
    else {
        users.forEach(r => {
            if(r.name.toLowerCase() === req.params.name.toLowerCase()) {
                r.name = name;
            }
        });

        res.send(users);
    }
});

// DELETE users name
router.delete('/users/:name', (req, res) => {
    if(users.filter(r => r.name.toLowerCase() === req.params.name.toLowerCase()).length === 0) {
        res.send(JSON.stringify({
            message: "Data user tidak ditemukan."
        }));
    }
    else {
        users = users.filter(r => r.name.toLowerCase() !== req.params.name.toLowerCase());
        res.send(users);
    }
});

module.exports = router;
