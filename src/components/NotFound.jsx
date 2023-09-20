import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <p>That page not found</p>
        <Link to="/">Go back to hompage....</Link>
    </div>
  )
}
