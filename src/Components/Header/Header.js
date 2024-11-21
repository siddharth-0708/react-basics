 import './Header.css';

 export default function Header({country, code, onClick}){
    function elementClicked(){
        console.log("hahhaa");
    }
    return (
        <>
            <h1 onClick = {onClick}>{country}</h1>
            <h1>{code}</h1>
        </>
    )
}   