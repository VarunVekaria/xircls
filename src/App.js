import { Landing } from "./Landing";
import { Navbar } from "./Navbar";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";

function App() {
	return (
		<div>
			<Navbar />
			<Landing />
			<Section1 />
			<Section2 />
			<Section3 />
		</div>
	);
}

export default App;
