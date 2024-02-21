import { IFilterModel } from '../models/DeviceModel';
import { EqFader } from '../widgets';
import './Equalizer.scss';

export default function Equalizer(props: { filters: IFilterModel[] }) {
  const { filters } = props;

  const elements = filters.map((filter: IFilterModel, index) => {
    return (
      <EqFader
        key={index}
        gain$={filter.gain$}
        label={filter.label}
        show_scale={filter.showScale}
      />
    );
  });

  return <div className="Equalizer">{elements}</div>;
}
