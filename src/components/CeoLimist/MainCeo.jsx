import './style.css'
import Timeline from './Timline'
import CeoNav from './CeoNav'
import HeroSwction from './HeroSwction'
import Reminning from './Reminning'
import Features from './Features'
import Articles from './Articles'
import Jurnye from './Jurnye'
import Footer from './Footer'
function MainCeo() {
    return (
        <div>
            <CeoNav />
            <HeroSwction />
            <Reminning />
            <Timeline />
            <Features />
            <Articles />
            <Jurnye />
            <Footer />
        </div>
    )
}

export default MainCeo