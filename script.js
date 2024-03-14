// This is a simple example, in real world scenario, you would have some logic to detect if the slot is occupied by a car.

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');

// Function to simulate parking of a car
function parkCar(slot) {
  slot.style.backgroundColor = 'blue';
}

// Function to simulate car leaving the parking space
function leaveParking(slot) {
  slot.style.backgroundColor = 'red';
}

// Example: Park car in slot 1
parkCar(slot1);

// Example: Leave slot 2
setTimeout(() => leaveParking(slot2), 3000); // Change to setTimeout(leaveParking, 3000, slot2); for compatibility with older browsers
