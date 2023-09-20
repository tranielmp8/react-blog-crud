import React, { useState, useEffect } from 'react'
import BlogList from '../components/BlogList'
import useFetch from '../hooks/useFetch'

export default function Home() {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    
  return (
    <div className='home'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
    </div>
  )
}
