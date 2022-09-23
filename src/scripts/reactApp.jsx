import { createRoot } from 'react-dom/client';
import * as React from 'react';
import styled from 'styled-components';

import Alert from './Alert.tsx';

const AppContainer = styled.div`
  p {
    margin-bottom: 0.5em;
    font-weight: bold;
    color: green;
  }
`;

const App = (props) => {
    return (
        <AppContainer>
      <p>Hello, React App!!!!!!</p>
      <Alert message="Success!" />
    </AppContainer>
    );
};
const container = document.getElementById('react-root');
const root = createRoot(container);
if (container){
    root.render(<App />);
}else{
        console.log("No root element found");
}