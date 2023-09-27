// Declaring Enums
enum Color{
    Red,
    Green,
    Blue
}

// Accessing Enum Members
const favoriteColor = Color.Blue;
console.log(favoriteColor);

// Enum Values
const colorName: string = Color[1];
const colorValue: number = Color.Green;
console.log(`Color ${colorName} has ${colorValue}'st value`);

// Custom value and Non-Numeric Enums
enum Fruit{
    Apple = 'apple',
    Banana = 'banana',
    Orange = 'orange'
}

// Using Enums in Real Projects (Good Practice):
enum UserRole{
    Admin = 'admin',
    User = 'user',
    Moderator = 'moderator'
}

function checkPermission(userRole:UserRole){
    if(userRole === UserRole.Admin){
        console.log("Admin priviliges granted.");
    } else if(userRole === UserRole.User){
        console.log("Regular user priviliges granted.");
    } else if (userRole === UserRole.Moderator) {
        console.log("Moderator privileges granted.");
    } else {    
        console.log("Unknown user role");
    }
}

const userRole = UserRole.Admin;
checkPermission(userRole);