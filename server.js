const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

const TOKEN = "BURAYA_BOT_TOKEN";
const CHAT_ID = "BURAYA_CHAT_ID";

app.post("/send", async (req, res) => {

    const { name, phone, people, date, time } = req.body;

    const text = `
🔴 YENİ REZERV

Ad: ${name}
Telefon: ${phone}
Neçə nəfər: ${people || "Yazılmayıb"}
Tarix: ${date}
Saat: ${time}
`;

    try{
        await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
            chat_id: CHAT_ID,
            text: text
        });

        res.send({success:true});

    }catch(err){
        res.send({success:false});
    }

});

app.listen(3000, ()=>console.log("Server işləyir"));
