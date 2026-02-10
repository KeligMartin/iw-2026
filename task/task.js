export class Task {
    constructor(title, description, priority, timeSpent, owner) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.timeSpent = timeSpent;
        this.owner = `${owner?.firstname} ${owner?.lastname}`
        // (owner.firstname + ' ' + owner.lastname)
        // ?.firstname pour éviter les null pointer exception (NPE)
    }
}