import type { Header, RowData } from '@tanstack/react-table';
import { CSSProperties } from 'react';

import { TableHeaderCell } from './table_header_cell';
import { TableRow } from './table_row';

const headerStyle: CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 10,
  backgroundColor: 'white',
};

interface TableHeaderProps<TData extends RowData> {
  headers: Array<Header<TData, unknown>>;
  sticky: boolean;
}

export function TableHeader<TData extends RowData>(
  props: TableHeaderProps<TData>,
) {
  const { headers, sticky } = props;
  return (
    <thead style={sticky ? headerStyle : undefined}>
      <TableRow>
        {headers.map((header) => (
          <TableHeaderCell key={header.id} header={header} />
        ))}
      </TableRow>
    </thead>
  );
}
