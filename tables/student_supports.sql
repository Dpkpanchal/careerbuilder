--
-- PostgreSQL database dump
--

\restrict k85oYNT2gi8SdC0RIAlvAbF6ld6FtCHs5OJYU9ykylXPGIiUYqnFQpldQ3g00QS

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
-- Name: student_supports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_supports (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    link character varying(255) NOT NULL,
    icon character varying(255) DEFAULT 'University'::character varying NOT NULL,
    tone character varying(255),
    level character varying(255),
    sort_order integer DEFAULT 0 NOT NULL,
    status boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.student_supports OWNER TO postgres;

--
-- Name: student_supports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.student_supports_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.student_supports_id_seq OWNER TO postgres;

--
-- Name: student_supports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.student_supports_id_seq OWNED BY public.student_supports.id;


--
-- Name: student_supports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_supports ALTER COLUMN id SET DEFAULT nextval('public.student_supports_id_seq'::regclass);


--
-- Data for Name: student_supports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_supports (id, title, description, link, icon, tone, level, sort_order, status, created_at, updated_at) FROM stdin;
1	Admission Support Team	Support for admissions planning, course selection direction and next-step clarity.	/more/admission-support	University	Admissions	India	1	t	2026-07-20 18:10:19	2026-07-20 18:10:19
2	Contact Details of SNAP Career Counsellors	Verified counsellor contacts to discuss stream choice, careers and personal guidance.	/more/counsellors-directory	Users	Counselling	Help	2	t	2026-07-20 18:10:19	2026-07-20 18:10:19
3	Coaching Support Centre	Support centres and preparation resources for competitive exams and career readiness.	/more/coaching-support	BookOpen	Preparation	Exams	3	t	2026-07-20 18:10:19	2026-07-20 18:10:19
4	Information about Wakf-run Hostels	Hostel support information for students who need safe accommodation for studies.	/more/waqf-run-hostel	Home	Stay	Hostels	4	t	2026-07-20 18:10:19	2026-07-20 18:10:19
5	Jobs Opportunity in Different Sector	Sector-wise job areas and role types to help students understand where careers exist.	/more/jobs-opportunities	Briefcase	Careers	All	5	t	2026-07-20 18:10:19	2026-07-20 18:10:19
6	Important Web Links	Official portals for scholarships, admissions, exams, results and student services.	/more/important-web-links	Link2	Official	Links	6	t	2026-07-20 18:10:19	2026-07-20 18:10:19
\.


--
-- Name: student_supports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.student_supports_id_seq', 6, true);


--
-- Name: student_supports student_supports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_supports
    ADD CONSTRAINT student_supports_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict k85oYNT2gi8SdC0RIAlvAbF6ld6FtCHs5OJYU9ykylXPGIiUYqnFQpldQ3g00QS

