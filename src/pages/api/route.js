import { NextResponse } from "next/server";

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

