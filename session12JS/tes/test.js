let products = [
  {
    id: "P01",
    name: "Laptop MacBook Pro M3",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuot không day Logitech",
    price: 45,
    category: "Phu kien",
    inStock: true,
  },
  {
    id: "P03",
    name: "Ban phm cơ Keychron",
    price: 95,
    category: "Phu kiện",
    inStock: false,
  },
  {
    id: "P04",
    name: "Man hinh Dell UltraSharp",
    price: 450,
    category: "Man hinh",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony WH-1000XM5",
    price: 350,
    category: "Phu kien",
    inStock: true,
  },
];



// function sortOfProduct(danhsach) {
//     let hangcon = danhsach.filter(function(i) {
//     return i.inStock == true;
// });

// let sapxep = hangcon.sort(function(a, b) {
// return b.price- a.price;
// });
// return sapxep;
// }
// sortOfProduct(products);
// console.log();

// let count = 0;
// const totalValueProduct = (products) => {
//   let total = products.price.reduce(max, price);
//   return total;
// };
// console.log(total);

// totalValueProduct(products, price);
// console.log(totalValueProduct(products, price));
const filterAnddislaySortProduct=(ListProduct)=>{
    const newListProductByStock =ListProduct.filter((product)={
        // return product.inStock == true;
    })
}
