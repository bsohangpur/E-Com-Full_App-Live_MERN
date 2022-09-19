import React from 'react';
import ProfileImg from "../../assets/person-1.jpg"

const Profile = () => {
    return (
        <div className='w-3/4 mt-12'>
            <div class="shadow-md w-3/4 p-4">
                <div class="card-header pb-0 p-3">
                    <div class="row">
                        <div class="flex items-center">
                            <h6 class="mb-0">Profile Information</h6>
                        </div>
                        <div class="text-end">
                            <a href="/">
                                <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body p-3">
                    <div className="grid place-items-center">
                        <p class="text-sm">
                            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                        </p>
                        <img className=' rounded-full w-1/4' src={ProfileImg} alt="" />
                    </div>

                    <hr class="horizontal gray-light my-4" />
                    <ul class="list-group">
                        <li class="list-group-item border-0 p-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                        <li class="list-group-item border-0 p-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                        <li class="list-group-item border-0 p-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                        <li class="list-group-item border-0 p-0 text-sm"><strong class="text-dark">Location:</strong> &nbsp; USA</li>
                        <li class="list-group-item border-0 p-0 pb-0">
                            <strong class="text-dark text-sm">Social:</strong> &nbsp;
                            <a class=" mb-0 px-2 py-0" href="/">
                                <i class="fab fa-facebook fa-lg"></i>
                            </a>
                            <a class="mb-0 px-2 py-0" href="/">
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>
                            <a class="mb-0 px-2 py-0" href="/">
                                <i class="fab fa-instagram fa-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile