// src/components/layout/Header.
import { SiteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Typography } from '@/components/ui/Typography';
import Image from 'next/image';
import { AuthButton } from '@/features/auth/AuthButton';

export function Header() {
    return (
        <header className='sticky top-0 z-40 w-full border-b bg-background'>
            <div className='flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
                {/* container dans la div ci-dessus met la max-width à 1536px au max */}
                <div className='flex items-center gap-6 md:gap-10'>
                    <Image
                        src='/images/logo.svg'
                        width={50}
                        height={35}
                        alt='app logo'
                    />
                    <Typography variant='h3' as={Link} href='/'>
                        {SiteConfig.title}
                    </Typography>
                </div>

                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav className='flex items-center space-x-1'>
                        <AuthButton />
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
