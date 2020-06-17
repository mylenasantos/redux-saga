import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure({
  name: 'React JS Redux',
  host: '192.168.0.4'
})
  .use(reactotronRedux()) //  <- here i am!
  .use(sagaPlugin()) //  <- here i am!

  .connect(); //Don't forget about me!

reactotron.clear();
console.tron = reactotron;
