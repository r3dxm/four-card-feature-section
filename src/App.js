import "./App.css";
import SupervisorIcon from "./images/icon-supervisor.svg";
import TeamBuilderIcon from "./images/icon-team-builder.svg";
import KarmaIcon from "./images/icon-karma.svg";
import CalculatorIcon from "./images/icon-calculator.svg";

function App() {
	return (
		<div className="App">
			<section className="fourCardFeature">
				<h1 className="heading1">Reliable, efficient delivery</h1>
				<h1 className="heading2">Powered by Technology</h1>
				<p className="mainPara">
					Our Artificial Intelligence powered tools use millions of project data
					points to ensure that your project is successful
				</p>
				<div className="cardContainer">
					<div className="supervisor">
						<hr />
						<h1>Supervisor</h1>
						<p>Monitors activity to identify project roadblocks</p>
						<img src={SupervisorIcon} alt="supervisor-icon" />
					</div>
					<div className="builder">
						<hr />
						<h1>Team Builder</h1>
						<p>
							Scans our talent network to create the optimal team for your
							project
						</p>
						<img src={TeamBuilderIcon} alt="team-builder-icon" />
					</div>
					<div className="karma">
						<hr />
						<h1>Karma</h1>
						<p>Regularly evaluates our talent to ensure quality</p>
						<img src={KarmaIcon} alt="karma-icon" />
					</div>
					<div className="calculator">
						<hr />
						<h1>Calculator</h1>
						<p>
							Uses data from past projects to provide better delivery estimates
						</p>
						<img src={CalculatorIcon} alt="calculator-icon" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
