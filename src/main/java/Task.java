public class Task {

    String title;
    boolean completed;

    public Task(String title) {
        this.title = title;
        this.completed = false;
    }

    public void completeTask() {
        completed = true;
    }

    public void showTask() {
        System.out.println("Task: " + title + " | Completed: " + completed);
    }
}