import { Meter as AuxMeter } from '@deutschesoft/aux-widgets/src/index.pure.js';
import { componentFromWidget } from '@deutschesoft/use-aux-widgets';

export const Meter = componentFromWidget(
  AuxMeter,
  {
    value$: {
      name: 'value',
    },
    label$: {
      name: 'label',
    },
  },
  {
    scale: 'decibel',
    log_factor: 3,
    min: -100,
    max: 24,
    segment: 3,
    foreground: '#282829',
    hold_size: .5,
    show_hold: true,
    peak_value: -1,
    auto_hold: 500,
    clipping: -1,
    clip: true,
    show_clip: true,
    auto_clip: 500,
    falling: 15,
    falling_duration: 1000,
    gradient: { '-100': 'rgb(192, 102, 0)', '24': '#ff8800' },
    'scale.labels': (v: number) => v.toFixed(0) + 'dB',
  },
  'Meter'
);

export default Meter;
