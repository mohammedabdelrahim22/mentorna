import Line from '../../assets/line.svg'
function CeoNav() {
    return (
        <div className='other_header'>
            <div className="ce_Nav top w-100 min-h-[8vh] pt-[20px]  pb-[20px] p-[10px] bg-[#ececfe]">
                <div className="container_div flex items-center h-[100%]">
                    <div className="sm:flex  items-center justify-center w-[100%] flex-wrap text-center">
                        <div className="first_div text-center">
                            <span className="w-[30px] h-[20px] bg-[#43bb88] text-white p-[5px] rounded-[3px]">
                                Free
                            </span>
                        </div>
                        <div className="second_div">
                            <h1 className="text-bold text-[22px] ml-[10px] text-black">
                                Multichannel Outreach Masterclass: Book meetings with 30%+ of your cold prospects.
                            </h1>
                        </div>
                        <div className="third_div flex items-center justify-center">
                            <div className="image_section ml-4">
                                <a href="#" className="text-[20px] text-bold ">ACCESS NOW</a>
                                <img src={Line} className='text-center d-inline-block w-[100%] text-[#3737ac]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='other_nav flex  p-[20px] justify-between items-center pt-[90px]'>
                <div className='logo_section'>
                    <h1 className='text-[70px] text-bold text-black'>G.</h1>
                </div>
                <div className='Links_section'>
                    <button className="p-[10px] bg-[#4770ff] text-[20px] w-[130px] h-[60px] rounded-[17px] text-white text-bold flex justify-center items-center">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default CeoNav