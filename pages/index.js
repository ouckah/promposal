import Image from 'next/image'
import CommentedImage from '../components/CommentedImage'

export default function Home() 
{
  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-8xl font-bold text-white uppercase drop-shadow-lg">Hi Beautiful</h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/marina1.jpg' text="wow so pretty"/>
        <CommentedImage src='/marina2.jpg' text="omg we're so cute"/>
        <CommentedImage src='/marina3.jpg' text="we should kiss?"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So I heard...</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>You Need</h1>
          <img src='https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png' width={600}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>Someone For</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-6xl uppercase">prom</h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So...</h1>
      </div>
    
    </>
  )
}
