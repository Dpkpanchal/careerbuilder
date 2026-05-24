import React from 'react';
import HeroSlider from "@/Components/Frontend/Hero/HeroSlider";

import PathfinderWizard from "@/Components/Frontend/PathfinderWizard/PathfinderWizard";
import NewsUpdates from "@/Components/Frontend/Home/NewsUpdates";
import ExploreCareerDomains from "@/Components/Frontend/Home/ExploreCareerDomains";
import ScholarshipPartnersSection from "@/Components/Frontend/Home/ScholarshipPartnersSection";
import ForumCounselorSection from "@/Components/Frontend/Home/forumSection";
import DesksSection from "@/components/Frontend/Home/DesksSection";
import FrontendLayout from '../../Layouts/FrontendLayout';

export default function Home({ title, cmMessage,heroSlides , leaders, factCards = [], schemes = [] , careerDomains, newsData, categories,sections}) {

    const cleanContent = cmMessage?.content
    ?.replace(/^<p>(.*)<\/p>$/s, "$1");

    return (
        // <FrontendLayout title={title}>
       
        <FrontendLayout title={title}>
             <HeroSlider heroSlides={heroSlides}/>
            {/*<HeroSection />*/}
            {/* === Chief Minister Message Section (after Hero) === */}
                {/* <section
                className="py-4 py-md-5 "
                aria-labelledby="cm-message-heading"
                >
                <div className="container">
                    <div className="row g-0 justify-content-between">
                       
                        <div className="col-12 col-md-5">
                        <div className="h-100 d-flex flex-column justify-content-center align-items-center  cm-message-visual">
                        

                            <div className="cm-message-logo-wrap" aria-hidden="true">

                            {cmMessage?.image && (
                                <img
                                    src={`/storage/${cmMessage.image}`}
                                    className="img-fluid cm-message-logo"
                                    alt="Government of West Bengal logo"
                                    width="540"
                                    height="528"
                                />
                             )}


                            </div>
                        </div>
                        </div>

                        
                         <div className="col-12 col-md-7 ps-lg-5 mt-4 mt-md-0">
                            <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
                         </div>
                         
                    </div>
                </div>
                </section> */}

            <DesksSection leaders={leaders}/>

            <PathfinderWizard />
            <NewsUpdates newsData={newsData} categories={categories} section={sections.education_news}/>
            <ExploreCareerDomains careerDomains={careerDomains} section={sections.career_domains}/>
            <ScholarshipPartnersSection 
                factCards={factCards} 
                schemes={schemes} section={sections.scholarships_loans}
                />
            <ForumCounselorSection section={sections.student_forum}/>
        </FrontendLayout>
           
         
    );
}