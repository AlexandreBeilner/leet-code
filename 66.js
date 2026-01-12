function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        const newValue = digits[i] + 1;
        if (newValue < 10) {
            digits[i] = newValue;
            return digits;
        }

        digits[i] = 0;
        if (i === 0) {
            digits = [1, ...digits]
            return digits;
        }
    }
};