import { Label as AuxLabel } from '@deutschesoft/aux-widgets/src/index.pure.js';
import { componentFromWidget } from '@deutschesoft/use-aux-widgets';

const LabelBindings = {
  label$: {
    name: 'label'
  },
}

export const Label = componentFromWidget(
  AuxLabel,
  LabelBindings,
  {},
  'Label'
);

