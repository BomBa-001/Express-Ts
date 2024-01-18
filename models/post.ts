
class post {

  // @desc   _id:number   ==> is PrimaryKey
  // @access private
  _id:number;
  _created_at:string;
  _updated_at:string;
  
  // @desc   _id:number
  // @access public 
  constructor(public title: string,public body: string) {
    this._id = Date.now();

    const ND = new Date().toLocaleString(/* 'ar-eg' */'en-us',{year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: true, minute:'2-digit', second:'2-digit'})
    this._created_at = ND;
    this._updated_at = ND;
  }
}

export default post;