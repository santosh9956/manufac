import './App.css';
import GammaMeanModeMedian from './components/GammaMeanModeMedian';
import MagnesiumMeanModeMedian from './components/MagnesiumMeanModeMedian';
import { wineData } from './lib/staticData';

function App() {
  return (
    <div className="custom_content_wrapper">
      <MagnesiumMeanModeMedian data={wineData}  />
      <GammaMeanModeMedian data={wineData} />
    </div>
  );
}

export default App;
