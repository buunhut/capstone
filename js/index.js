//bắt scroll chuột fix menu top
window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 40) {
    document.getElementById("mainMenu").classList.add("fixTop");
    document.getElementById("backToTop").classList.remove("none");
    document.getElementById("popUp").classList.add("none");
  } else {
    document.getElementById("mainMenu").classList.remove("fixTop");
    document.getElementById("backToTop").classList.add("none");
  }
};
//back to top
function toTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop.scrollTop = 0;
}
// close popup
function closePopup() {
  document.getElementById("popUp").classList.add("none");
}

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
function boDauTiengViet(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var input = "thành";
var str = boDauTiengViet(input);
var kQua = [];
for (let i = 0; i < danhSach.length; i++) {
  if (boDauTiengViet(danhSach[i].ten).includes(str)) {
    kQua.push(danhSach[i]);
  }
}

console.log(kQua);
console.log(text);
