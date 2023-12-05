import { createRoot } from 'react-dom/client';

// Following https://zapier.com/engineering/how-to-build-redux/
const domNode = document.getElementById('root');
const root = createRoot(domNode);

function App() {
	return (<h1>Hey</h1>)
}
root.render(<App />);