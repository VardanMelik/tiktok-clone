import './App.css';
import Video from './components/Video';

function App() {
  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        <Video/>
        <Video/>
      </div>
      
    </div>
  );
}

export default App;
