import { useState, useEffect } from 'react';
import image from '../../assets/multi/image.jpg'
import image1 from '../../assets/multi/image1.jpg'
import image2 from '../../assets/multi/image2.jpg'
import image3 from '../../assets/multi/image3.jpg'
import logo from '../../assets/logo/logo.png'
import { ColorRing } from 'react-loader-spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import ReCAPTCHA from "react-google-recaptcha";
import './multi.css'

const MultiStepForm = () => {

    const stepsTitles = ['Tell us about yourself ', 'Tell us about your Business ', 'Tell us about your challenge ', 'Tell Us about your schedule'];
    const [currentStep, setCurrentStep] = useState(1);
    const [step1Valid, setStep1Valid] = useState(false);
    const [step2Valid, setStep2Valid] = useState(false);
    const [step3Valid, setStep3Valid] = useState(false);

    const validateEmail = (Email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
        return emailRegex.test(Email);
    };
    const validateStep1 = () => {
        const { First_name, Last_name, Email } = formData;
        const isValid = First_name !== '' && Last_name !== '' && Email !== '';
        setStep1Valid(isValid && validateEmail(Email));
    };

    const validateStep2 = () => {
        const { Audience, FirstQRR, NextQRR, Industry } = formData;
        const isTargetAudienceValid = Audience !== '';
        const isRecurringRevenue1Valid = FirstQRR !== 0;
        const isRecurringRevenue2Valid = NextQRR !== 0;
        const isIndustyValid = Industry !== '';

        setStep2Valid(isTargetAudienceValid && isRecurringRevenue1Valid && isRecurringRevenue2Valid && isIndustyValid);
    };

    const validateStep3 = () => {
        const { Budget, Duration, Referral, ClintInput } = formData;
        const isRecurringRevenue3Valid = Budget !== '';
        const isRecurringRevenueMonthValid = Duration !== '';
        const isSchedule_date = Referral !== '';
        const isClintInput = ClintInput !== '';
        setStep3Valid(isRecurringRevenue3Valid && isRecurringRevenueMonthValid && isSchedule_date && isClintInput);
    };
    const handleNext = () => {
        let isValid = true;

        if (currentStep === 1) {
            validateStep1();
            if (!step1Valid) {
                isValid = false;
            }
        } else if (currentStep === 2) {
            validateStep2();
            if (!step2Valid) {
                isValid = false;
            }
        } else if (currentStep === 3) {
            validateStep3();
            if (!step3Valid) {
                isValid = false;
            }
        }

        if (!isValid) {
            return;
        }
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    const [isEventScheduled, setEventScheduled] = useState(false);

    const handleEventScheduled = (e) => {
        console.log(e.data.payload);
        setEventScheduled(true);
    };
    useCalendlyEventListener({
        onEventScheduled: handleEventScheduled,
    });
    const totalSteps = 4;
    const percentComplete = Math.round((currentStep / totalSteps) * 100);
    const images = [
        image3,
        image,
        image1,
        image2,

    ];
    // https://script.google.com/macros/s/AKfycbyTPjREO733OdnH1IqFMYcFjbR-mZIYHfMiULmfGaXWrmVGF7Y6g_jJ2r7PKHNveWJwAw/exec
    const [formData, setFormData] = useState({
        First_name: '',
        Last_name: '',
        Email: '',
        Industry: '',
        Audience: '',
        FirstQRR: 100000,
        NextQRR: 5000,
        Budget: 3500,
        Duration: 3,
        Referral: '',
        BusinessUrl: '',
        ClintInput: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "Industry") {
            setFormData(prevState => ({
                ...prevState,
                Industry: value
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
        if (name === "Referral") {
            setFormData(prevState => ({
                ...prevState,
                Referral: value
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://sheet.best/api/sheets/0fa2cfbf-0cc8-4277-864f-f590f43d20be',
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
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    function capchaonChange(value) {
        setIsCaptchaVerified(true);
    }

    return (

        <div className='waves_div relative' id="multi">

            {/* <ToastContainer /> */}

            <div className="container flex justify-center items-center m-auto w-[90vw] min-h-[100vh]">
                <div className=" max-w-full sm:max-w-[85vw] lg:w-full md:w-full">
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
                            {isCaptchaVerified ? (

                                <form onSubmit={handleSubmit} className='mt-[60px] h-auto sm:min-h-[64vh]'>
                                    {currentStep === 1 && (
                                        <div className='h-auto sm:h-[60vh]'>
                                            <h2 className='text-[30px] text-black sub_font font-bold'>{stepsTitles[currentStep - 1]}</h2>
                                            <div className="flex flex-wrap -mx-3 mb-6 pt-[40px]">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <input className="appearance-none block w-full rounded mb-3 bord" name='First_name' id="first-name-input" type="text" placeholder="First Name " value={formData.First_name} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="w-full md:w-1/2 px-3">
                                                    <input className="appearance-none block w-full   rounded bord" id="first-name-input" type="text" name="Last_name" placeholder="Last Name" value={formData.Last_name} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                                    <input className="appearance-none block w-full  text-gray-700 rounded  mb-3 bord" name='Email' id="email" type="Email" placeholder="Email" value={formData.Email}
                                                        onChange={handleChange} required />
                                                </div>
                                                <div className="w-full md:w-full px-3 mb-6 md:mb-0 mt-5">
                                                    <input className="appearance-none block w-full  text-gray-700 rounded  mb-3 bord" name='BusinessUrl' id="BusinessUrl" type="text" placeholder="Your Business URL" value={formData.BusinessUrl}
                                                        onChange={handleChange} required />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {currentStep === 2 && (
                                        <div className='step_2_form w-50 h-auto sm:h-[60vh]'>
                                            <h2 className='text-[30px] text-black sub_font font-bold '>{stepsTitles[currentStep - 1]}</h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 pm-4 pt-[20px] sm:pt-[10px]">
                                                <div className=''>
                                                    <select
                                                        name='Industry'
                                                        className="w-full mp-4"
                                                        value={formData.Industry}
                                                        onChange={handleChange}
                                                        required
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
                                                    <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                        Target Audience (Market):
                                                    </h3>

                                                    <div className="sheckboxes mb-[5px]">
                                                        <input className="appearance-none block w-full rounded mb-3 bord" name='Audience' id="first-name-input" type="text" placeholder="" value={formData.Audience} onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='filters_section pt-[10px] sm:pt-[20px]'>
                                                <div className='Head_section'>
                                                    <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                        Quaretrly Recurring Revenue(QRR):
                                                    </h3>
                                                    <div className='range_slider'>
                                                        <div className="input_style mt-[5px]">
                                                            <div className="flex flex-wrap items-baseline">
                                                                <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">$5000</span>
                                                                <input className="w-[200px] pl-3 pr-3"
                                                                    type="range"
                                                                    min="5000"
                                                                    max="400000"
                                                                    name="FirstQRR"
                                                                    value={formData.FirstQRR}
                                                                    onChange={handleChange}
                                                                    required

                                                                />
                                                                <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2">$400,000</span>
                                                                <h4 className="main_color text-[20px] sub_font pt-5">
                                                                    ${formData.FirstQRR}
                                                                </h4>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='filters_section pt-[20px] sm:pt-[20px]'>
                                                <div className='Head_section'>

                                                    <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                        Your next QRR goal is:
                                                    </h3>
                                                    <div className='range_slider'>
                                                        <div className="input_style mt-[5px]">
                                                            <div className="flex flex-wrap items-baseline">
                                                                <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">$100,000</span>
                                                                <input className="w-[200px] pl-3 pr-3"
                                                                    type="range"
                                                                    min="100000"
                                                                    max="1000000"
                                                                    name="NextQRR"
                                                                    value={formData.NextQRR}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                                <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2">$1,000,000</span>
                                                                <h4 className="main_color text-[17px] sub_font pt-5 w-[100px]">
                                                                    ${formData.NextQRR}

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
                                                    <h3 className='sub_font text-[18px] opacity-75  mt-3 text-[#000000] '>
                                                        Please describe challenge that your require our assistance with ?
                                                    </h3>
                                                    <div className="w-full md:w-full px-3 mb-6 md:mb-0 mt-5">
                                                        <input className="appearance-none block w-full  text-gray-700 rounded  mb-3 bord" name='ClintInput' id="" type="text" placeholder="" value={formData.ClintInput}
                                                            onChange={handleChange} required />
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
                                                                    name="Budget"
                                                                    value={formData.Budget}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                                <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2 w-[100px]">$50,000</span>
                                                                <h4 className="main_color text-[20px] sub_font pt-5">
                                                                    ${formData.Budget}
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
                                                <div className=''>
                                                    <select
                                                        name='Referral'
                                                        className="w-full mp-4"
                                                        value={formData.Referral}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value=""></option>
                                                        <option value="Webinar">Webinar</option>
                                                        <option value="Social Media">Social Media </option>
                                                        <option value="Friends">Friends
                                                        </option>
                                                        <option value="YouTube">YouTube
                                                        </option>

                                                    </select>
                                                </div>
                                                <h3 className='sub_font text-[13px] opacity-75 mt-4 text-[#000000]'>
                                                    What is the duration you plan to utilise our partnership for? (scale)
                                                </h3>
                                                <div className='range_slider'>
                                                    <div className="input_style mt-[5px]">
                                                        <div className="flex  flex-wrap items-baseline">
                                                            <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">3 Month</span>
                                                            <input className="w-[200px] pl-3 pr-3"
                                                                type="range"
                                                                min="3"
                                                                max="12"
                                                                name="Duration"
                                                                value={formData.Duration}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            <span className="max_numper text-[16px]  text-[#000000] opacity-75 p-2">12 Month</span>
                                                            <h4 className="main_color text-[18px] sub_font pt-5 ml-4">
                                                                {formData.Duration} month
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
                                            <InlineWidget url="https://calendly.com/ahmed-ezzat-001/ahmed-ezzat"
                                                rootElement={document.getElementById("root")}
                                                text="Click here to schedule!"
                                                textColor="#ffffff"
                                                color="#f5a34c"
                                                className="h-[40%]"
                                                pageSettings={{
                                                    backgroundColor: '#ffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '#f5a34c',
                                                    textColor: '4d5055'
                                                }}
                                            />
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
                                                <button type="submit" disabled={!isEventScheduled} className="disabled_button font-bold py-2 px-4 rounded-lg text-[#000]">Done</button>
                                            </Link>
                                        )}
                                    </div>
                                </form>
                            ) : (
                                <div>
                                    <ReCAPTCHA className='absolute top-[50%] left-[20%]'
                                        sitekey="6Le5gvklAAAAAH6aRDq7hYvgPKCQ3Hue4CXgvP7Z"
                                        onChange={capchaonChange}
                                    />

                                </div>
                            )}
                        </div>
                        <div className="md:w-1/2 p-4 flex justify-center items-center bg-[#2c2b29]">
                            <div className='border_div w-[90%] h-[90%] flex justify-center items-center'>
                                <img src={images[currentStep - 1]} alt={`Step ${currentStep}`} className="object-cover w-[80%] h-[50%] toggle_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};
export default MultiStepForm;