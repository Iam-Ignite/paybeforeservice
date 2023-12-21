/** @format */

// eslint-disable-next-line react/prop-types
const ContinueBtn = ( {status, setStep} ) => {

    const handleNext = () => {
        console.log(status);
        if(status){

        setStep(prev => prev + 1)
        }
    }
	
	return (
		<div className='sm:absolute sm:bottom-[8vh] sm:w-full left-0 px-5 self-center my-5'>
			<button onClick={() => handleNext}
				className='bg-primary px-[64px] sm:px-[0px] py-[21px] w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'
				>
				Continue
			</button>
		</div>
	);
};

export default ContinueBtn;
