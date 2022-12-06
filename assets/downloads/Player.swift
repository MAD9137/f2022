
//
//  Created by Tony Davidson on 2021-10-11.
//

import Foundation


//  Player.swift



// Note: we will use the didSet Property Observer in this example


// MARK: Player superclass

class Player {
    // MARK: constants
    let maxScore: UInt = 10000000
    let minScore: UInt = 0
    let maxHealth: UInt8 = 100
    let minHealth: UInt8 = 0
    let maxLevel: UInt8 = 50
    let minLevel: UInt8 = 1
    let maxExperience: Float = 100.0
    let minExperience: Float = 0.0
    let HAS_AVATAR = "Yes"
    let NO_AVATAR = "No"
    
    
    // MARK: properties
    
    var avatar: Bool = false
    
    private var validPlayerTypes = [String]() // empty array
    
    var name: String = "UNKNOWN"{
        
        didSet {
            if name.isEmpty  {
                print("Name must contain a least 1 character")
                name = oldValue
            }
        }
    }

    var type: String = "Warrior"{
        didSet{
            let formattedType = type.lowercased().capitalized
            if validPlayerTypes.contains(formattedType) {
                type = formattedType
            } else {
                print("Player Type \(type) is not valid")
                type = oldValue
            }
        }
    }
    
    var score: UInt = 0 {
        didSet {
            if (minScore...maxScore).contains( score) {
                print("Score value \(score) is in range")
            } else {
                fatalError("Score value \(score) out of range")
            }
        }
    }
    
    var health: UInt8 = 100  {
        didSet {
            if !(minHealth...maxHealth ~= health) { // ~= is checks to see if a value is in a range
                print("Health value \(health) out of range")
                health = oldValue
            }
        }
    }
       
    var level: UInt8 = 1 {
        didSet{
            if !(minLevel...maxLevel ~= level) {
                print("Level value \(level) out of range")
                level = oldValue
            }
        }
    }
    
    var experience: Float = 0.0 {
        didSet {
            if !(minExperience...maxExperience).contains(experience) {
                print("Experience value \(experience) out of range")
                experience = oldValue
            }
        }
    }
    

    
    // MARK:- methods
    
    private func setPlayerTypes(){
        validPlayerTypes.append("Warrior")
        validPlayerTypes.append("Healer")
        validPlayerTypes.append("Wizard")
        validPlayerTypes.append("Rogue")
        validPlayerTypes.append("Viking")
        validPlayerTypes.append("Rebel")
        validPlayerTypes.append("Mercenary")
        validPlayerTypes.append("Royal")
    }
    
    func output() {
        let description = """
            Name:           \(name)
            Type:           \(type)
            Avatar:         \( avatar == true ? HAS_AVATAR : NO_AVATAR)
            Score:          \(score)
            Health:         \(health)
            Experience:     \(experience)
            Level:          \(level)
        """
        
        print(description)
    }
    
    func bonus(amount: Int){
        if ...100 ~= amount { // ~= means contains // ...100 is a one sided range which only defines one side of the range boundaries = any value up to 100
            score += UInt(Int(amount))
            print("\(amount) bonus points added: Score = \(score)")
        }
    }
    
    init(name: String = "UNKNOWN", type: String  = "Warrior", avatar: Bool = false, score: UInt = 0,
         health: UInt8 = 100, level: UInt8 = 1, experience: Float = 0.0) {
        
        setPlayerTypes()

        defer { // must defer as property observers are not called during init
        // defer will execute this code just before transferring program execution outside of the scope the statement is contained in
        // in this case after exiting the init method. Note: The properties must be initialized when they are created
            self.name = name
            self.type = type
            self.avatar = avatar
            self.score = score
            self.health = health
            self.level = level
            self.experience = experience
        }
    }
}

