import { BsMailboxFlag } from 'react-icons/bs';
import Form from '@/components/Form';

export default function ContactPage() {
    return (
        <main className='flex min-h-screen flex-col items-center space-y-10  py-10'>
            <h1 className='text-4xl'>Contact me</h1>
            <div className='flex flex-col w-full'>
                <div className='text-6xl w-fit m-auto'>
                    <BsMailboxFlag />
                </div>
                <div className='w-4/5 m-auto'>
                    <Form />
                </div>
            </div>
        </main>
    );
}
