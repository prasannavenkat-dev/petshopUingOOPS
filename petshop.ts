
interface petInput {

  petName: animal;
  historyOfowners: Number;
  character: String;
  count: Number;
}

//PETS AVAILABLE
class availability {

  pets: Array<petInput>
  petList: Array<string>
  petCount: Array<string>
  notAvail: Array<string>
  constructor(pets: Array<petInput>) {
    this.pets = pets
    this.petList = []
    this.petCount = []
    this.notAvail = []
  }

  collection(): Array<string> {
    for (let j = 0; j < (this.pets).length; j++) {
      this.petList.push(this.pets[j].petName)

    }

    return this.petList;
  }


  petStock(): Array<string> {
    for (let j = 0; j < (this.pets).length; j++) {

      if (this.pets[j].count === 0) {
        this.notAvail.push(this.pets[j].petName);
      }
      this.petCount.push(`${this.pets[j].petName}-${this.pets[j].count}`)

    }

    return this.petCount;
  }
  unAvail() {
    for (let j = 0; j < (this.pets).length; j++) {

      if (this.pets[j].count === 0) {
        this.notAvail.push(this.pets[j].petName);
      }


    }

    return this.notAvail
  }



}
enum animalWord {
  A = "Dog",
  B = "Rabbit",
  C = "Cat",
  D = "Hamster",
  E = "GoldFish",
  F = "Parrot"
}

type animal = animalWord.A | animalWord.B | animalWord.C | animalWord.D | animalWord.E | animalWord.F

//PETS DEFINING
let dog: petInput = {
  petName: animalWord.A,
  historyOfowners: 3,
  character: 'Ferrocious',
  count: 5
}

let rabbit: petInput = {
  petName: animalWord.B,
  historyOfowners: 3,
  character: 'Very Soft',
  count: 2
}
let cat: petInput = {
  petName: animalWord.C,
  historyOfowners: 3,
  character: 'Soft',
  count: 2
}
let Hamster: petInput = {
  petName: animalWord.D,
  historyOfowners: 3,
  character: 'Very Soft',
  count: 5
}
let GoldFish: petInput = {
  petName: animalWord.E,
  historyOfowners: 1,
  character: 'Quiet',
  count: 8
}
let parrot: petInput = {
  petName: animalWord.F,
  historyOfowners: 1,
  character: 'Quiet',
  count: 0
}


//REQUESTING PETS

class request {

  enquiry: Array<string>
  constructor(enquiry: Array<string>) {

    this.enquiry = enquiry;

  }

}

//MATCHING ENQUIRY AND AVAILABLE PETS

class matchData {
  enquiry: Array<string>
  result: Array<string>
  missingElements: Array<string>
  petAvailable: Array<string>
  petStatus: Array<string>
  unavailable: Array<string>

  constructor(enquiry: Array<string>, petAvailable: Array<string>) {


    this.petAvailable = petAvailable
    this.result = []
    this.enquiry = enquiry
    this.missingElements = []
    this.petStatus = []

  }
  compare(unavailable: Array<string>) {

    this.unavailable = unavailable;

    for (let i = 0; i < (this.enquiry).length; i++) {

      if ((this.petAvailable.filter(ele => (ele === this.enquiry[i]))).length === 0) {
        this.missingElements.push(this.enquiry[i])
      }

    }
    return (this.missingElements)

  }

  petStatusCheck() {

    for (let i = 0; i < (this.enquiry).length; i++) {

      for (let k = 0; k < this.unavailable.length; k++) {
        for (let l = 0; l < this.petAvailable.length; l++) {
          if (this.enquiry[i] === unavailable[k] && this.enquiry[i] === this.petAvailable[l]) {


            this.petStatus.push(`${this.enquiry[i]} - NOT AVAILABLE`)
          }
          else if (this.enquiry[i] !== unavailable[k] && this.enquiry[i] === this.petAvailable[l]) {
            this.petStatus.push(`${this.enquiry[i]} - AVAILABLE`)
          }
        }


      }



    }

    let chars = this.petStatus;


    let uniqueChars = chars.filter((c, index) => {
      return chars.indexOf(c) === index;
    });



    return (uniqueChars)
  }

}




//PETS AVAILABLE INPUT
let petGroup1 = new availability([dog, cat, rabbit, Hamster, GoldFish, parrot]);
//LIST OF PET NAMES
let petAvailable = petGroup1.collection();

//1.COUNT OF PET STOCK LIST

let petStockList = petGroup1.petStock();
console.log(petStockList);

//UNAVAILABLE
let unavailable = petGroup1.unAvail()


//ENQUIRY INPUT
let enquiry = [animalWord.A, animalWord.E, animalWord.F];
let petEnquiry = new request(enquiry);

//2.MATCHING DATA
let matching = new matchData(enquiry, petAvailable);
let enquiryResult = matching.compare(unavailable);
if (enquiryResult.length > 1) {
  console.log(`${enquiryResult.length} incoming requests unmatched !!!!`)
}
else {
  console.log(`${enquiryResult.length} incoming request unmatched !!!!`)
}

//3.AVAILABLE OR NOT
console.log(matching.petStatusCheck());

