import React from 'react';
import { BsTruck } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { TbTruckReturn } from 'react-icons/tb';
import Person from '../../assets/person-1.jpg';
import Navbar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import Testimonial from '../../constant/Testimonial/Testimonial';
import HeroSection from '../../constant/HeroSection/HeroSection';
import AboutImg from '../../assets/bowl-2.png'

const about= {
  img: AboutImg,
  heading:'About Us',
  textArea: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.'
}

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection props={about}/>
      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="flex justify-between align-center flex-wrap">
            <div className="w-1/2 grid place-content-center px-12">
              <h2 className="section-title">Why Choose Us</h2>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

              <div className="grid grid-cols-2 my-5">
                <div className="">
                  <div className="feature">
                    <div className="">
                      <BsTruck className='text-3xl' />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="">
                  <div className="feature">
                    <div className="">
                      <FiShoppingBag className='text-3xl' />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="">
                  <div className="feature">
                    <div className="">
                      <BiSupport className='text-3xl' />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="">
                  <div className="feature">
                    <div className="">
                      <TbTruckReturn className='text-3xl' />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="w-1/2 flex justify-center">
              <div className="img-wrap">
                <img src="https://picsum.photos/400/500" alt="Image" className="img-fluid" />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}

      {/* Start Team Section */}
      <div className="untree_co-section">
        <div className="container">

          <div className="row mb-5">
            <div className=" mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          <div className="flex px-12 flex-wrap">

            {/* Start Column 1 */}
            <div className="w-1/4">
              <img src={Person} className="mb-2 rounded-full w-2/3" />
              <h3 className='font-bold'><a href="#"><span className="">Lawson</span> Arnold</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p className='w-2/3'>Separated they live in.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
            </div>
            {/* End Column 1 */}

            {/* Start Column 2 */}
            <div className="w-1/4">
              <img src={Person} className="mb-2 rounded-full w-2/3" />

              <h3 className='font-bold'><a href="#"><span className="">Jeremy</span> Walker</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p className='w-2/3'>Separated they live in.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>

            </div>
            {/* End Column 2 */}

            {/* Start Column 3 */}
            <div className="w-1/4">
              <img src={Person} className="mb-2 rounded-full w-2/3" />
              <h3 className='font-bold'><a href="#"><span className="">Patrik</span> White</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p className='w-2/3'>Separated they live in.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
            </div>
            {/* End Column 3 */}

            {/* Start Column 4 */}
            <div className="w-1/4">
              <img src={Person} className="mb-2 rounded-full w-2/3" />

              <h3 className='font-bold'><a href="#"><span className="">Kathryn</span> Ryan</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p className='w-2/3'>Separated they live in.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>


            </div>
            {/* End Column 4 */}



          </div>
        </div>
      </div>
      {/* End Team Section */}

      <Testimonial />
      <Footer />
    </div>
  )
}

export default About