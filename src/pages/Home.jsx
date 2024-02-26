import Footer from "../components/Footer"
import Login from "../components/Login"
import MainSection from "../components/MainSection"
import NavBar from "../components/NavBar"
import RelatedItems from "../components/RelatedItems"
import TopItemsCard from "../components/TopItemsCard"

const Home = () => {
    return (
        <>
            <NavBar />
            <MainSection />
            <TopItemsCard />
            <RelatedItems />
            <Login />
            <Footer />
        </>
    )
}

export default Home
