import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers'; 

export async function POST(request: NextRequest) {

    const json = await request.json();

    if(json) {
        console.log(json);
    }
    
    return NextResponse.json({url: request.nextUrl})
}