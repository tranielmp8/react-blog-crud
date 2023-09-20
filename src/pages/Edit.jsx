import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function Edit() {

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    // const [author, setAuthor] = useState('')

    const {id} = useParams();
    const [values, setValues] = useState({
        id: id,
        title: '',
        body: '',
        author: ''
    })

    useEffect(() => {
        fetch('http://localhost:8000/blogs/'+id)
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
            return res.json()
        })
        .then((data) => {
            setValues({ ...values, title: data.title, body: data.body, author: data.author })
            console.log(data)
        })
        .catch(err => console.log(err))
    }, [])
    
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)
        const blogData = {
            title: values.title,
            body: values.body,
            author: values.author
        }


        fetch('http://localhost:8000/blogs/'+id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogData)
        }). then(() => {
            console.log('Edited blog')
            setIsPending(false)
            // navigate(-1) to go back, or navigate(1) to go forward
            navigate('/')
        })

    }

  return (
    <div className='create'>
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit} >
            <label >Blog Title:</label>
            <input type="text"
                required
                value={values.title}
                onChange={(e) => setValues({...values, title: e.target.value})}
            />
            
            <label >Blog Body:</label>
            <textarea 
                required
                value={values.body}
                onChange={(e) => setValues({...values, body: e.target.value})}
             ></textarea>

            <label >Blog Author:</label>
            <select
                value={values.author}
                onChange={(e) => setValues({...values, author: e.target.value})}
             >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>

            {!isPending && <button>Submit Change</button>}
            {isPending && <button disabled >Editing blog...</button>}

            {/* <p> title: {title} </p>
            <p> body: {body} </p>
            <p> body: {author} </p> */}

        </form>
    </div>
  )
}
