import { FilterType } from '../types/primitives';

export class TodoItem {
  id: string;
  title: string;
  filter: string;

  constructor(id: string, title: string, filter: FilterType) {
    (this.id = id), (this.title = title), (this.filter = filter);
  }
}
