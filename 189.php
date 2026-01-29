<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return NULL
     */
    function rotate(&$nums, $k)
    {
        $count = count($nums);
        if ($k > $count) {
            $k = $k % $count;
        }
        $slice = array_slice($nums, $count - $k);
        if (! empty($slice)) {
            array_splice($nums, $count - $k);
            $nums = [...$slice, ...$nums];
        }

        return $nums;
    }
}

$arr2 = [1, 2, 3, 4, 5, 6, 7];
print_r((new Solution())->rotate($arr2, 44));
$arr2 = [-1, -100, 3, 99];
print_r((new Solution())->rotate($arr2, 2));
$arr2 = [-1];
print_r((new Solution())->rotate($arr2, 2));
