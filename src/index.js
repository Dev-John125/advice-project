import React from 'react';
import {createRoot} from 'react-dom/client'

import App from './App';

// React 17 version
// ReactDOM.render(<App />, document.getElementById('root'));

//Updated
createRoot(document.getElementById('root')).render(<App/>)