
// Function to count the number of ways a design can be made using available towel patterns
function countWaysToMakeDesign(patterns, design) {
  // Recursive helper function to count the ways
  function countWays(remainingDesign, memo = {}) {
    if (remainingDesign === "") return 1; // One way to complete the design
    if (memo[remainingDesign] !== undefined) return memo[remainingDesign];

    let totalWays = 0;

    for (const pattern of patterns) {
      if (remainingDesign.startsWith(pattern)) {
        const nextDesign = remainingDesign.slice(pattern.length);
        totalWays += countWays(nextDesign, memo);
      }
    }

    memo[remainingDesign] = totalWays;
    return totalWays;
  }

  return countWays(design);
}

// Calculate the total number of ways to make all designs
let totalWays = 0;

desiredDesigns.forEach((design) => {
  const ways = countWaysToMakeDesign(towelPatterns, design);
  totalWays += ways;
});

console.log(`Total number of ways to make all designs: Part 2 - ${totalWays}`);
