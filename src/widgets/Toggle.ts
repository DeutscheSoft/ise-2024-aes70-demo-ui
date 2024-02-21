import { Toggle } from '@deutschesoft/aux-widgets/src/index.pure.js';
import { componentFromWidget } from '@deutschesoft/use-aux-widgets';

export const MuteButton = componentFromWidget(
  Toggle,
  {
    state$: {
      name: 'state',
      //debug:true, /* use debug in any widget to see things in the developer console */
      // muted: 1, unmuted: 2
      transformReceive: v => v == 1,
      transformSend: v => v ? 1 : 2,
    },
  },
  {
    label: 'Mute',
    label_active: 'Muted',
    icon: 'speaker',
    icon_active:'mute',
  },
  'MuteButton'
);


