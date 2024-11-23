import java.awt.desktop.SystemSleepEvent;
import java.util.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        int[] a = {2,4,6,8,10};
        int sum = 12;
        findPairOfSum(a, sum);



    }
    /*program to find pair equal to SUM*/
    static void findPairOfSum(int[] arr, int sum){
        List<List<Integer>> pairList = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if(arr[i] + arr[j] == sum){
                    List<Integer> row = new ArrayList<>();
                    row.add(arr[i]);
                    row.add(arr[j]);
                    pairList.add(row);
                }
            }
        }
if(!pairList.isEmpty()){
    System.out.println("Pairs Found, " + pairList.toString());
}else {
    System.out.println("Sorry ! No pair exists.");
}
    }


    /*program to find intersection of two-array
    static void findIntersectionOfArrays(int[] a, int[] b){
        ArrayList<Number> intersection = new ArrayList<>();
        Set<Integer> myset = new HashSet<>();

        for (int j : a) {
            myset.add(j);
        }

        for (int j : b) {
            if (myset.contains(j)) {
                intersection.add(j);
                myset.remove(j);
            }
        }

        System.out.println("Intersection elements are : " + intersection.toString());
    }*/

    /*program to find the sum of maximum and minimum element in an array
    static void findMaximumMinimumSum(int[] arr){
        int max = -99999999;
        int min = 99999999;

        for (int i = 0; i < arr.length; i++) {
            if(arr[i] > max){
                max = arr[i];
            } else if (arr[i] < min) {
                min = arr[i];
            }
        }
        System.out.println("Sum of the maximum and minimum element is " + (max+min));
    }*/

    /*program to find non-duplicate element in the array
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

    }*/
}