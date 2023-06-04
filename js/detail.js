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
      console.log("ID: " + id);
      break; // Thoát khỏi vòng lặp khi đã tìm thấy ID
    }
  }
}


function getData() {
    var promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
      method: "GET",
      responseType: "json",
    });
    //   kết nối API thành công
    promise.then(function (res) {
      data = res.data.content;
      console.log(data)

      var arrSize = data.size;
      var size = "";
      arrSize.forEach(function(item){
        size += `
        <button type="button" onclick="choseSize('${item})">${item}</button>       
        
        `;
        
      })  


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
                <h3>Qty:</h3>
                <button type="button" onclick="giam()">-</button>
                <input type="text" value="1" name="" id="qty">
                <button type="button" onclick="tang()">+</button>
            </div>
            <div class="addToCart">
                <button type="button" onclick="addToCart()">Add to cart</button>
            </div>
         </div>
        `;

      // đổ sản phẩm ra ngoài
      document.getElementById("detail").innerHTML = detail;
  
  
  
  
    });
  
    //   kết nối API lỗi
    promise.catch(function (err) {
      console.log(err);
    });
  }
  
  getData();
  