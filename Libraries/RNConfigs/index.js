
import { NativeModules } from 'react-native';

const { RNConfigs } = NativeModules;

console.log('show', RNConfigs);

(async() => {
  const reply = await RNConfigs.showGuys("叮叮");
  console.log(reply);
})();

export default RNConfigs;
