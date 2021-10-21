import React, { useState, useEffect, Suspense } from "react"
import "./App.css"
import "./animate.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
//import Header from "./components/Header"
//import Home from "./pages/Home"
//import About from "./pages/About"
//import Portfolio from "./pages/Portfolio"
//import AllPosts from "./components/AllPosts"
import BlogDetailsPage from "./components/BlogDetailsPage"
//import Contact from "./pages/Contact"
//import Footer from "./components/Footer"
//import MainShop from "./pages/MainShop"
import Cart from "./shop_component/Cart"
import ParentProductPage from "./shop_component/ParentProductPage"
import Documentation from "./components/Documentation"
//import NotFound from "./components/NotFound"
import SacheuShopProducts from "./shop_component/SacheuShopProducts"
//import GLogin from "./components/GLogin"
//import CategoryPost from './components/CategoryPost'

const Header = React.lazy(() => import('./components/Header'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const MainShop = React.lazy(() => import('./pages/MainShop'));
const AllPosts = React.lazy(() => import('./components/AllPosts'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const GLogin = React.lazy(() => import('./components/GLogin'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  if (loading)
    return (
      <div>
        <div class="loading">Loading&#8230</div>
      </div>
    )

  return (
    <div className="App">
    <Suspense className="loading" fallback={<small>Loading...</small>}>
      <Router>
        <ScrollToTop>
          <Header />
          <Cart />
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
            {/* <Route path="/category/:slug" exact>
          <CategoryPost />
        </Route> */}
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
            <Route path="" component={NotFound} />
            {/* <Route component={() => (<div>404 Not found </div>)} /> */}
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
      </Suspense>
    </div>
  )
}

export default App