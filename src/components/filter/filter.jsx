import { useState } from "react"
import './filter.css'
import { Link } from 'react-router-dom'
const Filter = () => {
    const [rangeValue, setRangeValue] = useState(100000);
    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    }
    return (
        <div className="filter mt-[70px]">
            <div className="container_div sm:w-[85%]">
                <div className="inside_filter bg-[#000000] min-h-[60vh] p-[30px] sm:p-[50px] rounded-[50px]">
                    <div className="text-inside">
                        <h4 className="font-bold main_color sub_font">
                            Our Bread And Butter
                        </h4>
                        <h2 className="text-white text-[20px] sm:text-[40px] font-bold sub_font pt-6">
                            Unleash The Power Of Community: <br />
                            Watch Your Brand Soar With Advocates
                        </h2>
                        <p className="text-[#fff] opacity-80 sub_font text-[10px] sm:text-[20px] pt-5 pr-[60px]">
                            Our Product Is Designed For Growing Startups, Established Companies, And Influencers Seeking New Growth Opportunities And Increased Revenue, By Helping Them Increase Acquisition, Distribute Content, And Grow Revenue Efficiently.
                        </p>
                        <div className="inside_range w-full flex pt-4 justify-start items-end flex-wrap justify-center">

                            <div className="input_style mt-[20px] sm:mt-[60px]">
                                <div className="text_head text-center">
                                    <h3 className="text-white font-bold sub_font text-[20px] sm:text-[30px]">
                                        My Goal For Next Qoarter is
                                    </h3>
                                </div>
                                <div className="text-center">
                                    <h1 className="main_color text-[30px] sm:text-[40px]  pt-5 recolta">
                                        ${rangeValue}
                                    </h1>
                                </div>
                                <p className="min_numper  text-[15px] sm:text-[20px] hidden sm:inline p-2 text-[#fff]  opacity-75 recolta">$100,000</p>
                                <input className="w-[250px] sm:w-[300px] pl-3 pr-3 filter_range  "
                                    type="range"
                                    min="10000"
                                    max="1000000"
                                    value={rangeValue}
                                    onChange={handleRangeChange}
                                />
                                <p className="max_numper  text-[15px] sm:text-[20px] text-[#fff] hidden sm:inline opacity-75 p-2 recolta">$1,000,000</p>
                                <div className="flex justify-between mt-4  block sm:hidden  ">
                                    <p className="min_numper  text-[20px] sm:text-[20px] text-[#fff]  opacity-75 recolta">$100,000</p>
                                    <p className="max_numper  text-[20px] sm:text-[20px]  text-[#fff]  opacity-75 recolta">$1,000,000</p>
                                </div>
                            </div>
                            <span className="p-2 flex items-end pl-7  hidden sm:block">
                                <a href="#">
                                    <Link to='/MultiStepForm'>
                                        <button className="main_background p-2 rounded-[16px]  w-[200px] text-[18px] text-white font-bold recolta flex justify-evenly">Make It Happen<span><svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                                    </Link>
                                </a>
                            </span>
                            <span className="p-2 flex items-end pl-7  relative block sm:hidden">
                                <Link to='/MultiStepForm' className="relative top-[50px]">
                                    <button className="main_background p-2 rounded-[16px]  w-[200px]  text-white recolta  text-[18px] flex justify-evenly">Make It Happen<span><svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                                </Link>

                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
