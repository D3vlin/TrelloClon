import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Dialog } from "@angular/cdk/dialog";

import { ToDo, Column } from "../../models/todo.model";
import { TodoDialogComponent } from "../../components/todo-dialog/todo-dialog.component";

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
  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
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
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '4',
          title: 'Task 4'
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '5',
          title: 'Task 5'
        },
      ]
    },
  ];

  constructor (
    private dialog : Dialog,
  ) {}

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  dropHorizontal (event: CdkDragDrop<Column[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    })
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        todo: todo,
      }
    });

    dialogRef.closed.subscribe(output => {

    });
  }
}
