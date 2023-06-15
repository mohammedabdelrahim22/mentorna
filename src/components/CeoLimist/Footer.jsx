
function Footer() {
    return (
        <div className='ceo_footer'>
            <div className='container_div border_top_section text-center'>
                <div className="title_section mt-8">
                    <h1 className="sm:text-[50px] text-[30px] text-bold text-[#3a395e] mt-4">
                        subscribe to my newsletter
                    </h1>
                </div>
                <div className="input_section flex justify-center">
                    <form className="flex relative items-center mt-[50px] p-[20px]">
                        <input type="text" className="min-h-[84px] button_adve" placeholder="Add your email" />
                        <button type="submit" className="submit_type"></button>
                    </form>
                </div>
                <h4 className="mt-[20px] copyright_se">copyright 2021 © guillaume moubeche</h4>
            </div>
        </div>
    )
}

export default Footer