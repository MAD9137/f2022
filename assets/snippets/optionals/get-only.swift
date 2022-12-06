// Create an optional variable
var myNum: Int? //= 25  // Uncomment to set optional

/* Make a Get-Only variable that returns a 'safe' value for the above
optional if it is nil, otherwise return the unwrapped optional value */
var currentNumber: Int {
    guard myNum != nil else { return 0 }
    return myNum!
}

// You can access the current Get-Only variable like a normal variable
var e = currentNumber

// But you can not set its value directly 
// currentNumber = 34