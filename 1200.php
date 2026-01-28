<?php

class Solution
{

    /**
     * @param Integer[] $arr
     * @return Integer[][]
     */
    function minimumAbsDifference($arr)
    {
        $response = [];

        $diff = INF;
        sort($arr);

        for ($i = 1; $i < count($arr); $i++) {
            $currentDiff = $arr[$i] - $arr[$i - 1];
            if ($currentDiff < 0) {
                $currentDiff = $currentDiff * -1;
            }

            if ($currentDiff < $diff) {
                $diff = $currentDiff;
            }

            $response["$currentDiff"][] = [$arr[$i - 1], $arr[$i]];
        }

        return $response[$diff];
    }
}

print_r((new Solution())->minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); //[[-14,-10],[19,23],[23,27]]
print_r((new Solution())->minimumAbsDifference([1, 3, 6, 10, 15])); //[[1,3]]
print_r((new Solution())->minimumAbsDifference([4, 2, 1, 3])); //[[1,2],[2,3],[3,4]]