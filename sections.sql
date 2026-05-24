--
-- PostgreSQL database dump
--

\restrict QO5lO9HjvgsCgLLjX5miJVtjM96soRGNBUKiSebrCBenCRhNaMfP2QwCT7E3Z0D

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
-- Name: sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sections (
    id bigint NOT NULL,
    section_key character varying(255) NOT NULL,
    heading character varying(255) NOT NULL,
    subheading text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    heading_prefix character varying(255),
    heading_highlight character varying(255)
);


ALTER TABLE public.sections OWNER TO postgres;

--
-- Name: sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sections_id_seq OWNER TO postgres;

--
-- Name: sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sections_id_seq OWNED BY public.sections.id;


--
-- Name: sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);


--
-- Data for Name: sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sections (id, section_key, heading, subheading, created_at, updated_at, heading_prefix, heading_highlight) FROM stdin;
3	scholarships_loans	Scholarships, Loans & Schemes	Real scholarships, loans, training, and empowerment—direct from government and trusted institutions. No clutter, no doubts—just the facts that change lives.	2026-05-03 00:51:22	2026-05-03 00:51:22	Scholarships,	Loans & Schemes
4	student_forum	Ask. Learn. Get Expert Guidance.	Our student forum connects peers, mentors, and verified counselors to help you with scholarships, admissions, and career planning. Post your question, follow the discussion, and get clear answers reviewed by experts.	2026-05-03 00:52:11	2026-05-02 19:58:44	Ask. Learn.	Get Expert Guidance.
2	education_news	Education Related News & Updates	Latest announcements, scholarships, and opportunities for students in West Bengal.	2026-05-03 00:50:06	2026-05-02 20:03:59	Education Related	News & Updates
1	career_domains	Explore Career Domains	Discover career opportunities, courses, and scholarships across diverse fields — and find the path that matches your passion.	2026-05-03 00:32:49	2026-05-11 19:56:36	Explore	Career Domains
\.


--
-- Name: sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sections_id_seq', 4, true);


--
-- Name: sections sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);


--
-- Name: sections sections_section_key_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_section_key_unique UNIQUE (section_key);


--
-- PostgreSQL database dump complete
--

\unrestrict QO5lO9HjvgsCgLLjX5miJVtjM96soRGNBUKiSebrCBenCRhNaMfP2QwCT7E3Z0D

