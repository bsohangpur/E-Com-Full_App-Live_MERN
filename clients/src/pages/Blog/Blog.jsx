import React from 'react';
import NavBar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import HeroSection from '../../constant/HeroSection/HeroSection';
import BlogImg from '../../assets/product-1.png'
import BlogData from '../../container/BlogData/BlogData';

const blog = {
    img: BlogImg,
    heading: 'Blog',
    textArea: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'
}

const Blog = () => {
    return (
        <div>
            <NavBar />
            <HeroSection props={blog} />
            {/* Start Blog Section */}
            <div className="blog-section ">
                <div className="container flex justify-center">
                    <div className="grid grid-cols-3 gap-4 w-4/5">
                        <BlogData />
                    </div>
                </div>
            </div>
            {/* End Blog Section	 */}
            <Footer />
        </div>
    )
}

export default Blog