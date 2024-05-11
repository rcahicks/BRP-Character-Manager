class Character {
    constructor(name, gender, culture, handedness, height, weight, profession, wealth, godsReligion, distinctiveFeatures, move, description, age, characteristics, hitPoints, majorWound, dead, skills) {
        this.name = name;
        this.gender = gender;
        this.culture = culture;
        this.handedness = handedness;
        this.height = height;
        this.weight = weight;
        this.profession = profession;
        this.wealth = wealth;
        this.godsReligion = godsReligion;
        this.distinctiveFeatures = distinctiveFeatures;
        this.move = move;
        this.description = description;
        this.age = age;
        this.characteristics = characteristics;
        this.hitPoints = hitPoints;
        this.majorWound = majorWound;
        this.dead = dead;
        this.skills = skills;
    }
    // getters
    // setters
}

// so i guess the strategy here is to make a class that has all the things that constitute a character.
// i'm thinking of using more classes to represent skills and characteristics and then instantiating the character's skills/characteristics as a new object of the relevant type.
class Skills {
    constructor() {
        this.skillList = {
            communication: {
                bargain: 5,
                command: 5,
                disguise: 1,
                etiquette: 5,
                fastTalk: 5,
                language: false,
                perform: 5,
                persuade: 15,
                status: false,
                teach: 10,
            },
            manipulation: {
                art: 5,
                craft: 5,
                demolition: 1,
                fineManipulation: 5,
                heavyMachine: 1,
                repair: 15,
                sleightOfHand: 5,
            },
            mental: {
                appraise: 15,
                firstAid: 30,
                gaming: false,
                knowledge: false,
                literacy: false,
                medicine: 5,
                psychotherapy: false,
                science: 1,
                strategy: 1,
                technical: 5,
            },
            perception: {
                insight: 5,
                listen: 25,
                navigate: 10,
                research: 25,
                sense: 10,
                spot: 25,
                track: 10,
            },
            physical: {
                climb: 40,
                drive: false,
                fly: false,
                hide: 10,
                jump: 25,
                pilot: 1,
                projection: false,
                ride: 5,
                stealth: 10,
                swim: 25,
                throw: 25,
            },
            combat: {
                dodge: false,
                martialArts: 1,
                // weapon types might go here, or they may go in the weapons section
            }
        }
    }
    getLanguage() {}
}

class Dice {
    constructor() {
    }
    rollD2() {
        return Math.ceil(Math.random() * 2);
    }

    rollD3() {
        return Math.ceil(Math.random() * 3);
    }

    rollD4() {
        return Math.ceil(Math.random() * 4)
    }

    rollD6() {
        return Math.ceil(Math.random() * 6);
    }

    rollD8() {
        return Math.ceil(Math.random() * 8);
    }

    rollD10() {
        return Math.ceil(Math.random() * 10);
    }

    rollD12() {
        return Math.ceil(Math.random() * 12);
    }

    rollD20() {
        return Math.ceil(Math.random() * 20);
    }

    rollD100() {
        return Math.ceil(Math.random() * 100);
    }

    roll3D6() {
        let result = 0;
        for(let i = 0; i < 3; i++) {
            result += this.roll3D6();
        }
        return result;
    }

    roll2D6Plus6() {
        let result = 0;
        for(let i = 0; i < 2; i++) {
            result += this.rollD6();
        }
        return result + 6;
    }
}

let dice = new Dice();
let skill = new Skills();