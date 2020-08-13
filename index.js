// Set event listener for the submit button
document.getElementById("submit").addEventListener("click", 
  function(){
    init();
  }
);

function displayContacts(contacts){
  let container = document.getElementById("contacts");
  contacts.forEach(element => {
    let record = element[Object.keys(element)];

    console.log(`
      <td>${record.name}</td><td>${record.phone}</td><td>${record.email}</td>
    `);

  });
}
function init() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  
  let myPhonebook = new PhoneBook();
  let myRecord = new Record(name, phone, email);

  myPhonebook.createContact(myRecord);

  displayContacts(myPhonebook.getContacts())
  // let myContacts = myPhonebook.getContacts();
}
