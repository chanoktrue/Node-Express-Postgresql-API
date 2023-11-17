const pool = require('./db')

exports.sql = (sql) => {
    pool.query(sql, async(error, results) => {
        if (error) throw error
        return results
    })
}