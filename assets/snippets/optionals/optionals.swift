/*
The following optional var called userAge will be will be bound to below. 
Uncomment the end of the following line to see the binding condition change.
*/
var userAge: Int? //= 39

// Use an if statement, checking if optional value above is nil or not
if let userAge = userAge {
    // If the variable has a valid value
    print("uaerAge has a value of: \(userAge)")
} else {
    // the optional still has a value of nil
    print("Error: userAge = nil.")
}

/*
 The following example shows binding of 3 optional strings and checks them all.
 If any of the 3 let values we try and bind to fail (return nil), the if
 statement fails. You can choose to bind to vars, too, and the names of the
 values you bind is up to you.
 */

var userName: String? = "Amber"
var userPassword: String? = "abc123"
var userEmail: String? //= "a@b.com" // Uncomment to see condition change

// Use an if statement, checking if you can access the above values in question
if let safeUserName = userName, let safeUserPassword = userPassword, let safeUserEmail = userEmail {
    // Each new bound variable was created and set to a non-nil value
    print("Account created successfuly for \(safeUserEmail). \nWelcom \(safeUserName).")
} else {
    // One of the values was nil
    print("Error: All fields must be filed out.")
}
