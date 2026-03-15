import { CircleDollarSign, Home, Mail, Package, User, Wrench } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

function MobileNavbar({ }: Props) {
    return (
        <>
            <div className="fixed bottom-5 left-0 right-0 z-50 w-[90%] mx-auto rounded-full  bg-footer-bg md:hidden">
                <div className="flex h-16 items-center justify-around px-4">
                    
                    <Link
                        href="/services"
                        className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-400 hover:text-primary"
                    >
                        <Wrench className="h-5 w-5" />
                        <span className="sr-only">Services</span>
                    </Link>
                    <Link
                        href="/portfolio"
                        className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-400 hover:text-primary"
                    >
                        <Package className="h-5 w-5" />
                        <span className="sr-only">Portfolio</span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-400 hover:text-primary"
                    >
                        <img src="/images/logo-rouned.png" className='w-14' alt="logo" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <Link
                        href="/pricing"
                        className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-400 hover:text-primary"
                    >
                        <CircleDollarSign className="h-5 w-5" />
                        <span className="sr-only">pricing</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-400 hover:text-primary"
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