public class Task {

    String title;
    boolean completed;

    public Task(String title) {
        this.title = title;
        this.completed = false;
    }

    public String toFileString() {
        return title + "," + completed;
    }

    public void showTask() {
        System.out.println("Task: " + title + " | Completed: " + completed);
    }
}