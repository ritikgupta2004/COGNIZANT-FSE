import java.util.Arrays;
import java.util.List;

record Person(String name, int age) {}

public class PersonRecordExample {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
                new Person("Ritik", 21),
                new Person("Aman", 17),
                new Person("Rahul", 25),
                new Person("Priya", 19)
        );

        System.out.println("All Persons:");
        people.forEach(System.out::println);

        System.out.println("\nPersons with age >= 18:");
        people.stream()
              .filter(person -> person.age() >= 18)
              .forEach(System.out::println);
    }
}