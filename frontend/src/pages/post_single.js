import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import Header from "../components/layout/nav";

const SinglePost = () => {

const params = useParams()

const [post, setPost] = useState()

useEffect(() => {

    axios.get("http://localhost:3000/api/posts/" + params.id)
    .then((result) => {
        setPost(result.data)
    })

}, [])

console.log(post)


if(post) {
    return (
        <div>
            <div class="container mt-3">
                <div class="card mb-3">
                    <h1>{post.postTittle}</h1>
                    <p>{post.postDescription}</p>
                    <button onClick={modifyPost}>Éditer</button>
                    <button onClick={deletePost}>Effacer</button>
                    <button onClick={commentPost}>Commenter</button>
                </div>

            </div>
        </div>
    )

}
    else {
        return (
            <div>
                <div class="container mt-3">
                    <div class="card mb-3">
                        <h1>Post indisponible!</h1>
                    </div>
                </div>
            </div> 
        )
    }


return <ClipLoader />
}

export default SinglePost;