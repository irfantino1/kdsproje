const dbConn = require('../db/mysqlconnect')

const getGarson = (req, res) => {
    dbConn.query(`CALL 2_garson_sayısı()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

const getresepsiyonist = (req, res) => {
    dbConn.query(`CALL 3_basvuran_resepsiyonist_sayısı()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

const getkomi = (req, res) => {
    dbConn.query(`CALL 4_basvuran_komi_sayısı()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

const getbahcivan = (req, res) => {
    dbConn.query(`CALL 5_basvuran_bahcivan_sayisi()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

const getBasvuranlar = (req, res) => {
    dbConn.query(`CALL 1_basvuran_sayısı()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0][0])
        }
    })
}

const getbasvuru_kabul = (req, res) => {
    dbConn.query(`CALL 10_basvuru_kabul_edilenler()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0])
        }
    })
}

//11_basvuranlar	

const gettoplambasvuran = (req, res) => {
    dbConn.query(`CALL 11_basvuranlar()`, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result[0])
        }
    })
}


module.exports = { getBasvuranlar, getGarson, getresepsiyonist, getkomi, getbahcivan, getbasvuru_kabul, gettoplambasvuran }