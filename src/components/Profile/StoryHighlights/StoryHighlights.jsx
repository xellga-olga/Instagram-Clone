import React, {useEffect, useState} from 'react';
import './storyHighlights.css'

const StoryHighlights = () => {
  const [highlights, setHighlights] = useState([]);
  const [emojisTitle, setEmojisTitle] = useState('');

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(res => res.json())
    .then(data => {setHighlights(data)})
  },[])

  useEffect(() => {
    Promise.all(
      Array.from({ length: 10 }, () =>
        fetch('https://emojihub.yurace.pro/api/random').then(res => res.json())
      )
    ).then(results => {
      const emojis = results.map(item => item.htmlCode[0]);
      setEmojisTitle(emojis);
    });
  },[])

  return (
    <div className='storyHighlights'>
      <div className='storyHighlightsParticular'>

        <div className='imageCircleHighlights'>
          {highlights.map((img, index) => (
            <div key={index} className="images">
              <div>
                <img src={img.url} alt='usersimages' className='usersImagesHighlights'/>
              </div>

              <div
                className="titleHighlights"
                dangerouslySetInnerHTML={{__html: emojisTitle[index]}}
              />

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StoryHighlights;