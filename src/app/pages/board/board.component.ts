import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

import { ToDo } from "../../models/todo.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .cdk-drop-list-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Task 1'
    },
    {
      id: '2',
      title: 'Task 2'
    },
    {
      id: '3',
      title: 'Task 3'
    },
  ];

  doing: ToDo[] = [
    {
      id: '4',
      title: 'Task 4'
    },
  ];
  done: ToDo[] = [
    {
      id: '5',
      title: 'Task 5'
    },
  ];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    }
    else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
