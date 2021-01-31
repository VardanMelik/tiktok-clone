import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './axios';

function App() {
  const [videos, setVideos] = useState([]);
  const keyNumber = 1;

  useEffect( () => {
    async function fetchPosts () {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      //console.log('Response Data: ' + response.data); 
      //console.log(videos)
      return response;
    }
    fetchPosts();
  },[]);
  console.log('Video List:',videos)

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(( {url, channel, description, song, likes, 
            messages, shares}) => (
          <Video
            url={url}
            channel={channel}
            description={channel}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}

          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
