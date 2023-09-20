import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function BlogDetails() {

    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
        // const { data, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`) << will work also
    const navigate = useNavigate()
    const handleClick = () => {
        // can use id since we imported useParams, but we can also use blog.id
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/')
        }) 
    }

  return (
    <div className='blog-details' >
        { isPending && <h2>Loading... </h2>}
        { error && <div> { error } </div>}
        { blog && (
            <article>
                <h2> {blog.title} </h2>
                <p> Written by { blog.author } </p>
                <div> { blog.body } </div>
                <button onClick={handleClick}>delete</button>
                <button onClick={() => navigate(`/blogs/edit/${blog.id}`)} >Edit</button>
            </article>
        )}
    </div>
  )
}
