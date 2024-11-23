package org.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        transposeMatrix();
    }

    static void transposeMatrix(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter number of rows: ");
        int row = scanner.nextInt();
        System.out.println("Please enter number of columns: ");
        int col = scanner.nextInt();

        int [][] matrix = new int[row][col];

        System.out.println("Enter matrix in standard order: ");
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Enter element of matrix for i " + i +" and j " + j);
                int element = scanner.nextInt();
                matrix[i][j] = element;
            }
        }

        for (int i = row - 1; i > -1; i--) {
            for (int j = col - 1; j > -1; j--) {
                System.out.print(matrix[i][j] + "\t");    // Print each element with a tab space
            }
            System.out.println();
        }

    }
    /*program to calculate the sum of two matrices
    static void sumOfTwoMatrix(){
        Scanner sc = new Scanner(System.in);

        System.out.println("Please enter number of rows :");
        int row = sc.nextInt();
        System.out.println("Please enter number of columns :");
        int col = sc.nextInt();

        int [][] a = new int[row][col];
        int [][] b = new int[row][col];
        int [][] product = new int[row][col];

        System.out.println("Enter elements of Matrix 1 : ");
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Enter elements of Matrix 1 for index i "+ i + " and column " + j);
                a[i][j] = sc.nextInt();
            }
        }

        System.out.println("Enter elements of Matrix 2 : ");
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Enter elements of Matrix 2 for index i "+ i + " and column " + j);
                b[i][j] = sc.nextInt();
            }
        }

        //multiplying both the matrices for obtaining result
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                product[i][j] = a[i][j] + b[i][j];
            }
        }

        for (int i = 0; i < product.length; i++) {       // Outer loop for rows
            for (int j = 0; j < product[i].length; j++) {  // Inner loop for columns
                System.out.print(product[i][j] + "\t");    // Print each element with a tab space
            }
            System.out.println();   // Move to the next line after printing each row
        }
}*/
    /*program to replace old key with new key
    static void replaceOldKeyNewKey(int[] arr, int oldKey, int newKey){
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] == oldKey){
                arr[i] = newKey;
            }
        }
        System.out.println("New array is : " + Arrays.toString(arr));
    }*/
    /*program to find the maximum product of sub-array
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

    }*/

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