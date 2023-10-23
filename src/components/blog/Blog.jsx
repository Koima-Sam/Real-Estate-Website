import React from 'react'
import RecentCard from '../home/recent/RecentCard'
import Back from '../common/header/Back'
import img from '../images/banner.png'

const Blog = () => {
  return (
    <>
        <section className="blog-out mb">
            <Back name="Blog" title="Blog Grid - Our Blogs" cover ={img} />
            <div className="container recent">
                <RecentCard />
            </div>
        </section>
    </>
  )
}

export default Blog