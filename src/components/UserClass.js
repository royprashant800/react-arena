import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    
    render() {
        const {name} = this.props;
        const { count } = this.state;
        return (
            <div className="user-card">
                <h1>{count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Click Me</button>
                <h2>{name}</h2>
                <h3>Location: Patna</h3>
                <h4>Twitter: @royprashant800</h4>
            </div>
        )
    }
}

export default UserClass;