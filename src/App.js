import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import AccountPage from "./Pages/AccountPage";
import { ProductProvider } from "./Components/ProductContext";
import ProductPage from "./Pages/ProductPage";
import NotFound from "./Pages/NotFound";
import CategoryPage from "./Pages/CategoryPage";
import PostAd from "./Pages/PostAd";
import ConfirmEmail from "./Pages/ConfirmEmail";
import { EmailVerified } from "./Pages/EmailVerified";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path={"/session/new"} element={<Login />} />
        <Route path={"/signup/new"} element={<SignUp />} />
        <Route path="/profile" element={<AccountPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:id/products" element={<CategoryPage />} />
        <Route path="/post-add" element={<PostAd />} />
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/users/email_verification_required"}
          element={<ConfirmEmail />}
        />
        <Route path={"/users/:id/verify/:token"} element={<EmailVerified />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
