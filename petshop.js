//PETS AVAILABLE
var availability = /** @class */ (function () {
    function availability(pets) {
        this.pets = pets;
        this.petList = [];
        this.petCount = [];
        this.notAvail = [];
    }
    availability.prototype.collection = function () {
        for (var j = 0; j < (this.pets).length; j++) {
            this.petList.push(this.pets[j].petName);
        }
        return this.petList;
    };
    availability.prototype.petStock = function () {
        for (var j = 0; j < (this.pets).length; j++) {
            if (this.pets[j].count === 0) {
                this.notAvail.push(this.pets[j].petName);
            }
            this.petCount.push(this.pets[j].petName + "-" + this.pets[j].count);
        }
        return this.petCount;
    };
    availability.prototype.unAvail = function () {
        for (var j = 0; j < (this.pets).length; j++) {
            if (this.pets[j].count === 0) {
                this.notAvail.push(this.pets[j].petName);
            }
        }
        return this.notAvail;
    };
    return availability;
}());
var animalWord;
(function (animalWord) {
    animalWord["A"] = "Dog";
    animalWord["B"] = "Rabbit";
    animalWord["C"] = "Cat";
    animalWord["D"] = "Hamster";
    animalWord["E"] = "GoldFish";
    animalWord["F"] = "Parrot";
})(animalWord || (animalWord = {}));
//PETS DEFINING
var dog = {
    petName: animalWord.A,
    historyOfowners: 3,
    character: 'Ferrocious',
    count: 5
};
var rabbit = {
    petName: animalWord.B,
    historyOfowners: 3,
    character: 'Very Soft',
    count: 2
};
var cat = {
    petName: animalWord.C,
    historyOfowners: 3,
    character: 'Soft',
    count: 2
};
var Hamster = {
    petName: animalWord.D,
    historyOfowners: 3,
    character: 'Very Soft',
    count: 5
};
var GoldFish = {
    petName: animalWord.E,
    historyOfowners: 1,
    character: 'Quiet',
    count: 8
};
var parrot = {
    petName: animalWord.F,
    historyOfowners: 1,
    character: 'Quiet',
    count: 0
};
//REQUESTING PETS
var request = /** @class */ (function () {
    function request(enquiry) {
        this.enquiry = enquiry;
    }
    return request;
}());
//MATCHING ENQUIRY AND AVAILABLE PETS
var matchData = /** @class */ (function () {
    function matchData(enquiry, petAvailable) {
        this.petAvailable = petAvailable;
        this.result = [];
        this.enquiry = enquiry;
        this.missingElements = [];
        this.petStatus = [];
    }
    matchData.prototype.compare = function (unavailable) {
        var _this = this;
        this.unavailable = unavailable;
        var _loop_1 = function (i) {
            if ((this_1.petAvailable.filter(function (ele) { return (ele === _this.enquiry[i]); })).length === 0) {
                this_1.missingElements.push(this_1.enquiry[i]);
            }
        };
        var this_1 = this;
        for (var i = 0; i < (this.enquiry).length; i++) {
            _loop_1(i);
        }
        return (this.missingElements);
    };
    matchData.prototype.petStatusCheck = function () {
        for (var i = 0; i < (this.enquiry).length; i++) {
            for (var k = 0; k < this.unavailable.length; k++) {
                for (var l = 0; l < this.petAvailable.length; l++) {
                    if (this.enquiry[i] === unavailable[k] && this.enquiry[i] === this.petAvailable[l]) {
                        this.petStatus.push(this.enquiry[i] + " - NOT AVAILABLE");
                    }
                    else if (this.enquiry[i] !== unavailable[k] && this.enquiry[i] === this.petAvailable[l]) {
                        this.petStatus.push(this.enquiry[i] + " - AVAILABLE");
                    }
                }
            }
        }
        var chars = this.petStatus;
        var uniqueChars = chars.filter(function (c, index) {
            return chars.indexOf(c) === index;
        });
        return (uniqueChars);
    };
    return matchData;
}());
//PETS AVAILABLE INPUT
var petGroup1 = new availability([dog, cat, rabbit, Hamster, GoldFish, parrot]);
//LIST OF PET NAMES
var petAvailable = petGroup1.collection();
//1.COUNT OF PET STOCK LIST
var petStockList = petGroup1.petStock();
console.log(petStockList);
//UNAVAILABLE
var unavailable = petGroup1.unAvail();
//ENQUIRY INPUT
var enquiry = [animalWord.A, animalWord.E, animalWord.F, 'fda'];
var petEnquiry = new request(enquiry);
//2.MATCHING DATA
var matching = new matchData(enquiry, petAvailable);
var enquiryResult = matching.compare(unavailable);
if (enquiryResult.length > 1) {
    console.log(enquiryResult.length + " incoming requests unmatched !!!!");
}
else {
    console.log(enquiryResult.length + " incoming request unmatched !!!!");
}
//3.AVAILABLE OR NOT
console.log(matching.petStatusCheck());
