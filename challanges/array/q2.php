<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $n
     * @return Integer[]
     */
    function shuffle($nums, $n)
    {
        $response = [];
        for ($i = 0; $i < $n; $i++) {
            $response[] = $nums[$i];
            $response[] = $nums[$n + $i];
        }

        return $response;
    }
}


print_r((new Solution())->shuffle([2,5,1,3,4,7], 3));
print_r((new Solution())->shuffle([1,2,3,4,4,3,2,1], 4));
print_r((new Solution())->shuffle([1,1,2,2], 2));
print_r((new Solution())->shuffle([1,2], 1));