import { DataState } from './DataState';

export function getEmptyDataState(): DataState {
  return {
    measurements: {
      ir: {
        entries: [],
      },
      iv: {
        entries: [],
      },
      raman: {
        entries: [],
      },
      uv: {
        entries: [],
      },
      nmr1h: {
        entries: [],
      },
      mass: {
        entries: [],
      },
      other: {
        entries: [],
      },
    },
  };
}
