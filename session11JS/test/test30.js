let product = [
  {
    id: "P01",
    name: "Ipnone12",
    price: 2000,
    category: "Phone",
    inStock: true,
  },
  {
    id: "P02",
    name: "Ipnone13",
    price: 2000,
    category: "Phone",
    inStock: true,
  },
  {
    id: "P03",
    name: "Ipnone13Plus",
    price: 2000,
    category: "Phone",
    inStock: true,
  },
  {
    id: "P04",
    name: "Ipnone14",
    price: 2000,
    category: "Phone",
    inStock: true,
  },
  {
    id: "P05",
    name: "Ipnone15",
    price: 2000,
    category: "Phone",
    inStock: false,
  },
];

const findProduct = (product) => {
  let produce = product.forEach((produce) => {
    ;
  });
};
console.log(findProduct(product.id, product));

const displayProduct=(product)=>{
    console.log(`id : ${product.id}
            Tên sản phầm :${product.name} 
            Giá tiền :${product.price} 
            Loại sản phẩm :${product.category}
            Tình trạng :${
                
            }`);
}