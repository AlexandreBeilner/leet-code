<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canJump($nums)
    {
        if (count($nums) === 1) return true;

        $bestJump = 0;
        $count = count($nums);

        foreach ($nums as $key => $num) {
            if ($num + $key + 1 >= $count && $num !== 0) {
                return true;
            }

            $sum = $num + $key;
            if ($nums[$sum] === 0) {
                for ($i = $sum; $i > $key; $i--) {
                    if ($nums[$i] !== 0) {
                        $sum = $i;
                        break;
                    }
                }
            }

            if ($sum > $bestJump) {
                $bestJump = $sum;
            }
            
            if ($num === 0) {
                if ($key >= $bestJump) {
                    return false;
                }
            }
        }
    }
}

$arr2 = [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0];
var_dump((new Solution())->canJump($arr2));
$arr2 = [2,3,1,1,4];
var_dump((new Solution())->canJump($arr2));
$arr2 = [3, 2, 1, 0, 4];
var_dump((new Solution())->canJump($arr2));
