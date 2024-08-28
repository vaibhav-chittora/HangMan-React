import image1 from '../assets/Images/1.svg'
import image2 from '../assets/Images/2.svg'
import image3 from '../assets/Images/3.svg'
import image4 from '../assets/Images/4.svg'
import image5 from '../assets/Images/5.svg'
import image6 from '../assets/Images/6.svg'
import image7 from '../assets/Images/7.svg'
import image8 from '../assets/Images/8.svg'

function Hangman({ step: chances }) {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8]

    return (
        <div className='w-[300px] h-[300px]'>
            <img src={chances >= images.length ? images[images.length - 1] : images[chances]} />
        </div>
    )
}

export default Hangman