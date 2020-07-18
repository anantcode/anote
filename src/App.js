import React, { Component } from "react";
import "./App.css";
import Signin from "./containers/Signin";
import WriteNotePage from "./containers/WriteNotePage";
import Navigation from "./containers/Navigation";
import MessageBoard from "./containers/MessageBoard";
import Logo from "./components/Logo";
import Register from "./containers/Register";

const initialState = {
  route: "signin",
  isSignedIn: false,
  user: {
    id: "1",
    email: "1",
    name: "Aa",
    messages: [
      {
        id: 1,
        name: "Anant",
        message: "Hi",
      },
      {
        id: 2,
        name: "Anant1",
        message: "Hi",
      },
    ],
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (userData) => {
    this.setState({
      user: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        messages: userData.messages,
      },
    });
  };

  setMessages = (data) => {
    // const clarifaiFace =
    //   data.outputs[0].data.regions[0].region_info.bounding_box;
    // const image = document.getElementById("inputimage");
    // const width = Number(image.width);
    // const height = Number(image.height);
    // console.log(width, height);
    // return {
    //   leftCol: clarifaiFace.left_col * width,
    //   topRow: clarifaiFace.top_row * height,
    //   rightCol: width - clarifaiFace.right_col * width,
    //   bottomRow: height - clarifaiFace.bottom_row * height,
    // };
  };

  displayMessages = (messages) => {
    console.log(messages);
    this.setState({ messages: messages });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      // this.state.isSignedIn = false; // DONT DO THIS!
      //this.setState({ isSignedIn: false }); //INSTEAD, do it using this.setState()

      this.setState(initialState);
    } else if (route === "signin") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    } else if (route === "write") {
    }

    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route, user } = this.state;

    return (
      <div>
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        <Logo />

        {route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : route === "home" ? (
          <div>
            <MessageBoard messages={user.messages} />
          </div>
        ) : route === "write" ? (
          <div>
            <WriteNotePage />
          </div>
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    );
  }
}

export default App;
