//Design a menu driven prigram in c to manage a task scheduler using a circular queue where each task is represented by a Task ID(character or integer)
//1. Operations:
//a. Add a task: Insert a task into the circular queue to be scheduled.
//b. Process a task: Remove a task from the queue to be scheduled.
//c. Handle Overflow and Underflow: Demonstrate cases when the queue is full or empty.
//d. Display the queue: Show all the currenently in the queue.
//e. Exit the program.

//2. Function Design:
//a.Write functions for each operation, ensuring proper handelling of circular mechanics for task scheduling.

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define MAX 20

int tasks[MAX];
int front = -1, rear = -1;


void addTask(){
    if((rear+1)%MAX == front){
        printf("Queue is full\n");
    }
    else{
        if(front == -1){
            front = rear = 0;
        } else {
            rear = (rear+1)%MAX;
        }
        printf("Enter the task ID:");
        scanf("%d", &tasks[rear]);
    }
}


void processTask(){
    if(front == -1){
        printf("Empty queue\n");
    }
    else{
        printf("Task %d is processed\n", tasks[front]);
        if(front == rear){
            front = rear = -1;
        }
        else{
            front = (front+1)%MAX;
        }
    }
}


void display(){
    if(front == -1){
        printf("Empty queue\n");
    }
    else{
        printf("Tasks in the queue are:\n");
        for(int i=front; i!=rear; i=(i+1)%MAX){
            printf("%d\n", tasks[i]);
        }
        printf("%d\n", tasks[rear]);
    }
}

void main(){
    int choice;
    while(1){
        printf("\n1. Add a task\n2. Process a task\n3. Display the queue\n4. Exit\nEnter your choice:");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            addTask();
            break;
        
        case 2:
            processTask();
            break;

        case 3:
            display();
            break;
        
        case 4:
            exit(0);
            break;
        
        default:
            printf("Invalid choice\n");
            break;
        }
    }
}