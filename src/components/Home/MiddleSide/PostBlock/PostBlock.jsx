import React, {useEffect, useState} from 'react';
import '../middleSide.css'
import LikesBlock from "./likes/LikesBlock.jsx";
import PostAbout from "./postAbout/postAbout.jsx";
import IconsBlock from "./icons/IconsBlock.jsx";
import ViewAllComments from "./viewAllComments/ViewAllComments.jsx";
import PostImage from "./postImage/PostImage.jsx";
import AddComment from "./addComment/AddComment.jsx";

const PostBlock = () => {
  const [users, setUsers] = useState([]);

  const [posts, setPosts] = useState({});

  const [desc, setDesc] = useState([]);
  const [comments, setComments] = useState([]);

  const [likes, setLikes] = useState([]);


  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=4&limit=20')
      .then(res => res.json())
      .then(data => setUsers(data))

    fetch('https://picsum.photos/v2/list?page=1')
      .then(res => res.json())
      .then(data => setPosts(data))

    fetch("/api/random?min=1&max=200&count=20")
      .then(res => res.json())
      .then(data => setLikes(data))

    fetch("/api/random?min=1&max=200&count=20")
      .then(res => res.json())
      .then(data => {
        setComments(data)
      })

    fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=20')
      .then(res => res.json())
      .then(data => setDesc(data))
  }, []);

  return (
    <div className='postBlock'>
      <div className='post'>
        <div className='postInfo'>
          {users.map((item, index) => {
            const times = (index + 1) * 5;
            const post = posts[index]


            return (
              <div key={index} className='posts'>
                <div key={item.id || index} className='postInfoUsers'>
                  <div>
                    <img alt='postInfoImage' src={item.download_url} className='postInfoImage'/>
                  </div>
                  <div className='postInfoUserName'>{item.author}</div>
                  <div className='timeInfo'>· {times} min</div>
                </div>

                <PostImage key={post.id} image={post.download_url} />
                <IconsBlock/>
                <LikesBlock like={likes[index]}/>
                <PostAbout author={item.author} description={desc[index] ? desc[index] : ""}/>
                <ViewAllComments comments={comments[index] ? comments[index] : 0}/>
                <AddComment />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostBlock;