import React from 'react';
import { useForm } from "react-hook-form";
const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <div>
            <h3 className="text-center">Contact me by email here</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="text-info">
                <div data-aos="fade-up" data-aos-duration="500">
                    <label htmlFor="name">Name</label>
                    <input {...register("name", { required: true })} placeholder="Enter Your Name" className="form-control" />
                    {errors.name && <span>Name field is required</span>}
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <label className="mt-3" htmlFor="email">Email</label>
                    <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="form-control" />
                    {errors.email && <span>Email field is required</span>}
                </div>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <label className="mt-3" htmlFor="phone">Phone Number</label>
                    <input type="number" {...register("phone")} placeholder="Enter Your Phone Number" className="form-control" />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <label className="mt-3" htmlFor="company">Company Name</label>
                    <input {...register("company")} placeholder="Enter Your Company Name" className="form-control" />
                </div>
                <div data-aos="fade-up" data-aos-duration="2500">
                    <label className="mt-3" htmlFor="message">Message</label>
                    <textarea {...register("message")} placeholder="Enter Your Message" className="form-control" />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <input type="submit" value="Send Email" className="btn btn-info form-control fw-bolder mt-2" />
                </div>
            </form>
        </div>

    );
};

export default ContactForm;