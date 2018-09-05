import { AppRegistry } from 'react-native';
import App from './App';
import { Sentry } from 'react-native-sentry';

Sentry.config('https://64fdb93b37bf466f9e232c5a451762a9@sentry.io/1274884').install();
AppRegistry.registerComponent('sentry', () => App);
