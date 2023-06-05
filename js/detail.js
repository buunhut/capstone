// Lấy URL hiện tại
var url = window.location.href;

// Tìm vị trí của ký tự "?" trong URL
var questionMarkIndex = url.indexOf("?");

// Kiểm tra xem URL có chứa ký tự "?" hay không
if (questionMarkIndex !== -1) {
  // Lấy phần query string sau ký tự "?"
  var queryString = url.substr(questionMarkIndex + 1);

  // Tách các cặp key=value trong query string
  var queryParams = queryString.split("&");

  // Duyệt qua các cặp key=value để tìm ID
  for (var i = 0; i < queryParams.length; i++) {
    var param = queryParams[i].split("=");

    // Nếu key là "id" thì lấy giá trị value là ID
    if (param[0] === "id") {
      var id = param[1];
      // console.log("ID: " + id);
      break; // Thoát khỏi vòng lặp khi đã tìm thấy ID
    }
  }
}
function getDataDetail() {
    var promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
      method: "GET",
      responseType: "json",
    });
    //   kết nối API thành công
    promise.then(function (res) {
      data = res.data.content;
      // console.log(data)
      var arrSize = data.size;
      var size = "";
      arrSize.forEach(function(item){
        size += `
        <button type="button" onclick="choseSize('${item})">${item}</button>       
        `;
      });
      var detail = `
        <div class="detailImg">
            <img src="${data.image}" alt="">
        </div>
        <div class="detaitTitle">
            <h2>${data.name}</h2>
            <p>${data.description}</p>
            <h2>Price: $${data.price}</h2>
            <div class="size">
                <h3>Your size</h3>
                ${size}                
            </div>
            <div class="qty">
                <h3>Quantity:</h3>
                <button type="button" onclick="giam()">-</button>
                <input type="text" value="1" name="" id="qty" readOnly>
                <button type="button" onclick="tang()">+</button>
            </div>
            <div class="addToCart">
                <button type="button" onclick="addToCart()">Add to cart</button>
            </div>
         </div>
        `;
      // đổ sản phẩm ra ngoài
      document.getElementById("detail").innerHTML = detail;
      // sản phẩm liên quan
      var sanPhamLienQuan = "";
      var realatedProducts = data.relatedProducts;
      realatedProducts.forEach(function(item){
        sanPhamLienQuan += `
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
        ` 
      });
      document.getElementById("Reatale").innerHTML = sanPhamLienQuan;
    });
    //   kết nối API lỗi
    promise.catch(function (err) {
      console.log(err);
    });
  }  
  getDataDetail();
  

  //nút qty
  function giam(){
    var qty = Number(document.getElementById("qty").value);
    document.getElementById("qty").value = qty - 1;
    var n = Number(document.getElementById("qty").value);
    if(n == 0){
      document.getElementById("qty").value = 1;
    }



  }

  function tang(){
     var qty = Number(document.getElementById("qty").value);
     document.getElementById("qty").value = qty + 1;


  }