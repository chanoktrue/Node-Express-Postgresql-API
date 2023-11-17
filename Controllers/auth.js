
exports.register = async (req, res) => {
    try {
        res.status(200).send('Register')
    }catch (err) {
        res.status(500).send('Server errror')
    }
}


exports.login = async (req, res) => {
    try {
        res.status(200).send('Login')
    }catch (err) {
        res.status(500).send('Server error')
    }
}

