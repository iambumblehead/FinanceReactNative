import React          from 'react';
import { render }     from 'react-dom';
import Root           from './containers/Root';
//import configureStore from '../stores/configureStore';
import configureStore from '../stores/stock-store';

// load our css
require('./styles/style.less');

const store = configureStore();
const rootElement = document.getElementById('root');

render( <Root store={store} />, rootElement );
