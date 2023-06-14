import Avatar from '../../assets/avatar.png'
function HeroSwction() {
    return (
        <div className='hero_section'>
            <div className='pl-[22px] pr-[22px]'>
                <hr className='w-[120px] h-[6px] bg-[#4770ff]' />
                <div className="flex items-center">
                    <div className="text_left">
                        <h1 className="text-bold text-[66px] text-black mt-[10px]">
                            Guillaume<br />
                            Moubeche,<br />
                            <span className="text-[#4770ff]">
                                CEO of lemlist
                            </span>
                        </h1>
                        <p className="pragraph mt-4">
                            Co-Founder and CEO of lemlist.
                            <br />
                            <br />
                            On a mission to help<span className="text-black"> 1,000,000 entrepreneurs to build profitable businesses by 2025.</span>
                            <br />
                            <br />
                            In 3.5 years, we went<span className="text-black"> from $0 to $10 million in ARR </span>
                            from $0 to $10 million in ARR
                            <br />
                            <br />
                            I love SaaS businesses, B2B growth strategies and cool people
                        </p>
                        <div className='button-Section'>
                            <button className="p-[10px] bg-[#4770ff] text-[20px] w-[170px] h-[60px] rounded-[17px] text-white text-bold flex justify-center items-center">Contact Me</button>
                        </div>
                    </div>
                    <div className="image_right">
                        <img src={Avatar} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSwction