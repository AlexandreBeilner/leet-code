<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums)
    {
        $count = 0;
        $last = null;
        $total = 0;

        foreach($nums as $key => $num) {
            if ($num === $last && $count > 1) {
                unset($nums[$key]);
            } else {
                $total++;
            }

            if ($num !== $last && $key > 0) {
                $count = 0;
            }

            $count++;
            $last = $num;
        }

        return $total;
    }
}

$arr2 = [0,0,0, 0, 0];
print_r((new Solution())->removeDuplicates($arr2));
echo '<pre>';
print_r($arr2);
exit;
