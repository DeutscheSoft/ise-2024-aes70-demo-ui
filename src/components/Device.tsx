import './Device.scss';
import { IDeviceModel } from '../models/DeviceModel';
import {
  Label,
  Logo,
  MuteButton,
  PreGainKnob,
  Meter,
  VolumeFader,
} from '../widgets';
import Equalizer from './Equalizer';
import { CPUUtilLabel } from '../widgets/CPU';

//layout the web components within html 
export function Device(props: { model: IDeviceModel }) {
  const { model } = props;
  return (
    <div className="Device">
      <div className="TopBlock">
        <span>Channel Name:</span>
        <Label label$={model.name$} />
        <span>CPU Load:</span>
        <CPUUtilLabel label$={model.cpu$} />
        <span>Stream:</span>
        <Label label$={model.stream$} />
      </div>
      <div className="Controls">
        <div className="LeftBlock">
          <PreGainKnob value$={model.pregain$} label="Input Gain" />
          <MuteButton state$={model.mute$} /> 
        </div>
        <Equalizer filters={model.equalizer} />
        <Meter label="Level" value$={model.meter$} />
        <VolumeFader label="Volume" gain$={model.volume$} />
      </div>
    </div>
  );
}
