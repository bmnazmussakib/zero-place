import { Home, Mail, User, Wrench } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

function MobileNavbar({ }: Props) {
    return (
        <>
            <div className="fixed bottom-5 left-0 right-0 z-50 w-[90%] mx-auto rounded-full  bg-footer-bg md:hidden">
                <div className="flex h-16 items-center justify-around px-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                        <Home className="h-5 w-5" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <Link
                        href="/services"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                        <Wrench className="h-5 w-5" />
                        <span className="sr-only">Services</span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                        <img src="/images/logo-rouned.png" className='w-14' alt="logo" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <Link
                        href="/about"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                        <User className="h-5 w-5" />
                        <span className="sr-only">About</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Contact</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar