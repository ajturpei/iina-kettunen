import {NextResponse} from 'next/server'
import {redirect} from 'next/navigation'
import {draftMode} from 'next/headers'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const secret = searchParams.get('secret')

  // eslint-disable-next-line no-undef
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.json({message: 'Invalid token', status: 401})
  }

  // Enable Preview Mode by setting the cookies
  draftMode().enable()

  // Redirect to the path from the fetched post
  redirect('/')
}
