import React, { Component } from 'react';

class Client extends Component {
    render() {
        return (
            <div className="clientContainer">
                <section className="text-center my-5 p-1">

                    <h2 className="h1-responsive font-weight-bold my-5">Clients</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                            <div className="card testimonial-card">
                                <div className="card-up info-color"></div>
                                <div className="avatar mx-auto white">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" className="rounded-circle img-fluid" alt="1st client"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="font-weight-bold mb-4">John Doe</h4>
                                    <hr />
                                    <p className="dark-grey-text mt-4">Lorem ipsum dolor sit amet eosadipisci, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-md-0 mb-4">

                            <div className="card testimonial-card">

                                <div className="card-up blue-gradient">
                                </div>

                                <div className="avatar mx-auto white">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle img-fluid" alt="2nd client"/>
                                </div>
                                <div className="card-body">

                                    <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                                    <hr />

                                    <p className="dark-grey-text mt-4">Neque cupiditate assumenda in
maiores repudiandae mollitia architecto.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="card testimonial-card">

                                <div className="card-up indigo"></div>

                                <div className="avatar mx-auto white">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle img-fluid" alt="3rd client"/>
                                </div>
                                <div className="card-body">

                                    <h4 className="font-weight-bold mb-4">Maria Kate</h4>
                                    <hr />

                                    <p className="dark-grey-text mt-4">Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.</p>
                                </div>
                            </div>

                        </div>


                    </div>


                </section>
            </div>
        );
    }
}

export default Client;