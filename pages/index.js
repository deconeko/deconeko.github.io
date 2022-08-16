import Link from 'next/link'
import Head from 'next/head'

const Index = () => {
  return (
    <>
    <Head>
      <title>deconeko Portfolio</title>
    </Head>
      <section>Hello!!</section>
      <Link href="/linkSample">
        <a>link Sample Page</a>
      </Link>
    </>
  )
}

export default Index
