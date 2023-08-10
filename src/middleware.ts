import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
const path= request.nextUrl.pathname
const isPublicPath= path ===
  
}
  export const config={
matcher: [
    '/',
    '/list-detail-page'
]
  
}