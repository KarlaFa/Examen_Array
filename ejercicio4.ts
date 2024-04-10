const frutas = ["manzana", "limon", "sandia","pera","toronja", "naranja"]

//const frutaSandia = frutas.includes("sandia");
const frutaSandia = frutas.find(fruta => fruta === "sandia");

console.log(frutaSandia);
