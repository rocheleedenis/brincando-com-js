const generatePrimes = function (maxValue: number) {
    if (maxValue >= 2) { // the only valid case
        // declarations
        var s: number = maxValue + 1; // size of case
        var f: boolean[] = []; // errado
        var i: number;

        // initiate array to true
        for (i = 0; i < s; i++) {
            f[i] = true;
        }

        // get rid of know non-primes
        f[0] = f[1] = false;

        // sieve
        var j: number;
        for (i = 2; i < Math.sqrt(s) + 1; i++) {
            if (f[i]) { // if i is uncrossed, cross its multiples.
                for (j = 2 * i; j < s; j += i) {
                    f[j] = false; // multiple is not prime
                }
            }
        }

        // how many primes are there?
        var count: number = 0;
        for (i = 0; i < s; i++) {
            if (f[i]) {
                count++; // bump count
            }
        }

        var primes: number[] = [count];

        // move the primes into the result
        j = 0;
        for (i = 0; i < s; i++) {
            if (f[i]) { // if prime
                primes[j++] = i;
            }
        }

        return primes;
    } else { // maxValue < 2
        return [];
    }
}

console.log(generatePrimes(50));