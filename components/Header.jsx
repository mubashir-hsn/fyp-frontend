"use client";

import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { BrainCircuit, ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header =  () => {

    const { isSignedIn } = useUser();


  return (
    <header className="fixed top-0 border-b w-full bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 z-50">
      <nav className="container mx-auto h-16 flex items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="uppercase text-2xl bg-gradient-to-l from-gray-600 via-gray-700 to-gray-800 font-extrabold text-transparent bg-clip-text"
        >
          Careerly
        </Link>

        {/* Navigation & User Controls */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            {/* Dashboard Button */}
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarIcon className="w-4 h-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/ai-chatbot" className="flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4" />
                    <span>AI Chat</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="w-4 h-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/interviews" className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Sign In Button (only if signed out) */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          {/* User Menu (only if signed in) */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                  userButtonPopoverCard: 'shadow-xl',
                  userPreviewMainIdentifier: 'font-semibold',
                },
              }}
              afterSwitchSessionUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
