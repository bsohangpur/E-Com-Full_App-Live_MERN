import React, {useContext} from 'react';
import { ContextWrap } from '../../container/contexApi/States';
import NavBar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import PageNotFound from '../../constant/PageNotFound/PageNotFound';

const CheckOut = () => {
    const PData = useContext(ContextWrap)

    return (
        <div className=''>
            <NavBar/>
            {
            PData.totalCartAmount===0 
            ? 
            <PageNotFound page={'Home'}/>
            :
            <div className="container-fluid mt-4 w-full">
                <div className="">
                    <div className=" ">
                        <div className="mx-auto w-4/5 my-4 text-3xl">
                            <h2>Checkout</h2>
                        </div>
                        <div className="flex gap-4 w-4/5 mx-auto">
                            <div className="w-2/3">
                                <form action="#" method="post">
                                    <div className="py-2">
                                        <div className="w-full px-4 mb-3">
                                            <label for="c_address" class="text-black">Full Name <span class=" text-red-500">*</span></label>
                                            <div className="flex gap-2 ">
                                                <input type="text" className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200" id="first_name" value="" placeholder="First Name" required />
                                                <input type="text" className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200" id="last_name" value="" placeholder="Last Name" required />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 mb-3">
                                            <label for="c_address" class="text-black">Email <span class=" text-red-500">*</span></label>
                                            <input type="email" className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200" id="email" placeholder="Email" value="" />
                                        </div>

                                        <div class="form-group">
                                            <div class="grid w-full px-4 mb-3">
                                                <label for="c_address" class="text-black">Address <span class=" text-red-500">*</span></label>
                                                <input type="text" class="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200" id="c_address" name="c_address" placeholder="Street address" />
                                            </div>
                                        </div>

                                        <div class="form-group w-full px-4 mb-3">
                                            <input type="text" class="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200" placeholder="Apartment, suite, unit etc. (optional)" />
                                        </div>

                                        <div className="w-full px-4 mb-3">
                                            <label for="c_state_country" class="text-black">Country</label>
                                            <input type="text" class="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200" id="country" name="country" placeholder="State / Country" />
                                        </div>
                                        <div class="form-group ">
                                            <div class="grid w-full px-4 mb-3">
                                                <label for="c_address" class="text-black">State / Country <span class=" text-red-500">*</span></label>
                                                <select className="w-full h-12 outline-none border-none bg-gray-200" id="State">
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chandigarh">Chandigarh</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                                    <option value="Daman and Diu">Daman and Diu</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Lakshadweep">Lakshadweep</option>
                                                    <option value="Puducherry">Puducherry</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Odisha">Odisha</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Telangana">Telangana</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                </select>
                                            </div>
                                            <div class="grid w-full px-4 mb-3">
                                                <label for="c_postal_zip" class="text-black">Postal / Zip <span class=" text-red-500">*</span></label>
                                                <input type="text" class="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200" id="c_postal_zip" name="c_postal_zip" placeholder="Postal / Zip" />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 mb-3">
                                            <label for="c_address" class="text-black">Phone No <span class=" text-red-500">*</span></label>
                                            <input type="number" className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200" id="phone_number" min="0" placeholder="Phone No" value="" />
                                        </div>
                                        <div className="w-full px-4 mb-3">
                                            <label for="c_address" class="text-black">Comment</label>
                                            <textarea cols="30" rows="7" name="comment" className="w-full pl-2 rounded-sm outline-none border-none bg-gray-200" placeholder="Leave a comment about your order"></textarea>
                                        </div>

                                        <div className="w-full px-4 mb-3">
                                            <div className="custom-control custom-checkbox d-block mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label" for="customCheck2">Create an accout</label>
                                            </div>
                                            <div className="custom-control custom-checkbox d-block">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label" for="customCheck3">Ship to a different address</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="bg-gray-200 h-fit w-1/4">
                                <div className="px-4 py-8 ">
                                    <div className="grid gap-12">
                                        <h5 className='text-xl font-bold '>Cart Total</h5>
                                        <ul className="grid gap-4 capitalize">
                                            <li className='flex justify-between'><span>subtotal:</span> <span>{PData.totalCartAmount} ₹</span></li>
                                            <li className='flex justify-between'><span>delivery:</span> <span>50 ₹</span></li>
                                            <li className='flex justify-between'><span>total:</span> <span>{PData.totalCartAmount===0 ? 0 : PData.totalCartAmount+50} ₹</span></li>
                                        </ul>
                                        <div className="flex justify-center mt-12">
                                            <div className='w-4/5 bg-amber-500 h-12 rounded-sm grid place-content-center'>
                                                <a to="/checkout" className="text-gray-50">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}
            <Footer/>
        </div>
    )
}

export default CheckOut