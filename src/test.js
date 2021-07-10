// const fs = require("fs");
// const db = require("./DB/database");

// fs.readdir(
//   __dirname + "/public/images/presentations",
//   function (err, archivos) {
//     if (err) {
//       onError(err);
//       return;
//     }
//     archivos.map((item) => {
//       const sql = `SELECT * FROM presentation where image like "%${item}"`;
//       Verifiar(sql, item);
//     });
//   }
// );

// async function Verifiar(sql, name) {
//   try {
//     const res = await db.query(sql);
//     if (res.length === 0) {
//       borrar(name);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// //Ruta de la carpeta donde se encuantrar todas la imagenes
// const folder = __dirname + "/public/images/presentations/";

// const buscar = async () => {
//   try {
//     const res = await db.query(
//       "select pre.image as image, pro.name as name, pre.id_presentation as id_pre, pre.format as format from presentation pre inner join product pro on pro.id_product = pre.id_product where image != 'files/images/presentations/product.png' "
//     );

//     res.map((item) => {
//       const images = item.image.split("/presentations/")[1];
//       verificar(images,`id_presentation: ${item.id_pre} name: ${item.name} format: ${item.format} `);
//     });
//   } catch (er) {
//     console.log(er);
//   }
// };

// buscar();

// function verificar(path,datos) {
//   if (fs.existsSync(folder + path)) {

//   } else {
//     escribir(datos);
//   }
// }

// function escribir(texto) {
//   var stream = fs.createWriteStream(__dirname + "/test.txt", {
//     flags: "a", // 'a' means appending (old data will be preserved)
//   });
//   stream.once("open", function (fd) {
//     stream.write(`${texto}\n`);
//     stream.end();
//   });
// }




// function borrar(imagen) {
//     try {
//         fs.unlinkSync( __dirname + "/public/images/presentations/"+imagen)
//         console.log('File removed')
//       } catch(err) {
//         console.error('Something wrong happened removing the file', err)
//       }
// }