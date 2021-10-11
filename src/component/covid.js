import React, {useEffect, useState} from "react";

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try{
            const res = await fetch('http://localhost:8080/wp-react-example/wp-json/wp/v2/posts');
            const actualdata = await res.json();
            console.log(actualdata);
            setData(actualdata);
        }catch(err){
            console.log(err);
        }
    }

    useEffect( () => {
        getCovidData();
    }, [] )
 
    return (
        <>
         <section className="tm-welcome">
            <div className="row">
                <div className="col-12">
                    <h2 className="tm-section-header tm-header-floating"> Covid Tracker </h2>         
                </div>
            </div>

            <div className="row tm-welcome-row">
                {data.map( (posts, index) => (
                    <article className="col-lg-6 tm-media"> 
                        <div>
                            <b> Post Title : </b> <span> {posts.title.rendered}</span>
                        </div>
                    </article>    
                ))}
            </div>
        </section>
        </>
    )
}

export default Covid;