import Header from './header/Header'
import Brand from './brand/Brand'
import Community from './community/Community'
import Spot from './spot/Spot'
import Scale from './scale/Scale'
import Filter from './filter/filter.jsx'
import Footer from './footer/footer'

// import ChatBox from './chat/chat'

function Index() {
    return (
        <div>
            <Header />
            <Brand />
            <Community />
            <Spot />
            <Scale />
            <Filter />
            <Footer />
            {/* <ChatBox /> */}
        </div>
    )
}

export default Index