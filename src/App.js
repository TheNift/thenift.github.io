import './assets/main.css';
import './assets/yorha.css';
import { PatternTop, PatternBottom } from './compontents/pattern/pattern';
import { Intro } from './compontents/intro/intro';
import { TabbedContent } from './compontents/tabbedContent/tabbedContent';
import { MatrixRainingLetters } from './compontents/matrix/matrix';

function App() {
  return (
    <div className="App">
      <div className="body">
        <PatternTop/>
        <Intro/>
        <div className="main_content" id="main">
          <p className="subheading">Hi! I'm Jack, a software developer who's constantly improving.</p>
          <TabbedContent/>
        </div>
        <PatternBottom/>
        <MatrixRainingLetters custom_class="yorha-matrix" color="#d1cdb7" />
      </div>
    </div>
  );
}

export default App;
