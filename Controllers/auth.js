const db = require('../Config/db')
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    try {
        const {userName, password} = req.body
        // 1.Check user
        db.query('select userName, password from users where userName = $1', [userName], async (error, results)=> {
           if (error) throw error
           if (results.rowCount > 0) {
                res.status(400).send('User already exists.')
           }else {
                // 2.Encrypt
                const salt =  await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)

                // 3.Save
                db.query('insert into users (userName, password) values ($1, $2)', [userName, hashPassword], async (error, results) => {
                    if (error) throw error
                    res.status(200).send('Register complete.')
                })
           }
        })    
    }catch (err) {
        res.status(500).send('Server errror')
    }
}


exports.login = async (req, res) => {
    try {
        // 1.Check User

        // 2.Check Password

        // 3. Create payload

        // 4.Generate Token
        
        res.status(200).send('Login')
    }catch (err) {
        res.status(500).send('Server error')
    }
}

