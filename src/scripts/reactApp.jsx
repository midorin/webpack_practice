import { createRoot } from 'react-dom/client';
import * as React from 'react';

import Alert from './Alert.tsx';

const App = (props) => {
    return (
        <div>Hello, React App!
        <Alert message ="Success!" />
        </div>
    );
};
const container = document.getElementById('react-root');
const root = createRoot(container);
if (container){
    root.render(<App />);
}else{
        console.log("No root element found");
}