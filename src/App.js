
import './App.css';
import Calculation from './components/Calculation';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
    <div className="App">
     <Calculation/>
    </div>
    </MantineProvider>
  );
}

export default App;
