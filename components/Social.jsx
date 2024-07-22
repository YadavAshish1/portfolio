import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
    return (
        <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
            <Link href="https://github.com/YadavAshish1" className="hover:text-primary"><GitHubLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://www.instagram.com/ashish.krishnam107?utm_source=qr&igsh=Z25uZm1rcjdpNmh0" className="hover:text-primary"><InstagramLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://www.linkedin.com/in/ashish-krishnam-yadav-437ba3190/" className="hover:text-primary"><LinkedInLogoIcon className="h-4 w-4" /></Link>
        </div>
    )
}