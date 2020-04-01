import { YellowBox } from 'react-native';

import App from './src';

YellowBox.ignoreWarnings(['Remote debugger is in a background tab']);
console.disableYellowBox = true;

export default App;