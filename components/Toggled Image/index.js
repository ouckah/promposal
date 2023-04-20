import { useState } from 'react'

const ToggledImage = ({ active, nonactive }) =>
{
    // image source toggles
    const [image, setImage] = useState(false)

    const handleOnHover = (setState) =>
    {
        setState(prevMode => !prevMode)
    }

    return (
        <>
        
        
            {
                image ? 
                <img 
                    src={active}
                    className="w-48 h-48 hover:w-60 hover:h-60 transition-all duration-200"
                    onMouseEnter={() => handleOnHover(setImage)}
                    onMouseLeave={() => handleOnHover(setImage)}
                    alt=""
                />
                :
                <img 
                    src={nonactive}
                    className="w-48 h-48 hover:w-60 hover:h-60 transition-all duration-200"
                    onMouseEnter={() => handleOnHover(setImage)}
                    onMouseLeave={() => handleOnHover(setImage)}
                    alt=""
                />
            }

        
        </>
    )
}

export default ToggledImage;