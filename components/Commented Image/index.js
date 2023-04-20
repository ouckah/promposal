import Image from 'next/image'
import { Collapse, useDisclosure } from '@chakra-ui/react'

const CommentedImage = ({ src, text }) =>
{
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
        
            <div className="flex flex-col items-center bg-pink-100 transition-all duration-300 hover:shadow-lg hover:bg-pink-200 cursor-pointer">
                <Image className="p-5" src={src} width="250" height="200" onMouseOver={onToggle} onMouseOut={onToggle} alt=''/>
                <Collapse in={isOpen}>
                    <h1 className="text-pink-400 font-bold uppercase pb-2">{text}</h1>
                </Collapse>
            </div>
        
        </>
    )
}

export default CommentedImage;