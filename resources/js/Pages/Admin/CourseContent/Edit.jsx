import React, { useMemo, useEffect, useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import CourseContentFields, { defaultContentData } from "./CourseContentFields";

// Import MSME specific fields
import MSMEToolRoomFields, { defaultContentData as defaultMSMEData } from "./MSMEToolRoomFields";

// Import Diploma fields (same component for all diploma types)
import DiplomaEngineeringFields, { defaultContentData as defaultDiplomaData } from "./DiplomaEngineeringFields";

// Import Degree fields (same component for all degree types)
import DegreeFields, { defaultContentData as defaultDegreeData } from "./DegreeFields";
import NursingFields, { defaultContentData as defaultNursingData } from "./NursingFields";
import MBBSCourseFields, { defaultContentData as defaultMBBSData } from "./MBBSCourseFields";
import AYUSHFields, { defaultContentData as defaultAYUSHData } from "./AYUSHFields";
import NaturopathyYogaFields, { defaultContentData as defaultNaturopathyData } from "./NaturopathyYogaFields";
import GenericTechFields, { defaultContentData as defaultTechData } from "./GenericTechFields";
import GenericBusinessFields, { defaultContentData as defaultBusinessData } from "./GenericBusinessFields";

import FinanceFields, { defaultContentData as defaultFinanceData } from "./FinanceFields";
import ProfessionalCommerceFields, { defaultContentData as defaultProfessionalCommerceData } from "./ProfessionalCommerceFields";

const CourseEdit = ({ courseContent, tabsData, menu_id }) => {
    // Ensure tabsData is an array
    const tabs = Array.isArray(tabsData) ? tabsData : [];

    console.log('Edit - Course Content:', courseContent);
    console.log('Edit - Tabs:', tabs);
    console.log('Edit - Menu ID:', menu_id);

    // Define ladder field mapping for medical pages
    const medicalLadderFields = {
        'courses-mbbs': 'course_ladder',
        'courses-pharmacy': 'pharmacy_ladder',
        'paramedical-diploma': 'diploma_ladder',
        'paramedical-ug': 'paramedical_ladder',
        'medical-pg': 'pg_ladder',
        'allied-health': 'allied_ladder',
    };

    const techLadderFields = {
        'courses-btech': 'btech_ladder',
        'courses-barch': 'barch_ladder',
        'courses-mtech': 'mtech_ladder',
        'courses-bca': 'bca_ladder',
        'courses-bsc-it': 'bsc_it_ladder',
        'courses-mca': 'mca_ladder',
        'courses-msc-it': 'msc_it_ladder',
    };

    // Get default (empty) data shape based on link key
    const getDefaultData = (linkKey) => {
        const base = {
            menu_id: menu_id || courseContent?.menu_id || "",
            tab_id: courseContent?.tab_id || "",
            section_id: courseContent?.section_id || "",
            link_id: courseContent?.link_id || "",
            is_active: courseContent?.is_active ?? true,
        };

        switch (linkKey) {
            case "msme-tool-room":
                return { ...base, ...defaultMSMEData() };
            case "diploma-engineering":
            case "diploma-paramedical":
            case "diploma-pharmacy":
            case "diploma-computer-it":
                return { ...base, ...defaultDiplomaData() };
            case "arts-graduation":
            case "commerce-graduation":
            case "science-graduation":
            case "arts-pg":
            case "commerce-pg":
            case "science-pg":
                return { ...base, ...defaultDegreeData() };
            case "courses-nursing":
                return { ...base, ...defaultNursingData() };
            case "courses-mbbs":
            case "courses-pharmacy":
            case "paramedical-diploma":
            case "paramedical-ug":
            case "medical-pg":
            case "allied-health":
                const ladderField = medicalLadderFields[linkKey] || 'course_ladder';
                return { ...base, ...defaultMBBSData(ladderField) };
            case "courses-ayush":
                return { ...base, ...defaultAYUSHData() };
            case "naturopathy-yoga":
                return { ...base, ...defaultNaturopathyData() };
            case "courses-btech":
            case "courses-barch":
            case "courses-mtech":
            case "courses-bca":
            case "courses-bsc-it":
            case "courses-mca":
            case "courses-msc-it":
                const techladderField = techLadderFields[linkKey] || 'tech_ladder';
                return { ...base, ...defaultTechData(techladderField) };
            // Business pages - only B.Com, M.Com, BBA, MBA
            case "courses-bcom":
            case "courses-mcom":
            case "courses-bba":
            case "courses-mba":
                return { ...base, ...defaultBusinessData() };

            case "course-finance":
                return { ...base, ...defaultFinanceData() };
            case "courses-professional-commerce":
                return { ...base, ...defaultProfessionalCommerceData() };

            default:
                return { ...base, ...defaultContentData() };
        }
    };

    // The saved content fields we might want to carry over
    const preservedFieldsFromCourseContent = () => {
        const linkKey = courseContent?.link?.key || '';
        
        const commonFields = {
            intro_heading: courseContent?.intro_heading || "",
            intro_description: courseContent?.intro_description || "",
            intro_description_secondary: courseContent?.intro_description_secondary || "",
            snapshot: courseContent?.snapshot || {},
            sectors: Array.isArray(courseContent?.sectors) ? courseContent.sectors : [],
            long_term_programs: Array.isArray(courseContent?.long_term_programs) ? courseContent.long_term_programs : [],
            short_term_courses: Array.isArray(courseContent?.short_term_courses) ? courseContent.short_term_courses : [],
            cta_button: courseContent?.cta_button || {},
            branch_groups: Array.isArray(courseContent?.branch_groups) ? courseContent.branch_groups : [],
            post_diploma: Array.isArray(courseContent?.post_diploma) ? courseContent.post_diploma : [],
            polytechnic_links: Array.isArray(courseContent?.polytechnic_links) ? courseContent.polytechnic_links : [],
            
            // Degree fields
            subject_families: Array.isArray(courseContent?.subject_families) ? courseContent.subject_families : [],
            degree_options: Array.isArray(courseContent?.degree_options) ? courseContent.degree_options : [],
            course_groups: Array.isArray(courseContent?.course_groups) ? courseContent.course_groups : [],
            after_degree: Array.isArray(courseContent?.after_degree) ? courseContent.after_degree : [],
            admission_points: Array.isArray(courseContent?.admission_points) ? courseContent.admission_points : [],
            documents: Array.isArray(courseContent?.documents) ? courseContent.documents : [],
            careers_snapshot: Array.isArray(courseContent?.careers_snapshot) ? courseContent.careers_snapshot : [],
            
            // Nursing fields
            nursing_ladder: Array.isArray(courseContent?.nursing_ladder) ? courseContent.nursing_ladder : [],
            specialisations: Array.isArray(courseContent?.specialisations) ? courseContent.specialisations : [],
            work_settings: Array.isArray(courseContent?.work_settings) ? courseContent.work_settings : [],
            admission_notes: Array.isArray(courseContent?.admission_notes) ? courseContent.admission_notes : [],
            build_profile: Array.isArray(courseContent?.build_profile) ? courseContent.build_profile : [],
            
            // Ladder fields - all stored separately
            course_ladder: Array.isArray(courseContent?.course_ladder) ? courseContent.course_ladder : [],
            diploma_ladder: Array.isArray(courseContent?.diploma_ladder) ? courseContent.diploma_ladder : [],
            pharmacy_ladder: Array.isArray(courseContent?.pharmacy_ladder) ? courseContent.pharmacy_ladder : [],
            paramedical_ladder: Array.isArray(courseContent?.paramedical_ladder) ? courseContent.paramedical_ladder : [],
            pg_ladder: Array.isArray(courseContent?.pg_ladder) ? courseContent.pg_ladder : [],
            allied_ladder: Array.isArray(courseContent?.allied_ladder) ? courseContent.allied_ladder : [],
            eligibility_notes: Array.isArray(courseContent?.eligibility_notes) ? courseContent.eligibility_notes : [],
            core_subjects: Array.isArray(courseContent?.core_subjects) ? courseContent.core_subjects : [],
            common_diploma_options: Array.isArray(courseContent?.common_diploma_options) ? courseContent.common_diploma_options : [],
            ug_course_options: Array.isArray(courseContent?.ug_course_options) ? courseContent.ug_course_options : [],
            pg_course_options: Array.isArray(courseContent?.pg_course_options) ? courseContent.pg_course_options : [],

            ayush_ladder: Array.isArray(courseContent?.ayush_ladder) ? courseContent.ayush_ladder : [],
            ayush_systems: Array.isArray(courseContent?.ayush_systems) ? courseContent.ayush_systems : [],      

            naturopathy_ladder: Array.isArray(courseContent?.naturopathy_ladder) ? courseContent.naturopathy_ladder : [],
            what_you_do: Array.isArray(courseContent?.what_you_do) ? courseContent.what_you_do : [],
            where_you_work: Array.isArray(courseContent?.where_you_work) ? courseContent.where_you_work : [],

            btech_ladder: Array.isArray(courseContent?.btech_ladder) ? courseContent.btech_ladder : [],
            barch_ladder: Array.isArray(courseContent?.barch_ladder) ? courseContent.barch_ladder : [],
            mtech_ladder: Array.isArray(courseContent?.mtech_ladder) ? courseContent.mtech_ladder : [],
            bca_ladder: Array.isArray(courseContent?.bca_ladder) ? courseContent.bca_ladder : [],
            bsc_it_ladder: Array.isArray(courseContent?.bsc_it_ladder) ? courseContent.bsc_it_ladder : [],
            mca_ladder: Array.isArray(courseContent?.mca_ladder) ? courseContent.mca_ladder : [],
            msc_it_ladder: Array.isArray(courseContent?.msc_it_ladder) ? courseContent.msc_it_ladder : [],
            who_should_do: Array.isArray(courseContent?.who_should_do) ? courseContent.who_should_do : [],
            core_areas: Array.isArray(courseContent?.core_areas) ? courseContent.core_areas : [],
            specialisation_tracks: Array.isArray(courseContent?.specialisation_tracks) ? courseContent.specialisation_tracks : [],

            // Business fields - only B.Com, M.Com, BBA, MBA
            bcom_ladder: Array.isArray(courseContent?.bcom_ladder) ? courseContent.bcom_ladder : [],
            mcom_ladder: Array.isArray(courseContent?.mcom_ladder) ? courseContent.mcom_ladder : [],
            bba_ladder: Array.isArray(courseContent?.bba_ladder) ? courseContent.bba_ladder : [],
            mba_ladder: Array.isArray(courseContent?.mba_ladder) ? courseContent.mba_ladder : [],
            typical_roles: Array.isArray(courseContent?.typical_roles) ? courseContent.typical_roles : [],
            next_step_options: Array.isArray(courseContent?.next_step_options) ? courseContent.next_step_options : [],
            business_types: Array.isArray(courseContent?.business_types) ? courseContent.business_types : [],


            finance_ladder: Array.isArray(courseContent?.finance_ladder) ? courseContent.finance_ladder : [],
            course_options: Array.isArray(courseContent?.course_options) ? courseContent.course_options : [],

            professional_commerce_ladder: Array.isArray(courseContent?.professional_commerce_ladder) ? courseContent.professional_commerce_ladder : [],
            choose_right: Array.isArray(courseContent?.choose_right) ? courseContent.choose_right : [],
            common_prep: Array.isArray(courseContent?.common_prep) ? courseContent.common_prep : [],
            important_notes: Array.isArray(courseContent?.important_notes) ? courseContent.important_notes : [],
            common_docs: Array.isArray(courseContent?.common_docs) ? courseContent.common_docs : [],



            
            admission_heading: courseContent?.admission_heading || "",
            admission_description: courseContent?.admission_description || "",
            admission_info: Array.isArray(courseContent?.admission_info) ? courseContent.admission_info : [],
            next_steps: Array.isArray(courseContent?.next_steps) ? courseContent.next_steps : [],
            skill_agencies: Array.isArray(courseContent?.skill_agencies) ? courseContent.skill_agencies : [],
            sort_order: courseContent?.sort_order || 0,
        };

        // Based on link key, only keep the relevant ladder field
        const ladderFieldMap = {
            'courses-mbbs': 'course_ladder',
            'courses-pharmacy': 'pharmacy_ladder',
            'paramedical-diploma': 'diploma_ladder',
            'paramedical-ug': 'paramedical_ladder',
            'medical-pg': 'pg_ladder',
            'allied-health': 'allied_ladder',
        };

        if (ladderFieldMap[linkKey]) {
            const field = ladderFieldMap[linkKey];
            commonFields.course_ladder = [];
            commonFields.diploma_ladder = [];
            commonFields.pharmacy_ladder = [];
            commonFields.paramedical_ladder = [];
            commonFields.pg_ladder = [];
            commonFields.allied_ladder = [];
            
            const fieldData = courseContent?.[field];
            if (Array.isArray(fieldData)) {
                commonFields[field] = fieldData;
            }
        }

        return commonFields;
    };

    // Builds the full form state for a given tab/section/link selection
    const buildFormData = (linkKey, targetTabId, targetSectionId, targetLinkId) => {
        const newData = getDefaultData(linkKey);
        const isOriginalLink = String(targetLinkId) === String(courseContent?.link_id);

        return {
            ...newData,
            ...(isOriginalLink ? preservedFieldsFromCourseContent() : {}),
            menu_id: menu_id || courseContent?.menu_id || newData.menu_id,
            tab_id: targetTabId,
            section_id: targetSectionId,
            link_id: targetLinkId,
        };
    };

    // Initialize form with existing data
    const initialData = {
        menu_id: menu_id || courseContent?.menu_id || "",
        tab_id: courseContent?.tab_id || "",
        section_id: courseContent?.section_id || "",
        link_id: courseContent?.link_id || "",
        is_active: courseContent?.is_active ?? true,
        ...preservedFieldsFromCourseContent(),
    };

    const { data, setData, put, processing, errors } = useForm(initialData);

    // Field components mapping
    const fieldComponents = {
        "msme-tool-room": MSMEToolRoomFields,
        "diploma-engineering": DiplomaEngineeringFields,
        "diploma-paramedical": DiplomaEngineeringFields,
        "diploma-pharmacy": DiplomaEngineeringFields,
        "diploma-computer-it": DiplomaEngineeringFields,
        "arts-graduation": DegreeFields,
        "commerce-graduation": DegreeFields,
        "science-graduation": DegreeFields,
        "arts-pg": DegreeFields,
        "commerce-pg": DegreeFields,
        "science-pg": DegreeFields,
        "courses-nursing": NursingFields,
        "courses-mbbs": (props) => <MBBSCourseFields {...props} ladderFieldName="course_ladder" />,
        "courses-pharmacy": (props) => <MBBSCourseFields {...props} ladderFieldName="pharmacy_ladder" />,
        "paramedical-diploma": (props) => <MBBSCourseFields {...props} ladderFieldName="diploma_ladder" />,
        "paramedical-ug": (props) => <MBBSCourseFields {...props} ladderFieldName="paramedical_ladder" />,
        "medical-pg": (props) => <MBBSCourseFields {...props} ladderFieldName="pg_ladder" />,
        "allied-health": (props) => <MBBSCourseFields {...props} ladderFieldName="allied_ladder" />,
        "courses-ayush": AYUSHFields,
        "naturopathy-yoga": NaturopathyYogaFields,

        "courses-btech": (props) => <GenericTechFields 
            {...props} 
            ladderFieldName="btech_ladder" 
            hasWhoShouldDo={false} 
            hasSpecialisations={false} 
            hasCoreAreas={false}
            pageTitle="B.Tech" 
        />,
        "courses-barch": (props) => <GenericTechFields 
            {...props} 
            ladderFieldName="barch_ladder" 
            hasWhoShouldDo={false} 
            hasSpecialisations={false} 
            hasCoreAreas={false}
            pageTitle="B.Arch" 
        />,
        "courses-mtech": (props) => <GenericTechFields 
            {...props} 
            ladderFieldName="mtech_ladder" 
            hasWhoShouldDo={true} 
            hasSpecialisations={false} 
            hasCoreAreas={true}
            pageTitle="M.Tech" 
        />,
        "courses-bca": (props) => <GenericTechFields 
            {...props} 
            ladderFieldName="bca_ladder" 
            hasWhoShouldDo={true} 
            hasSpecialisations={false} 
            hasCoreAreas={true}
            pageTitle="BCA" 
        />,
        "courses-bsc-it": (props) => <GenericTechFields 
            {...props} 
            ladderFieldName="bsc_it_ladder" 
            hasWhoShouldDo={true} 
            hasSpecialisations={false} 
            hasCoreAreas={true}
            pageTitle="B.Sc CS/IT" 
        />,
        "courses-mca": (props) => <GenericTechFields 
            {...props} 
            ladderFieldName="mca_ladder" 
            hasWhoShouldDo={true} 
            hasSpecialisations={true} 
            hasCoreAreas={true}
            pageTitle="MCA" 
        />,
        "courses-msc-it": (props) => <GenericTechFields 
            {...props} 
            ladderFieldName="msc_it_ladder" 
            hasWhoShouldDo={true} 
            hasSpecialisations={true} 
            hasCoreAreas={true}
            pageTitle="M.Sc CS/IT" 
        />,

        // Business pages - only B.Com, M.Com, BBA, MBA
        "courses-bcom": (props) => <GenericBusinessFields 
            {...props} 
            ladderFieldName="bcom_ladder" 
            hasWhoShouldDo={false} 
            hasSpecialisations={false} 
            hasCoreAreas={true} 
            hasTypicalRoles={true} 
            hasNextStepOptions={true} 
            hasBusinessTypes={true}
            hasAdmissionNotes={false}
            pageTitle="B.Com" 
        />,
        "courses-mcom": (props) => <GenericBusinessFields 
            {...props} 
            ladderFieldName="mcom_ladder" 
            hasWhoShouldDo={true} 
            hasSpecialisations={false} 
            hasCoreAreas={true} 
            hasTypicalRoles={false} 
            hasNextStepOptions={true} 
            hasBusinessTypes={false}
            hasAdmissionNotes={false}
            pageTitle="M.Com" 
        />,
        "courses-bba": (props) => <GenericBusinessFields 
            {...props} 
            ladderFieldName="bba_ladder" 
            hasWhoShouldDo={true} 
            hasSpecialisations={true} 
            hasCoreAreas={true} 
            hasTypicalRoles={true} 
            hasNextStepOptions={true} 
            hasBusinessTypes={false}
            hasAdmissionNotes={false}
            pageTitle="BBA" 
        />,
        "courses-mba": (props) => <GenericBusinessFields 
            {...props} 
            ladderFieldName="mba_ladder" 
            hasWhoShouldDo={true} 
            hasSpecialisations={true} 
            hasCoreAreas={false} 
            hasTypicalRoles={true} 
            hasNextStepOptions={false} 
            hasBusinessTypes={false}
            hasAdmissionNotes={false}
            pageTitle="MBA" 
        />,

        "course-finance": FinanceFields,
        "courses-professional-commerce": ProfessionalCommerceFields,

    };

    // Find selected tab
    const selectedTab = useMemo(() => {
        if (!tabs.length || !data.tab_id) return null;
        return tabs.find(t => String(t.id) === String(data.tab_id));
    }, [tabs, data.tab_id]);

    // Find selected section
    const selectedSection = useMemo(() => {
        if (!selectedTab || !selectedTab.children || !data.section_id) return null;
        return selectedTab.children.find(s => String(s.id) === String(data.section_id));
    }, [selectedTab, data.section_id]);

    // Find selected link
    const selectedLink = useMemo(() => {
        if (!selectedSection || !selectedSection.children || !data.link_id) return null;
        return selectedSection.children.find(l => String(l.id) === String(data.link_id));
    }, [selectedSection, data.link_id]);

    // Get sections and links
    const sections = selectedTab?.children || [];
    const links = selectedSection?.children || [];

    // Get the appropriate field component
    const ActiveFields = useMemo(() => {
        const component = fieldComponents[selectedLink?.key] || CourseContentFields;
        console.log('Edit - Active Component:', component.name || 'CourseContentFields');
        return component;
    }, [selectedLink]);

    // Only reset form when link changes and it's a different link than current
    const prevLinkId = React.useRef(data.link_id);

    useEffect(() => {
        if (data.link_id && selectedLink && data.link_id !== prevLinkId.current) {
            console.log('Edit - Link changed, updating form for:', selectedLink);

            setData(
                buildFormData(selectedLink.key, data.tab_id, data.section_id, data.link_id)
            );

            prevLinkId.current = data.link_id;
        }
    }, [data.link_id, selectedLink]);

    // Handle tab change
    const handleTabChange = (e) => {
        const tabId = e.target.value;
        setData({
            ...data,
            tab_id: tabId,
            section_id: "",
            link_id: "",
        });
        prevLinkId.current = null;
    };

    // Handle section change
    const handleSectionChange = (e) => {
        const sectionId = e.target.value;
        setData({
            ...data,
            section_id: sectionId,
            link_id: "",
        });
        prevLinkId.current = null;
    };

    // Handle link change
    const handleLinkChange = (e) => {
        const linkId = e.target.value;
        const link = links.find(l => String(l.id) === String(linkId));

        if (link) {
            setData(buildFormData(link.key, data.tab_id, data.section_id, linkId));
            prevLinkId.current = linkId;
        } else {
            setData({
                ...data,
                link_id: linkId,
            });
            prevLinkId.current = null;
        }
    };

    const submit = (e) => {
        e.preventDefault();

        let submitData = {
            menu_id: menu_id || data.menu_id,
            tab_id: data.tab_id,
            section_id: data.section_id,
            link_id: data.link_id,
            is_active: data.is_active,
        };

        const linkKey = selectedLink?.key;

        // MSME Tool Room
        if (linkKey === "msme-tool-room") {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                long_term_programs: Array.isArray(data.long_term_programs) ? data.long_term_programs : [],
                short_term_courses: Array.isArray(data.short_term_courses) ? data.short_term_courses : [],
                admission_heading: data.admission_heading || "",
                admission_description: data.admission_description || "",
                admission_info: Array.isArray(data.admission_info) ? data.admission_info : [],
                next_steps: Array.isArray(data.next_steps) ? data.next_steps : [],
                cta_button: data.cta_button || {},
                skill_agencies: Array.isArray(data.skill_agencies) ? data.skill_agencies : [],
                sort_order: data.sort_order || 0,
            };
        }
        // Diploma pages
        else if (linkKey && ["diploma-engineering", "diploma-paramedical", "diploma-pharmacy", "diploma-computer-it"].includes(linkKey)) {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                branch_groups: Array.isArray(data.branch_groups) ? data.branch_groups : [],
                post_diploma: Array.isArray(data.post_diploma) ? data.post_diploma : [],
                polytechnic_links: Array.isArray(data.polytechnic_links) ? data.polytechnic_links : [],
                admission_heading: data.admission_heading || "",
                admission_description: data.admission_description || "",
                admission_info: Array.isArray(data.admission_info) ? data.admission_info : [],
                sort_order: data.sort_order || 0,
            };
        }
        // Degree pages
        else if (linkKey && ["arts-graduation", "commerce-graduation", "science-graduation", "arts-pg", "commerce-pg", "science-pg"].includes(linkKey)) {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                subject_families: Array.isArray(data.subject_families) ? data.subject_families : [],
                degree_options: Array.isArray(data.degree_options) ? data.degree_options : [],
                course_groups: Array.isArray(data.course_groups) ? data.course_groups : [],
                after_degree: Array.isArray(data.after_degree) ? data.after_degree : [],
                admission_points: Array.isArray(data.admission_points) ? data.admission_points : [],
                documents: Array.isArray(data.documents) ? data.documents : [],
                careers_snapshot: Array.isArray(data.careers_snapshot) ? data.careers_snapshot : [],
                sort_order: data.sort_order || 0,
            };
        }
        // Nursing
        else if (linkKey === "courses-nursing") {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                nursing_ladder: Array.isArray(data.nursing_ladder) ? data.nursing_ladder : [],
                specialisations: Array.isArray(data.specialisations) ? data.specialisations : [],
                work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                admission_notes: Array.isArray(data.admission_notes) ? data.admission_notes : [],
                common_docs: Array.isArray(data.common_docs) ? data.common_docs : [],
                build_profile: Array.isArray(data.build_profile) ? data.build_profile : [],
                sort_order: data.sort_order || 0,
            };
        }
        // Medical pages (MBBS, Pharmacy, Paramedical, etc.)
        else if (linkKey && ["courses-mbbs", "courses-pharmacy", "paramedical-diploma", "paramedical-ug", "medical-pg", "allied-health"].includes(linkKey)) {
            const ladderFieldMap = {
                'courses-mbbs': 'course_ladder',
                'courses-pharmacy': 'pharmacy_ladder',
                'paramedical-diploma': 'diploma_ladder',
                'paramedical-ug': 'paramedical_ladder',
                'medical-pg': 'pg_ladder',
                'allied-health': 'allied_ladder',
            };
            const ladderField = ladderFieldMap[linkKey] || 'course_ladder';

            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                [ladderField]: Array.isArray(data[ladderField]) ? data[ladderField] : [],
                eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                core_subjects: Array.isArray(data.core_subjects) ? data.core_subjects : [],
                work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                build_profile: Array.isArray(data.build_profile) ? data.build_profile : [],
                sort_order: data.sort_order || 0,
            };
        } else if (linkKey === "courses-ayush") {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                ayush_ladder: Array.isArray(data.ayush_ladder) ? data.ayush_ladder : [],
                ayush_systems: Array.isArray(data.ayush_systems) ? data.ayush_systems : [],
                eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                admission_notes: Array.isArray(data.admission_notes) ? data.admission_notes : [],
                common_docs: Array.isArray(data.common_docs) ? data.common_docs : [],
                build_profile: Array.isArray(data.build_profile) ? data.build_profile : [],
                sort_order: data.sort_order || 0,
            };
        } else if (linkKey === "naturopathy-yoga") {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                naturopathy_ladder: Array.isArray(data.naturopathy_ladder) ? data.naturopathy_ladder : [],
                what_you_do: Array.isArray(data.what_you_do) ? data.what_you_do : [],
                eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                where_you_work: Array.isArray(data.where_you_work) ? data.where_you_work : [],
                admission_notes: Array.isArray(data.admission_notes) ? data.admission_notes : [],
                common_docs: Array.isArray(data.common_docs) ? data.common_docs : [],
                build_profile: Array.isArray(data.build_profile) ? data.build_profile : [],
                sort_order: data.sort_order || 0,
            };
        } else if (linkKey && ["courses-btech", "courses-barch", "courses-mtech", "courses-bca", "courses-bsc-it", "courses-mca", "courses-msc-it"].includes(linkKey)) {
            const ladderFieldMap = {
                'courses-btech': 'btech_ladder',
                'courses-barch': 'barch_ladder',
                'courses-mtech': 'mtech_ladder',
                'courses-bca': 'bca_ladder',
                'courses-bsc-it': 'bsc_it_ladder',
                'courses-mca': 'mca_ladder',
                'courses-msc-it': 'msc_it_ladder',
            };
            const ladderField = ladderFieldMap[linkKey] || 'tech_ladder';

            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                [ladderField]: Array.isArray(data[ladderField]) ? data[ladderField] : [],
                who_should_do: Array.isArray(data.who_should_do) ? data.who_should_do : [],
                core_areas: Array.isArray(data.core_areas) ? data.core_areas : [],
                eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                admission_notes: Array.isArray(data.admission_notes) ? data.admission_notes : [],
                common_docs: Array.isArray(data.common_docs) ? data.common_docs : [],
                build_profile: Array.isArray(data.build_profile) ? data.build_profile : [],
                specialisation_tracks: Array.isArray(data.specialisation_tracks) ? data.specialisation_tracks : [],
                sort_order: data.sort_order || 0,
            };
        } 
        // Business pages - only B.Com, M.Com, BBA, MBA
        else if (linkKey && ["courses-bcom", "courses-mcom", "courses-bba", "courses-mba"].includes(linkKey)) {
            const ladderFieldMap = {
                'courses-bcom': 'bcom_ladder',
                'courses-mcom': 'mcom_ladder',
                'courses-bba': 'bba_ladder',
                'courses-mba': 'mba_ladder',
            };
            const ladderField = ladderFieldMap[linkKey] || 'business_ladder';

            let submitDataBase = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                [ladderField]: Array.isArray(data[ladderField]) ? data[ladderField] : [],
                common_docs: Array.isArray(data.common_docs) ? data.common_docs : [],
                build_profile: Array.isArray(data.build_profile) ? data.build_profile : [],
                sort_order: data.sort_order || 0,
            };

            if (linkKey === "courses-bcom") {
                submitData = {
                    ...submitDataBase,
                    core_areas: Array.isArray(data.core_areas) ? data.core_areas : [],
                    typical_roles: Array.isArray(data.typical_roles) ? data.typical_roles : [],
                    next_step_options: Array.isArray(data.next_step_options) ? data.next_step_options : [],
                    business_types: Array.isArray(data.business_types) ? data.business_types : [],
                    eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                    work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                };
            } else if (linkKey === "courses-mcom") {
                submitData = {
                    ...submitDataBase,
                    core_areas: Array.isArray(data.core_areas) ? data.core_areas : [],
                    who_should_do: Array.isArray(data.who_should_do) ? data.who_should_do : [],
                    next_step_options: Array.isArray(data.next_step_options) ? data.next_step_options : [],
                    eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                    work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                };
            } else if (linkKey === "courses-bba") {
                submitData = {
                    ...submitDataBase,
                    core_areas: Array.isArray(data.core_areas) ? data.core_areas : [],
                    who_should_do: Array.isArray(data.who_should_do) ? data.who_should_do : [],
                    typical_roles: Array.isArray(data.typical_roles) ? data.typical_roles : [],
                    specialisation_tracks: Array.isArray(data.specialisation_tracks) ? data.specialisation_tracks : [],
                    next_step_options: Array.isArray(data.next_step_options) ? data.next_step_options : [],
                    eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                    work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                };
            } else if (linkKey === "courses-mba") {
                submitData = {
                    ...submitDataBase,
                    who_should_do: Array.isArray(data.who_should_do) ? data.who_should_do : [],
                    typical_roles: Array.isArray(data.typical_roles) ? data.typical_roles : [],
                    specialisation_tracks: Array.isArray(data.specialisation_tracks) ? data.specialisation_tracks : [],
                    eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                    work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                };
            }
        }

        else if (linkKey === "course-finance") {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                finance_ladder: Array.isArray(data.finance_ladder) ? data.finance_ladder : [],
                course_options: Array.isArray(data.course_options) ? data.course_options : [],
                typical_roles: Array.isArray(data.typical_roles) ? data.typical_roles : [],
                work_settings: Array.isArray(data.work_settings) ? data.work_settings : [],
                eligibility_notes: Array.isArray(data.eligibility_notes) ? data.eligibility_notes : [],
                common_docs: Array.isArray(data.common_docs) ? data.common_docs : [],
                build_profile: Array.isArray(data.build_profile) ? data.build_profile : [],
                sort_order: data.sort_order || 0,
            };
        } 
        else if (linkKey === "courses-professional-commerce") {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                professional_commerce_ladder: Array.isArray(data.professional_commerce_ladder) ? data.professional_commerce_ladder : [],
                who_should_do: Array.isArray(data.who_should_do) ? data.who_should_do : [],
                choose_right: Array.isArray(data.choose_right) ? data.choose_right : [],
                common_prep: Array.isArray(data.common_prep) ? data.common_prep : [],
                important_notes: Array.isArray(data.important_notes) ? data.important_notes : [],
                common_docs: Array.isArray(data.common_docs) ? data.common_docs : [],
                build_profile: Array.isArray(data.build_profile) ? data.build_profile : [],
                sort_order: data.sort_order || 0,
            };
        }


        // Default course content
        else {
            submitData = {
                ...submitData,
                intro_heading: data.intro_heading || "",
                intro_description: data.intro_description || "",
                intro_description_secondary: data.intro_description_secondary || "",
                snapshot: data.snapshot || {},
                sectors: Array.isArray(data.sectors) ? data.sectors : [],
                admission_heading: data.admission_heading || "",
                admission_description: data.admission_description || "",
                admission_info: Array.isArray(data.admission_info) ? data.admission_info : [],
                next_steps: Array.isArray(data.next_steps) ? data.next_steps : [],
                skill_agencies: Array.isArray(data.skill_agencies) ? data.skill_agencies : [],
                sort_order: data.sort_order || 0,
            };
        }

        console.log("Edit - Submitting data:", submitData);
        put(`/admin/course-content/${courseContent.id}`, submitData);
    };

    return (
        <AdminLayout header="Edit Course Content">
            <Head title="Edit Course Content" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit Course Content</h3>
                            </div>

                            <form onSubmit={submit}>
                                <div className="card-body">
                                    <input
                                        type="hidden"
                                        name="menu_id"
                                        value={menu_id || data.menu_id || ""}
                                    />

                                    {/* Menu Linking */}
                                    <div className="row g-4 mb-4">
                                        <div className="col-12">
                                            <h5 className="mb-3">Menu Linking</h5>
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Tab</label>
                                            <select
                                                className="form-control"
                                                value={data.tab_id || ""}
                                                onChange={handleTabChange}
                                            >
                                                <option value="">Select Tab</option>
                                                {tabs.map((tab) => (
                                                    <option key={tab.id} value={tab.id}>
                                                        {tab.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors?.tab_id && <div className="text-danger small">{errors.tab_id}</div>}
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Section</label>
                                            <select
                                                className="form-control"
                                                value={data.section_id || ""}
                                                onChange={handleSectionChange}
                                                disabled={!data.tab_id}
                                            >
                                                <option value="">Select Section</option>
                                                {sections.map((section) => (
                                                    <option key={section.id} value={section.id}>
                                                        {section.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors?.section_id && (
                                                <div className="text-danger small">{errors.section_id}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Link</label>
                                            <select
                                                className="form-control"
                                                value={data.link_id || ""}
                                                onChange={handleLinkChange}
                                                disabled={!data.section_id}
                                            >
                                                <option value="">Select Link</option>
                                                {links.map((link) => (
                                                    <option key={link.id} value={link.id}>
                                                        {link.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors?.link_id && <div className="text-danger small">{errors.link_id}</div>}
                                        </div>
                                    </div>

                                    {/* Content Fields */}
                                    {data.link_id && selectedLink ? (
                                        <div key={selectedLink.id}>
                                            <ActiveFields
                                                data={data}
                                                setData={setData}
                                                errors={errors}
                                                tabs={tabs}
                                            />
                                        </div>
                                    ) : (
                                        <div className="alert alert-info">
                                            <i className="fas fa-info-circle me-2"></i>
                                            Please select a Tab, Section, and Link to start editing content.
                                        </div>
                                    )}
                                </div>

                                <div className="card-footer">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing || !data.link_id}
                                    >
                                        {processing ? "Updating..." : "Update"}
                                    </button>

                                    <Link
                                        href="/admin/course-content"
                                        className="btn btn-default ml-2"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default CourseEdit;