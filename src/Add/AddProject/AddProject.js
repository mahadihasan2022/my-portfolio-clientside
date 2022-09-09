import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProject = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://hidden-savannah-18290.herokuapp.com/project', data)
        .then(res => {
            console.log(res?.data);
            if(res?.data?.insertedId){
                alert('Project Added successfully!!!')
                reset();
            }
        })
    };
    return (
        <div className="container mt-5 mb-5 text-info">
            <h2 className="text-center mt-5 pb-2 border-bottom border-info border-5 ">Add Project</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="mt-2" htmlFor="title">Title</label>
                <input {...register("title", { required: true })}  placeholder="Enter Title" className="form-control"  />
                {errors.title && <span>Title field is required</span>}
                
                <label className="mt-2" htmlFor="img">Image URL</label>
                <input {...register("img", { required: true })}  placeholder="Enter Image URL" className="form-control"  />
                {errors.img && <span>Image URL field is required</span>}
                
                <label className="mt-2" htmlFor="technology">Technology</label>
                <textarea {...register("technology", { required: true })}  placeholder="Enter Technology" className="form-control"  />
                {errors.technology && <span>Technology field is required</span>}
                
                <label className="mt-2" htmlFor="features">Features</label>
                <textarea {...register("features", { required: true })}  placeholder="Enter Features" className="form-control"  />
                {errors.features && <span>Features field is required</span>}
               
                <label className="mt-2" htmlFor="description">Description</label>
                <textarea {...register("description", { required: true })}  placeholder="Enter Description" className="form-control"  />
                {errors.description && <span>Description field is required</span>}
               
                <label className="mt-2" htmlFor="categories">Categories</label>
                <input {...register("categories", { required: true })}  placeholder="Enter Categories" className="form-control"  />
                {errors.categories && <span>Categories field is required</span>}
               
                <label className="mt-2" htmlFor="liveSite">Live Site URL</label>
                <input {...register("liveSite", { required: true })}  placeholder="Enter Live Site URL" className="form-control"  />
                {errors.liveSite && <span>Live Site URL field is required</span>}
                
                <label className="mt-2" htmlFor="clientCode">Client Code URL</label>
                <input {...register("clientCode", { required: true })}  placeholder="Enter Client Code URL" className="form-control"  />
                {errors.clientCode && <span>Client Code URL field is required</span>}
                
                <label className="mt-2" htmlFor="serverCode">Server Code URL</label>
                <input {...register("serverCode")}  placeholder="Enter Server Code URL" className="form-control"  />

                <input type="submit" className="form-control fw-bolder mt-2 btn btn-info" value="Add Project" />
            </form>
        </div>
    );
};

export default AddProject;