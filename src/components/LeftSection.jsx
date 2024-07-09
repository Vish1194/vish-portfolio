// import Pic from '../assets/image/IMG.jpg'
import { useState } from 'react';
import github_icon from '../assets/image/github.png'


const LeftSection = () =>{
    const Imgid = "1Mk44BMHmKWFX0xf2rXpJ5nXmWtUpEBOu"
    let Pic = "https://drive.google.com/thumbnail?id="+Imgid+"&sz=w1000";
    const img = <img src={Pic} alt="Profile Pic" className="my-5" inert onError={()=>{setImgError(true)}}/>
    const [imgError,setImgError] = useState(false);
    return(
            <div className="col-lg-3 bg-grad-blue pt-5 left-col text-center py-3">
                <header>
                    {imgError ? '' : img}
                    <h4>Vishnu Upadya</h4>
                    <p>I am a recent graduate with a Bachelor of Engineering in Computer Science</p>
                    <div className="my-5">
                        <h5>Contact</h5>
                        <a className="fs-6 link link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="mailto:vishnuupadhya99@gmail.com">vishnuupadhya99@gmail.com</a>
                    </div>
                    <div>
                        <h5>Personal Projects</h5>
                        <ul style={{listStyle:'none',padding:'0'}}>
                            <li><a href="https://github.com/Vish1194" className='link link-light link-underline-opacity-0 link-underline-opacity-100-hover' ><img src={github_icon} alt="Github" className='git_icon' />  My Github</a></li>
                            <li><a href="https://github.com/Vish1194/company_talent_management_system" className='link link-light link-underline-opacity-0 link-underline-opacity-100-hover'><img src={github_icon} alt="Github" className='git_icon' />  Talent Management System</a></li>
                        </ul>
                    </div>
                  </header>
            </div>
    )
}
export default LeftSection;