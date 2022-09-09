import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import articleSvg from '../../image/svg/article.svg'
import BlogDetails from './BlogDetails';

const Blog = () => {
    const [blogsData, setBlogsData] = useState([]);
    useEffect(() => {
        axios('/blogs')
            .then(res => {
                if (res.status === 200) {
                    setBlogsData(res.data)
                }
                if (res.status === 404) {
                    window.location.reload();
                }
            })
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center pb-2 mt-5 border-bottom border-info border-5 text-info">My Articles</h2>
            <div className="text-center">
                <img
                    data-aos="flip-up"
                    data-aos-duration="2500"
                    className="w-50" src={articleSvg} alt="" />
            </div>
            <div className="row">
                {
                    blogsData.map(blog => <BlogDetails key={blog._id} blog={blog}></BlogDetails>)
                }
            </div>
            <Link to="/add-blog" className="btn btn-outline-info mt-3">Add New Blog</Link>
        </div>
    );
};

export default Blog;