const WhyUsCard = ({ icon, title, body }) => {
    return (
        <div className='max-w-[385px] p-[20px] rounded-[20px] border-ui-border self-stretch md:max-w-full'>
            <div className='w-[46.67px] h-[45px]'>
                <img src={icon} alt="icon" className='bg-cover w-full h-full object-contain' />
            </div>
            <h3 className='font-ui-semi text-[20px] my-[10px]'>{title}</h3>
            <p className='font-ui-regular text-left text-[16.5px] text-body-text'>{body}</p>
        </div>
    )
}

export default WhyUsCard;