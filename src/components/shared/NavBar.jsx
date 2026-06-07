'use client';

import { authClient, useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
   const { data: session, isPending } = useSession()
  // console.log("Session data in Navbar:", session, "Is pending:", isPending);
  const user= session?.user;
  const router = useRouter()
   
  // console.log(user, 'infoooooooooooooooooo')  

  const handleSignOut = async ()=>{
    await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login"); // redirect to login page
    },
  },
  })}

  const navLinks = [
    { name: 'Browse Jobs', href: '/jobs' },
    { name: 'Company', href: '/company' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Hireloop Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          <div className="h-5 w-px bg-white/20" />

         {
          user ?
           <>
          
          
             <p className='font-bold text-red-500'>
              {user.name}
             </p> 
             <Button 
             onClick={handleSignOut}
             variant='danger'>Sign Out</Button>
            </> 
           
           : <>
           <Link
            href="/auth/signin"
            className="text-sm text-violet-400 transition hover:text-violet-300"
          >
            Sign In
          </Link>

          <Link
            href="/auth/signup"
            className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Get Started
          </Link></>
         }
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <HiOutlineX className="h-7 w-7 text-white" />
          ) : (
            <HiOutlineMenu className="h-7 w-7 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? 'mt-3 max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <hr className="border-white/10" />

            {
              user? <>  <p className='font-bold text-red-500'>
              {user.name}
             </p> 
             <Button 
             onClick={handleSignOut}
             variant='danger'>Sign Out</Button>
            </> 
           
                
                
                : <> 
                <div className='flex gap-2'>
              <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-violet-400"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-3 text-center font-medium text-white"
            >
              Get Started
            </Link>
            </div></>
            }
          </div>
        </div>
      </div>
    </header>
  );
}