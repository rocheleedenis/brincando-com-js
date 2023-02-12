class GeneratePrimes {
    private size!: number; // not inicialized, but no error!
    private f: boolean[] = [];
    private primes: number[] = [];

    public generate(maxValue: number) {
        if (maxValue >= 2) { // the only valid case
            return this.analise(maxValue);
        }

        return this.primes;
    }

    private setSize(maxValue: number) {
        this.size = maxValue + 1;
    }

    private analise(maxValue: number) {
        this.setSize(maxValue);
        this.initiateEfeWithTrueValues();
        this.getRidOfKnowNonPrimes();
        this.sieve();

        this.primes = [this.countPrimeNumbers()];

        this.movePrimesIntoTheResult();

        return this.primes;
    }

    private initiateEfeWithTrueValues() {
        for (let i = 0; i < this.size; i++) {
            this.f[i] = true;
        }
    }

    private getRidOfKnowNonPrimes() {
        this.f[0] = this.f[1] = false;
    }

    private sieve() {
        let j: number = 0;

        for (let i = 2; i < Math.sqrt(this.size) + 1; i++) {
            if (this.f[i]) { // if i is uncrossed, cross its multiples.
                for (j = 2 * i; j < this.size; j += i) {
                    this.f[j] = false; // multiple is not prime
                }
            }
        }
    }

    private countPrimeNumbers() {
        var count: number = 0;
        for (let i = 0; i < this.size; i++) {
            if (this.f[i]) {
                count++; // bump count
            }
        }

        return count;
    }

    private movePrimesIntoTheResult() {
        let j: number = 0;

        for (let i = 0; i < this.size; i++) {
            if (this.f[i]) { // if prime
                this.primes[j++] = i;
            }
        }
    }
}

console.log((new GeneratePrimes()).generate(100));