--
-- PostgreSQL database dump
--

\restrict gsnWgix877sBchPnmbOrUBMsnVkbdjKAoJywYLXK16ztTQzUcCoHyB3KAUpHpkj

-- Dumped from database version 14.19 (Homebrew)
-- Dumped by pg_dump version 14.19 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: menus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menus (
    id bigint NOT NULL,
    key character varying(255) NOT NULL,
    label character varying(255) NOT NULL,
    href character varying(255),
    route_name character varying(255),
    slug character varying(255),
    tabbed boolean DEFAULT false NOT NULL,
    no_dropdown boolean DEFAULT false NOT NULL,
    parent_id bigint,
    type character varying(255) DEFAULT 'link'::character varying NOT NULL,
    sort_order smallint DEFAULT '0'::smallint NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    deleted_at timestamp(0) without time zone,
    CONSTRAINT menus_type_check CHECK (((type)::text = ANY ((ARRAY['menu'::character varying, 'tab'::character varying, 'section'::character varying, 'link'::character varying])::text[])))
);


ALTER TABLE public.menus OWNER TO postgres;

--
-- Name: menus_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menus_id_seq OWNER TO postgres;

--
-- Name: menus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menus_id_seq OWNED BY public.menus.id;


--
-- Name: menus id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menus ALTER COLUMN id SET DEFAULT nextval('public.menus_id_seq'::regclass);


--
-- Data for Name: menus; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menus (id, key, label, href, route_name, slug, tabbed, no_dropdown, parent_id, type, sort_order, is_active, created_at, updated_at, deleted_at) FROM stdin;
1	careers	Careers	\N	\N	\N	t	f	\N	menu	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
2	by-stage	By Stage	\N	\N	\N	f	f	1	tab	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
3	choose-by-stage	Choose by Class / Stage	\N	\N	\N	f	f	2	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
4	after-class-8	After Class 8	\N	\N	careers/after-class-8	f	f	3	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
5	after-class-10	After Class 10	\N	\N	careers/after-class-10	f	f	3	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
6	after-class-12-arts	After Class 12 • Arts	\N	\N	careers/after-class-12-arts	f	f	3	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
7	after-class-12-commerce	After Class 12 • Commerce	\N	\N	careers/after-class-12-commerce	f	f	3	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
8	after-class-12-science	After Class 12 • Science	\N	\N	careers/after-class-12-science	f	f	3	link	4	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
9	after-graduation	After Graduation	\N	\N	careers/after-graduation	f	f	3	link	5	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
10	after-class-12-eng	After Class 12 • Engineering	\N	\N	careers/after-class-12-engineering	f	f	3	link	6	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
11	after-class-12-medical	After Class 12 • Medical/Paramedical	\N	\N	careers/after-class-12-medical	f	f	3	link	7	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
12	by-profession	By Profession	\N	\N	\N	f	f	1	tab	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
13	popular-professional-paths	Popular Professional Paths	\N	\N	\N	f	f	12	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
14	career-engineering	Engineering	\N	\N	careers/engineering	f	f	13	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
15	career-medical	Medical • Doctor (MBBS)	\N	\N	careers/medical-doctor-mbbs	f	f	13	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
16	career-nursing	Nursing & Allied Health	\N	\N	careers/nursing-allied	f	f	13	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
17	career-pharmacy	Pharmacy	\N	\N	careers/pharmacy	f	f	13	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
18	career-ca	Chartered Accountant (CA)	\N	\N	careers/chartered-accountant-ca	f	f	13	link	4	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
19	career-law	Law (LLB, Integrated)	\N	\N	careers/law-llb-integrated	f	f	13	link	5	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
20	career-design	Design (Fashion, Graphic, Arch.)	\N	\N	careers/design-fashion-graphic-arch	f	f	13	link	6	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
21	career-hospitality	Hospitality & Tourism	\N	\N	careers/hospitality-tourism	f	f	13	link	7	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
22	career-media	Media & Journalism	\N	\N	careers/media-journalism	f	f	13	link	8	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
23	career-civil-services	Civil Services	\N	\N	careers/civil-services	f	f	13	link	9	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
24	career-defence	Defence Forces	\N	\N	careers/defence-forces	f	f	13	link	10	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
25	future-paths	Future & Alternative Paths	\N	\N	\N	f	f	1	tab	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
26	long-term-alternative	Long-Term & Alternative Careers	\N	\N	\N	f	f	25	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
27	career-research	Research & PhD	\N	\N	careers/research-phd	f	f	26	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
28	career-entrepreneurship	Entrepreneurship / Startups	\N	\N	careers/entrepreneurship-startups	f	f	26	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
29	career-social-work	Social Work / NGOs	\N	\N	careers/social-work-ngos	f	f	26	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
30	courses	Courses	\N	\N	\N	t	f	\N	menu	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
31	vocational-skill	Vocational & Skill	\N	\N	\N	f	f	30	tab	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
32	vocational-skill-courses	Vocational & Skill Courses	\N	\N	\N	f	f	31	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
33	class8plus-vocational	Class 8+ Vocational Trades	\N	\N	courses/class-8-vocational-trades	f	f	32	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
34	class10plus-vocational	Class 10+ Vocational Trades	\N	\N	courses/class-10-vocational-trades	f	f	32	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
35	iti-itc-trades	ITI & ITC Trades	\N	\N	courses/iti-itc-trades	f	f	32	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
36	msme-tool-room	MSME Tool Room Courses	\N	\N	courses/msme-tool-room-courses	f	f	32	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
37	diploma-poly	Diploma & Polytechnic	\N	\N	\N	f	f	30	tab	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
38	diploma-programs	Diploma & Polytechnic Programs	\N	\N	\N	f	f	37	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
39	diploma-engineering	Diploma in Engineering (Polytechnic)	\N	\N	courses/diploma-in-engineering-polytechnic	f	f	38	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
40	diploma-paramedical	Diploma in Paramedical	\N	\N	courses/diploma-in-paramedical	f	f	38	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
41	diploma-pharmacy	Diploma in Pharmacy (D.Pharm)	\N	\N	courses/diploma-in-pharmacy-dpharm	f	f	38	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
42	diploma-computer-it	Diploma in Computer / IT	\N	\N	courses/diploma-in-computer-it	f	f	38	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
43	streamlined-degree	Streamlined Degree Courses	\N	\N	\N	f	f	30	tab	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
44	graduation-courses	Graduation Courses (After Class 12)	\N	\N	\N	f	f	43	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
45	arts-graduation	Arts Graduation Courses (BA & Allied)	\N	\N	courses/arts-graduation-courses-ba-allied	f	f	44	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
46	commerce-graduation	Commerce Graduation Courses (B.Com & Allied)	\N	\N	courses/commerce-graduation-courses-bcom-allied	f	f	44	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
47	science-graduation	Science Graduation Courses (B.Sc & Allied)	\N	\N	courses/science-graduation-courses-bsc-allied	f	f	44	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
48	postgraduation-courses	Post Graduation Courses	\N	\N	\N	f	f	43	section	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
49	arts-pg	Arts PG Courses (MA, MSW & Allied)	\N	\N	courses/arts-pg-courses-ma-msw-allied	f	f	48	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
50	commerce-pg	Commerce PG Courses (M.Com & Allied)	\N	\N	courses/commerce-pg-courses-mcom-allied	f	f	48	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
51	science-pg	Science PG Courses (M.Sc & Allied)	\N	\N	courses/science-pg-courses-msc-allied	f	f	48	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
52	medical-paramedical	Medical & Paramedical	\N	\N	\N	f	f	30	tab	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
53	core-medical-nursing	Core Medical & Nursing	\N	\N	\N	f	f	52	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
54	courses-nursing	Nursing (ANM / GNM / B.Sc / M.Sc)	\N	\N	courses/nursing-anm-gnm-bsc-nursing	f	f	53	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
55	courses-mbbs	MBBS & Core Medical Degrees	\N	\N	courses/medical/mbbs	f	f	53	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
56	paramedical-allied	Paramedical & Allied Health	\N	\N	\N	f	f	52	section	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
57	paramedical-diploma	Diploma Paramedical Courses (After 10)	\N	\N	courses/paramedical-diplomas	f	f	56	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
58	paramedical-ug	UG Paramedical Degrees (After 10+2)	\N	\N	courses/ug-paramedical-degrees	f	f	56	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
59	medical-pg	PG Paramedical Courses	\N	\N	courses/medical/pg	f	f	56	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
60	allied-health	Allied Health Sciences (Physio, MLT, Radiology, OT)	\N	\N	courses/medical/allied-health	f	f	56	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
61	pharmacy-section	Pharmacy	\N	\N	\N	f	f	52	section	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
62	courses-pharmacy	Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)	\N	\N	courses/pharmacy-dpharm-bpharm-mpharm-pharmd	f	f	61	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
63	ayush-alternative	AYUSH & Alternative Medicine	\N	\N	\N	f	f	52	section	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
64	courses-ayush	AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)	\N	\N	courses/medical/ayush	f	f	63	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
65	naturopathy-yoga	Naturopathy & Yoga	\N	\N	courses/medical/naturopathy-yoga	f	f	63	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
66	engineering-it	Engineering, Technology & IT	\N	\N	\N	f	f	30	tab	4	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
67	engineering-tech-section	Engineering & Technology	\N	\N	\N	f	f	66	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
68	courses-btech	B.Tech / B.E Programs	\N	\N	courses/btech-be-programs	f	f	67	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
69	courses-barch	B.Arch	\N	\N	courses/barch	f	f	67	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
70	courses-mtech	M.Tech	\N	\N	courses/mtech	f	f	67	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
71	computer-it-section	Computer & IT	\N	\N	\N	f	f	66	section	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
72	courses-bca	BCA	\N	\N	courses/bca	f	f	71	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
73	courses-bsc-it	B.Sc Computer Science / IT	\N	\N	courses/bsc-computer-science-it	f	f	71	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
74	courses-mca	MCA	\N	\N	courses/mca	f	f	71	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
75	courses-msc-it	M.Sc Computer Science / IT	\N	\N	courses/msc	f	f	71	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
76	business-management	Business & Management	\N	\N	\N	f	f	30	tab	5	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
77	commerce-business-section	Commerce & Business	\N	\N	\N	f	f	76	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
78	courses-bcom	B.Com & Allied Programs	\N	\N	courses/bcom-allied-programs	f	f	77	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
79	courses-mcom	M.Com & PG Commerce	\N	\N	courses/mcom	f	f	77	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
80	courses-bba	BBA & UG Management	\N	\N	courses/bba	f	f	77	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
81	courses-mba	MBA / PGDM	\N	\N	courses/mba-pgdm	f	f	77	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
82	courses-finance	CA / CS / CMA (Professional Commerce)	\N	\N	courses/finance-taxation-accounting	f	f	77	link	4	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
83	colleges	Colleges	\N	\N	\N	t	f	\N	menu	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
84	national-institutes	National Institutes	\N	\N	\N	f	f	83	tab	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
85	national-importance	Institutes of National Importance	\N	\N	\N	f	f	84	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
86	colleges-iits	IITs – Indian Institutes of Technology	\N	\N	colleges/iits-indian-institutes-of-technology	f	f	85	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
87	colleges-nits	NITs – National Institutes of Technology	\N	\N	colleges/nits-national-institutes-of-technology	f	f	85	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
88	colleges-iims	IIMs – Management Institutes	\N	\N	colleges/iims-management-institutes	f	f	85	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
89	colleges-aiims	AIIMS – Medical Institutes	\N	\N	colleges/aiims-medical-institutes	f	f	85	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
90	colleges-design	NIFT / NID – Fashion & Design	\N	\N	colleges/nift-nid-fashion-design	f	f	85	link	4	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
91	colleges-nlu	National Law Universities (NLUs)	\N	\N	colleges/national-law-universities-nlus	f	f	85	link	5	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
92	universities	Universities	\N	\N	\N	f	f	83	tab	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
93	university-types	Types of Universities	\N	\N	\N	f	f	92	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
94	colleges-central	Central Universities	\N	\N	colleges/central-universities	f	f	93	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
95	colleges-state	State Universities	\N	\N	colleges/state-universities	f	f	93	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
96	colleges-open	Open & Distance Universities (IGNOU, NSOU...)	\N	\N	colleges/open-distance-universities-ignou-nsou	f	f	93	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
97	by-field	By Field of Study	\N	\N	\N	f	f	83	tab	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
98	stream-colleges	Stream-wise Colleges	\N	\N	\N	f	f	97	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
99	colleges-engineering	Engineering Colleges	\N	\N	colleges/engineering-colleges	f	f	98	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
100	colleges-medical	Medical & Paramedical Colleges	\N	\N	colleges/medical-paramedical-colleges	f	f	98	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
101	colleges-nursing	Nursing Colleges	\N	\N	colleges/nursing-colleges	f	f	98	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
102	colleges-pharmacy	Pharmacy Colleges	\N	\N	colleges/pharmacy-colleges	f	f	98	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
103	colleges-management	Management & Business Colleges	\N	\N	colleges/management-business-colleges	f	f	98	link	4	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
104	colleges-law	Law Colleges	\N	\N	colleges/law-colleges	f	f	98	link	5	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
105	colleges-agriculture	Agriculture & Veterinary Colleges	\N	\N	colleges/agriculture-veterinary-colleges	f	f	98	link	6	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
106	colleges-teacher-training	Teacher Training / B.Ed Colleges	\N	\N	colleges/teacher-training-bed-colleges	f	f	98	link	7	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
107	vocational-technical	Vocational & Technical Institutes	\N	\N	\N	f	f	83	tab	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
108	vocational-institutes	Vocational, Skill & Technical Institutes	\N	\N	\N	f	f	107	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
109	colleges-iti	ITI Centres (Govt / Private)	\N	\N	colleges/iti-centres-govt-private	f	f	108	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
110	colleges-polytechnic	Polytechnic Colleges	\N	\N	colleges/polytechnic-colleges	f	f	108	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
111	colleges-msme	MSME Tool Room Institutes	\N	\N	colleges/msme-tool-room-institutes	f	f	108	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
112	colleges-skill	Skill Development Centres	\N	\N	colleges/skill-development-centres	f	f	108	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
113	exams	Exams	\N	\N	\N	t	f	\N	menu	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
114	engineering-tech-exams	Engineering & Tech	\N	\N	\N	f	f	113	tab	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
115	engineering-entrance	Engineering Entrance	\N	\N	\N	f	f	114	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
116	exams-eng-national	National Level	\N	\N	exams/national-level-eg-jee-main-jee-advanced	f	f	115	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
117	exams-eng-state	State Level	\N	\N	exams/state-level-wbjee-etc	f	f	115	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
118	exams-eng-university	University Level	\N	\N	exams/university-level-exams	f	f	115	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
119	computer-applications	Computer Applications	\N	\N	\N	f	f	114	section	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
120	exams-eng-mca	MCA Entrance Exams	\N	\N	exams/mca	f	f	119	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
121	architecture-exams	Architecture	\N	\N	\N	f	f	114	section	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
122	exams-eng-arch	Architecture Exams (NATA/AAT/TANATA)	\N	\N	exams/architecture	f	f	121	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
123	medical-allied-exams	Medical & Allied	\N	\N	\N	f	f	113	tab	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
124	medical-entrance	Medical Entrance	\N	\N	\N	f	f	123	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
125	exams-med-national	National Level	\N	\N	exams/national-level-eg-neet-ug	f	f	124	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
126	exams-med-state	State Level (NEET replaced list)	\N	\N	exams/state-level-medical-exams	f	f	124	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
127	nursing-exams	Nursing	\N	\N	\N	f	f	123	section	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
128	exams-med-nursing	Nursing & Allied Exams	\N	\N	exams/university-level-medical-exams	f	f	127	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
129	pg-medical-exams	PG Medical	\N	\N	\N	f	f	123	section	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
130	exams-med-pg	MS/MD & PG Medical Exams	\N	\N	exams/pg	f	f	129	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
131	pharmacy-exams	Pharmacy	\N	\N	\N	f	f	123	section	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
132	exams-med-pharmacy	Pharmacy Entrance Exams	\N	\N	exams/pharmacy	f	f	131	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
133	hospitality-tourism-exams	Hospitality & Tourism	\N	\N	\N	f	f	113	tab	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
134	hotel-management-ug	Hotel Management (UG)	\N	\N	\N	f	f	133	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
135	exams-hotel-national	National Level	\N	\N	exams/hotel-management/national	f	f	134	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
136	exams-hotel-state	State Level	\N	\N	exams/hotel-management/state	f	f	134	link	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
137	exams-hotel-university	University Level	\N	\N	exams/hotel-management/university	f	f	134	link	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
138	exams-hotel-run	Hotel-run / Industry Exams	\N	\N	exams/hotel-management/hotel-run	f	f	134	link	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
139	law-management-finance-exams	Law • Management • Finance	\N	\N	\N	f	f	113	tab	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
140	law-exams-section	Law	\N	\N	\N	f	f	139	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
141	exams-law-law	Law Entrance Exams	\N	\N	exams/law/law	f	f	140	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
142	management-exams-section	Management	\N	\N	\N	f	f	139	section	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
143	exams-law-management	MBA & Management Exams	\N	\N	exams/law/management	f	f	142	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
144	finance-accounts-section	Finance & Accounts	\N	\N	\N	f	f	139	section	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
145	exams-law-finance	CA / CS / CMA / CFA Exams	\N	\N	exams/law/finance-accounts	f	f	144	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
146	design-media-humanities-exams	Design • Media • Humanities	\N	\N	\N	f	f	113	tab	4	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
147	fashion-design-section	Fashion & Design	\N	\N	\N	f	f	146	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
148	exams-design-fashion	Design & Fashion Exams	\N	\N	exams/design/design	f	f	147	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
149	media-mass-comm	Media & Mass Comm	\N	\N	\N	f	f	146	section	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
150	exams-design-masscomm	Mass Comm Exams	\N	\N	exams/design/mass-comm	f	f	149	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
151	humanities-section	Humanities & Social Science	\N	\N	\N	f	f	146	section	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
152	exams-design-humanities	Humanities Exams	\N	\N	exams/design/humanities	f	f	151	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
153	mathematics-section	Mathematics	\N	\N	\N	f	f	146	section	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
154	exams-design-math	Mathematics (UG) Admissions/Tests	\N	\N	exams/design/mathematics	f	f	153	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
155	agri-defence-school-exams	Agri • Defence • School	\N	\N	\N	f	f	113	tab	5	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
156	agriculture-exams	Agriculture	\N	\N	\N	f	f	155	section	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
157	exams-agri-agriculture	Agriculture Exams	\N	\N	exams/agri/agriculture	f	f	156	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
158	veterinary-exams	Veterinary Science	\N	\N	\N	f	f	155	section	1	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
159	exams-agri-vet	Veterinary Exams	\N	\N	exams/agri/veterinary	f	f	158	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
160	defence-marine	Defence & Marine	\N	\N	\N	f	f	155	section	2	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
161	exams-agri-defence	Defence Exams (NDA/CDS/TES etc.)	\N	\N	exams/agri/defence	f	f	160	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
162	school-level-exams	School-level	\N	\N	\N	f	f	155	section	3	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
163	exams-agri-school	School Scholarship / Talent Exams	\N	\N	exams/agri/school	f	f	162	link	0	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
164	forum	Scholarship	\N	scholarship.overview	\N	f	t	\N	menu	4	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
165	about	Counsellors Directory	\N	more.counsellorsDirectory	\N	f	t	\N	menu	5	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
166	jobs	Jobs Opportunities	\N	more.jobsOpportunities	\N	f	t	\N	menu	6	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
167	schemes	Minority Schemes	\N	more.minoritySchemes	\N	f	t	\N	menu	7	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
168	hostel	Waqf Run Hostel	\N	more.waqfRunHostel	\N	f	t	\N	menu	8	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
169	support	Admission Support	\N	more.admissionSupport	\N	f	t	\N	menu	9	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
170	coaching	Coaching Support	\N	more.coachingSupport	\N	f	t	\N	menu	10	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
171	links	Important Web Links	\N	more.importantWebLinks	\N	f	t	\N	menu	11	t	2026-05-08 16:07:40	2026-05-08 16:07:40	\N
\.


--
-- Name: menus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menus_id_seq', 171, true);


--
-- Name: menus menus_key_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_key_unique UNIQUE (key);


--
-- Name: menus menus_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_pkey PRIMARY KEY (id);


--
-- Name: menus menus_parent_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_parent_id_foreign FOREIGN KEY (parent_id) REFERENCES public.menus(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict gsnWgix877sBchPnmbOrUBMsnVkbdjKAoJywYLXK16ztTQzUcCoHyB3KAUpHpkj

