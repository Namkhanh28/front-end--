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

//Các trức năng bắt tìm kiếm Search lọc thì dùng filter(),find()
//Phương thức : filter():Giá trị trả vềlà một mảng mới
//phương thức :find():Kết quả trả về là giá trị đầu tiên tìm thấy

const filterProductById = (idProduct, product) => {
  let productFindById = product.find((element) => {
    return element.id == idProduct;
  });
  if (productFindById == undefined) {
    console.log("Không tìm thấy ");
  } else {
    console.log("Sản phẩm tồn tại");
  }
  console.log(productFindById);
};
filterProductById("P03", product);
//Chức năng 2 :Kiểm tra xem có sản phẩm nào có giá trị ==0
//some(): chỉ cần 1 cái đúng thì true ,every() tất cả phải đúng thì mới true
const checkProduct = (product) => {
  let isTrue = products.some((product) => {
    return product.prices == 0;
  });
};
filterProductById(product);

//chức năng 3
const displayFormatProduct = (product) => {
  {
    let listNewProduct = products.map((product) => {
        let newProduct = `${product.name}|Giá :${product.price}| Trạng thái :${stringInStock}`
        return newProduct ;
    });
    console.log(listNewProduct);
    
  }
};
displayFormatProduct(products);