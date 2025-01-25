const dbConn = require('../db/mysqlconnect')

const getGarson = (req, res) => {
    dbConn.query(`CALL 6_garson_basari_orani()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

const getresepsiyonist = (req, res) => {
    dbConn.query(`CALL 9_resepsiyonist_basari_orani()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

const getkomi = (req, res) => {
    dbConn.query(`CALL 8_komi_basari_orani()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

const getbahcivan = (req, res) => {
    dbConn.query(`CALL 7_bahcivan_basari_orani()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

module.exports = { getGarson, getresepsiyonist, getkomi, getbahcivan }