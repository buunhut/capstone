function getData() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  //   kết nối API thành công
  promise.then(function (res) {
    data = res.data.content;

    console.log(data);

    localStorage.setItem("carousel", JSON.stringify(data));

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

var carouselLocal = JSON.parse(localStorage.getItem("carousel"));

console.log(carouselLocal);
carousel = "";

for (var i = 0; i < carouselLocal.length; i++) {
  carousel += `       
    <div class="owl-item">
        <div class="carouselItem">
            <div class="picture">
                <img src=${carouselLocal[i].image} alt="">
            </div>
            <div class="text">
                <div class="textTitle">
                    <h3>${carouselLocal[i].name}</h3>
                    <p>${carouselLocal[i].shortDescription}</p>
                    <h2>Price $${carouselLocal[i].price}</h2>
                    <button onclick="buyNow()">Buy now</button>
                    <button><a id="detail" href="./detail.html?id=${carouselLocal[i].id}&name=${carouselLocal[i].name}" onclick="detail(${carouselLocal[i].id})">Detail</a></button>
                </div>
            </div>
        </div>
    </div>
  `;
}

console.log(carousel);
// console.log(document.getElementById("carousel"))
document.getElementById("carousel").innerHTML = carousel;

getData();
