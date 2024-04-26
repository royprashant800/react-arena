import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>about</h1>
            <h2>This is about page</h2>
            {/* <User /> */}

            <UserClass name={"Prashant Class"} />
        </div>
    )
}

export default About;