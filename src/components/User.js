import { useState } from "react";

const User = () => {
    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <h2>Name: Prashant</h2>
            <h3>Location: Patna</h3>
            <h4>Twitter: @royprashant800</h4>
        </div>
    )
}

export default User;