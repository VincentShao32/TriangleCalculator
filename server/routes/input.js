const express = require('express');
const router = express.Router();
let Result = require('../models/result.model')

router.get('/', (req, res) => {
    Result.find().then(results => res.json(results)).catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add', (req, res) => {
    const sideA = req.body.triangle.sideA
    const sideB = req.body.triangle.sideB
    const sideC = req.body.triangle.sideC
    const angleA = calculateAngle(sideB, sideC, sideA)
    const angleB = calculateAngle(sideA, sideC, sideB)
    const angleC = calculateAngle(sideA, sideB, sideC)

    const angles = {
        angleA: angleA,
        angleB: angleB,
        angleC: angleC,
        notEmpty: true
    }

    const newResult = new Result({
        sideA,
        sideB,
        sideC,
        angleA,
        angleB,
        angleC
    })

    newResult.save().then(() => res.json(angles)).catch(err => res.status(400).json('Error: ' + err))
})

function calculateAngle(a, b, c) {
    return (Math.acos((a * a + b * b - c * c) / (2 * a * b)) * (180 / Math.PI)).toFixed(2)
}

module.exports = router;