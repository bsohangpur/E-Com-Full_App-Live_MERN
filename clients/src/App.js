import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Blog, BlogDetail, Cart, CheckOut, Contact, Home, Login, ProductDetail, Register, Shop, Logout } from './pages/index';
import Admin from './AdminPanal/Admin/Admin';
import { Dashboard, AdminBlog, AddBlog, MainBlogEdit, MainProductEdit, AdminProduct, AddProduct, Profile, ProductSearch, Complain, ProfileEdit } from './AdminPanal/index'
import Auth from './container/Authantication/Auth';
import Profiles from './pages/Profile/Profile.jsx'
import { useDispatch } from 'react-redux';
import { VerifyUser } from './container/Redux/Reducers/userSlice';
import { useEffect } from 'react';
import Conformation from './pages/Conformation/Conformation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(VerifyUser())
  }, [dispatch])

  return (
    // <State>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/conformation' element={<Conformation />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/profile' element={<Profiles />} />
        <Route element={<Auth />}>
          <Route path='/admin' element={<Admin />} >
            <Route index element={<Dashboard />} />
            <Route path='product' element={<AdminProduct />} />
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='mainproductedit' element={<MainProductEdit />} />
            <Route path='blog' element={<AdminBlog />} />
            <Route path='addblog' element={<AddBlog />} />
            <Route path='mainblogedit' element={<MainBlogEdit />} />
            <Route path='profile' element={<Profile />} >
              <Route index element={<Profile />} />
              <Route path='edit' element={<ProfileEdit />} />
            </Route>
            <Route path='productsearch' element={<ProductSearch />} />
            <Route path='complain' element={<Complain />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // </State>

  )
}

export default App