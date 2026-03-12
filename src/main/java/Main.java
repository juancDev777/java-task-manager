import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Task> tasks = new ArrayList<>();

        tasks.add(new Task("Study Java"));
        tasks.add(new Task("Push project to GitHub"));

        for (Task t : tasks) {
            t.showTask();
        }
    }
}