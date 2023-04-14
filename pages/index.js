import Image from 'next/image'

export default function Home() 
{
  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-8xl font-bold text-white uppercase drop-shadow-lg">Hi Beautiful</h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <Image className="p-5" src='/marina1.jpg' width="250" height="200" />
        <Image className="p-5" src='/marina2.jpg' width="250" height="200" />
        <Image className="p-5" src='/marina3.jpg' width="250" height="200" />
      </div>

      <div className="text-center w-full h-64 bg-pink-200">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So I heard...</h1>
      </div>

    
    </>
  )
}
