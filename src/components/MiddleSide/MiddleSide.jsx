import React, {useEffect, useState} from 'react';
import './middleSide.css'
import {Bookmark, Heart, MessageCircle, Send} from "lucide-react";

const MiddleSide = () => {

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState({});
  const [likes, setLikes] = useState([]);
  const [desc, setDesc] = useState([]);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=4&limit=20')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1')
      .then(res => res.json())
      .then(data => setPosts(data))
  },[])

  useEffect(() => {
    fetch("/api/random?min=1&max=100&count=20")
    .then(res => res.json())
    .then(data => {
      setLikes(data)
      setComments(data)
    })
  },[])

  useEffect(() => {
    fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=20')
    .then(res => res.json())
    .then(data => setDesc(data))
  },[])




  return (
    <div className="middle-side">
      <div className='storyBlock'>
        <div className='storyParticular'>
          <div className='imageCircle'>
            {users.map((item, index) => (
              <div key={index} className="images">
                <div key={index.id}>
                  <img src={item.download_url} alt='usersimages' className='usersImages'/>
                </div>
                <div key={index.id} className='profileName'>{item.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*------------------------*/}

      <div className='postBlock'>
        <div className='post'>

          <div className='postInfo'>
            {users.map((item, index) => {
              const times = (index + 1) * 5;
              const post = posts[index]


              return (
                <div key={index} className='posts' >
                  <div key={item.id || index} className='postInfoUsers'>
                    <div>
                      <img alt='postInfoImage' src={item.download_url} className='postInfoImage'/>
                    </div>
                    <div className='postInfoUserName'>{item.author}</div>
                    <div className='timeInfo'>· {times} min</div>
                  </div>

                  <div key={post.id} className='postImg'>
                    <img src={post.download_url} alt='postImg' className='image'/>
                  </div>

                  <div className='iconsBlock'>
                    <div className='iconLeft'>
                      <Heart size={25} />
                      <MessageCircle size={25}/>
                      <Send size={25} />
                    </div>
                    <div className='iconRight'>
                      <Bookmark size={25} />
                    </div>
                  </div>


                  <div className='likesBlock'>
                    <div className='likes'>
                      {likes[index] ? likes[index] : 0} Likes
                    </div>
                  </div>

                  <div className='postAbout'>
                    <span className='postAboutName'>
                      {item.author}
                    </span>
                    <div key={index} className='postDesc'>
                      <span>{desc[index] ? desc[index] : ""}</span>
                    </div>
                  </div>

                  <div className='comment'>
                    View all comments ({comments[index] ? comments[index] : ''})
                  </div>

                  <div className='addComment'>
                    <input placeholder='Add a comment...' type='text' />
                  </div>

                </div>
              );
            })}
          </div>


        </div>
      </div>

    </div>
  );
};

export default MiddleSide;