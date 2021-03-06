module.exports = {
  async up(db) {
    await db.collection("images").insertMany(
      [
        {
          "id": 1,
          "url": "https://lh3.googleusercontent.com/V3r1ufJ12GoxxqfiS7KOVOKj08Zbc6URkdHUK6N_kSyLAX1RE4z2URDga0w99jo5sKRPuKS70YvXHFDAHfEb6K1HVvsZ8NnOjyFT-Xhw",
          "quality": "SD"
        },
        {
          "id": 2,
          "url": "https://lh3.googleusercontent.com/jkguSbkaV4tkU3OEvKo5ebAhX9_rAoSwxwU2g3pS5v8winD3Mnl8ZT4WYThAwqOvjm8h2RO_EG57z6Yfbv-Ek_NdWULEdD7OqCkYCdOANQ",
          "quality": "HD"
        },
        {
          "id": 3,
          "url": "https://lh3.googleusercontent.com/rGJ18bTK_00_GhL77Y1UAp0evMTdXKp4jCpz4RZLRu9X-dPSFCjZRdvnvm7lp281Yxr4JH-Dw0Px4Q84Xg-I24seLKr__bXmmsFzl8lQ",
          "quality": "SD"
        },
        {
          "id": 4,
          "url": "https://lh3.googleusercontent.com/LeSa57xyAqiF_IlnidwRIXoNrN9j-nB0Xoe_L3iCsVsfleMc-q0aKLGzYznYXqRh_hwj8wmnQDQt99IEUGoCTnKhhCvc_R-Dz9Iz00M9BA",
          "quality": "HD"
        },
        {
          "id": 5,
          "url": "https://lh3.googleusercontent.com/BsxXJrp7yIPs5lS_jvQMGitJcTCeMF9EDf-Yhm-Nf9ZH3uZD-zN8y4aZNsz5WnyMJHn34nasVuE32GDas8Z1TjS9-fnu3mCRss9nwdE",
          "quality": "SD"
        },
        {
          "id": 6,
          "url": "https://lh3.googleusercontent.com/F55IPfWuPQIFB47ku6jszZuXn9JXAN-ZdkRhTBPqdV9lQNPaMBKUpp-mp8U-AGaHqk66Wy6Vss8-Dhg6DfLLHmpp1fVkpNWKryJDEzwI",
          "quality": "SD"
        },
        {
          "id": 7,
          "url": "https://lh3.googleusercontent.com/LqR6QuhSSiOwlPrKITL9AEyG2gqAPYo7SFEkyGTD9E5Tr_oTYhUsM7hwIpVxCAh1ZUcAsJcaDB4hzixnhA1H-_NdGYif5CMl1f8DliZX4A",
          "quality": "SD"
        }
      ]
    );
    await db.collection("ads").insertMany(
      [
        {
          "description": "Me lo quitan de las manos!",
          "type": "CHALET",
          "imageIds": [],
          "score": -5
        }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Me lo quitan de las manos!",
        "type": "CHALET",
        "imageIds": [],
        "score": -5
      }, {
        "description": "Nuevo ático céntrico recién reformado. Vivienda de lujo.",
        "type": "PISO",
        "imageIds": [4],
        "score": 45
      }, {
        "description": "",
        "size": 210,
        "type": "CHALET",
        "imageIds": [2],
        "score": 10
      }, {
        "description": "Único, céntrico, luminoso y recién reformado, parece nuevo",
        "size": 130,
        "type": "PISO",
        "imageIds": [5],
        "score": 85
      }, {
        "description": "Pisazo",
        "size": 115,
        "type": "PISO",
        "imageIds": [3, 4],
        "score": 55
      }, {
        "description": "Maravilloso chalet en un pequeño pueblo rural. El entorno es espectacular, las vistas magníficas. ¡Cómprelo ahora!",
        "size": 290,
        "type": "CHALET",
        "imageIds": [1, 7],
        "score": 75
      }, {
        "description": "",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 50,
        "height": "180"
      }, {
        "description": "Itv al día. Muy cuidado, Único dueño",
        "type": "VEHICULO",
        "imageIds": [],
        "score": 0,
        "km": "63000",
        "color": "Rojo",
        "fabricant": "BMW"
      }, {
        "description": "Cuidado y excepcional es frigorífico AEG",
        "type": "FRIGORIFICO",
        "imageIds": [6],
        "score": 55,
        "height": "180"
      }, {
        "description": "Ocasión!. Nuevo Audi a3",
        "type": "VEHICULO",
        "imageIds": [1, 2, 4],
        "score": 20,
        "km": "0",
        "fabricant": "Audi"
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }, {
        "description": "Frigorífico Teka",
        "type": "FRIGORIFICO",
        "imageIds": [1, 6],
        "score": 15
      }
      ]
    );
  },

  async down(db) {
    await db.collection("ads").deleteMany({})
    await db.collection("images").deleteMany({});
  }
};
