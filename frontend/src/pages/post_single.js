import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import CommentForm from "../components/CommentForm";
import Header from "../components/layout/nav";
import PostFormModify from "../components/PostFormModify"

const SinglePost = () => {

const params = useParams();

const navigate = useNavigate();

const [post, setPost] = useState();

useEffect(() => {

    axios.get("http://localhost:3000/api/posts/" + params.id)
    .then((result) => {
        setPost(result.data)
    })

}, []);


const deletePost = () => {
    axios.delete("http://localhost:3000/api/posts/" + params.id)
    .then((result) => {
        alert("Post Suprimé");
        navigate("/home")
    }) 
}

const commentPost = () => {
    navigate("/comment_create")

}

console.log(post);

if(post) {
    return (
        <div>
            <Header />
            <div class="container mt-3">
                <div class="card mb-3">
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h1>{post.postTittle}</h1>
                        <p>{post.postDescription}</p>
                      
                        <button onClick={deletePost} className='btn btn-danger m-2'>Effacer</button>
                        <button onClick={commentPost} className='btn btn-danger m-2'>Commenter</button>
                    </div>
                </div>
            </div>
            <PostFormModify id={post.id} />
            {/* <CommentForm id={comment.id} /> */}
        </div>
    )

}
    else {
        return (
            <div>
                <Header />
                <div>
                    <div class="container mt-3">
                        <div class="card mb-3">
                            <h1>Post indisponible!</h1>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }


return <ClipLoader />
}

export default SinglePost;