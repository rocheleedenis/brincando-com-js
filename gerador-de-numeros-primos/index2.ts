/**
 * This class Generates prime numbers up to a user specified maxmum. The algorithm is the Sieve of Eratosthenes.
 * Given an array of integers starting at 2:
 * Find the first uncrossed integer, and cross out all its multiples. Repeat until there are no more multiples in the array.
 */

class PrimeGenerator
{
    private static crossedOut: boolean[];
    private static result: number[];

    public static generatePrimes(maxValue: number) : number[]
    {
        if (maxValue < 2) {
            return [];
        }

        this.uncrossIntegersUpTo(maxValue);
        this.crossOutMultiples();
        this.putUncrossedIntegerIntoResult();

        return this.result;
    }

    private static uncrossIntegersUpTo(maxValue: number) : void
    {
        this.crossedOut = new Array<boolean>(maxValue + 1);

        for (let i = 2; i < this.crossedOut.length; i++) {
            this.crossedOut[i] = false;
        }
    }

    private static crossOutMultiples() : void
    {
        let limit = this.determineInterationLimit();

        for (let i = 2; i <= limit; i++) {
            if (this.notCrossed(i)) {
                this.crossOutMultiplesOf(i);
            }
        }
    }

    private static determineInterationLimit() : number
    {
        // Every multiple in the array has a prime factor that
        // is less than or equal to the root of the array size,
        // so we don't have to cross out multiples of numbers
        // larger than root.
        let interationLimit = Math.sqrt(this.crossedOut.length);

        return interationLimit;
    }

    private static crossOutMultiplesOf(i: number) : void
    {
        let multiple = 2 * i;

        for (multiple; multiple < this.crossedOut.length; multiple += i) {
            this.crossedOut[multiple] = true;
        }
    }

    private static notCrossed(i: number) : boolean
    {
        return this.crossedOut[i] == false;
    }

    private static putUncrossedIntegerIntoResult() : void
    {
        this.result = new Array<number>(this.numberOfUncrossedIntegers());

        let j = 0;

        for (let i = 2; i < this.crossedOut.length; i++) {
            if (this.notCrossed(i)) {
                this.result[j++] = i;
            }
        }
    }

    private static numberOfUncrossedIntegers() {
        let count = 0;

        for (let i = 2; i < this.crossedOut.length; i++) {
            if (this.notCrossed(i)) {
                count++;
            }
        }

        return count;
    }
}

console.log(PrimeGenerator.generatePrimes(100));