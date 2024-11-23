package org.example;

import java.util.ArrayList;
import java.util.List;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        int[] arr = {1,2,3,4,5,6,7,8,9};
        numbersNotDivisibleByTwoAndThree(arr);
    }

    static void numbersNotDivisibleByTwoAndThree(int[] arr){
        List<Integer> resultSet = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] % 2 != 0 && arr[i] % 3 != 0){
                resultSet.add(arr[i]);
            }
        }
        if(!resultSet.isEmpty()){
            System.out.println(resultSet.toString());
        }else {
            System.out.println("Every number is divisible by 2 and 3");
        }
    }
}