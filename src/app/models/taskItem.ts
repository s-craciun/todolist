export class TaskItem {
  todoId: string;
  id: string;
  title: string;
  status: boolean;

  constructor(todoId: string, id: string, title: string, status: boolean) {
    (this.todoId = todoId),
      (this.id = id),
      (this.title = title),
      (this.status = status);
  }
}
