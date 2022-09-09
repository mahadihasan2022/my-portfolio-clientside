import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { darkTheme, GlobalStyles, lightTheme } from './theme/theme';
import AOS from 'aos';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './Page/Home/Home/Home';
import Footer from './Page/Shear/Footer/Footer';
import HeaderNav from './Page/Shear/HeaderNav/HeaderNav';
import Project from './Page/Project/Project';
import Blog from './Page/Blog/Blog';
import Contact from './Page/Contact/Contact';
import AddProject from './Add/AddProject/AddProject';
import AddBlog from './Add/AddBlog/AddBlog';
import Login from './Login/Login';
AOS.init();

export const ThemeContextProvider = createContext();
export const AdminContext = createContext();
// #0dcaf0 
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [admin, setAdmin] = useState({});
  return (
    <AdminContext.Provider value={[admin, setAdmin]}>
    <ThemeContextProvider.Provider value={[isDarkTheme, setIsDarkTheme]}>
      <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route element={<PrivateRoute />}>
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeContextProvider.Provider>
      </AdminContext.Provider>

  );
}

export default App;
