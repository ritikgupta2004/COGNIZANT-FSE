import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface MyAnnotation {
    String value();
}

class Demo {

    @MyAnnotation("Test Method")
    public void display() {
        System.out.println("Method executed");
    }
}

public class AnnotationExample {

    public static void main(String[] args) throws Exception {

        Demo obj = new Demo();

        var method = obj.getClass().getMethod("display");

        if (method.isAnnotationPresent(MyAnnotation.class)) {

            MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);

            System.out.println("Annotation Value: " + annotation.value());
        }

        obj.display();
    }
}