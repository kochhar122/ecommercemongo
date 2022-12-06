var loadMore = document.getElementById("loadMore");
var newDiv = document.getElementById("newDiv");
var openCart = document.getElementById("openCart");
var fViewMore = document.getElementById("fViewMore");

console.log("helloooo")
let re = new XMLHttpRequest();
openCart.addEventListener("click", function () {
    window.location.href = "/openCart";
    re.send();
})

let req = new XMLHttpRequest();
loadMore.addEventListener("click", function () {
    let req = new XMLHttpRequest();
    let h1 = parseInt(loadMore.classList[0]);
    console.log(loadMore.classList);
    loadMore.setAttribute("class", h1 + 1);
    req.open("GET", `product/${h1}`)
    req.send();

    req.addEventListener("load", function () {
        let res = JSON.parse(req.responseText);
        console.log(res);
        res.forEach(function (val) {

            let elem = document.createElement("div");
            elem.innerHTML = `
   <div class="eachDiv">
   <h1 style="text-align:center"> ${val.productName} </h1>
  <div display="flex">
  <img src="${val.img}" width="200" height="200">
  <div style="display:flex;justify-content:center;gap:10px;margin-top:10px;padding:5px">
  <form >
    <input type="submit" value="view more" style="padding:10px"></input>
  </form>
  <form method="POST" action="/cart-2"  >
    <input type="text" name="text"  value="${val.productName}"  style="display:none;"/>
    <input type="text" name="text"  value="${val.desc}"  style="display:none;"/>
    <input type="text" name="text"  value="${val.img}"  style="display:none;"/>
    <input type="text" name="text"  value="${val}"  style="display:none;"/>
    <input type="submit" value="add to cart" style="padding:10px"></input>
  </form>
  </div>
  </div>
  </div>
  `

            newDiv.appendChild(elem);


        })

    })
})


