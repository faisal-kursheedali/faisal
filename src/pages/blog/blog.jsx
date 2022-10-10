import React from 'react'
import { useSelector } from 'react-redux'
import { CardList, CenterTxt } from '../../component';
import "./blog.css"

const Blog = () => {
  const state=useSelector(store=>store.state);
  const data=state.blogData;
  return (
    <>
    <div className="blog-conatainer">
      <CenterTxt data={"MY blogs"}/>
      <div className="blog-head">
        Blogs
      </div>
      <CardList data={data}/>
    </div>
    </>
  )
}

export default Blog