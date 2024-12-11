// Function to split a number based on its digits
function splitNumber(num) {
    const digits = num.toString();
    const mid = Math.floor(digits.length / 2);
    return [parseInt(digits.slice(0, mid), 10), parseInt(digits.slice(mid), 10)];
  }
  
  // Function to simulate the blinking process with a frequency map
  function simulateStonesEfficient(stones, blinks) {
    let frequencyMap = new Map();
  
    // Initialize the frequency map with the starting stones
    for (const stone of stones) {
      frequencyMap.set(stone, (frequencyMap.get(stone) || 0) + 1);
    }
  
    // Simulate the blinking process
    for (let blink = 0; blink < blinks; blink++) {
      const newFrequencyMap = new Map();
  
      for (const [stone, count] of frequencyMap.entries()) {
        if (stone === 0) {
          newFrequencyMap.set(1, (newFrequencyMap.get(1) || 0) + count);
        } else if (stone.toString().length % 2 === 0) {
          const [left, right] = splitNumber(stone);
          if (!isNaN(left)) {
            newFrequencyMap.set(left, (newFrequencyMap.get(left) || 0) + count);
          }
          if (!isNaN(right)) {
            newFrequencyMap.set(right, (newFrequencyMap.get(right) || 0) + count);
          }
        } else {
          const newStone = stone * 2024;
          newFrequencyMap.set(newStone, (newFrequencyMap.get(newStone) || 0) + count);
        }
      }
  
      frequencyMap = newFrequencyMap; // Update the frequency map for the next blink
    }
  
    // Calculate the total number of stones
    let totalStones = 0;
    for (const count of frequencyMap.values()) {
      totalStones += count;
    }
  
    return totalStones;
  }
  
  // Initial arrangement of stones
  const initialStones2 = [0, 4, 4979, 24, 4356119, 914, 85734, 698829];
  const blinks2 = 75;
  
  // Simulate the process
  const totalStones = simulateStonesEfficient(initialStones2, blinks2);
  
  // Output the total number of stones
  console.log(`Total number of stones after ${blinks2} blinks:`, totalStones);
  