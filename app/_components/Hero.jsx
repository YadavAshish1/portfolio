import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='relative grid place-content-center py-20 px-6'>
            <div className='md:max-w-2xl max-w-md text-center grid gap-1'>
                <h1 className='md:text-4xl lg:text-5xl text-3xl font-bold'>
                    Hi I am <span className='underline underline-offset-4 text-primary'>Ashish Yadav</span> a Full Stack Web Developer<span className='text-primary'>.</span>
                </h1>
                <p className='text-[0.8rem] max-w-md mx-auto'>
                A comprehensive showcase of my full-stack development expertise, highlighting my extensive experience and projects, and demonstrating my proficiency and dedication to coding<span className='text-primary'>.</span>
                </p>
            </div>
            <div className='flex items-center justify-center gap-3 mt-5'>
                <Button asChild variant="outline">
                    <Link href="/">Explore</Link>
                </Button>
                <Button asChild className="flex gap-1 items-center justify-center">
                    <Link href="https://github.com/YadavAshish1">My Github</Link>
                </Button>
            </div>
        </section>
    )
}