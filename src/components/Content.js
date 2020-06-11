import React, { useState } from 'react';

function Content(props) {

    let data = {
        Facebook:['Hack','PHP (HHVM)','React','Pytorch','C++','Python'],
        Twitter: ['C++','Java','Scala','Ruby'],
        Amazon : ['Javascript','C++','Java','Perl','Python'],
        Apple :['AppleCloud','Swift','React-native','TensorFlow','Python']
    }

    let [getCompany, setCompany] = useState('Facebook');
    let [getLang, setLang] = useState(data.Facebook);
    
     

    return (
        <div>
            <div className="jumbotron jumbotron-fluid bg-info">
                <div className="container text-center">
                    <h1 className="text-white">{props.heading}</h1>
                    <h3 className="text-white">In this app you can see the most popular programming languages And libraries used by the world’s largest tech companies . </h3>
                </div>
            </div>

            <div className="container">
                <h2>Select Company</h2>
                <p>Click on buttons to change the state</p>
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-1">
                                <button className="btn btn-dark" onClick={(e)=> {setCompany(e.target.textContent);setLang(data.Facebook)}}>Facebook</button>
                            </li>
                            <li className="nav-item mb-1">
                                <button className="btn btn-dark" onClick={(e)=> {setCompany(e.target.textContent);setLang(data.Twitter)}} >Twitter</button>
                            </li>
                            <li className="nav-item mb-1">
                                <button className="btn btn-dark" onClick={(e)=> {setCompany(e.target.textContent);setLang(data.Amazon)}} >Amazon</button>
                            </li>
                            <li className="nav-item mb-1">
                                <button className="btn btn-dark" onClick={(e)=> {setCompany(e.target.textContent);setLang(data.Apple)}} >Apple</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-9 ">
                        <div className="card">
                            <h3 className="card-header bg-dark text-white" >{getCompany} Used</h3>
                            <div className="card-body">
                                <ul>
                                {
                                    getLang.map((value,index) => {
                                        return <li key={index}>{value}</li>
                                    })
                                }
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Content;