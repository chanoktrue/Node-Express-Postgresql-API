const pool = require('../Config/db')

exports.read = async (req, res) => {
    try {
        const id = req.params.id
        pool.query(`select * from products where id = $1`, [id], (error, result) => {
            if (error) throw error
            res.status(200).json(result.rows)
        })
    }catch (err) {
        res.status(500).send('Server error')
    }
}

exports.list = async (req, res) => {
    try {
        pool.query('select * from products', (error, result) => {
            if (error) throw error
            res.status(200).json(result.rows)
        })
    }catch (err) {
        res.status(500).send('Server error')
    }
}

exports.create = async (req, res) => {
    
    try {
        const { productCode, productName, price } = req.body
        pool.query('insert into products (productCode, productName, price) values ($1, $2, $3)', [productCode, productName, price], (error, result) => {
            if (error) throw error
            res.status(201).json(result.rows[0])
        })
    }catch (err) {
        res.status(500).send('Server error')
    }
}

exports.update = async(req, res) => {
    try {
        const id = req.params.id
        const {productCode, productName, price} = req.body
        pool.query('update products set productCode = $1, productName = $2, price = $3 where id = $4', [productCode, productName, price, id])
        res.status(200).send('update one product')
    }catch (err) {
        res.status(500).send('Server errror')
    }
}

exports.remove = async(req, res) => {
    try {
        const id = req.params.id
        pool.query('delete from products where id = $1', [id], (error, result) => {
            if (error) throw error
            res.status(200).json(`Product deleteed with id: ${id}`)
        })
    }catch (err) {
        res.status(500).send('Server error')
    }
}


exports