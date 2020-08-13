class Records{
  constructor(){
  }

  static records = [];

  static addRecord(contact){
    this.records.push(contact)

    // console.log(this.records);
  }

  static get cRecords(){
    return this.records;
  }

}