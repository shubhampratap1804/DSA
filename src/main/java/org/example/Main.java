package org.example;

import java.util.ArrayList;
import java.util.List;


public class Main {
    public static void main(String[] args) {

        int[] arr = {2, 3, -2, 4, 5};
        int length = 5;

        maximumProductOfSubArray(length, arr);
    }

    /*program to find the maximum product of sub-array*/
    static void maximumProductOfSubArray(int length, int[] arr){
        
        int maxProduct = arr[0];
        int minProduct = arr[0];
        int result = arr[0];

        for (int j : arr) {
            if (j < 0) {
                int temp = maxProduct;
                maxProduct = minProduct;
                minProduct = temp;
            }

            maxProduct = Math.max(j, maxProduct * j);
            minProduct = Math.min(j, minProduct * j);

            result = Math.max(result, maxProduct);
        }
System.out.println("Maximum product of sub-array is : " +result);

    }

    /*program to find numbers in an array that ar not divisible by either 2 or 3 or both
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
            System.out.println("Every number is divisible by either 2 or 3 or both.");
        }
    }*/
}