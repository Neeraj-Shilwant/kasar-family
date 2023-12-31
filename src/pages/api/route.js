import { NextResponse } from "next/server";
// import connectDB from "../lib/db";
// import infomodel from "../lib/model/kasar-data";
import mongoose ,{Schema}from "mongoose";



export default async function POST(req){
  const {newRow} = await req.body;
  const infoSchema = new Schema({
    

    Data: {
        type: Object,
        required: [true]
    }
   
  })
  const infomodel = mongoose.models.kasar ?? mongoose.model("kasar", infoSchema);

  try {
    if(mongoose.connection.readyState===0){
              await mongoose.connect("mongodb+srv://neershil67:neeraj123@kasar-family.tpdaq3b.mongodb.net/Kasar-Family?retryWrites=true&w=majority");
              console.log("DB connected");
          }
    // await connectDB();
    
    const createddata = await infomodel.create({
      Data:newRow
      });

    return NextResponse.json({
      msg:["msg sent"],
      success:true,
      data: createddata
    });
  } catch (error) {
    if(error instanceof mongoose.Error.ValidationError){
      let errorlist=[];
      for(let e in error.errors){
        errorlist.push(e.msg);
      }
      return NextResponse.json({msg:errorlist});
    }else{
      return NextResponse.json(error);
    }
    
  }
}

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     // Process a POST request
//     const { fullname} = req.body;
//     console.log("request data fetch to route :",fullname);
//   try {
//     await connectDB();
//     await infomodel.insertOne({ fullname }).then((data)=>{
//       console.log("data :",data);
//       res.status(200).json({ message: 'User added successfully' });
//     })

    
//   } catch (err) {
//     if (err instanceof mongoose.Error.ValidationError) {
//       let errorList = [];
//       for (let e in err.errors) {
//         errorList.push(err.errors[e].message);
//       }
//       console.log(errorList);
//       return NextResponse.json({ msg: errorList });
//     } else {
//       return NextResponse.json({ msg: ["Unable to send message."] });
//     }
//   }
//   } else {
//     // Handle any other HTTP method
//     console.log("Something went wrong");
//   }
// }