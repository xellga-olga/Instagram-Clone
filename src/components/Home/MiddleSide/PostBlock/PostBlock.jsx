import React, {useContext, useEffect, useState} from 'react';
import '../middleSide.css'
import LikesBlock from "./likes/LikesBlock.jsx";
import PostAbout from "./postAbout/postAbout.jsx";
import IconsBlock from "./icons/IconsBlock.jsx";
import ViewAllComments from "./viewAllComments/ViewAllComments.jsx";
import PostImage from "./postImage/PostImage.jsx";
import AddComment from "./addComment/AddComment.jsx";
import ApiContext from "../../../../context/ApiContext.js";

const PostBlock = () => {
  const [users, setUsers] = useState([]);

  const [posts, setPosts] = useState([]);

  const [desc, setDesc] = useState([]);
  const [comments, setComments] = useState([]);

  const [likes, setLikes] = useState([]);

  const {getPostBlock} = useContext(ApiContext);


  useEffect(() => {
    (async () => {
      const { users, posts, comments, likes, desc } = await getPostBlock();
      setPosts(posts);
      setComments(comments);
      setLikes(likes);
      setUsers(users);
      setDesc(desc);
    })();
  }, [getPostBlock]);



  return (
    <div className='postBlock'>
      <div className='post'>
        <div className='postInfo'>
          {users.map((item, index) => {
            const times = (index + 1) * 5;


            return (
              <div key={index} className='posts'>
                <div key={item.id || index} className='postInfoUsers'>
                  <div>
                    <img alt='postInfoImage' src={item.download_url} className='postInfoImage'/>
                  </div>
                  <div className='postInfoUserName'>{item.author}</div>
                  <div className='timeInfo'>· {times} min</div>
                </div>

                <PostImage key={posts[index]?.id ?? index} image={posts[index]?.download_url} />

                <IconsBlock />
                <LikesBlock like={likes[index]} />

                <PostAbout author={item.author} description={desc[index] ? desc[index] : ""} />
                <ViewAllComments comments={comments[index] ? comments[index] : 0} />
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