// The format of a for loop is like this
for c in 0 ..< 8 {
    print(c)
}

// Or if you want to include the final value
for c in 0 ... 8 {
    print(c)
}

// If you wish to iterate in reverse order
for c in (0 ... 8).reversed() {
    print(c)
}

// If you wish to repeat some action, but don't need the iterated number
for _ in 0 ..< 8 {
    print("repeat task")
}

// Using stride lets you iterate through a set in more complex ways
for c in stride(from: 0, to: 100, by: 10) {
    print(c)
}

// For-In loops let you iterate through an array like this
var loopArray = [3, 5, 8, 13, 19, 26]
for v in loopArray {
    print (v)
}

// For-In loops let you iterate through a dictionary like this
var loopDictionary = ["cars": 14, "vans": 7, "trucks": 4]
for (key, value) in loopDictionary {
    print("\(key) = \(value)")
}
