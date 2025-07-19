import "../CSS-elements/Main-components.css"
export default function Title(props){
    
    return(
        <div id="wrapperContainer">
            <h1 id="styleComponent">Welcome to the home page<br /> User {props.name}</h1>
        </div>
    );
}