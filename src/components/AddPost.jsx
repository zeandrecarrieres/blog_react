import React, { useState, useEffect } from 'react'
import data from "../data"


function AddPost() {


    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [tags,setTags] = useState([]);
    const [submit,setSubmit] = useState(false);
    const [post,setPost] = useState([]);


    useEffect(() => {
        console.log(post)
    }, [post])

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setPost({
            ...{title},
            ...{content},
            ...{tags}
        });
    }

    return (


        <div className="addpost">
            <h2>Add New Post</h2>

            <form className="form-group" onSubmit={handleSubmit}>

                <label htmlFor="post-title">Title Post </label>
                <input type="text" name="post-title" id="post-title" value={title} onChange={(e) => setTitle(e.target.value)} />


                <label htmlFor="post-content">Content: </label>
                <textarea name="post-content" id="post-content" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

                <label htmlFor="post-tags">Tags </label>
                <input type="text" name="post-tags" id="post-tags" value={tags} onChange={(e) => {
                    let newTags = e.target.value.toLowerCase().split(',')
                    setTags(newTags);
                }} />
                <button type="submit" value="Add Post" className="add-btn">Add</button>

            </form>



        </div>
    )
}

export default AddPost
