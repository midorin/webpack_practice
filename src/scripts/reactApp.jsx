import { createRoot } from 'react-dom/client';
import * as React from 'react';

const App = (props) => {
    return (
        <div>
           Hello, React App!
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