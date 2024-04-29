import { useState } from "react";

export default function UsernameForm() {
    const [username, setUsername] = useState("sky");
    const updateUsername = (ev) => {
        // console.log("On-Change Event");
        // console.log(ev.target.value); // ev.target -> input; ev.target.value -> input value;
        setUsername(ev.target.value);
    }
    return (
        <div>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={updateUsername}
            />
            <button>Submit</button>
        </div>
    );
}