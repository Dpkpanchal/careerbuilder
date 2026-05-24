/**
 * Maps old Laravel named routes (commented out in web.php) to their
 * equivalent slug-based URLs. Used as a fallback shim in app.jsx so
 * legacy JSX pages that call route('old.name') still work without changes.
 */
const LEGACY_ROUTE_MAP = {
    // ── Careers: By Stage ─────────────────────────────────────────────
    'After.Class.Eight':            '/careers/after-class-8',
    'After.Class.Tenth':            '/careers/after-class-10',
    'After.Class.Twelve.Arts':      '/careers/after-class-12-arts',
    'After.Class.Twelve.Commerce':  '/careers/after-class-12-commerce',
    'After.Class.Twelve.Science':   '/careers/after-class-12-science',
    'After.Graduation':             '/careers/after-graduation',
    'After.Class.Twelve.Engineering': '/careers/after-class-12-engineering',
    'After.Class.Twelve.Medical':   '/careers/after-class-12-medical',

    // ── Careers: By Profession ────────────────────────────────────────
    'career.engineering':    '/careers/engineering',
    'career.medical':        '/careers/medical-doctor-mbbs',
    'career.nursing':        '/careers/nursing-allied',
    'career.pharmacy':       '/careers/pharmacy',
    'career.ca':             '/careers/chartered-accountant-ca',
    'career.law':            '/careers/law-llb-integrated',
    'career.design':         '/careers/design-fashion-graphic-arch',
    'career.hospitality':    '/careers/hospitality-tourism',
    'career.media':          '/careers/media-journalism',
    'career.civilServices':  '/careers/civil-services',
    'career.defence':        '/careers/defence-forces',

    // ── Careers: Future Paths ─────────────────────────────────────────
    'career.research':        '/careers/research-phd',
    'career.entrepreneurship':'/careers/entrepreneurship-startups',
    'career.socialWork':      '/careers/social-work-ngos',

    // ── Courses: Vocational ───────────────────────────────────────────
    'courses.vocational.class8plus':  '/courses/class-8-vocational-trades',
    'courses.vocational.class10plus': '/courses/class-10-vocational-trades',
    'courses.vocational.iti':         '/courses/iti-itc-trades',
    'courses.vocational.msme':        '/courses/msme-tool-room-courses',

    // ── Courses: Diploma ──────────────────────────────────────────────
    'courses.diploma.engineering': '/courses/diploma-in-engineering-polytechnic',
    'courses.diploma.paramedical': '/courses/diploma-in-paramedical',
    'courses.diploma.pharmacy':    '/courses/diploma-in-pharmacy-dpharm',
    'courses.diploma.it':          '/courses/diploma-in-computer-it',

    // ── Courses: Degree (Graduation) ──────────────────────────────────
    'courses.degree.graduation.arts':     '/courses/arts-graduation-courses-ba-allied',
    'courses.degree.graduation.commerce': '/courses/commerce-graduation-courses-bcom-allied',
    'courses.degree.graduation.science':  '/courses/science-graduation-courses-bsc-allied',
    'courses.degree.postgraduation.arts':     '/courses/arts-pg-courses-ma-msw-allied',
    'courses.degree.postgraduation.commerce': '/courses/commerce-pg-courses-mcom-allied',
    'courses.degree.postgraduation.science':  '/courses/science-pg-courses-msc-allied',

    // ── Courses: Medical & Paramedical ────────────────────────────────
    'courses.nursing':              '/courses/nursing-anm-gnm-bsc-nursing',
    'courses.medical.mbbs':         '/courses/medical/mbbs',
    'courses.pharmacy':             '/courses/pharmacy-dpharm-bpharm-mpharm-pharmd',
    'courses.paramedical.diploma':  '/courses/paramedical-diplomas',
    'courses.paramedical.ug':       '/courses/ug-paramedical-degrees',
    'courses.medical.pg':           '/courses/medical/pg',
    'courses.medical.alliedHealth': '/courses/medical/allied-health',
    'courses.ayush':                '/courses/medical/ayush',
    'courses.naturopathy.yoga':     '/courses/medical/naturopathy-yoga',

    // ── Courses: Engineering & Tech ───────────────────────────────────
    'courses.btech':   '/courses/btech-be-programs',
    'courses.barch':   '/courses/barch',
    'courses.mtech':   '/courses/mtech',
    'courses.bca':     '/courses/bca',
    'courses.bsc.it':  '/courses/bsc-computer-science-it',
    'courses.mca':     '/courses/mca',
    'courses.msc.it':  '/courses/msc',
    'courses.msme':    '/courses/msme-tool-room-courses',

    // ── Courses: Business & Management ───────────────────────────────
    'courses.bcom':    '/courses/bcom-allied-programs',
    'courses.mcom':    '/courses/mcom',
    'courses.bba':     '/courses/bba',
    'courses.mba':     '/courses/mba-pgdm',
    'courses.finance': '/courses/finance-taxation-accounting',
    'courses.professional': '/courses/finance-taxation-accounting',

    // ── Colleges: National Institutes ────────────────────────────────
    'colleges.iits':   '/colleges/iits-indian-institutes-of-technology',
    'colleges.nits':   '/colleges/nits-national-institutes-of-technology',
    'colleges.iims':   '/colleges/iims-management-institutes',
    'colleges.aiims':  '/colleges/aiims-medical-institutes',
    'colleges.design': '/colleges/nift-nid-fashion-design',
    'colleges.nlu':    '/colleges/national-law-universities-nlus',

    // ── Colleges: Universities ────────────────────────────────────────
    'colleges.central': '/colleges/central-universities',
    'colleges.state':   '/colleges/state-universities',
    'colleges.private': '/colleges/state-universities',
    'colleges.open':    '/colleges/open-distance-universities-ignou-nsou',

    // ── Colleges: By Field ────────────────────────────────────────────
    'colleges.engineering':      '/colleges/engineering-colleges',
    'colleges.medical':          '/colleges/medical-paramedical-colleges',
    'colleges.nursing':          '/colleges/nursing-colleges',
    'colleges.pharmacy':         '/colleges/pharmacy-colleges',
    'colleges.management':       '/colleges/management-business-colleges',
    'colleges.law':              '/colleges/law-colleges',
    'colleges.agriculture':      '/colleges/agriculture-veterinary-colleges',
    'colleges.teacherTraining':  '/colleges/teacher-training-bed-colleges',

    // ── Colleges: Vocational & Technical ─────────────────────────────
    'colleges.iti':         '/colleges/iti-centres-govt-private',
    'colleges.polytechnic': '/colleges/polytechnic-colleges',
    'colleges.msme':        '/colleges/msme-tool-room-institutes',
    'colleges.skill':       '/colleges/skill-development-centres',

    // ── Exams: Engineering & Tech ─────────────────────────────────────
    'exams.engineering.national':     '/exams/national-level-eg-jee-main-jee-advanced',
    'exams.engineering.state':        '/exams/state-level-wbjee-etc',
    'exams.engineering.university':   '/exams/university-level-exams',
    'exams.engineering.mca':          '/exams/mca',
    'exams.engineering.architecture': '/exams/architecture',

    // ── Exams: Medical ────────────────────────────────────────────────
    'exams.medical.national': '/exams/national-level-eg-neet-ug',
    'exams.medical.state':    '/exams/state-level-medical-exams',
    'exams.medical.nursing':  '/exams/university-level-medical-exams',
    'exams.medical.pharmacy': '/exams/pharmacy',
    'exams.medical.pg':       '/exams/pg',

    // ── Exams: Hotel Management ───────────────────────────────────────
    'exams.hotelManagement.national':   '/exams/hotel-management/national',
    'exams.hotelManagement.state':      '/exams/hotel-management/state',
    'exams.hotelManagement.university': '/exams/hotel-management/university',
    'exams.hotelManagement.hotelRun':   '/exams/hotel-management/hotel-run',

    // ── Exams: Law / Management / Finance ────────────────────────────
    'exams.law.law':            '/exams/law/law',
    'exams.law.management':     '/exams/law/management',
    'exams.law.financeAccounts':'/exams/law/finance-accounts',

    // ── Exams: Design / Media / Humanities ───────────────────────────
    'exams.design.fashionDesign': '/exams/design/design',
    'exams.design.massComm':      '/exams/design/mass-comm',
    'exams.design.humanities':    '/exams/design/humanities',
    'exams.design.mathematics':   '/exams/design/mathematics',

    // ── Exams: Agri / Defence / School ───────────────────────────────
    'exams.agri.agriculture': '/exams/agri/agriculture',
    'exams.agri.veterinary':  '/exams/agri/veterinary',
    'exams.agri.defence':     '/exams/agri/defence',
    'exams.agri.school':      '/exams/agri/school',

    // ── Landing pages ─────────────────────────────────────────────────
    'landing.medical':   '/courses/medical/mbbs',
    'landing.civil':     '/careers/civil-services',
    'landing.commerce':  '/courses/mba-pgdm',
    'landing.defence':   '/careers/defence-forces',
    'engineering.medical': '/careers/engineering',
    'landing.law':       '/careers/law-llb-integrated',
    'landing.media':     '/careers/media-journalism',
};

export default LEGACY_ROUTE_MAP;
