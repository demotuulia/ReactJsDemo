
import Button from 'react-bootstrap/Button';

import homePageStyles from './HomePage.module.scss';
import homePic from '/src/assets/rec.png';
import homePic2 from '/src/assets/home.png';

import adminIcon from '/src/assets/userTypes/admin.png';
import editorIcon from '/src/assets/userTypes/editor.png';
import graduateIcon from '/src/assets/userTypes/graduate.png';
import studentIcon from '/src/assets/userTypes/student.png';

function Home(users) {

        function clickButton() {
                window.location.href = '/demo';
        }
        return (
                <div className={homePageStyles.mainDiv}>
                        <div className={homePageStyles.leftColumn}>
                        <div className={homePageStyles.leftImage}>
                                <img src={homePic} className={homePageStyles.image} />
                               </div>
                                <div className={homePageStyles.typeIcons}>
                                        <img src={adminIcon}></img>
                                        <img src={editorIcon}></img>
                                        <img src={graduateIcon}></img>
                                        <img src={studentIcon}></img>
                                </div>     
                        </div>
                      
                        <div className={homePageStyles.rightColumn}>
                                <div className={homePageStyles.mobileImage}>
                                        <img src={adminIcon}></img>
                                        <img src={editorIcon}></img>
                                        <img src={graduateIcon}></img>
                                        <img src={studentIcon}></img>     
                                </div>
                                <div>
                                        <h4>ReactJS Demo</h4>
                                         With demo application this you can manage users by the following functions:
                                       
                                        <ul>
                                                <li>List users and filter them  by the user type</li>
                                                <li>Add</li>
                                                <li>Edit</li>
                                                <li>Delete</li>
                                        </ul>

                                        This application has no API. All of the modifications are saved in the browser cookies.<br/>
                                        <a href='https://github.com/cptuulia/ReactJsDemo' target="_blank">
                                                See more information about the technical solutions in my Github
                                         </a>


                                       
                                </div>

                                <div className={homePageStyles.image2Wrapper}>
                                <div className={homePageStyles.buttonWrapper}>
                                                <Button
                                                        className={homePageStyles.startButton}
                                                        onClick={clickButton} >
                                                        Start the demo
                                                </Button>
                                        </div>
                                        <img src={homePic2} className={homePageStyles.image2} />
                                </div>
                               
                        </div>


                </div>

        )
}
export default Home