const app = require('express')
const router = app.Router()

const { AddBrand, getAllBrands, brandByID } = require('./controller')

router.post('/add-brand', AddBrand)
router.get('/brandbyid', brandByID)
router.get('/get-all-brands', getAllBrands)

module.exports = router