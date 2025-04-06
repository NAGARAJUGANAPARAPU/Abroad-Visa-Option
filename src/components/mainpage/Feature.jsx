import React from 'react'

const Feature = () => {
  return (
    <div>
    <div className="container">
        <div className="caption">FEATURED ON</div>
        <section className="image-link">
            <a href="https://travel.economictimes.indiatimes.com/news/technology/traveltech-startup-teleport-raises-usd-500k-to-process-1l-visas-in-2023/103064865" target="_blank">
                <img loading="lazy" alt="Economic Times" src="https://useteleport.com/home-page/image-38@2x.png" />
            </a>
            <a href="https://www.entrepreneur.com/en-in/news-and-trends/traveltech-startup-teleport-raises-500000-in-pre-seed/457593" target="_blank">
                <img loading="lazy" alt="Entrepreneur India" src="https://useteleport.com/home-page/image-39@2x.png" />
            </a>
            <a href="https://startupstorymedia.com/insights-travel-tech-startup-teleport-raises-500k-to-simplify-visa-processes-and-enhance-cross-border-travel/" target="_blank">
                <img loading="lazy" alt="Startup story" src="https://useteleport.com/home-page/image-43@2x.png" />
            </a>
            <a href="https://entrackr.com/2023/08/peak-xv-backed-traveltech-startup-teleport-raises-pre-seed-round/" target="_blank" className="entracker">
                <img loading="lazy" alt="Entrackr" src="https://useteleport.com/home-page/image-44@2x.png" />
            </a>
        </section>
    </div>
    </div>
  )
}

export default Feature
