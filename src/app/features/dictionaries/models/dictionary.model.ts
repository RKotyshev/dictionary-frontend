import { ColumnOptions } from '../../../shared/models/column-options.model';

export interface Dictionary {
  id: number;
  title: string;
  description: string;
  isFavorite: boolean;
}

export interface ColumnWithOptions {
  columnName: string;
  options: ColumnOptions;
}
