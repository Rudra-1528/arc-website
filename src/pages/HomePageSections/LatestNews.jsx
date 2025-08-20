import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    // This would eventually come from a database or API
    const newsItems = [
        { title: "A Novel Approach to AI-Driven Robotics", date: "August 15, 2025", link: "/publications" },
        { title: "ARC Partners with TechCorp on a New Initiative", date: "August 2, 2025", link: "/publications" },
        { title: "Dr. Jane Doe Presents at International Robotics Conference", date: "July 28, 2025", link: "/publications" },
    ];

    return (
        <section className="home-section">
            <div className="page-container">
                <h2>Latest News & Updates</h2>
                <div className="news-list">
                    {newsItems.map((item, index) => (
                        <div className="news-item" key={index}>
                            <div>
                                <h3>{item.title}</h3>
                                <p className="news-date">{item.date}</p>
                            </div>
                            <Link to={item.link} className="news-read-more">Read More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;