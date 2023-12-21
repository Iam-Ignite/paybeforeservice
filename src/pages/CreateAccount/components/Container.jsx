const Container = ({ children }) => {
    return (
        <div className='px-[50px]  py-[50px] border-border border-ui-border flex flex-col max-w-[550px] rounded-[20px] mx-auto sm:border-none sm:w-full sm:px-0 sm:py-0'>
            {children}
        </div>
    )
}

export default Container