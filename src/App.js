import "./App.css";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	function incrementCount() {// does +4
		setCount((c) => c + 3);
		setCount((c) => c + 1);
	}

	function decrementCount() {// does -2
		setCount(() => {
			return count - 1;
		});
		setCount(() => {
			return count - 2;
		});
	}

	return (
		<div>
			<strong>Count: {count}</strong>
			<button onClick={incrementCount}>Increment</button>
			<button onClick={decrementCount}>Decrement</button>
		</div>
	);
}

export default App;
