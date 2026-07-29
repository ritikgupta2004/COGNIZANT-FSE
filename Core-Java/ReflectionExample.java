import java.lang.reflect.*;

class Student {
    private String name = "Ritik";
    private int age = 21;

    public void display() {
        System.out.println("Student details");
    }
}

public class ReflectionExample {
    public static void main(String[] args) throws Exception {

        Class<?> obj = Class.forName("Student");

        System.out.println("Class Name: " + obj.getName());

        System.out.println("\nMethods:");
        Method[] methods = obj.getDeclaredMethods();

        for (Method method : methods) {
            System.out.println(method.getName());
        }

        System.out.println("\nFields:");
        Field[] fields = obj.getDeclaredFields();

        for (Field field : fields) {
            System.out.println(field.getName());
        }

        Object studentObject = obj.getDeclaredConstructor().newInstance();

        Method method = obj.getDeclaredMethod("display");
        method.invoke(studentObject);
    }
}