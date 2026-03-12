import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        ArrayList<Task> tasks = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        while (true) {

            System.out.println("\n==== TASK MANAGER ====");
            System.out.println("1 - Add Task");
            System.out.println("2 - List Tasks");
            System.out.println("3 - Exit");
            System.out.print("Choose: ");

            int option = scanner.nextInt();
            scanner.nextLine();

            if (option == 1) {

                System.out.print("Task name: ");
                String name = scanner.nextLine();

                tasks.add(new Task(name));
                System.out.println("Task added!");

            } else if (option == 2) {

                for (Task t : tasks) {
                    t.showTask();
                }

            } else if (option == 3) {

                System.out.println("Bye!");
                break;

            }

        }

    }
}