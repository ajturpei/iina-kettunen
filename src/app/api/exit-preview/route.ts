import {redirect} from 'next/navigation'
import {draftMode} from 'next/headers'

export async function GET(request: Request) {
  // Disable Preview Mode by setting the cookies
  draftMode().disable()

  // Redirect to the path from the fetched post
  redirect('/')
}
