fetch('http://localhost:3000/api/bahcivan')
.then(res=>res.json())
.then(data=>{
    document.getElementById("bahcivan").innerHTML = data["basvuran_sayisi"]
})

fetch('http://localhost:3000/api/garson')
.then(res=>res.json())
.then(data=>{
    document.getElementById("garson").innerHTML = data["basvuran_sayisi"]
})

fetch('http://localhost:3000/api/komi')
.then(res=>res.json())
.then(data=>{
    document.getElementById("komi").innerHTML = data["basvuran_sayisi"]
})

fetch('http://localhost:3000/api/resepsiyonist')
.then(res=>res.json())
.then(data=>{
    document.getElementById("resepsiyonist").innerHTML = data["basvuran_sayisi"]
})

fetch('http://localhost:3000/api/garsonbasari')
.then(res=>res.json())
.then(data=>{
    document.getElementById("garsonbasari").innerHTML = data["garson_basari_orani"]
})

fetch('http://localhost:3000/api/resepsiyonistbasari')
.then(res=>res.json())
.then(data=>{
    document.getElementById("resepsiyonistbasari").innerHTML = data["resepsiyonist_basari_orani"]
})

fetch('http://localhost:3000/api/komibasari')
.then(res=>res.json())
.then(data=>{
    document.getElementById("komibasari").innerHTML = data["komi_basari_orani"]
})

fetch('http://localhost:3000/api/bahcivanbasari')
.then(res=>res.json())
.then(data=>{
    document.getElementById("bahcivanbasari").innerHTML = data["bahcivan_basari_orani"]
})


fetch('http://localhost:3000/api/basvuranlar')
.then(res=>res.json())
.then(data=>{
    document.getElementById("basvuranlar").innerHTML = data["basvuran_sayisi"]
})



fetch('http://localhost:3000/api/basvuru_kabul')
.then(res=>res.json())
.then(data=>{

    data.forEach(element => {

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let img = document.createElement("img")
        img.src = "img/emre_harita.png"
        let p = document.createElement("p")
        p.innerHTML = element["ad_soyad"]
        td1.appendChild(img)
        td1.appendChild(p)
        let td2 = document.createElement("td")
        td2.innerHTML = element["basvuran_cinsiyet"]
        let td3 = document.createElement("td")
        let span = document.createElement("span")
        span.innerHTML = element["pozisyon_adi"]
        td3.appendChild(span)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        document.getElementById("basvuru_kabul").appendChild(tr)
    });
})


{/* <tr>
<td>
    <img src="img/emre_harita.png">
    <p>John Doe</p>
</td>
<td>cinsiyet</td>
<td><span>doğumtarihi</span></td>
<td>puan</td>
<td>pozisyonu</td>

</tr> */}

fetch('http://localhost:3000/api/toplambasvuran')
.then(res=>res.json())
.then(data=>{
    let html = ""
    data.forEach(element => {
        let tarih = element.basvuran_dogum_tarihi.split("T")[0]
        html += `
        <tr>
            <td>
                <img src="img/emre_harita.png">
                <p>${element.ad_soyad}</p>
            </td>
            <td>${element.basvuran_cinsiyet}</td>
            <td><span>${tarih}</span></td>
            <td>${element.toplam_puan}</td>
            <td>${element.pozisyon_adi}</td>

        </tr>`
    });
    document.getElementById("toplambasvuran").innerHTML = html
})