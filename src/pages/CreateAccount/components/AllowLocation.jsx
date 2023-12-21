import Container from './Container'

import LocationPin from '../../../assets/location.png';

const AllowLocation = () => {
    return (
        <Container>
            <div className='flex justify-center items-center gap-5 flex-col'>
                <div className='w-[122px] h-[122px]'>
                    <img src={LocationPin} alt="map pin" className='max-w-[100%]' />
                </div>
                <div>
                    <h3 className='font-ui-semi text-[24px] text-[##0D0033] text-center'>We will need access to your location</h3>
                    <p className='font-ui-regular text-center text-[16px] text-body-text mt-2'>You need to enable location inorder to use Swiftsettle</p>
                </div>
                <div className='sm:absolute sm:bottom-[10vh] sm:w-full px-5'>
                    <button type='submit' className='bg-primary px-[42px]  sm:w-full py-[21px] rounded-[200000px] font-ui-semi text-[14px] text-white'>Allow location access</button>
                </div>
            </div>
        </Container>
    )
}

export default AllowLocation