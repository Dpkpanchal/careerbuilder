--
-- PostgreSQL database dump
--

\restrict Ej5xZpB9jFkVTuGz4nfzX6COnWTSix9JmfI46FX2lRUqnpTBEQGeyKzlJTxjgpL

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
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    category character varying(255) NOT NULL,
    date date,
    description text,
    link character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    slug character varying(255)
);


ALTER TABLE public.news OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.news_id_seq OWNER TO postgres;

--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news (id, title, category, date, description, link, created_at, updated_at, slug) FROM stdin;
5	State launches skill training program for college students 11	government	2025-10-03	Joint initiative by Department of Higher Education and WBMDFC to boost employability through certified courses. Aimed at providing easy access to higher education for students from minority communities across West Bengal.	#	2026-05-02 13:58:03	2026-05-20 12:47:26	state-launches-skill-training-program-for-college-students-11
13	WBJEE 2025 registration to begin soon	exams	2025-10-01	West Bengal Joint Entrance Examination Board to open registrations from Oct 15. Aimed at providing easy access to higher education for students from minority communities across West Bengal.	#	2026-05-02 13:58:03	2026-05-20 12:51:53	wbjee-2025-registration-to-begin-soon
15	WBMDFC partners with local universities for mentorship program	career	2025-09-25	Expert mentors to assist minority students with career and higher study guidance. Aimed at providing easy access to higher education for students from minority communities across West Bengal.	#	2026-05-02 13:58:03	2026-05-20 12:51:56	wbmdfc-partners-with-local-universities-for-mentorship-program
8	Pre-Matric Scholarship 2025 applications now open	scholarships	2025-10-02	Eligible minority students from Class I–X can now apply online. Deadline: Nov 15, 2025. Aimed at providing easy access to higher education for students from minority communities across West Bengal.	#	2026-05-02 13:58:03	2026-05-20 12:52:02	pre-matric-scholarship-2025-applications-now-open
12	Madhyamik Exam 2025 dates announced by WBBSE	exams	2025-09-30	The exams will begin from February 10, 2025, with an updated syllabus for select subjects. Aimed at providing easy access to higher education for students from minority communities across West Bengal.	#	2026-05-02 13:58:03	2026-05-20 12:54:26	madhyamik-exam-2025-dates-announced-by-wbbse
2	State launches skill training program for college students	government	2026-05-03	Joint initiative by Department of Higher Education and WBMDFC to boost employability through certified courses. Aimed at providing easy access to higher education for students from minority communities across West Bengal.	\N	2026-05-02 08:18:56	2026-05-20 12:54:46	state-launches-skill-training-program-for-college-students
14	Career Counseling Week 2025 announced by WBMDFC	career	2025-10-04	Workshops across districts to guide students on career planning and government opportunities. Aimed at providing easy access to higher education for students from minority communities across West Bengal.	#	2026-05-02 13:58:03	2026-05-20 12:59:18	career-counseling-week-2025-announced-by-wbmdfc
3	WBMDFC introduces new Minority Education Loan Policy 2025	government	2026-05-04	Aimed at providing easy access to higher education for students from minority communities across West Bengal.	\N	2026-05-02 08:22:34	2026-05-20 12:59:52	wbmdfc-introduces-new-minority-education-loan-policy-2025
11	Post-Matric Scholarship 2025 deadline extended	scholarships	2025-09-28	Students pursuing higher education now have till Oct 20, 2025, to submit their scholarship applications. Aimed at providing easy access to higher education for students from minority communities across West Bengal.	#	2026-05-02 13:58:03	2026-05-20 13:04:54	post-matric-scholarship-2025-deadline-extended
16	TEst	government	2026-05-21	tests sdsds dsd	\N	2026-05-20 13:05:38	2026-05-20 13:06:24	test
\.


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_id_seq', 16, true);


--
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- Name: news news_slug_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_slug_unique UNIQUE (slug);


--
-- PostgreSQL database dump complete
--

\unrestrict Ej5xZpB9jFkVTuGz4nfzX6COnWTSix9JmfI46FX2lRUqnpTBEQGeyKzlJTxjgpL

