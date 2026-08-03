--
-- PostgreSQL database dump
--

\restrict GSjPJerLQhbo04I4B3GyX4ZyTvhOJPl95noSXMqFY4aGBOCc1h1dETgYjXxF3ak

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
-- Name: scholarship_overviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.scholarship_overviews (
    id bigint NOT NULL,
    hero_title character varying(255) DEFAULT 'Scholarships & Educational Support'::character varying NOT NULL,
    hero_breadcrumb character varying(255) DEFAULT 'Scholarships → Overview'::character varying NOT NULL,
    intro_title character varying(255) DEFAULT 'How this section helps you'::character varying NOT NULL,
    intro_subtitle character varying(255),
    paragraph_1 text,
    paragraph_2 text,
    stats json,
    quick_access_items json,
    quick_access_note text,
    rules_left json,
    rules_right json,
    table_note text,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    schemes json
);


ALTER TABLE public.scholarship_overviews OWNER TO postgres;

--
-- Name: scholarship_overviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.scholarship_overviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.scholarship_overviews_id_seq OWNER TO postgres;

--
-- Name: scholarship_overviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.scholarship_overviews_id_seq OWNED BY public.scholarship_overviews.id;


--
-- Name: scholarship_overviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scholarship_overviews ALTER COLUMN id SET DEFAULT nextval('public.scholarship_overviews_id_seq'::regclass);


--
-- Data for Name: scholarship_overviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.scholarship_overviews (id, hero_title, hero_breadcrumb, intro_title, intro_subtitle, paragraph_1, paragraph_2, stats, quick_access_items, quick_access_note, rules_left, rules_right, table_note, is_active, created_at, updated_at, schemes) FROM stdin;
1	Scholarships & Educational Support	Scholarships → Overview	How this section helps you rtretrtr	A single place to understand all major school-level scholarships and who they are meant for.	Scholarships reduce the financial burden on families so that students can stay in school and progress to higher studies. This section highlights the main schemes available from school level up to research, with a special focus on minority and economically weaker students.	You will find a clear view of eligibility, income limits, study level, and where to apply. Each detailed page in the tabs above explains one scheme at a time so that parents, students and counsellors can make confident decisions.	[{"label":"Core schemes","value":"4","meta":"Pre-Matric, Post-Matric, Merit-cum-Means"},{"label":"Study coverage","value":"Class IX \\u2192 Ph.D.","meta":"From school to research"},{"label":"Family income","value":"\\u20b91\\u20132.5 Lakh","meta":"Depending on the scheme"}]	[{"text":"Apply online on the National Scholarship Portal","link_url":"https:\\/\\/scholarships.gov.in","link_label":"scholarships.gov.in"},{"text":"dgfrgrfgt","link_url":"https:\\/\\/scholarships.gov.in","link_label":"scholarships.gov.in"}]	Use this overview to understand options, then open the specific tab above for full details before applying.	["Applications are submitted online. For most schemes, the primary gateway is the National Scholarship Portal.","The student must be an Indian citizen and a permanent resident of the state where the application is filed.","Aadhaar-linked bank accounts are preferred to enable direct transfer of the scholarship amount.","Only one active bank account should be used for a single student's registration.","In general, a minimum of 50% marks in the last annual examination is required (scheme-wise variations apply)."]	["Students who already received scholarship earlier and have a permanent ID should apply as renewal candidates.","One mobile number is mapped to one registration; avoid using shared or temporary numbers.","A fixed percentage of the total scholarship pool is reserved for girl students.","Distance-education or correspondence courses are generally not covered under these schemes.","A student can receive scholarship from only one government scheme for a given period."]	Exact eligibility and amounts can change over time. Always follow the latest official notification on the relevant portal.	t	2026-07-27 06:41:03	2026-07-27 07:01:00	[{"no":1,"name":"Pre Matric","class_of_study":"Class IX \\u2013 X","website":"https:\\/\\/scholarships.gov.in","min_marks":"50% in last exam (Class I exempt)","income":"Up to \\u20b91 Lakh"},{"no":2,"name":"Post Matric","class_of_study":"XI Upto Ph.D.","website":"https:\\/\\/scholarships.gov.in","min_marks":"50% in last exam","income":"Up to \\u20b92 Lakh"},{"no":3,"name":"Merit-cum-Means","class_of_study":"Specified Technical & Professional courses","website":"https:\\/\\/scholarships.gov.in","min_marks":"50% in last exam","income":"Up to \\u20b92.5 Lakh"}]
\.


--
-- Name: scholarship_overviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.scholarship_overviews_id_seq', 1, true);


--
-- Name: scholarship_overviews scholarship_overviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scholarship_overviews
    ADD CONSTRAINT scholarship_overviews_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict GSjPJerLQhbo04I4B3GyX4ZyTvhOJPl95noSXMqFY4aGBOCc1h1dETgYjXxF3ak

