import { AES70Backend } from '@deutschesoft/awml/src/backends/aes70'; // make the backend control protocol AES70
import { useBackend } from '@deutschesoft/use-aux-widgets';
import { Device } from './components/Device';
import React from 'react';
import useDeviceModel from './models/DeviceModel';
import './App.scss';
import { Logo } from './widgets';

class DebugAES70Backend extends AES70Backend {
  log(...args: any[]) {
    console.log(...args);
  }
}

// add console info if path fails
function createDebugBackend(url: string) {
  return new DebugAES70Backend({ url });
}

//const dloc = window.location.hostname; /* used for local demonstration with real devices and websocket forwarding */
const dloc = 'aes70x.net'; /* AES70 Cloud virtual device location - includes the websocket forwarding already */
const backendFactory1 = () => createDebugBackend(`ws://${ dloc }:1069`);
const backendFactory2 = () => createDebugBackend(`ws://${ dloc }:1068`);

function App() {
  const [backend1] = useBackend('WTOne', backendFactory1);
  const [backend2] = useBackend('WTTwo', backendFactory2);
  const model1 = useDeviceModel('WTOne');
  const model2 = useDeviceModel('WTTwo');
  const [device, setDevice] = React.useState(0);
  const model = device ? model1 : model2;

  return (
    <div className="App">
      <div className='Container'>
      <div className="buttons">
          <button
            onClick={() => setDevice(0)}
            className={!device ? 'active' : ''}>
            Channel 1
          </button>
          <button 
            onClick={() => setDevice(1)} 
            className={device ? 'active' : ''}>
            Channel 2
          </button> 
        <Logo />
      </div>
      <Device model={model} />
      {!backend1 && (
        <div className='medium warn'>Connecting One... (no websocket or device detected) </div>
      )}
      {!backend2 && (
        <div className='medium warn'>Connecting Two... (no websocket or device detected) </div>
      )}
      </div>
    </div>
  );
}

export default App;
