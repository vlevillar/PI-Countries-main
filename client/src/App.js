import "./App.css";
import { LandingPage } from "./components/LandigPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import { Detail } from "./components/Detail/Detail";
import CreatedActivity from "./components/Actividades/Actividad";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/home/:id" element={Detail} />
				<Route
					exact
					path="/home/:id"
					render={({ match }) => <Detail id={match.params.id} />}
				/>
				<Route exact path='/form' component={CreatedActivity}/>
			</div>
		</BrowserRouter>
	);
}

export default App;
