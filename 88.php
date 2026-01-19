<?php

class Solution
{

    /**
     * @param Integer[] $nums1
     * @param Integer $m
     * @param Integer[] $nums2
     * @param Integer $n
     * @return NULL
     */
    function merge(&$nums1, $m, $nums2, $n)
    {

        if ($n === 0) {
            return;
        }

        $newArray = [];
        $pointer1 = 0;
        $pointer2 = 0;
        while(count($newArray) !== count($nums1)) {
            if (($nums1[$pointer1] > $nums2[$pointer2] || $pointer1 === $m) && $pointer2 !== $n) {
                $newArray[] = $nums2[$pointer2];
                $pointer2+=1;
                continue;
            }
            $newArray[] = $nums1[$pointer1];
            $pointer1 += 1;
        }

        $nums1 = $newArray;
    }
}

$array = [1, 2, 3, 0, 0, 0];
print((new Solution())->merge($array, 3, [2, 5, 6], 3) . PHP_EOL);
echo '<pre>';
print_r($array);
$array2 = [1];
print((new Solution())->merge($array2, 1, [], 0) . PHP_EOL);
echo '<pre>';
print_r($array2);
$array3 = [0];
print((new Solution())->merge($array3, 0, [1], 1) . PHP_EOL);
echo '<pre>';
print_r($array3);
$array4 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
print((new Solution())->merge($array4, 6, [1, 2, 2], 3) . PHP_EOL);
echo '<pre>';
print_r($array4);
$array5 = [1, 2, 3, 0, 0, 0];
print((new Solution())->merge($array5, 3, [2, 5, 6], 3) . PHP_EOL);
echo '<pre>';
print_r($array5);
$array6 = [4,0,0,0,0,0];
print((new Solution())->merge($array6, 1, [1,2,3,5,6], 5) . PHP_EOL);
echo '<pre>';
print_r($array6);
