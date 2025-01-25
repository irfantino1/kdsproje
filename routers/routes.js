const router=require('express').Router()
const {postBasvuru}=require('../controllers/basvuru')
const {getBasvuranlar,getGarson,getresepsiyonist,getkomi,getbahcivan,getbasvuru_kabul,gettoplambasvuran}=require('../controllers/basvurancek')
const {getGarson:garsonBasari,getresepsiyonist:resepsiyonistBasari,getkomi:komiBasari,getbahcivan:bahcivanBasari}=require('../controllers/orancek')

router.post('/basvuru',postBasvuru)
router.get('/basvuranlar',getBasvuranlar)
router.get('/garson',getGarson)
router.get('/resepsiyonist',getresepsiyonist)
router.get('/komi',getkomi)
router.get('/bahcivan',getbahcivan)
router.get('/garsonbasari',garsonBasari)
router.get('/resepsiyonistbasari',resepsiyonistBasari)
router.get('/komibasari',komiBasari)
router.get('/bahcivanbasari',bahcivanBasari)
router.get('/basvuru_kabul',getbasvuru_kabul)
router.get('/toplambasvuran',gettoplambasvuran)



module.exports=router