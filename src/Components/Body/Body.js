import './Body.css';

export default function Body({name, age, children}){
    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
            {children}
        </>
    )
}