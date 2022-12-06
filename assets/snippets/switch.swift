// Simple switch statement
var areaCode: Int = 613

switch areaCode {
    case: 819:
        print("Gatineau")
    case: 613:
        print("Ottawa")
    case: 416:
        print("Toronto")
    default:
        print("Other location")
    
}


// A switch statement that check for multiple clauses per case statement
var currentSemester = 3

switch currentSemester {
    case 1,2:
        print("First year")
    case 3,4:
        print("Second year")
    case 5,6:
        print("Third year")
    default:
        print("Incorect semester value")
}


// A switch statement that uses ranges of numbers in a case statement
var age: Int = 189

switch age{
    case 1...15:
        print("You are too young to drive in Ontario")
    case 16...80:
        print("You are able to drive in Ontario")
    default:
        print("You must take a vision test every two years")
}