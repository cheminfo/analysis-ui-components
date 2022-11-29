import { Draft } from 'immer';

import { AppState } from '../appState';
import { AppStateAction } from '../appStateActions';

import {
  addMeasurements,
  changeMeasurementDisplay,
  changeMeasurementsDisplay,
  selectMeasurement,
  selectMeasurementKind,
  setSelectedMeasurementVisibility,
  setMeasurementVisibility,
  selectOrUnselectAllMeasurements,
} from './measurements';
import { plotZoom, plotZoomOut } from './plot-view/plot-view';
import { ActionType, AppStateProducer } from './types';

export const loadFullState: AppStateProducer<'LOAD_FULL_STATE'> = (
  draft,
  action,
) => {
  const { data, view } = action.payload;
  draft.data = data;
  draft.view = view;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const producers: Record<ActionType, AppStateProducer<any>> = {
  LOAD_START: (draft) => {
    draft.load.isLoading = true;
  },
  LOAD_STOP: (draft) => {
    draft.load.isLoading = false;
  },
  PLOT_ZOOM: plotZoom,
  PLOT_ZOOM_OUT: plotZoomOut,
  ADD_MEASUREMENTS: addMeasurements,
  SELECT_MEASUREMENT: selectMeasurement,
  SELECT_MEASUREMENT_KIND: selectMeasurementKind,
  SELECT_ALL_MEASUREMENTS: selectOrUnselectAllMeasurements,
  SET_MEASUREMENT_VISIBILITY: setMeasurementVisibility,
  SET_SELECTED_MEASUREMENTS_VISIBILITY: setSelectedMeasurementVisibility,
  CHANGE_MEASUREMENT_DISPLAY: changeMeasurementDisplay,
  CHANGE_MEASUREMENTS_DISPLAY: changeMeasurementsDisplay,
  LOAD_FULL_STATE: loadFullState,
};

export function appStateProducer(
  draft: Draft<AppState>,
  action: AppStateAction,
) {
  const producer = producers[action.type];
  if (!producer) {
    throw new Error(`Missing producer for action type ${action.type}`);
  }
  producer(draft, action);
}
