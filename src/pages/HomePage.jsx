import LeftSection from "../components/LeftSection";
import NavBar from "../components/NavBar";
import RightSection from "../components/RightSection";



const HomePage = () =>{
    return(
        <>
            <div className="container-fluid">
                <NavBar/>
            </div>
            <div class="row mt-5 text-light">
                <LeftSection/>
                <RightSection/>
            </div>
        </>
    )
}
export default HomePage;