import './App.css';
import Converter from "./components/Converter";
import {Container} from "@material-ui/core";
import { Link } from "@reach/router";


function App() {
    return (
            <div className="App">
                <nav>
                    <Link to="/">Home</Link>{" "}
                    <Link to="145">UAH</Link>{" "}
                    <Link to="298">USD</Link>{" "}
                    <Link to="292">EUR</Link>{" "}
                    <Link to="290">RUB</Link>
                </nav>
                <Container className="container">
                    <Converter/>
                </Container>
            </div>
    );
}

export default App;
