/**
 * Using the basic data structures you are familiar with, create a 
 * phone book. A typical phone book has the following properties :

    Ability to store unique phone numbers
    Get unique phone details using the phone number
    get list of phone numbers 

*/

class PhoneBook{

  constructor(){
    // this.myRecords = new Records();
  }

  createContact(record){
    let contact = {
      [record.cPhone]:record
    }
    this.logger(contact, "new contact");
    Records.addRecord(contact);
  }

  getContact(num){
    this.logger("getting contact");
    return this.myRecord.getContact(num);
  }

  getContacts(){
    const data = Records.cRecords;
    this.logger(data, "getting contacts");

    return data;
  }

  logger(msg, title){
    const debug = true;
    if(debug){
      console.log("=="+ title ||"" +"==")
      console.log(msg)
    }
  }

}
