function validateForm() {
    // Part A
    const data = [
        document.forms["Form"]["tshirt-text"].value,
        document.forms["Form"]["size"].value,
        document.forms["Form"]["volume"].value,
        document.forms["Form"]["addDetails"].value,
        document.forms["Form"]["date"].value,
        document.forms["Form"]["fname"].value,
        document.forms["Form"]["lname"].value,
        document.forms["Form"]["address"].value,
        document.forms["Form"]["Contact"].value,
        document.forms["Form"]["email"].value,
        document.forms["Form"]["paymentMethod"].value,
        document.forms["Form"]["color"].value,
    ];

    const Receipt = `Thank you for ordering! Here's your Receipt..
  Date: ${new Date().toLocaleDateString("UK")}
  Tagline: ${data[0]}
  Size: ${data[1]}
  Quantity: ${data[2]}
  Details: ${data[3]}
  Date: ${data[4]}
  First Name: ${data[5]}
  Last Name: ${data[6]}
  Address: ${data[7]}
  Contact: ${data[8]}
  Email: ${data[9]}
  Payment Method: ${data[10]}
  Color: ${data[11]}`;
    alert(Receipt);
}
const form = document.getElementById("orderForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});