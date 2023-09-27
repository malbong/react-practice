// import UserFinder from './components/UserFinder';
// import UsersContext from './components/users-context';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

// function App() {
//   const usersContext = {
//     users: DUMMY_USERS,
//   };

//   return (
//     <UsersContext.Provider value={usersContext}>
//       <UserFinder />
//     </UsersContext.Provider>
//   );
// }

// export default App;

import React, { useState } from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    console.log('?');

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Wrong.</h1>;
    } else {
      return this.props.children;
    }
  }
}

const Child = (props) => {
  if (props.flag === true) throw new Error('gggg');

  return <div></div>;
};

const App = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState((prev) => !prev);
  };

  return (
    <ErrorBoundary>
      <button onClick={toggleState}>Click</button>
      <Child flag={state} />
    </ErrorBoundary>
  );
};

export default App;
