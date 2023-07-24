import React from 'react';
import "./portfolio.css";
import data from '../../data/api2';
import Card from './Card';

const Portfolio = () => {
    return (
        <>
            <section className="portfolio top" id="portfolio">
                <div className="container">
                    <div className="heading text-center">
                        <h1>My Portfolio</h1>
                    </div>
                    <div className="content grid">
                        {
                            data.map((val, index)=>(
                                <Card 
                                key={index} 
                                img={val.img} 
                                category={val.category} 
                                title={val.title}
                                content={val.content}
                                content1={val.content1}
                                content2={val.content2}
                                
                                />
                            ))

                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;