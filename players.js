const players = [
    {
        firstName: 'Arthur',
        lastName: 'Kaliyev',
        position: 'Forward',
        age: '24',
        photo: 'imgs/ArthurK.png',
        funFact: 'Kaliyev was born in Tashkent, Uzbekistan and is my moms friends son!'
    },

    {
        firstName: 'Brett',
        lastName: 'Berard',
        position: 'Left Wing',
        age: '23',
        photo: 'imgs/BrettB.png',
        funFact: 'He was the second youngest member of the 2021 team (to Matty Beniers) when they won the gold medal in 2021'
    },

    {
        firstName: 'Jonny',
        lastName: 'Brodzinski',
        position: 'Center',
        age: '32',
        photo: 'imgs/JonnyB.png',
        funFact: 'Jonny excelled in golf, earning All-Conference honors and being named Blaine High Schools Rookie of the Year. '
    },

    {
        firstName: 'Sam',
        lastName: 'Carrick',
        position: 'Center',
        age: '32',
        photo: 'imgs/SamC.png',
        funFact: 'Sam and his brothers, Jake and Josh, are involved in a family business called Carrick Bros., which produces and sells maple syrup'
    },

    {
        firstName: 'Will',
        lastName: 'Cuylle',
        position: 'Left Wing',
        age: '23',
        photo: 'imgs/WillC.png',
        funFact: 'He enjoys reading, playing Scrabble, and collecting LEGOs and Star Wars merchandise'
    },

    {
        firstName: 'Adam',
        lastName: 'Edstrom',
        position: 'Center',
        age: '25',
        photo: 'imgs/AdamE.png',
        funFact: 'He began playing for Mora IKs under-18 team at age 16 and made his SHL debut by 18. '
    },


    {
        firstName: 'Chris',
        lastName: 'Kreider',
        position: 'Left Wing',
        age: '34',
        photo: 'imgs/ChrisK.png',
        funFact: 'Kreider recently passed 300 career goals, becoming only the third player in Rangers history to reach that milestone. '
    },

    {
        firstName: 'Alexis',
        lastName: 'Lafreniere',
        position: 'Left Wing',
        age: '24',
        photo: 'imgs/AlexisL.png',
        funFact: 'Lafrenières love for hockey began at a young age. His father, Hugo, recalls him being more interested in playing hockey than playing with toys. '
    },

    {
        firstName: 'J.T.',
        lastName: 'Miller',
        position: 'Left Wing',
        age: '32',
        photo: 'imgs/J.T.M.png',
        funFact: 'He has played for the Tampa Bay Lightning, Vancouver Canucks'
    },

    {
        firstName: 'Brennan',
        lastName: 'Othman',
        position: 'Left Wing',
        age: '22',
        photo: 'imgs/BrennanO.png',
        funFact: 'Othmann is a Swiss-Canadian citizen, and has represented Canada internationally. '
    },

    {
        firstName: 'Artemi',
        lastName: 'Panarin',
        position: 'Left Wing',
        age: '34',
        photo: 'imgs/ArtemiP.png',
        funFact: 'Panarin was adopted by his grandparents at three months old when his parents divorced, and he was raised in Korkino, a Russian mining town.  '
    },

    {
        firstName: 'Juuso',
        lastName: 'Parssinen',
        position: 'Center',
        age: '24',
        photo: 'imgs/JuusoP.png',
        funFact: 'He has represented Finland at the World Junior Championships and has also scored the "biggest goal" of his career in an overtime thriller at the World Championship.  '
    },

    {
        firstName: 'Gabe',
        lastName: 'Perreault',
        position: 'Right Wing',
        age: '20',
        photo: 'imgs/GabeP.png',
        funFact: 'Perreault is the son of former NHL player Yanic Perreault, who played for 14 seasons in the league.'
    },

    {
        firstName: 'Matt',
        lastName: 'Rempe',
        position: 'Center',
        age: '23',
        photo: 'imgs/MattR.png',
        funFact: 'Rempe is known for his high penalty minutes, especially in his first season. For example, he had 101 penalty minutes in 51 games as a rookie. '
    },

    {
        firstName: 'Vincent',
        lastName: 'Trocheck',
        position: 'Center',
        age: '32',
        photo: 'imgs/VincentT.png',
        funFact: 'Trocheck has been nicknamed "Mr. Clutch" for his ability to deliver in crucial playoff situations, often scoring big goals and winning face-offs.'
    },

    {
        firstName: 'Mika',
        lastName: 'Zibanejad',
        position: 'Center',
        age: '32',
        photo: 'imgs/MikaZ.png',
        funFact: 'He is a DJ and music producer, with some of his tracks even being played by DJ Tiesto.'
    },

    {
        firstName: 'Will',
        lastName: 'Borgen',
        position: 'Defenseman',
        age: '28',
        photo: 'imgs/WillB.png',
        funFact: 'He experienced his first NHL playoff run with the Seattle Kraken, which he called the most fun hes had playing hockey.'
    },

    {
        firstName: 'Calvin',
        lastName: 'De Haan',
        position: 'Defenseman',
        age: '34',
        photo: 'imgs/CalvinD.H..png',
        funFact: 'De Haan co-owns a restaurant and brewery called Ridge Rock Brewing Company in his hometown of Carp, Ontario.'
    },

    {
        firstName: 'Adam',
        lastName: 'Fox',
        position: 'Defenseman',
        age: '27',
        photo: 'imgs/AdamF.png',
        funFact: 'While at Harvard, Fox was named an Academic All-Ivy honoree.'
    },

    {
        firstName: 'Zac',
        lastName: 'Jones',
        position: 'Defenseman',
        age: '24',
        photo: 'imgs/ZacJ.png',
        funFact: 'He expressed frustration with his limited role, even saying he felt like he was "rotting away" with the Rangers.'
    },

    {
        firstName: 'K Andre',
        lastName: 'Miller',
        position: 'Defenseman',
        age: '25',
        photo: 'imgs/KAndreM.png',
        funFact: 'Miller began modeling at age seven, appearing in Target print campaigns and a Honda commercial.'
    },

    {
        firstName: 'Braden',
        lastName: 'Schneider',
        position: 'Defenseman',
        age: '23',
        photo: 'imgs/BradenS.png',
        funFact: 'He is known for his recovery routine, which includes warm/cold tub treatments and ensuring he gets enough rest .'
    },

    {
        firstName: 'Carson',
        lastName: 'Soucy',
        position: 'Defenseman',
        age: '30',
        photo: 'imgs/CarsonS.png',
        funFact: 'Soucy has been quoted as saying he was "not very big" when he was younger and didnt hit his growth spurt until he was about 16. '
    },

    {
        firstName: 'Urho',
        lastName: 'Vaakanienen',
        position: 'Defenseman',
        age: '26',
        photo: 'imgs/UrhoV.png',
        funFact: 'Playing Style: Vaakanainen is known for his strong skating abilities and his ability to make smart, cautious plays with the puck.'
    },

    {
        firstName: 'Jonathan',
        lastName: 'Quick',
        position: 'Goaltender',
        age: '39',
        photo: 'imgs/JonathanQ.png',
        funFact: 'Quick is a three-time Stanley Cup champion, a Conn Smythe Trophy winner.'
    },

    {
        firstName: 'Igor',
        lastName: 'Shesterkin',
        position: 'Goaltender',
        age: '29',
        photo: 'imgs/IgorS.png',
        funFact: 'Shesterkin enjoys a lavish lifestyle and isnt ruling out owning exotic cars and luxurious homes.'
    },
]