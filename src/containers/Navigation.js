import React from "react";

//doing a pure function because this
//is pure component without any state.
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("write")}
          className="f4 link dim black underline ph4 mt3 pointer white"
        >
          Write
        </p>
        <p
          onClick={() => onRouteChange("signin")}
          className="f4 link dim black underline ph4 mt3 pointer white"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("write")}
          className="f4 link dim black underline ph4 mt3 pointer white"
        >
          Write
        </p>
        <p
          onClick={() => onRouteChange("signin")}
          className="f4 link dim black underline ph4 mt3 pointer white"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f4 link dim black underline ph4 mt3 pointer white"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
