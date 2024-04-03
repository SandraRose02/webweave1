import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt=""/>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                Build Stunning Websites Easily with WebWeave
                </h1>
                <p className='primary-text'>
                At WebWeave, we believe that everyone should have the power to create stunning websites effortlessly. Whether you're building a resume, portfolio, blog, or conference website, we've got you covered with our wide range of free templates.
                </p>
                <button className='secondary-button'>
                    Explore Templates <FiArrowRight/>
                </button>

            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt=""/>
            </div>


        </div>
    </div>
  )
}

export default Home