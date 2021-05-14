import UserFetch from "../hooks/userFetch";
import { useRef } from  "react";
import { useHistory } from "react-router";

function CreateWord() {
    const days = UserFetch("http://localhost:3001/days");
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3001/words`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            })
        }).then(res => {
            if(res.ok) {
                alert("생성이 완료 되었습니다.");
                history.push(`/day/${dayRef.current.value}`)
            }
        });
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return(
        <form onSubmit={ onSubmit }>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={ engRef }></input>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={ korRef }></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={ dayRef }> 
                    {days.map(day => (
                        <option key={ day.id } value={ day.day }>{ day.id }</option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
}
export default CreateWord;