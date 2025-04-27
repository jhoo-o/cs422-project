import ImportedEvents from './user_data/events.json';
import ImportedTasks from './user_data/tasks.json';

class process {
    constructor() {
        if (localStorage.getItem('events') == null) {
            localStorage.setItem('events', JSON.stringify(ImportedEvents));
            console.log('Imported Events');
        }
        this.events = JSON.parse(localStorage.getItem('events')).map(this._processEvents);
        
        if (localStorage.getItem('tasks') == null) {
            localStorage.setItem('tasks', JSON.stringify(ImportedTasks));
            console.log('Imported Tasks');
        }
        this.tasks = JSON.parse(localStorage.getItem('tasks')).map(this._processTasks);

        if (localStorage.getItem('credit') == null) {
            localStorage.setItem('credit', 'no');
            console.log('credit set');
        }
        this.credit = localStorage.getItem('credit');
    }

    _processEvents(event) {
        return {
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end),
            allDay: true
        };
    }

    get getEvents() {
        return this.events;
    }

    set setEvents(newEvent) {
        this.events.push(newEvent);
        localStorage.setItem('events', JSON.stringify(this.events));
    }

    _processTasks(task) {
        return {
            name: task.name,
            points: task.points,
            priority: task.priority,
            date: new Date(task.date),
            details: task.details,
            bounty: task.bounty
        };
    }

    get getTasks() {
        return this.tasks;
    }

    set setTasks(newTask) {
        this.tasks.push(newTask);
        this.tasks.sort((a, b) => a.date - b.date);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    _dateSort(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }

    get getCredit() {
        return this.credit;
    }

    set setCredit(status) {
        this.credit = status;
        localStorage.setItem('credit', status);
    }

    updateTaskEvent(newTask) {
        const index = this.tasks.findIndex(task => task.name === newTask.name);
        if (index !== -1) {
            this.tasks.splice(index, 1, newTask);
        } else {
            console.log('UPDATE FAILED');
        }
        this.tasks.sort((a, b) => a.date - b.date);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    deleteTaskEvent(deleteTask) {
        const taskIndex = this.tasks.findIndex(task => task.name === deleteTask.name);
        const eventIndex = this.events.findIndex(event => event.title === deleteTask.name);

        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
        } else {
            console.log('DELETE TASK FAILED');
        }

        if (eventIndex !== -1) {
            this.events.splice(eventIndex, 1);
        } else {
            console.log('DELETE EVENT FAILED');
        }

        this.tasks.sort((a, b) => a.date - b.date);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        localStorage.setItem('events', JSON.stringify(this.events));
    }

    deleteEventByTitle(title) {
        const index = this.events.findIndex(event => event.title === title);
        if (index !== -1) {
            this.events.splice(index, 1);
            localStorage.setItem('events', JSON.stringify(this.events));
        } else {
            console.log('DELETE EVENT FAILED');
        }
    }
}

export default process;
