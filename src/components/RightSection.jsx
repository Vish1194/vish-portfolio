import AboutSection from "./AboutSection";
import AcademicProjectSection from "./AcademicProjectSection";
import EducationSection from "./EducationSection";
import InternshipSection from "./InternshipSection";
import PersonalProjectSection from "./PersonalProjectSection";
import SkillsSection from "./SkillsSection";
import CoursesSection from "./CoursesSection"
import FooterSection from "./FooterSection";



const RightSection = () =>{
    return(
        <div class="col-lg-9 offset-lg-3 right-col">
            <div class="row pt-5 bg-grad-green">

                <AboutSection/>
                <EducationSection/>
                <AcademicProjectSection/>
                <PersonalProjectSection/>
                <SkillsSection/>
                <InternshipSection/>
                <CoursesSection/>
                <FooterSection/>
            </div>
        </div>
                
    )
}
export default RightSection;