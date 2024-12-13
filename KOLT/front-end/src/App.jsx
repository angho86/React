import Button from "@mui/material/Button";
import Header from "../components/header";
import './index.css';
function App() {
	return (
		<>	<div>
		<Header className="bg-green-400"></Header>
			<Button variant="contained" style={{backgroundColor: 'green'}}>tekstas</Button>
			</div>
		</>
	);
}

export default App;
