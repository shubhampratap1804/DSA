import java.awt.desktop.SystemSleepEvent;
import java.util.HashMap;
import java.util.Map;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        int[] arr1 = {5, 2, 3, 2, 3};
        int[] arr2 = {-1, -1, -2, -2, -3};

        findNonDuplicateElement(arr2);

    }


    /*program to find non-duplicate element in the array*/
    static void findNonDuplicateElement(int[] arr) {
        int count = 0;
        int number = -999999999;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            if (!map.containsKey(arr[i])) {
                map.put(arr[i], 1);
            } else {
                count = map.get(arr[i]);
                count++;
            }
            count = 0;
        }

        for (Map.Entry<Integer, Integer> set : map.entrySet()) {
            if (set.getValue() == 1) {
                number = set.getKey();
            }
        }

        if (number == -999999999) {
            System.out.println("Some duplicate elements found!");
        } else {
            System.out.println("Non - Duplicate Element is: " + number);
        }

    }
}