let names = ["Laptop", "Phone", "Keyboard", "Mouse", "Monitor"];
let prices = [1500, 800, 200, 50, 600];
let stocks = [5, 0, 10, 20, 3];

let showMenu = () => {
  return prompt(
    `===== PRODUCT MANAGEMENT ===== 
      1. Lọc sản phẩm cao cấp (>500K)
      2. Kiểm định trạng thái dữ liệu
      3. Phân tích giá trị vốn hóa
      4. Giảm giá 10%
      5. Tìm sản phẩm theo từ khóa
      6. Báo cáo tồn kho
      7. Thoát
      Chọn chức năng (1-7):`,
  );
};
function filterPremiumProducts() {
  let premium = names.filter(function (name, index) {
    return prices[index] > 500;
  });
  if (premium.length > 0) {
    alert("Sản phẩm cao cấp:" + premium.join("\n"));
  } else {
    alert("Không có sản phẩm nào > 500");
  }
}
function validateData() {
  let hasOutOfStock = stocks.some(function (stock) {
    return stock === 0;
  });
  let allAbove100 = prices.every(function (price) {
    return price > 100;
  });
  alert(
    "Có sản phẩm hết hàng? " +
      (hasOutOfStock ? "Có" : "Không") +
      "\n" +
      "Tất cả giá > 100? " +
      (allAbove100 ? "Đúng" : "Sai"),
  );
}
function calculateTotalValue() {
  let total = prices.reduce(function (sum, price, index) {
    return sum + price * stocks[index];
  }, 0);
  alert("Tổng giá trị kho: " + total + " USD");
}
function applyDiscount() {
  prices = prices.map(function (price) {
    return price * 0.9;
  });
  alert("Đã giảm 10% giá sản phẩm!");
}
function searchByKeyword() {
  let keyword = prompt("Nhập từ khóa:").toLowerCase();
  let matchedIndexes = names
    .map(function (name, index) {
      if (name.toLowerCase().includes(keyword)) {
        return index;
      }
    })
    .filter(function (index) {
      return index !== undefined;
    });
  if (matchedIndexes.length === 0) {
    alert("Không tìm thấy sản phẩm.");
    return;
  }
  let message = "Kết quả tìm kiếm:";
  matchedIndexes.forEach(function (index) {
    message +=
      names[index] + " - " + prices[index] + " USD - SL: " + stocks[index];
  });
  alert(message);
}
function inventoryReport() {
  let statusList = stocks.map(function (stock) {
    if (stock > 0) {
      return "Còn hàng";
    } else {
      return "Hết hàng";
    }
  });

  let message = "BÁO CÁO TỒN KHO:";
  names.forEach(function (name, index) {
    message += name + " - " + statusList[index];
  });
  alert(message);
}
while (true) {
  let choice = showMenu();
  switch (choice) {
    case 1:
      filterPremiumProducts();
      break;
    case 2:
      validateData();
      break;
    case 3:
      calculateTotalValue();
      break;
    case 4:
      applyDiscount();
      break;
    case 5:
      searchByKeyword();
      break;
    case 6:
      inventoryReport();
      break;
    case 7:
      alert("Thoát chương trình!");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
      continue;
  }
  if (choice === 7) {
    break;
  }
}
