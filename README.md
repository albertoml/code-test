docker run -d --name mindden-mongo -p 27017:27017 mongo


Poner en asumptions que usamos lookup por mantener la estructura
de ficheros proporcionados

Yo lo haria solamente en una coleccion

Problema: la base de datos no puede tener sharded collections
 (las colecciones no pueden estar divididas en diferentes bases de datos) 

Otra solucion menos eficiente:
  const imageIds = new Set(items.flatMap(i => i.imageIds));
  const images = await findImagesByIds(Array.from(imageIds));

  items.forEach(i => {
    i.images = images.filter(img => i.imageIds.includes(img.id) )
    i.score = getScore(i);
  })


------------------

Para una paginacion eficiente con datos masivos no se debe user skip y limit
user paginacion por cursores
https://www.codementor.io/@arpitbhayani/fast-and-efficient-pagination-in-mongodb-9095flbqr

-------------------

Adaptado el standart /.well-known/jwks.json de auth0 a graphql