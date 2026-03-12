import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class FileManager {

    public static void saveTasks(List<Task> tasks) {

        try {

            FileWriter writer = new FileWriter("tasks.txt");

            for (Task t : tasks) {
                writer.write(t.toFileString() + "\n");
            }

            writer.close();

        } catch (IOException e) {
            System.out.println("Error saving tasks.");
        }

    }
}