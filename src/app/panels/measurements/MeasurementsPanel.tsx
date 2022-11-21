import {
  kindLabels,
  MeasurementKind,
  measurementKinds,
  useAppState,
  useAppDispatch,
  MeasurementBase,
} from '../../../app-data/index';
import {
  ValueRenderers,
  Table,
  TabItem,
  Tabs,
} from '../../../components/index';

import MeasurementVisibilityToggle from './MeasurementVisibilityToggle';

export function MeasurementsPanel() {
  const appState = useAppState();
  const { data, view } = appState;

  const selectedKindMeasurements = view.selectedKind
    ? view.selectedMeasurements[view.selectedKind] ?? []
    : [];

  const dispatch = useAppDispatch();

  const kindItem = (kind: MeasurementKind) => ({
    id: kind,
    title: kindLabels[kind],
    content: (
      <Table>
        <Table.Header>
          <ValueRenderers.Header value="" />
          <ValueRenderers.Header value="ID" />
          <ValueRenderers.Header value="Title" />
        </Table.Header>
        {data.measurements[kind].entries.map((measurement: MeasurementBase) => (
          <Table.Row key={measurement.id}>
            <ValueRenderers.Component>
              <MeasurementVisibilityToggle
                id={measurement.id}
                isVisible={view.measurements[measurement.id].visible}
              />
            </ValueRenderers.Component>
            <ValueRenderers.Title
              style={{
                padding: '0px 5px',
                backgroundColor: selectedKindMeasurements.includes(
                  measurement.id,
                )
                  ? 'green'
                  : '',
                cursor: 'pointer',
              }}
              onClick={() => {
                dispatch({
                  type: 'SELECT_MEASUREMENT',
                  payload: { id: measurement.id, kind },
                });
              }}
              value={measurement.id}
            />
            <ValueRenderers.Text value={measurement.info.title} />
          </Table.Row>
        ))}
      </Table>
    ),
  });
  const availableKinds = measurementKinds.filter(
    (label) => data.measurements[label].entries.length > 0,
  );
  const items: Array<TabItem<MeasurementKind>> = availableKinds.map(kindItem);

  function handleTabSelection(item: TabItem<MeasurementKind>) {
    dispatch({
      type: 'SELECT_MEASUREMENT_KIND',
      payload: item.id,
    });
  }

  const openedItem = items.find((item) => item.id === view.selectedKind);

  return items.length > 1 ? (
    <Tabs<MeasurementKind>
      orientation="horizontal"
      items={items}
      opened={openedItem}
      onClick={handleTabSelection}
    />
  ) : items.length === 1 && items[0].content ? (
    <>{items[0].content}</>
  ) : (
    <div style={{ paddingTop: '1rem', marginInline: 'auto' }}>
      No data available
    </div>
  );
}
