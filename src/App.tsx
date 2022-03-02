import React from "react";

interface PropTypes {
  children: React.ReactNode;
}

function App({ children }: PropTypes) {
  return <div>{children}</div>;
}

export default App;
