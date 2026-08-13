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