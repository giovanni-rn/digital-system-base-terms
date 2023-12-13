/** 
 * Algorithm of the mathematical sum function (capital sigma)
 * @param {number} base Base of the digital system
 * @params {function} termValue Operation to perform on each term
 * @params {number} lowerLimit Initial term 
 * @params {number} upperLimit Last term (exclusive)
 * @returns {number} Sum of sequence term
*/
const sum = (base: number, termValue: (base: number, basePower: number) => number, lowerLimit: number, upperLimit: number): number => {
    console.log(`\nBase : ${base}`)
    let result = 0;
    for (let n = lowerLimit; n <= upperLimit; n++) {
        console.log(`u(${n}) = ${termValue(base, n)}`)
        result = result + termValue(base, n);
    }
    return result;
}

/**
 * Calculates a term of any digital system
 * @param {number} base Base of the digital system
 * @param {number} position Position of the term in the system
 * @returns {number} The calculated term
 */
const baseTerm = (base: number, position: number): number => (base ** position);

/**
 * Calculates all the terms within a sequence based on the digital system base provided
 * @param {number} base Base of the digital system (recursively passed through the baseTerm function)
 * @param {number} term Calculated term
 * @returns {number} - The next term in the sequence
 */
const baseAllTerms = (base: number, term: number): number => (sum(base, baseTerm, 0, term) + 1)


baseAllTerms(2, 12) // Binary (bin) : base 2
baseAllTerms(10, 9) // Decimal (dec) : base 2
baseAllTerms(16, 5) // Hexadecimal (hex) : base 2
baseAllTerms(37, 4) // base 37
baseAllTerms(52, 5) // base 52