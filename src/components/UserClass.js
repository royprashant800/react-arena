import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        };
    }

    async componentDidMount() {
        //API call
        const data = await fetch(" https://api.github.com/users/royprashant800");
        const json = await data.json();
        this.setState ({
            userInfo: json
        })

        console.log(json);
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>{this.state.userInfo.name}</h2>
                <h3>Location: {location}</h3>
                <h4>Twitter: @royprashant800</h4>
            </div>
        )
    }
}

export default UserClass;