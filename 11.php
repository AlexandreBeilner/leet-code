<?php

class Solution {

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height) {
        $start = 0;
        $end = count($height) - 1;
        $area = 0;
        
        while ($start !== $end) {
            $heightS = $height[$start];
            $heightE = $height[$end];

            $min = $heightS < $heightE ? $heightS : $heightE;

            $currentArea = $min * (($end - $start));
            if ($currentArea > $area) {
                $area = $currentArea;
            }

            if ($height[$start] > $height[$end]) {
                $end -= 1;
            } else {
                $start += 1;
            }
        }

        return $area;
    }
};

print((new Solution())->maxArea([1,8,6,2,5,4,8,3,7]).PHP_EOL);
print((new Solution())->maxArea([1,1]).PHP_EOL);
print((new Solution())->maxArea([8,7,2,1]).PHP_EOL);
