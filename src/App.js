import './App.css';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

function App() {
	return (
		<div className='App'>
			<CounterContainer />
			<hr />
			<Todos />
		</div>
	);
}

export default App;
