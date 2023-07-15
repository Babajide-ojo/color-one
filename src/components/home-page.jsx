import React, {useContext} from "react";
import Layout from "./shared/layout";
import Hero from "./hero/hero";
import MainSection from "./main-section/main-section";
import FeaturedCollection from "./featured-collection/featured-collection";
import Slider from "./slider/slider";
import FeaturedProduct from "./shared/featured-product";
import { ProductsContext } from "../context/products-context";
import './pages/shop/shop.styles.scss'
import FlashSales from "./flash-sales/flash-sales";

const HomePage = () => {
    const { products } = useContext(ProductsContext)
    const allProducts = products.map((product) => (
        <FeaturedProduct {...product} key={product._id} />
    ))
 return(
    <>
    <Layout>
        <Slider />
        <FeaturedCollection />
        <FlashSales />
        <div className="product-list-container">
                <h2 className="product-home-title">Latest Wears</h2>
                <div className="product-list">{allProducts}</div>
            </div>
        <MainSection />
        <Hero />
    </Layout>
    </>
 )
}

export default HomePage;