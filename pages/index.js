import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function App() {
  const [adviceID, setAdviceID] = useState('Loading...')
  const [adviceMSG, setAdviceMSG] = useState('Loading...')

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setAdviceID(data.slip.id)
        setAdviceMSG(data.slip.advice)
      })
  }, [])

  return (
    <div className='bg-[hsl(218,23%,16%)] text-white w-screen h-screen flex flex-col items-center justify-center'>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/images/favicons/favicon-32x32.png" type="image/x-icon" />
        <title>Frontend Mentor | Advice Generator App</title>
      </Head>

      <main className='bg-[hsl(217,19%,24%)] rounded-xl sm:p-10 p-10 px-5 flex flex-col text-center items-center justify-center sm:w-[520px] w-[300px] relative'>
        <span className='text-[hsl(150,100%,66%)] uppercase tracking-[0.4em] text-[0.8rem] font-semibold'>Advice #{`${adviceID}`}</span>
        <h1 className='sm:text-[28px] text-[21px] text-[hsl(193,38%,86%)] font-bold py-5 sm:leading-10'>&ldquo;{`${adviceMSG}`}&rdquo;</h1>

        <div className='sm:py-5 py-0'>
          <Image
            src='/images/project/pattern-divider-desktop.svg'
            width={444}
            height={16}
            alt='#'
          ></Image>
        </div>

        <div
          className='bg-[hsl(150,100%,66%)] flex flex-col items-center justify-center sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] rounded-full absolute -bottom-7 hover:cursor-pointer hover:shadow-[0px_0px_30px_2px] hover:shadow-[hsl(150,100%,66%)]'
          onClick={() => {
            fetch('https://api.adviceslip.com/advice')
              .then((res) => res.json())
              .then((data) => {
                setAdviceID(data.slip.id)
                setAdviceMSG(data.slip.advice)
              })
          }}
        >
          <Image
            src='/images/project/icon-dice.svg'
            width={24}
            height={24}
            alt='#'
          ></Image>
        </div>
      </main>

      <footer className='absolute bottom-0 text-center text-xs mb-4'>
        <p>Challenge by
          <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            <a className='hover:underline hover:drop-shadow-[0px_0px_5px] hover:text-[hsl(150,100%,66%)]'> Frontend Mentor</a>
          </Link>.
        </p>

        <p>Coded by
          <Link href="https://github.com/GugaS1lva" target="_blank">
            <a className='hover:underline hover:drop-shadow-[0px_0px_5px] hover:text-[hsl(150,100%,66%)]'> Gustavo Silva</a>
          </Link>.
        </p>
      </footer>
    </div>
  )
}