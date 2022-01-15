import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-300 p-10">
        <h1 className="text-blue-800 text-3xl font-bold text-center">Hello NextJs With TW</h1>
      </main>

      <footer className="bg-red-100 p-10">
        <p className="text-red-600 text-center">Footer</p>
      </footer>
    </div>
  )
}
