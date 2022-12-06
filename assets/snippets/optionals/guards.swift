// Create an optional strings and set it to a value for the guard statement to work
var emailAddress: String? //= "a@b.com" // Uncomment to see change

// Create a function to use the guard on that takes an optional string as its parameter
func checkEmail(email: String?) -> String {
    // Create a guard statement that hope will succeed, and pass this guard
    guard email != nil else {
        // if the statement fails the guard will return out of the function prematurely
        return "Error: A valid email must be entered."
    }
    // If the values in the statement passes the guard the code after will execute
    print("Email accepted")
    return "The email address \(emailAddress!) has been accepted."
}

print(checkEmail(email: emailAddress))