import { useParams } from "react-router-dom";
import UserFetch from "../hooks/userFetch";
import Word from "./Word"

function Day(){
    const a = useParams();
    const day = a.day
    const words = UserFetch(`http://localhost:3001/words?day=${day}`);
    
    return(
        <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
    </>
    );
}


export default Day;