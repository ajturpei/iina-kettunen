'use client'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2>Page not Found :/</h2>
      <br />
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound
