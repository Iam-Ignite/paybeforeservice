
import Container from './Container'
import ContinueBtn from './ContinueBtn'


// eslint-disable-next-line react/prop-types
const EnterPhoneNumber = ( ) => {
    return (
        <Container>
            <h3 className='font-ui-semi text-[24px] text-[##0D0033] mb-5 text-center sm:text-[20px]'>Enter your mobile number</h3>
            <form action="#">
                <div className='flex h-full w-full border-border border-ui-border rounded-[20000px] bg-[##F7F5FF] font-ui-semi text-[14px] text-[#555555]'>
                    <h4 className='text-center border-r-ui-border bg-base border-border font-ui-regular px-5 py-[20px] rounded-l-[20000px]'>+234</h4>
                    <input type="tel" name="phone" className='flex-1 bg-base h-full px-5 py-[24px] w-full overflow-hidden rounded-r-[20000px] outline-primary' placeholder='Enter phone number' />
                </div>
            </form>
            <p className='text-center font-ui-regular text-[14px] text-body-text my-5'>When you press 'continue,' Swiftsettle will send you a text message with a verification code. This might cost you some money for messaging and data. You can use the verified phone number to log in</p>
            <ContinueBtn />
        </Container>
    )
}

export default EnterPhoneNumber