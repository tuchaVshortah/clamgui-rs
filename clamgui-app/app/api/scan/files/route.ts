import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers'; 

export async function POST(request: NextRequest) {

    const body = await request.body;
    console.log(body);
    
    return NextResponse.json({url: request.nextUrl})
}