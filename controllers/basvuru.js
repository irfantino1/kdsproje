const dbConn = require('../db/mysqlconnect')

const postBasvuru = (req, res) => {
    console.log(req.body)
    const {pozisyon,isim,soyisim,cinsiyet,tarih,telno,eğitim,tecrube,cevaptext,seviye} = req.body
    const query = `INSERT INTO basvuranlar(basvuran_ad,basvuran_soyad,basvuran_cinsiyet,basvuran_dogum_tarihi,basvuran_tel_no,basvuran_email,basvuran_tecrube,basvuran_cevap_metni,soru_id,egitim_id,dil_id) VALUES(?,?,?,?,?,?,?,?,?,?,?)`
    dbConn.query(query,[isim,soyisim,cinsiyet,tarih,telno,isim+soyisim+"@gmail.com",tecrube,cevaptext,1,eğitim,seviye],(err,res)=>{
        if(err){
            console.log(err)
        }
        else{
            let puan = [0,20,40,60,80,100]
            // puan listesinden rastgele bir puan seçilir
            let randomPuan = puan[Math.floor(Math.random() * puan.length)];
            let sonuc = "Reddedildi"
            if(randomPuan >= 80) sonuc = "Kabul Edildi"
            
            dbConn.query(`INSERT INTO sonuclar(basvuran_id,pozisyon_id,toplam_puan,sonuc) VALUES(?,?,?,?)`,[res.insertId,pozisyon,randomPuan,sonuc],(err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Başvuru başarıyla kaydedildi.")
                    
                }
            })
        }
    })
    
    
}

module.exports = {postBasvuru}