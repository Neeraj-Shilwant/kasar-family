import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      
      <Head />
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
      <link href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css" rel="stylesheet"></link>
      <meta charSet="utf-8" />
      

      <body>
        <Main />
        <NextScript />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" async/>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" async/>
      </body>
    </Html>
  )
}
