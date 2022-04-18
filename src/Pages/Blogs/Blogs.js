import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='Ques'>
            <h3>Difference between authorization and authentication</h3>
            <p style={{fontWeight:'bold'}}>Authentication:</p>
            <p>This is the process of identifying an user whether he/she has a valid account in the system or not. Basically, it identifies the user by checking login credentials, such as email and password.</p>
            <p style={{fontWeight:'bold'}}>Authorization:</p>
            <p>This means after gaining access, what are the functionalities user can perform in that site as per the roles of that user. Some user could be admin, he will bw able to modifying any data in the website, and some other could only view the reports and not able to download it. </p>
            <h3 style={{marginTop:4}}>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Main attractions of firebase 
                <ul>
                    <li>it has free wide range basic plan.</li>
                    <li>It is pretty quick for the initial setup and start the work right away.</li>
                    <li>It has good understanding documentation level. Provides major authentication features.</li>
                    <li>And also provides hosting facilities. </li>
                </ul> 
                </p>
                <p>Other options to implement authentication:
                    Token based authentication, authentication by providing credentials - email, password, password less authentication, social media authentication</p>  
                <p>Other alternatives to firebase authentication:
                Auth0, Okta, Passport etc.
                </p>
        </div>
    );
};

export default Blogs;