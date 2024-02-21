import { ValueKnob as AuxValueKnob } from '@deutschesoft/aux-widgets/src/index.pure.js';
import { componentFromWidget } from '@deutschesoft/use-aux-widgets';

const KnobBindings = {
  value$: {
    name: 'value'
  },
  label$: {
    name: 'label'
  },
}

export const PreGainKnob = componentFromWidget(
  AuxValueKnob,
  KnobBindings,
  {
    scale: "decibel",
    min: -100,
    max: 24,
    dots_defaults: { length: 4, margin: 2, width: 4 },
    labels_defaults: { margin: 10, align: "outer" },
    dots: [-100, 0, 24],
    labels: [-100, 0, 20],
    show_value: false,
  },
  'PreGainKnob'
);
