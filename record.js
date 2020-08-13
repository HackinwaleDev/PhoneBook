class Record{
  constructor(name, phone, email){    
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
  
  set cName(value){
    this.name = value;
  }

  get cName(){
    return this.name;
  }

  set cPhone(value){
    this.phone = value;
  }

  get cPhone(){
    return this.phone;
  }

  set cEmail(value){
    this.email = value;
  }

  get cEmail(){
    return this.email;
  }


}//end Record