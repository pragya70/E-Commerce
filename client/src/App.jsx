import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProduct from "./pages/admin-view/product"
import AdminOrder from "./pages/admin-view/order"
import AdminFeatured from "./pages/admin-view/featured"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFoundPage from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/home"
import ProductListing from "./pages/shopping-view/listing"
import ShoppingCheckOut from "./pages/shopping-view/checkout"
import ShoppingAccount from "./pages/shopping-view/account"


function App() {

  return (
    <>
      <div className="flex flex-1 overflow-hidden bg-white">
        <h1> Header</h1>
        <Routes>
          <Route path="/auth" element={<AuthLayout/>}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>

          <Route path="/admin" element={<AdminLayout/>}> 
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="product" element={<AdminProduct/>}/>
            <Route path="order" element={<AdminOrder/>}/>
            <Route path="featured" element={<AdminFeatured/>}/>
          </Route>

          <Route path="/shop"  element={<ShoppingLayout/>}>
            <Route path="home" element={<ShoppingHome/>}/>  
            <Route path="listing" element={<ProductListing/>}/>  
            <Route path="checkout" element={<ShoppingCheckOut/>}/>  
            <Route path="account" element={<ShoppingAccount/>}/>  
          </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
