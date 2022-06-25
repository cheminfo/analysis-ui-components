import { Instrument, MeasurementVariable } from 'cheminfo-types';
import { PartialFileList } from 'filelist-utils';

export interface DataState {
  measurements: Measurements;
}

export interface Measurements {
  ir: {
    entries: MeasurementBase[];
  };
  raman: {
    entries: MeasurementBase[];
  };
  uv: {
    entries: MeasurementBase[];
  };
  nmr1h: {
    entries: MeasurementBase[];
  };
  mass: {
    entries: MeasurementBase[];
  };
  other: {
    entries: MeasurementBase[];
  };
}

interface MeasurementBase {
  id: string;
  title?: string;
  instrument?: Instrument;
  meta: Record<string, string | number | undefined>;
  info: Record<string, string | number | undefined>;
  data: {
    variables: Record<string, MeasurementVariable>;
  }[];
}

export type MeasurementKind = keyof Measurements;

export const kindLabelMap: Record<MeasurementKind, string> = {
  ir: 'IR',
  raman: 'Raman',
  uv: 'UV',
  mass: 'Mass',
  nmr1h: 'NMR 1H',
  other: 'Other',
};
export const kindsLabel: MeasurementKind[] = [
  'ir',
  'raman',
  'uv',
  'mass',
  'nmr1h',
  'other',
];

export type Processor = (
  fileList: PartialFileList,
  dataState: DataState,
) => Promise<void>;