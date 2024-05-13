import Link from 'next/link'

const Index = () => {
    return (
        <div className='w-full h-screen m-auto bg-black flex items-center flex-col justify-center'>
            <h1 className='text-white text-3xl'>Not Found !</h1>
            <Link href={"/Cars"} className='text-blue-700 underline'>back to Cars Page</Link>
        </div>
    );
}

export default Index;
