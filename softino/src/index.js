import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import Component
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
