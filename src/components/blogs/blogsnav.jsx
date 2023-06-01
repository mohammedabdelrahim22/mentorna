
import { Link } from 'react-router-dom'
import loadCSS from "loadcss";
import logo from '../../assets/logo/logo.png'
import { useTranslation } from 'react-i18next'
// import './style.css'
// import './arstyle.css'
const BlogsNav = () => {
    const { i18n } = useTranslation();
    const handleLanguageChange = () => {
        const lang = i18n.language;
        if (lang === "en") {
            loadCSS("/arstyle.css");
        } else {
            loadCSS("/enstyle.css");
        }
        i18n.changeLanguage(lang === "en" ? "ar" : "en");
    };
    return (
        <div className="navbar p-5  bg-white py-4 w-[70%] m-auto flex flex-wrap justify-between items-center rounded-[10px] sidebar_shadow">
            <div className='logo_side '>
                <Link to="/" className='w-full'>
                    <img src={logo} alt="Logo" className="h-[30px] w-[150px] " />
                </Link>
            </div>
            <div className='lang_buttons arrow_button_nav ml-[20px] w-[50px] text-black  p-[5px] rounded-[10px]'>
                <button onClick={handleLanguageChange} className='flex w-[100%] justify-center'>
                    {i18n.language === "en" ? "Ar" : "En"}
                </button>
                {/* {i18n.language === "ar" && (
                    <button
                        className="ml-[20px] w-[50px] arrow_button text-black  p-[5px] rounded-[10px]"
                        onClick={() => {
                            i18n.changeLanguage("en");
                        }}
                    >
                        en
                    </button>
                )} */}
            </div>
        </div>
    )
}

export default BlogsNav