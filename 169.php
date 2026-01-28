<?php


class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function majorityElement($nums) {
        $saldo = 0;
        $atual = null;

        //isso funciona porque na questão afirma que o majority element aparece mais de len($nums)/2;
        //dessa forma, o elemento que mais aparece sobra no final
        foreach ($nums as $num) {
            if ($saldo === 0) {
                $atual = $num;
                $saldo = 1;
            } else {
                if ($num === $atual) {
                    $saldo++;
                } else {
                    $saldo--;
                }
            }
        }

        return $atual;
    }
}


$arr2 = [2,2,1,1,1,2,2];
print_r((new Solution())->majorityElement($arr2));
$arr2 = [3,2,3];
print_r((new Solution())->majorityElement($arr2));