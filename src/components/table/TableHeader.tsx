import type { TableProps } from './Table';
import { TableRow } from './TableRow';

export const TableHeader = ({ children, bordered, style }: TableProps) => {
  return (
    <thead>
      <TableRow bordered={bordered} style={style}>
        {children}
      </TableRow>
    </thead>
  );
};
