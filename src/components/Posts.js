import React from 'react';
import "../style/Posts.css";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
      <>
    {/* <ul className=' mb-4 text-center justify-content-center'>
      {posts.map(post => (
        <li key={post.id} className='col-12 col-sm-6 list-group-item text-center'>
        <div className="row">
            <div className=" text-center">
                <div className="main">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>          
        </li>
      ))}
    </ul> */}
      {posts.map(post => (
        <div className="row m-3 justify-content-center">
            <div className="col-12 col-sm-6 text-center">
                <div className="main p-3">
                    <h4>{post.title}</h4>
                    <p className="post_body">{post.body}</p>
                </div>
            </div>
        </div>          
      ))}
    </>
  );
};

export default Posts;