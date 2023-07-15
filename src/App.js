import { Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/home-page";
import NotFound from "./components/not-found";
import CartPage from "./components/pages/cart-page/cart-page";
import Shop from "./components/pages/shop/shop";
import SingleProduct from "./components/single-product/single-product.jsx";
import Checkout from "./components/checkout/checkout";
import PaymentIntegration from "./components/checkout/payment-integration";
import AddressModal from "./components/address/address-modal";
import UserSignUp from "./components/pages/user/user";
import UserLogin from "./components/pages/user/login";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderPage from "./components/pages/order/order-page";
import OrderDetails from "./components/pages/order/order-details";
import Profile from "./components/pages/user/profile";
import AllProducts from "./components/admin/product/all-products";
import Product from "./components/admin/product/product";
import AddProduct from "./components/admin/product/add-product";
import EditProduct from "./components/admin/product/edit-product";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={CartPage} />
        <Route path="/product/:_id" component={SingleProduct} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/payment" component={PaymentIntegration} />
        <Route path="/address" component={AddressModal} />
        <Route path="/sign-up" component={UserSignUp} />
        <Route path="/login" component={UserLogin} />
        <Route path="/orders" component={OrderPage} />
        <Route path="/single/:id" component={OrderDetails} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin/product/edit/:_id" component={EditProduct} />
        <Route path="/admin/product/single/:_id" component={Product} />
        <Route path="/admin/product/add" component={AddProduct} />
        <Route path="/admin/product" component={AllProducts} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
