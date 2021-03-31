import React, { useState } from "react";
import './App.css'
import job from './images/job.jpg'
import fool from './images/fool.jpg'

const AprilFools = () => {
    const [activejob, setactivejob] = useState(false);
    const [greeting, setgreeting] = useState(false);
    const [AprilFools, setfool] = useState(false);
    React.useEffect(() => {
        getjobpage();
    }, []);


    const getjobpage = () => {
        setactivejob(true)
    }
    const getfoolspage = () => {
        setfool(true)
        setactivejob(false)
    }
    const getgreeting = () => {
        setgreeting(true)
        setactivejob(false)
        setfool(false)
    }
    return (
        <>

            {activejob ?
                <div className='App'>
                    <div className='card_style'>
                        <img src={job} className='pic_style' />
                    </div>
                    <button className='btn_style' onClick={getfoolspage}> Apply</button>
                </div>
                : AprilFools ?
                    <div className='App'>
                        <div className='card_style'>
                        <img src={fool} className='pic_style' />
                       </div>

                        <span className=''> <button className='btn_style' onClick={getjobpage}>Back</button>  </span>
                        <button className='btn_style' onClick={getgreeting}>Next</button>

                    </div>
                    :greeting? 
                    <div className='App'>
                    <div className='card_style'>
                    <img src={'http://rishikajain.com/wp-content/uploads/2015/03/happy-april-fool-day.jpg'} className='pic_style' />
                   </div>

                    <div className='greeting'>
                        Thank You , Keep Learning !<br/>
                        Mateshwari verma  :)
                         
                    </div>

                </div>
                  
                    :''
            }

        </>
    );
};

export default AprilFools;