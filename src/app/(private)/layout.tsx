import type { Metadata } from 'next';
import Link from 'next/link';
import { MdAttachMoney } from 'react-icons/md';

// Component
import Navbar from './components/Navbar';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Fiona',
  description: 'Manejo de finanzas personales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='grid grid-rows-[80px_1fr] lg:grid-rows-none lg:grid-cols-[200px_1fr] h-screen'>
        <Header />
        <Navbar />
        <main className='pt-8 px-4 lg:px-16 2xl:w-[1440px] 2xl:mx-auto flex flex-col justify-between'>
          {children}
          <div className='h-[35px] inset-x-0 text-center mt-4'>
            <p className='text-sm text-gray-700'>© Copyright 2023</p>
          </div>
        </main>
        <Link href={'/moves'} className="absolute">
          <div id="fiona-btn_movements" className="fixed bottom-4 right-2 h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] bg-primary text-white rounded-full grid items-center justify-center">
            <MdAttachMoney className="h-[20px] w-[20px]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
