import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";

class About extends React.Component {
  constructor(props){
    super(props);

    //console.log("Parent Constructor");
  }

  async componentDidMount(){
   // console.log("Parent Component Did Mount");
    //API call 
  }

  render() {
   // console.log("Parent Render");
    return (
      <div>
        <h1 className="text-xl font-bold font-serif bg-red-300 my-4 p-4 ">About Us Page</h1>
        <div>
          LoggedIn User :
          <UserContext.Consumer>
            {({loggedInUser })=><h2 className="text-lg font-bold">{loggedInUser }</h2>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        {/* Nested UserContext */}
         <UserContext.Consumer>
            {({loggedInUser })=><h2 className="text-lg font-bold">{loggedInUser }</h2>}
          </UserContext.Consumer>
        <UserClass name={"First"} location={"Nagpur class"} />
      </div>
    );
  }
}


export default About;
