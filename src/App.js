import React, { useState, useEffect, Suspense, lazy } from "react"
import "./App.css"
import "./animate.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BlogDetailsPage from "./components/BlogDetailsPage"
import Cart from "./shop_component/Cart"
import ParentProductPage from "./shop_component/ParentProductPage"
import Documentation from "./components/Documentation"
import SacheuShopProducts from "./shop_component/SacheuShopProducts"
// import LoginHome from "./components/newlogin/LoginHome"
// import LoginForm from "./components/newlogin/LoginForm"
// import LoginDashboard from "./components/newlogin/LoginDashboard"
// import PublicRoute from "./components/newlogin/PublicRoute"
// import PrivateRoute from "./components/newlogin/PrivateRoute"
//import { getToken, removeUserSession, setUserSession } from "./components/newlogin/Common"
//import axios from "axios"
//import CategoryPost from './components/CategoryPost'
import ScrollToTop from 'react-scroll-up';
import ClickToTop from "./components/ClickToTop"

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => new Promise((resolve, reject) => setTimeout(() => resolve(import('./pages/Home')), 100)))
const About = lazy(() => new Promise((resolve, reject) => setTimeout(() => resolve(import('./pages/About')), 100)))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const MainShop = lazy(() => import('./pages/MainShop'))
const AllPosts = lazy(() => import('./components/AllPosts'))
const NotFound = lazy(() => import('./components/NotFound'))
const GLogin = lazy(() => import('./components/GLogin'))
const Contact = lazy(() => import('./pages/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0)
// }

function App() {
  // useEffect(() => {
  //   throw new Error("Something went wrong!");
  // }, []);

  //const [authLoading, setAuthLoading] = useState(true);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  /*useEffect(() => {
   setTimeout(() => setLoading(false), 1000)
   const token = getToken();
   if (!token) {
     return;
   }

   axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
     setUserSession(response.data.token, response.data.user);
     setAuthLoading(false);
   }).catch(error => {
     removeUserSession();
     setAuthLoading(false);
   });
 }, []);

 if (authLoading && getToken()) {
   return <div className="content">Checking Authentication...</div>
 }*/

  if (loading)
    return (
      <div>
        <div class="loading">Loading&#8230</div>
      </div>
    )


  return (
    <div className="App">

      <ScrollToTop showUnder={160} transition='transform 1s ease-in-out' transitionTimingFunction='linear' z-index='9999999 !important' cursor='pointer' position='fixed' duration={2000}>
        <span className="topscroll"><img src="images/top.png" alt="img" /></span>
      </ScrollToTop>
      {typeof window !== 'undefined' && (
        <Suspense fallback={<div class="loading">Loading&#8230</div>}>
          <Router>
            <Header />
            <Cart />
            <ClickToTop>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/glogin" exact>
                  <GLogin />
                </Route>
                <Route path="/portfolio" exact>
                  <Portfolio />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/contact" exact>
                  <Contact />
                </Route>
                <Route path="/post/:slug" exact>
                  <BlogDetailsPage />
                </Route>
                {/* 
              <Route path="/category/:slug" exact>
                <CategoryPost />
              </Route> 
              */}
                <Route path="/products/:handle" exact>
                  <ParentProductPage />
                </Route>
                <Route path="/post/" exact>
                  <AllPosts />
                </Route>
                <Route path="/shop" exact>
                  <MainShop />
                </Route>
                <Route path="/sacheushop" exact>
                  <SacheuShopProducts />
                </Route>
                <Route path="/doc" exact>
                  <Documentation />
                </Route>
                {/* <Route path="/loginhome" exact>
                  <LoginHome />
                </Route>
                <PublicRoute path="/loginform" exact>
                  <LoginForm />
                </PublicRoute>
                <PrivateRoute path="/logindashboard" exact>
                  <LoginDashboard />
                </PrivateRoute> */}
                <Route path="" component={NotFound} />
              </Switch>
            </ClickToTop>
            <Footer />
          </Router>

        </Suspense>
      )}
    </div>
  )
}

export default App