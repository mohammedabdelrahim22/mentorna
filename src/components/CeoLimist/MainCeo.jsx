import './style.css'
import Timeline from './Timline'
import CeoNav from './CeoNav'
import HeroSwction from './HeroSwction'
import Reminning from './Reminning'
import Features from './Features'
import Articles from './Articles'
function MainCeo() {
    return (
        <div>
            <CeoNav />
            <HeroSwction />
            <Reminning />
            <Timeline />
            <Features />
            <Articles />
        </div>
    )
}

export default MainCeo