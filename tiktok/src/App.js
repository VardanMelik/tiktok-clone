import './App.css';
import Video from './components/Video';

function App() {
  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v77.tiktokcdn.com/f75e5f38ac789ea3bd785534400f7088/6015edde/video/tos/alisg/tos-alisg-pve-0037c001/832b135876af41acb5be7e09b7deeca6/?a=1233&br=2516&bt=1258&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021013017375401011504521917314EFD&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=MzgzazZleG55MzMzOzczM0ApZDY5OTxkOjtkNzdkOzU3NGdzYl8yLW1sYzFgLS1iMTRzc18xX14xLTIvYF40MV81MTY6Yw%3D%3D&vl=&vr="
          channel="MERN"
          description="MERN FullStack Dev"
          song="React-React! ... song"
          likes={1456}
          messages={136}
          shares={6398}
        />
        <Video
          url="https://v77.tiktokcdn.com/f75e5f38ac789ea3bd785534400f7088/6015edde/video/tos/alisg/tos-alisg-pve-0037c001/832b135876af41acb5be7e09b7deeca6/?a=1233&br=2516&bt=1258&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021013017375401011504521917314EFD&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=MzgzazZleG55MzMzOzczM0ApZDY5OTxkOjtkNzdkOzU3NGdzYl8yLW1sYzFgLS1iMTRzc18xX14xLTIvYF40MV81MTY6Yw%3D%3D&vl=&vr="
          channel="MERN"
          description="MERN FullStack Dev"
          song="React-React! ... song"
          likes={1456}
          messages={136}
          shares={6398}
        />
      </div>
      
    </div>
  );
}

export default App;
