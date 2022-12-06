const express = require("express");
const fs = require("fs");
const http = require("http");
const app = express();
const port = 4200;
const session = require("express-session");
const userdata = require("./database/models/user");
const startDB = require("./database/init");
const userModel = require("./database/models/user");
const productCartModel = require("./database/models/cart");
const getAllproducts = require("./controllers/products/getAllproducts");
const getAllUsers = require("./controllers/users/createUser");
const verifyUserController = require("./controllers/users/verifyUser");
const MailService = require("./utils/sendMail.js");
const getMoreProducts = require("./controllers/products/getMoreProducts");
const viewAdminProd = require("./controllers/products/adminProd");
const adminAdd = require("./controllers/products/adminAdd");
const createUserService= require("./controllers/users/createUser");
const addToCart = require("./controllers/cart/addToCart");
const addToCartMore = require("./controllers/cart/addToCartMore");
const openCart = require("./controllers/cart/openCart");
const deleteCart = require("./controllers/cart/deleteFromCart");
const plusCart = require("./controllers/cart/plusCart");
const minCart = require("./controllers/cart/minCart");
const removeStock = require("./controllers/products/removeStock");
const plusAdmin = require("./controllers/products/plusAdminProd");
const minAdmin = require("./controllers/products/minAdminProd");
const { redirect } = require("statuses");
const { render } = require("ejs");

startDB();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.set("view engine", "ejs");
app.set("views", "./views");

app.post("/minStock", minAdmin);

app.post("/plusStock", plusAdmin);

//to remove admin stock
app.post("/removeStock", removeStock);

//to view admin page products
app.get("/viewAdminPage", viewAdminProd);

app.post("/plusCart", function (req, res) {
  plusCart(req, res);
  res.redirect("/openCart");
});

app.post("/minCart", function (req, res) {
  minCart(req, res);
  res.redirect("/openCart");
});

app.post("/admin-home", adminAdd);

//to add products to cart
app.post("/cart", function (req, res) {
  if (req.session.islogged) {
    addToCart(req, res);
  } else {
    res.redirect("/login");
  }
});

//to add load more products to cart
app.post("/cart-2", function (req, res) {
  if (req.session.islogged) {
    addToCartMore(req, res);
  } else {
    res.redirect("/login");
  }
});

// to delete cart items
app.post("/removeItem", deleteCart);

// to get more products
app.route("/product/:id").get(getMoreProducts);

app.get("/openCart", openCart);

app.get("/validateMail/:userId", verifyUserController);

app.post("/logoutBtn", function (req, res) {
  req.session.islogged = false;
  req.session.username = null;
  res.redirect("/login");
});

app.post("/", function (req, res) {
  getAllproducts(req, res);
});

app.get("/", function (req, res) {
  console.log(req.body.isVerified);
  getAllproducts(req, res);
});

app.route("/login").get(getLogin).post(postLogin);
function getLogin(req, res) {
  console.log(req.session);
  if (
    req.session.islogged === false &&
    req.session.username &&
    req.session.isVerified === false &&
    req.session.role === "user"
  ) {
    // if the user is already logged in send him to the home page
    res.redirect("/");
  } else {
    res.redirect("/login.html");
  }
}

// to login
var userLog;
function postLogin(req, res) {
  console.log(req.body,"=query>=",req.query,)
  getUser(req.body.username, function (err, data) {
    if (err) {
      req.session.islogged = false;
      req.session.username =  null;
	  //req.session.password=null;
      req.session.isVerified = false;

      res.redirect("/login");
    } else {
      // for user

      req.session.islogged = true;
      req.session.username = data[0].username;
      req.session.isVerified = true;
      console.log("data = >",data);
      
      if (data[0].role === "user") {
        res.redirect("/");
      } else {
        res.render("admin-home");
      }
  
    }
  });
}

app.route("/signUp").get(getSignUp).post(getAllUsers);
function getSignUp(req, res) {
  console.log("inside");
  console.log("here",req.query);
  //console.log(req.query._id);
  console.log(userModel);
  let newUser = new userModel(req.query);
  if (newUser) {
    newUser.save();
    res.redirect("/login.html");
  }

}


/*function getAllUser(req, res) {
	getUsers(req.session.username, req.session.password,req.session.email,req.session.role, function (err, data) {
		
		if (err) {
			req.session.islogged = false;
			req.session.username = null;
			req.session.password = null;
			//req.session.isVerified = false;
			
			res.redirect("/login.html");
		}

		else {
		
			// for user

			req.session.islogged = true;
			req.session.username = data[0].username;
			req.session.isVerified = true;

		
			if (!data[0].isVerified) {
				res.redirect("/signUp.html")
				return;
			}

			if (data[0].isVerified) 
				//console.log("check chekck")
				if (data[0].role === "user") {
					res.redirect("/login.html");
				}
				
			}
		
	
	})


}*/

//to get the products
app.route("/products").get(getAllproducts);

function getUser(username,  callback) {
  userdata
    .find({ username: username })
    .then(function (data) {
      callback(null, data);
    })
    .catch(function (err) {
      callback("error while getting user");
    });
}

/*function getUsers(username, password, email, role, callback) {
  userModel
    .find({ username: username, password: password, email: email, role: role })
    .then(function (data) {
      callback(null, data);
    })
    .catch(function (err) {
      callback("error while getting user");
    });
}*/

app.listen(port, () => {
  console.log("hello");
});
