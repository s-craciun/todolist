import { TaskItem } from '../models/taskItem';
import { TodoItem } from '../models/todoItem';

export const todoList: TodoItem[] = [
  new TodoItem('todo1', 'What to buy', 'all'),
  new TodoItem('todo2', 'What to read', 'all'),
  new TodoItem('todo3', 'What to learn', 'all'),
];

export const tasksList: TaskItem[] = [
  new TaskItem('todo1', 'task1', 'Bread', true),
  new TaskItem('todo1', 'task2', 'Milk', false),
  new TaskItem('todo1', 'task3', 'Coffee', true),
  new TaskItem('todo2', 'task4', 'Harry Potter', false),
  new TaskItem('todo2', 'task5', 'The Old Curiosity Shop', false),
  new TaskItem('todo2', 'task6', 'Little Prince', true),
  new TaskItem('todo3', 'task7', 'HTML', true),
  new TaskItem('todo3', 'task8', 'CSS', true),
  new TaskItem('todo3', 'task9', 'JS', false),
];
