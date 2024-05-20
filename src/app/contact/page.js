import React from 'react'
import Script from 'next/script'
const Contact = () => {

  return (
    <div>
      <Script>
        {` alret("Welcome to the contact page")`}
      </Script>
      I am contact
    </div>
  )
}

export default Contact


export const metadata = {
  title: 'Contact - facebook.com',
  description: 'This is a page where you can contact facebook.',
}