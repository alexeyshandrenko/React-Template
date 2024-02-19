import logo from './logo.svg';
import './App.css';

// В App.js представлена функция (компонент), которая возвращает JSX-код.
// Это пример декларативного стиля написания кода,
// так как мы не пишем последовательность команд для того, чтобы отобразить нужный результат,
// а сразу напрямую его запрашиваем

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
}

export default App;
