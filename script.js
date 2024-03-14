
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');

function parkCar(slot) {
  slot.style.backgroundColor = 'blue';
}

function leaveParking(slot) {
  slot.style.backgroundColor = 'red';
}

parkCar(slot1);

setTimeout(() => leaveParking(slot2), 3000); // Change to setTimeout(leaveParking, 3000, slot2); for compatibility with older browsers
