import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex flex-row justify-between p-4">
            <Image src="/logo.png" alt="logo" width={50} height={50} />

            <ul className="flex flex-row space-x-4">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#products">
                        <a>Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact-us">
                        <a>Contact us</a>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
