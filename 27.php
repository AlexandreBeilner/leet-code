<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
        $response = [];

        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] !== $val) {
                array_push($response, $nums[$i]);
            }
        }

        $nums = $response;
        return count($response);
    }
}

$array = [0,1,2,2,3,0,4,2];
print_r((new Solution())->removeElement($array, 2));
echo '<pre>';
print_r($array);
exit;