import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo : {
          name: "Dummy",
          location:"Default",
        },
      };
    console.log(this.props.name+"Child Constructor");
  }

  async componentDidMount(){

    this.timer = setInterval(()=>{
        console.log("NAMASTE REACT OP");
    },1000);

    console.log(this.props.name+"Child Component Did Mount");
     //API call 
    // const data = await fetch("https://api.github.com/users/akshaymarch7");
    // const json = await data.json();

    // this.setState ({
    //   userInfo: json,
    // });

  }

  componentDidUpdate(){
    console.log("Component Did Update ");
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location , avatar_url } = this.state.userInfo;

    console.log(this.props.name+"Child Render");
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <img src={ avatar_url}/>
        <h3>Location : {location}</h3>
        <h4>Contact No. : 9445657790</h4>
      </div>
    );
  }
}

export default UserClass;
