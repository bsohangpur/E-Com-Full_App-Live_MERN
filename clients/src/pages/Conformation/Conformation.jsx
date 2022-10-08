import React from 'react';
import './style.css'
import {NavBar, Footer} from '../../constant/index'

const Conformation = () => {
  return (
	<section className="order_details section_gap">
        <NavBar/>
		<div className="container mb-4">
			<h3 className="title_confirmation">Thank you. Your order has been received.</h3>
			<div className="flex flex-wrap order_d_inner justify-evenly">
				<div className="my-2">
					<div className="details_item">
						<h4>Order Info</h4>
						<ul className="list">
							<li><span>Order number</span> : 60235</li>
							<li><span>Date</span> : Los Angeles</li>
							<li><span>Total</span> : USD 2210</li>
							<li><span>Payment method</span> : Check payments</li>
						</ul>
					</div>
				</div>
				<div className="my-2">
					<div className="details_item">
						<h4>Billing Address</h4>
						<ul className="list">
							<li><span>Street</span> : 56/8</li>
							<li><span>City</span> : Los Angeles</li>
							<li><span>Country</span> : United States</li>
							<li><span>Postcode </span> : 36952</li>
						</ul>
					</div>
				</div>
				<div className="my-2">
					<div className="details_item">
						<h4>Shipping Address</h4>
						<ul className="list">
							<li><span>Street</span> : 56/8</li>
							<li><span>City</span> : Los Angeles</li>
							<li><span>Country</span> : United States</li>
							<li><span>Postcode </span> : 36952</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="order_details_table w-full ">
                <div className="w-full flex justify-center">
                    <h2 className='w-4/5 p-4 text-2xl text-slate-50 bg-zinc-700 rounded-sm'>Order Details</h2>
                </div>
				<div className="table-responsive w-full flex justify-center">
					<table className="table text-zinc-900 w-4/5 bg-neutral-300 rounded-sm">
						<thead>
							<tr>
								<th>Product</th>
								<th>Quantity</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>Pixelstore fresh Blackberry</p>
								</td>
								<td>
									<h5>x 02</h5>
								</td>
								<td>
									<p>$720.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Pixelstore fresh Blackberry</p>
								</td>
								<td>
									<h5>x 02</h5>
								</td>
								<td>
									<p>$720.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Pixelstore fresh Blackberry</p>
								</td>
								<td>
									<h5>x 02</h5>
								</td>
								<td>
									<p>$720.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<h4>Subtotal</h4>
								</td>
								<td>
									<h5>#</h5>
								</td>
								<td>
									<p>$2160.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<h4>Shipping</h4>
								</td>
								<td>
									<h5>#</h5>
								</td>
								<td>
									<p>Flat rate: $50.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<h4>Total</h4>
								</td>
								<td>
									<h5>#</h5>
								</td>
								<td>
									<p>$2210.00</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
        <Footer/>
	</section>
  )
}

export default Conformation