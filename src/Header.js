import "./styles/Header.css";

function Header(props) {
	return(
		<div id = "header">
		    <img src = {props.imglink} alt = ""/>
		    <h1>{props.name} COMPONENT</h1>
		</div>

    );
}

export default Header;