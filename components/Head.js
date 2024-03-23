import React from 'react'
import NextHead from 'next/head'

export default function Head({ title, desc }) {
  return (
    <NextHead>
        <title>{`${title} | HABIBI TRAVELS`}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
    </NextHead>
  )
}
