
/**
 * @typedef {Object} Product
 * @property {string} name
 * @property {string} img
 * @property {string} shortDesc
 * @property {number} price
 */

/**
 * @type {Product[]} products
 */
const products = [
    {
      name: "crossroads",
      img: "./assets/img/product/backpack-01.png",
      shortDesc: "Le bagage à main sans sacrifices, suffisamment robuste pour faire face à toutes les situations de voyage.",
      price: 450.00,
    },
    {
      name: "Panga",
      img: "./assets/img/product/backpack-02.png",
      shortDesc: "Conçu pour ceux qui vivent leur vie sur l'eau. Garde votre équipement au sec, que ce soit lors d'une tempête ou sur un lac.",
      price: 400.00,
    },
    {
      name: "Sport panga",
      img: "./assets/img/product/backpack-03.png",
      shortDesc: "Protège vos marchandises sur tous les terrains et dans toutes les prévisions.",
      price: 450.00,
    },
    {
      name: "Hopper",
      img: "./assets/img/product/backpack-04.png",
      shortDesc: "Le Glacière Souple Sac à Dos M20 vous permet de passer la journée sur votre dos - littéralement.",
      price: 450.00,
    },
    {
      name: "Voyage crossroads",
      img: "/assets/img/product/backpack-05.png",
      shortDesc: "Peu importe où vous allez, le sac de voyage Crossroads est fait pour vous y amener",
      price: 459.00,
    },
    {
      name: "Loadout",
      img: "./assets/img/product/backpack-06.png",
      shortDesc: "Il contient tout ce dont vous avez besoin pour que rien ne vous retienne.",
      price: 330.00,
    },
  ];
  

console.log(Object.values(products))



/**
 * @param {Product} product
 * @returns {HTMLDivElement}
 */
function toHtml(product) {
    const containerProduct = document.createElement('div');
    containerProduct.classList.add('container_items');
  
    const name = document.createElement('h3');
    name.textContent = product.name;
  
    const img = document.createElement('img');
    img.setAttribute('src', product.img);
  
    const shortDesc = document.createElement('p');
    shortDesc.textContent = product.shortDesc;
  
    const price = document.createElement('p');
    price.textContent = product.price + '$';
  
    containerProduct.appendChild(name);
    containerProduct.appendChild(img);
    containerProduct.appendChild(shortDesc);
    containerProduct.appendChild(price);
  
    return containerProduct;
  }
  

  const container = document.querySelector('.products');
  

  products.forEach(product => {
    const productElement = toHtml(product);
    container.appendChild(productElement);
  });