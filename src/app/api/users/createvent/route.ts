import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect()



export async function POST(request: NextRequest, response: NextResponse, masa: any) {


    const reqBody = await request.json()
    const { eventDetails, eventName, respOrg, targetGroup } = reqBody

    //check if user already exists
    const user = await User.findOne({ eventName })

    if (user) {
        return NextResponse.json({ error: "Event already exists" }, { status: 400 })
    }

    const newUser = new User({
        eventDetails,
        eventName,
        respOrg,
        targetGroup
    })

    const savedUser = await newUser.save()
    console.log(savedUser);





    //send verification email

    return NextResponse.json({
        message: "User created successfully",
        success: true,
        savedUser
    })
}

export async function GET(){
    const allData= await User.find();
    
    return NextResponse.json({
        message: "All data is here.",
        success: true,
        allData
    }
    )
    
}
