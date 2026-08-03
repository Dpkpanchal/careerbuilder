--
-- PostgreSQL database dump
--

\restrict jUARwGK3QOlHHF8LBmW5obOrLMyAJMmaljqwGd4BX6krz4AZuTcMQZ3QIf7cjlt

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
-- Name: forum_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forum_categories (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    category_icon text,
    status boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.forum_categories OWNER TO postgres;

--
-- Name: forum_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forum_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.forum_categories_id_seq OWNER TO postgres;

--
-- Name: forum_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forum_categories_id_seq OWNED BY public.forum_categories.id;


--
-- Name: forum_categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forum_categories ALTER COLUMN id SET DEFAULT nextval('public.forum_categories_id_seq'::regclass);


--
-- Data for Name: forum_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forum_categories (id, name, slug, category_icon, status, created_at, updated_at) FROM stdin;
34	Engineering	engineering	Cog	t	2025-12-10 14:23:20	2025-12-10 14:23:20
35	Medical	medical	Stethoscope	t	2025-12-10 14:23:20	2025-12-10 14:23:20
36	Law & Judiciary	law	Landmark	t	2025-12-10 14:23:20	2025-12-10 14:23:20
37	Commerce	commerce	Briefcase	t	2025-12-10 14:23:20	2025-12-10 14:23:20
38	Arts & Humanities	arts	PenTool	t	2025-12-10 14:23:20	2025-12-10 14:23:20
39	Pure Science	science	Microscope	t	2025-12-10 14:23:20	2025-12-10 14:23:20
40	IT & Computer Science	it	Cpu	t	2025-12-10 14:23:20	2025-12-10 14:23:20
41	Diploma Courses	diploma	School	t	2025-12-10 14:23:20	2025-12-10 14:23:20
42	Vocational / Skill Courses	vocational	Wrench	t	2025-12-10 14:23:20	2025-12-10 14:23:20
43	Entrance Exams	exams	FileText	t	2025-12-10 14:23:20	2025-12-10 14:23:20
44	Government Jobs / Exams	government	Building2	t	2025-12-10 14:23:20	2025-12-10 14:23:20
45	Colleges	colleges	Library	t	2025-12-10 14:23:20	2025-12-10 14:23:20
46	Courses	courses	BookOpen	t	2025-12-10 14:23:20	2025-12-10 14:23:20
47	Scholarships	scholarships	GraduationCap	t	2025-12-10 14:23:20	2025-12-10 14:23:20
48	Study Abroad	abroad	Globe2	t	2025-12-10 14:23:20	2025-12-10 14:23:20
49	Career Guidance	guidance	HelpCircle	t	2025-12-10 14:23:20	2025-12-10 14:23:20
50	Counseling	counseling	Users	t	2025-12-10 14:23:20	2025-12-10 14:23:20
\.


--
-- Name: forum_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forum_categories_id_seq', 50, true);


--
-- Name: forum_categories forum_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forum_categories
    ADD CONSTRAINT forum_categories_pkey PRIMARY KEY (id);


--
-- Name: forum_categories forum_categories_slug_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forum_categories
    ADD CONSTRAINT forum_categories_slug_unique UNIQUE (slug);


--
-- PostgreSQL database dump complete
--

\unrestrict jUARwGK3QOlHHF8LBmW5obOrLMyAJMmaljqwGd4BX6krz4AZuTcMQZ3QIf7cjlt

