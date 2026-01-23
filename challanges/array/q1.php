<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function getConcatenation($nums) {
        return array_merge($nums, $nums);
    }
}

print_r((new Solution())->getConcatenation([1,8,6,2,5,4,8,3,7]));
print_r((new Solution())->getConcatenation([1,1]));
print_r((new Solution())->getConcatenation([8,7,2,1]));