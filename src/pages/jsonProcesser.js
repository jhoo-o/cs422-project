
import ImportedEvents from './user_data/events.json';
import ImportedTasks from './user_data/tasks.json';

class process{
    
    constructor(){
        if (localStorage.getItem('events') == null){
            localStorage.setItem('events', JSON.stringify(ImportedEvents));
            console.log('Imported Events');
        }
        this.events = JSON.parse(localStorage.getItem('events')).map(this._processEvents)
        if (localStorage.getItem('tasks') == null){
            localStorage.setItem('tasks', JSON.stringify(ImportedTasks));
            console.log('Imported Tasks');
        }
        this.tasks= JSON.parse(localStorage.getItem('tasks')).map(this._processTasks)
        
        if (localStorage.getItem('credit') == null){
            localStorage.setItem('credit', 'no');
            console.log('credit set');
        }
        this.credit = localStorage.getItem('credit');
    }

    _processEvents(event){
        const obj = {
                      title: event.title,
                      start: new Date(event.start),
                      end: new Date(event.end),
                      allDay: true  
                    }
        obj.start.setDate(obj.start.getDate()); // fix later
        obj.end.setDate(obj.end.getDate());
        return obj;
    }

    get getEvents(){
        return this.events;
    }

    set setEvents(newEvent){
        console.log(this.events);
        console.log(newEvent);
        this.events.push(newEvent);
        localStorage.setItem('events', JSON.stringify(this.events));
    }

    _processTasks(task){
        const obj = {
                        name: task.name,
                        points: task.points,
                        priority: task.priority,
                        date: new Date(task.date), // WHY DOES IT ADJUST FOR CENTRAL TIME
                        details: task.details,
                        bounty: task.bounty
                    }
        
        return obj;
    }

    get getTasks(){
        return this.tasks;
    }

    set setTasks(newTask){
        this.tasks.push(newTask);
        this.tasks.sort((a, b) => a.date > b.date ? 1 : -1)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
    
    _dateSort(a, b){
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    }

    get getCredit(){
        return this.credit;
    }

    set setCredit(status){
        this.credit = status;
        localStorage.setItem('credit', status);
    }

    updateTaskEvent(newTask){
        const index = this.tasks.findIndex(task => task.name == newTask.name)
        console.log(index)
        if (index != -1){
            this.tasks.splice(index, 1, newTask);
            console.log(newTask);
            console.log(this.tasks);
        } else {
            console.log('UPDATE FAILED');
        }
        this.tasks.sort((a, b) => a.date > b.date ? 1 : -1)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

    deleteTaskEvent(deleteTask){
        const index = this.tasks.findIndex(task => task.name == deleteTask.name)
        const eventIndex = this.events.findIndex(task => task.name == deleteTask.name)
        if (index != -1){
            this.tasks.splice(index, 1);
            this.events.splice(index, 1);
        } else {
            console.log('DELETE FAILED');
        }
        this.tasks.sort((a, b) => a.date > b.date ? 1 : -1)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        localStorage.setItem('events', JSON.stringify(this.events))
    }
    deleteEventByTitle(title) {
        const index = this.events.findIndex(event => event.title === title);
        console.log(index);
        if (index !== -1) {
            this.events.splice(index, 1);
        } else {
            console.log('DELETE EVENT FAILED');
        }
        localStorage.setItem('events', JSON.stringify(this.events));
    }
    

}

export default process;
