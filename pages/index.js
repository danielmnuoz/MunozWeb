import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill}  from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineDownload, AiFillMail} from 'react-icons/ai';
import profilepic from '../public/memoji3.png'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Munoz-lara Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/memoji3.png" />
      </Head>
      <main className='bg-beige px-10'>
        <section className = "min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='font-helveticaNeue text-xl'>DML.</h1>
            <a className='bg-taupe flex justify-center items-center text-white px-4 py-2 rounded-md' href="/DanielMunozResume.pdf" target='_blank'>
                <p>Resume</p>
                <i className='pl-1'><AiOutlineDownload /></i>
            </a>
          </nav>
          <div className ="text-center p-10">
            <h2 className='text-5xl py-2 text-charcoal font-helveticaNeue'>Daniel Munoz-Lara</h2>
            <h3 className='text-2xl py-2 font-helveticaNeue'>Student and Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>This website is currently under development.<br />Here are a few means of contact, feel free to reach out!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-taupe'>
            <a className='hover:scale-125' href = "https://www.instagram.com/danielmnuoz/"><AiFillInstagram /></a>
            <a className='hover:scale-125' href="https://www.linkedin.com/in/danielmnuoz/"><AiFillLinkedin /></a>
            <a className='hover:scale-125' href='https://github.com/danielmnuoz'><AiFillGithub/></a>
            <a className='hover:scale-125' href='mailto: dmnuozl@gmail.com'> <AiFillMail /></a>
          </div>
          <div className='relative mx-auto bg-charcoal rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={profilepic} layout="fill" objectFit="cover"/>
          </div>
        </section>
        {/* <section>
          <h3 className='text-3xl py-1'>Portfolio</h3>
        </section> */}
      </main>
    </div>
  )
}
