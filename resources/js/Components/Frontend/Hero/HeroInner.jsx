import React from 'react';


const HeroInner = ({
  title,
  breadcrumb,
}) => {
  return (
    <header className={`hero-inner `}>
        <div className="hero-background">
          <div className="background-gradient"></div>
        </div>
      
      <div className="container hero-inner-content">
        <div className="row align-items-center">
          <div className="col-12">
             
            <h1 className="hero-title mb-3">{title}</h1>
             <nav aria-label="breadcrumb" className="hero-breadcrumb text-center ">
                <ol className="breadcrumb text-white justify-content-center mb-0">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">{breadcrumb}</li>
                </ol>
              </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

// Export both the component and pageTitles

export default HeroInner;