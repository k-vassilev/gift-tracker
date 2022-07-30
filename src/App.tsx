import './App.css';
import HomePage from './pages/HomePage';
import DATA from './data/data';

function App() {
	return (
		<div className="App">
			<HomePage DATA={DATA} />
		</div>
	);
}

export default App;
