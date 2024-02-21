import { Label as CPULabel } from '@deutschesoft/aux-widgets/src/index.pure.js';
import { componentFromWidget } from '@deutschesoft/use-aux-widgets';

const LabelBindings = {
  label$: {
    name: 'label',
    transformReceive: (v: number) => (v / 90 + .5).toFixed(1) + '%' // added to make the emulator random data likely and readable
  },
}

export const CPUUtilLabel = componentFromWidget(
  CPULabel,
  LabelBindings,
  {},
  'CPULabel'
);
