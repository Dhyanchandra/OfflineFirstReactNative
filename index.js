import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './SRC/OffLineFirstCart/Redux/store';

const AppRedux = () =>(

    <Provider store={store}>
        <App />
    </Provider>

)
AppRegistry.registerComponent(appName, () => AppRedux);
