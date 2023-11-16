
exports.read = async (req, res) => {
    try {
        const id = req.params.id
        res.status(200).send(`read one product id: ${id}`)
    }catch (err) {
        res.status(400).send('Server error')
    }
}

exports.list = async (req, res) => {
    try {

    }catch (err) {
        res.status(400).send('Server error')
    }
}