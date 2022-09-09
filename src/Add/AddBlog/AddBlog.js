import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://hidden-savannah-18290.herokuapp.com/blog', data)
        .then(res => {
            console.log(res?.data);
            if(res?.data?.insertedId){
                alert('Blog Added successfully!!!')
                reset();
            }
        })
    };
    return (
        <div className="container mt-5 mb-5 text-info">
            <h2 className="text-center mt-5 pb-2 border-bottom border-info border-5 ">Add Project</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="mt-2"  htmlFor="headline">Headline</label>
                <input {...register("headline", { required: true })}  placeholder="Enter Headline" className="form-control"  />
                {errors.headline && <span>Headline field is required</span>}
                
                <label className="mt-2"  htmlFor="img">Image URL</label>
                <input {...register("img", { required: true })}  placeholder="Enter Image URL" className="form-control"  />
                {errors.img && <span>Image URL field is required</span>}
                
                <label className="mt-2"  htmlFor="description">Description</label>
                <textarea {...register("description", { required: true })}  placeholder="Enter Description" className="form-control"  />
                {errors.description && <span>Description field is required</span>}
                
                <label className="mt-2"  htmlFor="link">Link URL</label>
                <input {...register("link", { required: true })}  placeholder="Enter Link URL" className="form-control"  />
                {errors.link && <span>Link URL field is required</span>}

                <input type="submit" className="form-control btn btn-info mt-2 fw-bolder" value="Add Blog" />
            </form>
        </div>
    );
};

export default AddBlog;