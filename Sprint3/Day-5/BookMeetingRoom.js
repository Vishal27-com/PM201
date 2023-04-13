// Slot

class Slot {
  #slot;
  constructor(start, end) {
    this.#slot = [start, end];
  }
  get start() {
    return this.#slot[0];
  }
  get end() {
    return this.#slot[1];
  }
}

// Slots

class Slots {
  #slots;
  constructor() {
    this.#slots = [];
  }
  get slots() {
    return this.#slots;
  }
  add(slot) {
    if (this.isAvailable(slot.start, slot.end)) {
      this.#slots.push(slot);
      console.log("booked");
    } else console.log("Already booked!!!");
  }
  isAvailable(start, end) {
    for (let slot of this.#slots) {
      if (start < slot.end && end > slot.start) {
        return false;
      }
    }
    return true;
  }
  listSlot() {
    for (let slot of this.#slots) {
      console.log(`Start:${slot.start} end:${slot.end}`);
    }
  }
}

class MeetingRoom {
  #name;
  #capacity;
  #slots;
  #availableSlots;
  constructor(name, capacity) {
    this.#name = name;
    this.#capacity = capacity;
    this.#slots = new Slots();
  }
  get name() {
    return this.#name;
  }
  get capacity() {
    return this.#capacity;
  }
  set changeCapacity(newCapacity) {
    this.#capacity = newCapacity;
  }
  addSlot(slot) {
    this.#slots.add(slot);
  }
  showSlots() {
    this.#slots.listSlot();
  }
}

class Floor {
  #name;
  #meetingRooms;
  constructor(name) {
    this.#name = name;
    this.#meetingRooms = [];
  }
  get floorName() {
    return this.#name;
  }
  addMeetingRoom(newRoom) {
    if (!this.doesMeetingRoomExist(newRoom)) {
      this.#meetingRooms.push(newRoom);
    }
  }
  doesMeetingRoomExist(meetingRoom) {
    return this.#meetingRooms.some((room) => room.name === meetingRoom.name);
  }
}

class Building{
  #name;
  #floors;
  constructor(name){
    this.#name=name;
    this.#floors=[];
  }
  addFloor(newFloor){
    if(!this.doesFloorExist(newFloor)){
      this.#floors.push(newFloor);
    }
  }
  doesFloorExist(floor){
    return this.#floors.some((f)=>f.name===floor.name)
  }
  get buildingName(){
    return this.#name;
  }
  get numOfFloors(){
    return this.#floors.length;
  }

}
const S1 = new Slot(1, 3);
const S2 = new Slot(3, 4);
const S3 = new Slot(2, 5);
const M1 = new MeetingRoom("M1", 30);
const M2 = new MeetingRoom("M2", 10);
const M3 = new MeetingRoom("M3", 15);
const F = new Floor("Web-10");
const B=new Building("Masai");
M1.addSlot(S1);
M1.addSlot(S2);
M1.addSlot(S3);
F.addMeetingRoom(M1);
F.addMeetingRoom(M2);
F.addMeetingRoom(M3);
B.addFloor(F1);
B.addFloor(F2);
console.log(B)