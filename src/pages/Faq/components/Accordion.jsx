import { useState } from 'react';

// ICONS
import { IoMdArrowDropdownCircle, IoMdArrowDropup } from 'react-icons/io'

const Accordion = ({ question, answer }) => {
    const [dropDown, setDropDown] = useState(false)

    const handleDropDown = () => {
        setDropDown(false)
    }

    return (
        <div className='transition-all duration-500'>
            {!dropDown && <div className='flex justify-between items-center border-border border-ui-border w-full px-[20px] py-[15px] rounded-[16px]' onClick={() => setDropDown(true)}>
                <h3 className='text-primary font-ui-semi text-[16px]'>{question}</h3>
                <IoMdArrowDropdownCircle size={30} color='#6E3EFF' />
            </div>}
            {dropDown && <div className={`bg-primary px-[20px] py-[15px] rounded-[16px]`}>
                <div className='flex justify-between mb-[17px]' onClick={handleDropDown}>
                    <h5 className='font-ui-semi text-[16px] text-white'>{question}</h5>
                    <div className='bg-white h-[25px] w-[25px] leading-[25px] text-center rounded-full'>
                        <IoMdArrowDropup color='#6E3EFF' size={24} />
                    </div>
                </div>
                <p className='font-ui-regular text-white text-[16px]'>{answer}</p>
            </div>}
        </div>
    )
}

export default Accordion;