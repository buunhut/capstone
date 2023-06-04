var danhSach = [
  {
    ten: "chịa",
    tuoi: 24,
    diachi: "bạc liêu",
  },
  {
    ten: "quyền",
    tuoi: 38,
    diachi: "tiền giang",
  },
  {
    ten: "kiều",
    tuoi: 26,
    diachi: "sóc trăng",
  },
  {
    ten: "đoàn",
    tuoi: 32,
    diachi: "đức",
  },
  {
    ten: "tú",
    tuoi: 40,
    diachi: "hcm",
  },
  {
    ten: "anh",
    tuoi: 38,
    diachi: "hcm",
  },
  {
    ten: "thanh",
    tuoi: 38,
    diachi: "hcm",
  },
];
/*
//sort từ a đến z
function sapXepAz(danhsach) {
  danhsach.sort(function (a, b) {
    return boDauTiengViet(a.ten).localeCompare(boDauTiengViet(b.ten));
  });
  return danhsach;
}
//sort từ z đến a
function sapXepZa(danhsach) {
  danhsach.sort(function (a, b) {
    return boDauTiengViet(a.ten).localeCompare(boDauTiengViet(b.ten));
  });
  return danhsach.reverse();
}
sapXepAz(danhSach);
console.log(danhSach);

function boDauTiengViet(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
// text = "Tôi là Trương Bửu Nhựt, đang sinh sống và làm việc tại THÀNH PHỐ HỐ CHÍ MINH"
// //bỏ dấu tiếng việt
// var ketQua = boDauTiengViet(text);
// console.log(ketQua);
*/
// function boDauTiengViet(str) {
//   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }

// var input = "thành";
// var str = boDauTiengViet(input);
// var kQua = [];
// for (let i = 0; i < danhSach.length; i++) {
//   if (boDauTiengViet(danhSach[i].ten).includes(str)) {
//     kQua.push(danhSach[i]);
//   }
// }

// console.log(kQua);
// console.log(text);

// đỗ dữ liệu cho carousel
// var data = [
//     "./img/bg1.jpg",
//     "./img/bg2.jpg",
//     "./img/bg3.jpg",
//     "./img/bg4.jpg",
//     "./img/bg5.jpg",
// ]





function getData() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  //   kết nối API thành công
  promise.then(function (res) {
    data = res.data.content;
    carousel = "";

    for(var i = 0; i < 4; i++){
      carousel += `       

        <div class="owl-item">
            <div class="carouselItem">
                <div class="picture">
                    <img src="${data[i].image}" alt="">
                </div>
                <div class="text">
                    <div class="textTitle">
                        <h3>${data[i].name}</h3>
                        <p>${data[i].shortDescription}</p>
                        <h2>$ ${data[i].price}</h2>
                        <button onclick="buyNow()">Buy now</button>
                        <button><a id="detail" href="./detail.html?id=${data[i].id}&name=${data[i].name}" onclick="detail(${data[i].id})">Detail</a></button>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
    

    console.log(carousel)
    document.getElementById("carousel").innerHTML = carousel;

    console.log(data);
    var products = "";
    data.forEach(function (item) {
      products += `
        <div class="productItem">
        <div class="itemBg">
          <a href="./detail.html?id=${item.id}&name=${item.name}" onclick="detail(${item.id})">
              <div class="itemImg">
                  <img src="${item.image}" alt="hình sản phẩm">
                  <div class="overlay"></div>
                  <div class="light"></div>

              </div>
              <div class="itemText">
                  <!-- <hr> -->
                  <div class="itemName">
                      <h4>${item.name}</h4>
                  </div>
                  <div class="itemDescription">
                      <p>${item.shortDescription}</p>
                  </div>
              </div>
          </a>
          <div class="itemButton">
              <button>Buy now</button>
              <h3>$ ${item.price}</h3>
          </div>
            </div>
        </div>

          `;
    });
    // đổ sản phẩm ra ngoài
    document.getElementById("products").innerHTML = products;
  });

  //   kết nối API lỗi
  promise.catch(function (err) {
    console.log(err);
  });
}

getData();


