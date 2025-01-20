import { Button } from '@blueprintjs/core';
import type { StoryObj } from '@storybook/react';
import { useCallback, useMemo, useState } from 'react';

import { createTableColumnHelper, Table } from '../../src/components/index.js';
import {
  InlineEditable as InlineEditableComponent,
  InlineEditableInput,
} from '../../src/components/inline_editable_renderer/index.js';

export default {
  title: 'Components / InlineEditableComponent',
};

interface TableData {
  id: number;
  label: string;
  field: string;
  format: string;
  visible: boolean;
}

const helper = createTableColumnHelper<TableData>();

const data: TableData[] = [
  { label: 'Name', field: 'info.name', format: '', visible: true },
  {
    label: 'Number of scans',
    field: 'info.numberOfScans',
    format: '0',
    visible: true,
  },
  {
    label: 'Pulse sequence',
    field: 'info.pulseSequence',
    format: '',
    visible: true,
  },
  {
    label: 'Frequency',
    field: 'meta..DIGITSERRE',
    format: '0',
    visible: false,
  },
].map((item, index) => ({ id: index, ...item }));

export function InsideTable() {
  const [state, setState] = useState(data);

  const deleteIndex = useCallback((index: number) => {
    return setState((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const changeValue = useCallback(
    (rowIndex: number, key: string, value: string) => {
      setState((prev) => {
        const element = prev.at(rowIndex);

        if (!element) {
          return prev;
        }

        return prev.map((item, index) => {
          if (index === rowIndex) {
            return { ...element, [key]: value };
          }

          return item;
        });
      });
    },
    [],
  );

  const columns = useMemo(() => {
    return [
      helper.accessor('id', { header: '#' }),
      helper.accessor('label', {
        header: 'Label',
        cell: ({ getValue, row: { index } }) => (
          <InlineEditableComponent
            renderEditable={({ ref, stopRendering, onKeyDown }) => (
              <InlineEditableInput
                ref={ref}
                onKeyDown={onKeyDown}
                defaultValue={getValue()}
                onBlur={(event) => {
                  stopRendering();
                  changeValue(index, 'label', event.currentTarget.value);
                }}
              />
            )}
          >
            {getValue()}
          </InlineEditableComponent>
        ),
      }),
      helper.accessor('field', {
        header: 'Field',
        cell: ({ getValue, row: { index } }) => (
          <InlineEditableComponent
            renderEditable={({ ref, stopRendering, onKeyDown }) => (
              <InlineEditableInput
                ref={ref}
                onKeyDown={onKeyDown}
                defaultValue={getValue()}
                onBlur={(event) => {
                  stopRendering();
                  changeValue(index, 'field', event.currentTarget.value);
                }}
              />
            )}
          >
            {getValue()}
          </InlineEditableComponent>
        ),
      }),
      helper.accessor('format', {
        header: 'Format',
        cell: ({ getValue, row: { index } }) => (
          <InlineEditableComponent
            renderEditable={({ ref, stopRendering, onKeyDown }) => (
              <InlineEditableInput
                ref={ref}
                onKeyDown={onKeyDown}
                defaultValue={getValue()}
                onBlur={(event) => {
                  stopRendering();
                  changeValue(index, 'format', event.currentTarget.value);
                }}
              />
            )}
          >
            {getValue()}
          </InlineEditableComponent>
        ),
      }),
      helper.accessor('visible', { header: 'Visible' }),
      helper.display({
        header: ' ',
        cell: ({ row: { index } }) => {
          return (
            <Button
              type="button"
              icon="trash"
              tabIndex={-1}
              onClick={() => deleteIndex(index)}
            />
          );
        },
      }),
    ];
  }, [changeValue, deleteIndex]);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
      }}
    >
      <div>
        <Table<TableData>
          data={state}
          columns={columns}
          estimatedRowHeight={() => 50}
        />
      </div>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export const InlineEditable = {
  render: () => {
    const [state, setState] = useState('Hello, World!');

    return (
      <div style={{ width: 100 }}>
        <span>State: {state}</span>
        <InlineEditableComponent
          renderEditable={({ ref, stopRendering, onKeyDown }) => (
            <InlineEditableInput
              ref={ref}
              onKeyDown={onKeyDown}
              defaultValue={state}
              onBlur={(event) => {
                stopRendering();

                setState(event.currentTarget.value);
              }}
            />
          )}
        >
          {state}
        </InlineEditableComponent>
      </div>
    );
  },
} satisfies StoryObj;
