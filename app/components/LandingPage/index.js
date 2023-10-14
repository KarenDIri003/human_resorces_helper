import SearchInput from "../SearchInput";
import "./LandingPage.css"

function LandingPage() {
	return (
		<div className="hero">
			<h1 style={{
				fontWeight: "bold",
				color: "#333333",
				fontSize: "120px",
			}}>Lorem ipsum <br />
				dolor sit amet.</h1>
			<SearchInput />
		</div>
	);
}

export default LandingPage;