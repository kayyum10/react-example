import React from 'react';
import Header from '../component/header'
import Footer from '../component/Footer'
import Covid from '../component/covid';

const Contact = () => { 
    
    return(
        <>
         <div className="container-fluid">
                <Header />
                <main>
                    
                    <section className="tm-welcome">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="tm-section-header tm-header-floating">Contact us page </h2>         
                            </div>
                        </div>
                    </section>
                    
                    <Covid />

                    <Footer></Footer>
                    
                </main>
            </div> 
        </>
    )
}

export default Contact;  