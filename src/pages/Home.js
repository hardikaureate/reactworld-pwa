import React, { Suspense, lazy } from 'react';
import LazyLoad from 'react-lazyload'
//import MegaSlider from '../components/MegaSlider';
import Counter from '../components/Counter';
const Homebanner = lazy(() => import('../components/Homebanner'));
const InnerMenu = lazy(() => import('../components/InnerMenu'));
const PDPRelatedProduct = lazy(() => import('../components/slider/PDPRelatedProduct'));
const RegisterForm = lazy(() => import('../components/RegisterForm'));

const Home = () => {
    return (
        <div>

            <Suspense fallback={<div style={{ position: 'fixed', left: '0%', top: '0%', zIndex: '9999', backgroundColor: 'lavender', width: '100%', height: '100%' }}>
            </div>}>
                <LazyLoad height={500}>
                    <Homebanner />
                </LazyLoad>
                {/* <LazyLoad height={500}>
                    <MegaSlider />
                </LazyLoad> */}
                <LazyLoad height={500}>
                    <InnerMenu />
                </LazyLoad>
                <LazyLoad height={500}>
                    <PDPRelatedProduct title="Sacheu Beauty Products" />
                </LazyLoad>
                <Counter />
                <LazyLoad height={500}>
                    <RegisterForm />
                </LazyLoad>
            </Suspense>
        </div>
    )
}
export default Home
