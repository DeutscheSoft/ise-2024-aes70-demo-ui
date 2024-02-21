import { getBackendValue, DynamicValue } from '@deutschesoft/awml/src/index.pure';
import React from 'react';

// setup interfaces to handle attributes and dynamic values
export interface IFilterModel {
  gain$: DynamicValue<number>;
  label: string;
  showScale: boolean;
}

export interface IDeviceModel {
  name$: DynamicValue<string>;
  cpu$: DynamicValue<string>;
  stream$: DynamicValue<string>;
  pregain$: DynamicValue<number>;
  mute$: DynamicValue<boolean>;
  meter$: DynamicValue<number>;
  volume$: DynamicValue<number>;
  equalizer: IFilterModel[];
}

function buildFilterModel(device: string, path: string, label: string, showScale?: boolean): IFilterModel {
  return {
    gain$: getBackendValue(device + `:Channel 1/` + path + `/Gain`) as DynamicValue<number>,
    label: label,
    showScale: showScale ? true : false,
  }
}
// bind interface variables with paths to the required device OCA Objects
// see https://aes70explorer.com/ for a tool to find the paths
export default function useDeviceModel(device: string): IDeviceModel {
  return React.useMemo(() => {
    return {
      name$: getBackendValue(`${device}:Channel 1/ChannelName/Setting`),
      cpu$: getBackendValue(`${device}:Channel 1/CPU Utilization/Reading`),
      stream$: getBackendValue(`${device}:Channel 1/ChannelSource/Setting`),
      pregain$: getBackendValue(`${device}:Channel 1/PreGain/Gain`),
      mute$: getBackendValue(`${device}:Channel 1/Mute/State`),
      meter$: getBackendValue(`${device}:Channel 1/Level/Reading`),
      volume$: getBackendValue(`${device}:Channel 1/Volume/Gain`),
      equalizer: [
        buildFilterModel(device, '125Hz', '125Hz'),
        buildFilterModel(device, '330Hz', '330Hz'),
        buildFilterModel(device, '990Hz', '990Hz'),
        buildFilterModel(device, '3000Hz', '3kHz'),
        buildFilterModel(device, '9000Hz', '9kHz', true)
      ],
    }
  }, [device]);
}
