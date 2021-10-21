import React, { useState, useEffect, Suspense, lazy } from "react"
import "./App.css"
import "./animate.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import BlogDetailsPage from "./components/BlogDetailsPage"
import Cart from "./shop_component/Cart"
import ParentProductPage from "./shop_component/ParentProductPage"
import Documentation from "./components/Documentation"
import SacheuShopProducts from "./shop_component/SacheuShopProducts"
//import CategoryPost from './components/CategoryPost'

const Header = lazy(() => import('./components/Header'))
//const Home = lazy(() => import('./pages/Home'))
const Home = lazy(() => new Promise((resolve, reject) => setTimeout(() => resolve(import('./pages/Home')), 100)))
const About = lazy(() => new Promise((resolve, reject) => setTimeout(() => resolve(import('./pages/About')), 100)))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const MainShop = lazy(() => import('./pages/MainShop'))
const AllPosts = lazy(() => import('./components/AllPosts'))
const NotFound = lazy(() => import('./components/NotFound'))
const GLogin = lazy(() => import('./components/GLogin'))
const Contact = lazy(() => import('./pages/Contact'))
const Footer = lazy(() => import('./components/Footer'))

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
      {typeof window !== 'undefined' && (
        <Suspense fallback={<div class="loading">Loading&#8230</div>}>
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
                <Route path="" component={NotFound} />
              </Switch>
              <Footer />
            </ScrollToTop>
          </Router>
        </Suspense>
      )}
    </div>
  )
}

export default App