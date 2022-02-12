const express = require('express')
const router = express.Router()

let data = [
    {id: 1, nama: "Ari", email: "ari23@gmail.com"},
    {id: 2, nama: "aji Pamungkas", email: "ajipamungkas32@gmail.com"}
]

router.route('/blog')
    .get(function(req, res) {
        if(data.length > 0) {
            res.json({
                status: true,
                data: data,
                method: req.method,
                url: req.url
            })
        } else{
            res.json({
                status: false,
                message: "Data Kosong"
            })
        }
    })
    .post(function(req, res) {
        data.push(req.body)
        res.send({
            status: true,
            data: data,
            message: "Data berhasil disimpan",
            method: req.method,
            url: req.url
        })
    })

    router.put("/blog/:id", function(req, res) {
        let id = req.params.id
        data.filter(dat => {
            if(dat.id == id){
                dat.id = id
                dat.nama = req.body.nama
                dat.email = req.body.email
            }
        })
        res.send({
            status: true,
            data: data,
            message: "Data berhasil di update",
            method: req.method,
            url: req.url
        })
    })

    router.delete("/blog/:id", function(req, res) {
        let id = req.params.id
        data = data.filter(dat => dat.id != id)
        res.send({
            status: true,
            data: data,
            message: "Data berhasil dihapus",
            method: req.method,
            url: req.url
        })
    })

module.exports = router