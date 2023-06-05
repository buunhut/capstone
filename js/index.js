function getDataCarousel() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  //   kết nối API thành công
  promise.then(function (res) {
    data = res.data.content;

    // lưu carousel vào local
    localStorage.setItem("carousel", JSON.stringify(data));
    console.log("done data carosel");
  });
  //   kết nối API lỗi
  promise.catch(function (err) {
    console.log(err);
  });




}
getDataCarousel();

let localCarousel = JSON.parse(localStorage.getItem("carousel"));    
console.log(localCarousel);


if (localCarousel == null) {
  localCarousel = JSON.parse(localStorage.getItem("carousel"));
  console.log(localCarousel);
  location.reload();

}

  carousel = "";
  for (var i = 0; i < localCarousel.length; i++) {
    carousel += `       
    <div class="owl-item">
        <div class="carouselItem">
            <div class="picture">
                <img src=${localCarousel[i].image} alt="">
            </div>
            <div class="text">
                <div class="textTitle">
                    <h3>${localCarousel[i].name}</h3>
                    <p>${localCarousel[i].shortDescription}</p>
                    <div class="smallScreen">
                      <h2>Price $${localCarousel[i].price}</h2>
                      <button onclick="buyNow()">Buy now</button>
                      <button><a id="detail" href="./detail.html?id=${localCarousel[i].id}&name=${localCarousel[i].name}" onclick="detail(${localCarousel[i].id})">Detail</a></button>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  `;
  }

// console.log(document.getElementById("carousel"))
document.getElementById("carousel").innerHTML = carousel;

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      // margin: 40,
  });
});





function getData() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  //   kết nối API thành công
  promise.then(function (res) {
    data = res.data.content;

    // lưu carousel vào local
    localStorage.setItem("carousel", JSON.stringify(data));

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
