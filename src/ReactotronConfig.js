import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: 'React JS Redux',
  host: '192.168.0.4'
})
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!

reactotron.clear();
console.tron = reactotron;
