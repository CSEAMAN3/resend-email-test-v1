import { NextResponse } from "next/server"

NextResponse

export async function GET(request: Request){
  return NextResponse.json('Hello, Next.js!')
}