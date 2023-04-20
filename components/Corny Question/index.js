import ToggledImage from '../Toggled Image'

const CornyQuestion = ({ question, active, nonactive, secondary, left }) =>
{
    return (
        <>
    
            { secondary ? 
                <div className={left ? 
                    "flex flex-row-reverse justify-around items-center text-center w-full h-96 bg-pink-200 p-5" :
                    "flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5"
                }>
                    <ToggledImage 
                        nonactive={ nonactive }
                        active={ active }
                    />
                    <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>{ question }</h1>
                </div>

                :

                <div className={left ? 
                    "flex flex-row-reverse justify-around items-center text-center w-full h-96 bg-pink-50 p-5" :
                    "flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5"
                }>
                    <ToggledImage 
                        nonactive={ nonactive }
                        active={ active }
                    />
                    <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>{ question }</h1>
                </div>
            }

        </>
    )
}

export default CornyQuestion;