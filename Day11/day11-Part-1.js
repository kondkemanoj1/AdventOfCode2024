// Function to split a number based on its digits
function splitNumber(num) {
  const digits = num.toString();
  const mid = Math.floor(digits.length / 2);
  return [parseInt(digits.slice(0, mid), 10), parseInt(digits.slice(mid), 10)];
}

// Function to simulate the blinking process
function simulateStones(stones, blinks) {
  for (let blink = 0; blink < blinks; blink++) {
      const newStones = [];
      for (const stone of stones) {
          if (stone === 0) {
              newStones.push(1);
          } else if (stone.toString().length % 2 === 0) {
              const [left, right] = splitNumber(stone);
              if (!isNaN(left)) newStones.push(left);
              if (!isNaN(right)) newStones.push(right);
          } else {
            if(stone !== null && stone !== undefined)
              newStones.push(stone * 2024);
          }
      }
      stones = newStones;
  }
  return stones;
}

// Initial arrangement of stones
const initialStones1 = [0, 4 ,4979, 24 ,4356119 ,914, 85734 ,698829];
const blinks1 = 25;

// Simulate the process
const finalStones1 = simulateStones(initialStones1, blinks1);

// Output the number of stones after 75 blinks
console.log(`Number of stones after ${blinks1} blinks: Part 1`, finalStones1.length);
