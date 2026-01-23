<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxConsecutiveOnes($nums) {
        $best = 0;
        $curr = 0;
        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] === 1) {
                $curr++;
                continue;
            }

            if ($curr > $best) {
                $best = $curr;
            }
            $curr = 0;
        }

        return $best > $curr ? $best : $curr;
    }
}


print_r((new Solution())->findMaxConsecutiveOnes([1,1,0,1,1,1]));
print_r((new Solution())->findMaxConsecutiveOnes([1,0,1,1,0,1]));