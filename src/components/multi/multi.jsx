
import { useState, useEffect } from 'react';
import slide1 from '../../assets/multi/slide1.png'
import slide2 from '../../assets/multi/slide2.png'
import slide3 from '../../assets/multi/slide3.png'
import logo from '../../assets/logo/logo.png'
import CalendarTime from '../calender/Calender'
// import Blocks from "react-blocks";
import { ColorRing } from 'react-loader-spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
// // import Loader from "react-js-loader";
// import Loader from "react-js-loader";
import './multi.css'
const MultiStepForm = () => {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // يتم إيقاف ال loader بعد 5 ثواني
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 8000);

    //     return () => clearTimeout(timer);
    // }, []);

    const stepsTitles = ['Tell Us About Your Selfe', 'Tell Us About Your Selfe', 'Please describe challenge that your require our assistance with . ', 'Tell Us about your schedule'];
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const totalSteps = 4;
    const percentComplete = Math.round((currentStep / totalSteps) * 100);
    const images = [
        slide1,
        slide3,
        slide2,
        slide3,

    ];

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        industy: '',
        target_auinnce: '',
        recurring_revenue1: 5000,
        recurring_revenue2: 5000,
        recurring_revenue3: 3500,
        recurring_revenue_month: 3
        // schedule_date: '',
        // schedule_time: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "industy") { // إذا تم تحديد الحقل الخاص بالصناعة
            setFormData(prevState => ({
                ...prevState,
                industy: value // تحديث حقل الصناعة بالقيمة المناسبة
            }));
        } else { // إلا، يتم تحديث الحقول الأخرى باستخدام الأسلوب الذي سبق وشرحته
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Selected industy: ", formData.industy);
        axios({
            method: 'post',
            url: 'https://mentorna.rbmarketing.agency/public/api/store',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const [loadingStep4, setLoadingStep4] = useState(true);


    useEffect(() => {
        if (currentStep === 4) {
            const timeout = setTimeout(() => {
                setLoadingStep4(false);
            }, 2800);
            return () => clearTimeout(timeout);
        }
    }, [currentStep]);
    return (
        <div className='waves_div'>

            <div className="container flex justify-center items-center m-auto w-[90vw] min-h-[100vh]">
                <div className=" max-w-full sm:max-w-[80vw]">
                    <div className="flex flex-col md:flex-row border_section min-h-[90vh] shadow-lg bg-white">
                        <div className="w-full md:w-1/2 md:pr-4 p-6">
                            <div className='image_logo pt-[20px]'>
                                <Link to="/">
                                    <img src={logo} className='object-cover w-[200px]' />
                                </Link>
                            </div>
                            <div className="progress-bar mt-[40px] sm:mt-[70px]">
                                <div className="progress" style={{ width: `${percentComplete}%` }}></div>
                            </div>
                            <form onSubmit={handleSubmit} action="post" className='mt-[60px] h-auto sm:min-h-[64vh]'>
                                {currentStep === 1 && (
                                    <div className='h-auto sm:h-[60vh]'>
                                        <h2 className='text-[30px] text-black sub_font font-bold'>{stepsTitles[currentStep - 1]}</h2>
                                        <div className="flex flex-wrap -mx-3 mb-6 pt-[40px]">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full rounded mb-3 bord" name='first_name' id="first-name-input" type="text" placeholder="First Name " value={formData.first_name} onChange={handleChange}
                                                />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <input className="appearance-none block w-full   rounded bord" id="first-name-input" type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <input className="appearance-none block w-full  text-gray-700 rounded  mb-3 bord" name='email' id="email" type="Email" placeholder="Email" value={formData.email}
                                                    onChange={handleChange} />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <input className="appearance-none block w-full  rounded bord" id="password" type="password" placeholder="*********" required />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {currentStep === 2 && (
                                    <div className='step_2_form w-50 h-auto sm:h-[60vh]'>
                                        <h2 className='text-[30px] text-black sub_font font-bold '>{stepsTitles[currentStep - 1]}</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 pm-4 pt-[20px] sm:pt-[10px]">
                                            <div className=''>
                                                {/* <label htmlFor="industy">industy:</label> */}
                                                <select
                                                    name='industy'
                                                    className="w-full mp-4"
                                                    value={formData.industy}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">industry</option>
                                                    <option value="Technology">Technology </option>
                                                    <option value="Education/E-Learning">Education/E-Learning
                                                    </option>
                                                    <option value="Content/Influencing">Content/Influencing
                                                    </option>
                                                    <option value="Others">Others
                                                    </option>
                                                </select>
                                            </div>
                                            <div>

                                                <div className="sheckboxes mb-[5px]">
                                                    <input className="appearance-none block w-full rounded mb-3 bord" name='target_auinnce' id="first-name-input" type="text" placeholder="target_auinnce" value={formData.target_auinnce} onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='filters_section pt-[10px] sm:pt-[20px]'>
                                            <div className='Head_section'>
                                                <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                    Quaretrly Recurring Revenue(QRR):(Scale)
                                                </h3>
                                                <div className='range_slider'>
                                                    <div className="input_style mt-[5px]">
                                                        <div className="flex flex-wrap items-baseline">
                                                            <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">$5000</span>
                                                            <input className="w-[200px] pl-3 pr-3"
                                                                type="range"
                                                                min="5000"
                                                                max="400000"
                                                                name="recurring_revenue1"
                                                                value={formData.recurring_revenue1}
                                                                onChange={handleChange}

                                                            />
                                                            <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2">$400,000</span>
                                                            <h4 className="main_color text-[20px] sub_font pt-5">
                                                                ${formData.recurring_revenue1}
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='filters_section pt-[20px] sm:pt-[20px]'>
                                            <div className='Head_section'>

                                                <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                    Quaretrly  Recurring Revenue(QRR):(Scale)
                                                </h3>
                                                <div className='range_slider'>
                                                    <div className="input_style mt-[5px]">
                                                        <div className="flex flex-wrap items-baseline">
                                                            <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">$5000</span>
                                                            <input className="w-[200px] pl-3 pr-3"
                                                                type="range"
                                                                min="5000"
                                                                max="400000"
                                                                name="recurring_revenue2"
                                                                value={formData.recurring_revenue2}
                                                                onChange={handleChange}
                                                            />
                                                            <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2">$400,000</span>
                                                            <h4 className="main_color text-[20px] sub_font pt-5 w-[100px]">
                                                                ${formData.recurring_revenue2}

                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div className='main_div h-auto sm:h-[60vh]'>
                                        <h2 className='text-[30px] text-black sub_font font-bold '>{stepsTitles[currentStep - 1]}</h2>
                                        <div className='filters_section mt-[50px]'>
                                            <div className='Head_section'>
                                                <div className='hr_div w-100 mt-2'>
                                                    <h2 className='sub_font text-[17px] text-[#000000] opacity-75'>
                                                        Please describe the challenge that you require our assistance with.
                                                    </h2>
                                                    <hr className='mt-2' />
                                                </div>
                                                <h3 className='sub_font text-[13px] opacity-75  mt-3 text-[#000000] '>

                                                    What is your budget to solve this challenge? (scale)


                                                </h3>
                                                <div className='range_slider'>
                                                    <div className="input_style mt-[5px]">
                                                        <div className="flex flex-wrap items-baseline">
                                                            <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">$3,500</span>
                                                            <input className="w-[200px] pl-3 pr-3"
                                                                type="range"
                                                                min="3500"
                                                                max="50000"
                                                                name="recurring_revenue3"
                                                                value={formData.recurring_revenue3}
                                                                onChange={handleChange}

                                                            />
                                                            <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2 w-[100px]">$50,000</span>
                                                            <h4 className="main_color text-[20px] sub_font pt-5">
                                                                ${formData.recurring_revenue3}
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Head_section mt-3'>
                                            <div className='hr_div w-100 mt-2'>
                                                <h2 className='sub_font text-[17px] text-[#000000] opacity-75'>
                                                    How did you hear about us?
                                                </h2>
                                                <hr className='mt-2' />
                                            </div>
                                            <h3 className='sub_font text-[13px] opacity-75 mt-2 text-[#000000]'>
                                                What is the duration you plan to utilise our partnership for? (scale)
                                            </h3>
                                            <div className='range_slider'>
                                                <div className="input_style mt-[5px]">
                                                    <div className="flex  flex-wrap items-baseline">
                                                        <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">3Month</span>
                                                        <input className="w-[200px] pl-3 pr-3"
                                                            type="range"
                                                            min="3"
                                                            max="12"
                                                            name="recurring_revenue_month"
                                                            value={formData.recurring_revenue_month}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="max_numper text-[16px]  text-[#000000] opacity-75 p-2">12Month</span>
                                                        <h4 className="main_color text-[20px] sub_font pt-5 ml-4">
                                                            {formData.recurring_revenue_month} month
                                                        </h4>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )}
                                {currentStep === 4 && (
                                    <div className='h-auto sm:h-[60vh] relative'>

                                        <h2 className='text-[30px] text-black sub_font font-bold '>{stepsTitles[currentStep - 1]}</h2>
                                        <CalendarTime />
                                        {loadingStep4 && (
                                            <ColorRing className="absolute"
                                                visible={true}
                                                height="80"
                                                width="80"
                                                ariaLabel="blocks-loading"
                                                wrapperStyle={{}}
                                                wrapperClass="blocks-wrapper"
                                                colors={['#f8b26a', '#f8b26a', '#f8b26a', '#f8b26a', '#f8b26a']}
                                            />
                                        )}

                                    </div>
                                )}
                                <div className="flex justify-between  items-end">
                                    {currentStep > 1 && (
                                        <button onClick={handlePrev} className="text-gray-800 font-bold py-2 px-4 rounded-lg flex items-center text-[#8b7676]">
                                            <svg width="20px" height="20px" className='mr-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <title />
                                                <g id="Complete">
                                                    <g id="arrow-left">
                                                        <g>
                                                            <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                            <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21.5" x2="4.8" y1="12" y2="12" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            Previous</button>
                                    )}
                                    {currentStep < 4 ? (
                                        <button onClick={handleNext} type="submit" className="text-black font-bold py-2 flex items-center px-4 rounded-lg">
                                            Next
                                            <svg width="20px" height="20px" className='ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <title />
                                                <g id="Complete">
                                                    <g id="arrow-right">
                                                        <g>
                                                            <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                            <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.5" x2="19.2" y1="12" y2="12" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>

                                        </button>
                                    ) : (
                                        <Link to="/" >
                                            <button type="submit" className="font-bold py-2 px-4 rounded-lg text-[#000]">Done</button>
                                        </Link>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="md:w-1/2 p-4 flex justify-center items-center bg-[#000000]">
                            <div className='border_div w-[90%] h-[90%] flex justify-center items-center'>
                                <img src={images[currentStep - 1]} alt={`Step ${currentStep}`} className="object-cover w-[80%] h-[50%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MultiStepForm;