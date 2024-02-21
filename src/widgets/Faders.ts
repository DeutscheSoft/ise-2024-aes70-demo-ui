import { componentFromWidget } from '@deutschesoft/use-aux-widgets';
import { Fader as AuxFader } from '@deutschesoft/aux-widgets/src/index.pure.js';

const FaderBindings = {
  gain$: {
    name: 'value',
  },
  label$: {
    name: 'label'
  },
}
export const VolumeFader = componentFromWidget(
  AuxFader,
  FaderBindings,
  {
    scale: "linear",
    snap: 1,
    max: 100,
    min: 0,
    levels: [25],
    'scale.labels': (v: number) => v.toFixed(0) + '%',
  },
  'VolumeFader'
);

export const EqFader = componentFromWidget(
  AuxFader,
  FaderBindings,
  {
    scale: "linear",
    max: 2.5,
    min: -2.5,
    levels: [.25],
    'scale.labels': (v: number) => (v * 1).toFixed(0) + 'dB',
  },
  'EqFader'
);
