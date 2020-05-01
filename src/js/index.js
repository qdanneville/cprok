import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/app-reducer'

import App from './App';

module.exports = function svgrParcelPlugin(bundler) {
    // Parcel requires that the asset be passed in as a module path.
    bundler.addAssetType('svg', require.resolve('../assets/svg'))
}


const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<Store><App /></Store>, MOUNT_NODE)

{/* 
    <div id="app">
        <App>
             <h1>Hello world</h1>
        </App>
    </div> 
*/}




