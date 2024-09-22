import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';


dotenv.config();


const app = express();

app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('Server is running')
// });

app.get('/api/ninjas',(req,res)=>{
    const ninjas = [
  {
    id: 1,
    photo: 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png' ,
    name: "Naruto Uzumaki",
    familyName: "Uzumaki",
    kekkeiGenkai: null, // Uzumaki clan has strong chakra, but no formal kekkei genkai
    ninjaLevel: "Hokage",
    specialJutsu: ["Rasengan", "Shadow Clone Jutsu", "Sage Mode", "Kurama Mode", "Six Paths Sage Mode"]
  },
  {
    id: 2,
    photo:'https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png',
    name: "Sasuke Uchiha",
    familyName: "Uchiha",
    kekkeiGenkai: "Sharingan, Rinnegan",
    ninjaLevel: "Shadow Hokage (equal to Hokage)",
    specialJutsu: ["Chidori", "Amaterasu", "Susanoo", "Indra's Arrow", "Space-Time Ninjutsu"]
  },
  {
    id: 3,
    photo:'https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png',
    name: "Kakashi Hatake",
    familyName: "Hatake",
    kekkeiGenkai: "Sharingan (Borrowed from Obito Uchiha)",
    ninjaLevel: "Hokage (Former)",
    specialJutsu: ["Lightning Blade (Raikiri)", "Kamui", "Purple Lightning"]
  },
  {
    id: 4,
    photo:'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png',
    name: "Itachi Uchiha",
    familyName: "Uchiha",
    kekkeiGenkai: "Sharingan, Mangekyou Sharingan",
    ninjaLevel: "ANBU Captain",
    specialJutsu: ["Amaterasu", "Tsukuyomi", "Susanoo", "Izanami"]
  },
  {
    id: 5,
    photo:'https://static.wikia.nocookie.net/naruto/images/f/fd/Madara.png',
    name: "Madara Uchiha",
    familyName: "Uchiha",
    kekkeiGenkai: "Sharingan, Mangekyou Sharingan, Rinnegan",
    ninjaLevel: "Legendary Ninja",
    specialJutsu: ["Limbo: Border Jail", "Susanoo", "Wood Style", "Infinite Tsukuyomi"]
  },
  {
    id: 6,
    photo:'https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png',
    name: "Hinata Hyuga",
    familyName: "Hyuga",
    kekkeiGenkai: "Byakugan",
    ninjaLevel: "Chunin",
    specialJutsu: ["Gentle Fist", "Eight Trigrams Sixty-Four Palms", "Protective Eight Trigrams Sixty-Four Palms"]
  },
  {
    id: 7,
    photo:'https://static.wikia.nocookie.net/naruto/images/7/7e/Neji_Part_I.png',
    name: "Neji Hyuga",
    familyName: "Hyuga",
    kekkeiGenkai: "Byakugan",
    ninjaLevel: "Jonin",
    specialJutsu: ["Gentle Fist", "Eight Trigrams Sixty-Four Palms", "Eight Trigrams Palms Revolving Heaven"]
  },
  {
    id: 8,
    name: "Gaara",
    photo:'https://static.wikia.nocookie.net/naruto/images/2/20/Gaara_in_Part_I.png',
    familyName: "Kazekage",
    kekkeiGenkai: null, // no formal kekkei genkai
    ninjaLevel: "Kazekage",
    specialJutsu: ["Sand Manipulation", "Sand Coffin", "Shukaku’s Power", "Sand Shield"]
  },
  {
    id: 9,
    photo:'https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png',
    name: "Minato Namikaze",
    familyName: "Namikaze",
    kekkeiGenkai: null,
    ninjaLevel: "Hokage",
    specialJutsu: ["Flying Thunder God Technique", "Rasengan", "Reaper Death Seal"]
  },
  {
    id: 10,
    photo:'https://static.wikia.nocookie.net/naruto/images/b/be/Tobirama_Senju.png',
    name: "Tobirama Senju",
    familyName: "Senju",
    kekkeiGenkai: "Water Release Mastery",
    ninjaLevel: "Hokage (Second)",
    specialJutsu: ["Flying Thunder God", "Edo Tensei (Reanimation Jutsu)", "Water Style: Water Dragon Jutsu"]
  },
  {
    id: 11,
    photo:'https://static.wikia.nocookie.net/naruto/images/4/4a/Obito_Uchiha.png',
    name: "Obito Uchiha",
    familyName: "Uchiha",
    kekkeiGenkai: "Sharingan, Mangekyou Sharingan, Rinnegan",
    ninjaLevel: "ANBU",
    specialJutsu: ["Kamui", "Wood Style", "Rinnegan Abilities", "Ten-Tails Jinchuriki"]
  },
  {
    id: 12,
    photo:'https://static.wikia.nocookie.net/naruto/images/7/7e/Hashirama_Senju.png',
    name: "Hashirama Senju",
    familyName: "Senju",
    kekkeiGenkai: "Wood Release",
    ninjaLevel: "Hokage (First)",
    specialJutsu: ["Wood Style: Deep Forest Emergence", "Sage Mode", "Wood Golem Jutsu"]
  },
  {
    id: 13,
    photo:'https://static.wikia.nocookie.net/naruto/images/b/b3/Tsunade_infobox2.png',
    name: "Tsunade Senju",
    familyName: "Senju",
    kekkeiGenkai: null, // No formal kekkei genkai
    ninjaLevel: "Hokage",
    specialJutsu: ["Strength of a Hundred Seal", "Creation Rebirth", "Medical Ninjutsu"]
  },
  {
    id: 14,
    photo:'https://static.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png',
    name: "Rock Lee",
    familyName: "Lee",
    kekkeiGenkai: null,
    ninjaLevel: "Jonin",
    specialJutsu: ["Eight Gates", "Leaf Hurricane", "Leaf Whirlwind"]
  },
  {
    id: 15,
    photo:'https://static.wikia.nocookie.net/naruto/images/4/44/Shikamaru_Part_I.png',
    name: "Shikamaru Nara",
    familyName: "Nara",
    kekkeiGenkai: null,
    ninjaLevel: "Jonin",
    specialJutsu: ["Shadow Possession Jutsu", "Shadow Neck Binding"]
  }
];


    res.send(ninjas);
});

const port = process.env.PORT || 3000 ;
app.listen(port,()=>{
    console.log(`listening on ${port}`)
});
