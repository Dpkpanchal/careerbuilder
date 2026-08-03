--
-- PostgreSQL database dump
--

\restrict G8i08dKjjCxkhMTeP9LMLSf6ah6EUfOHUIhcqTG6OMwBGBZgDgff9XFzw93Rase

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
-- Name: edu_fund_sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.edu_fund_sections (
    id bigint NOT NULL,
    key character varying(255) NOT NULL,
    heading_prefix character varying(255) NOT NULL,
    heading_highlight character varying(255) NOT NULL,
    description text NOT NULL,
    cta_label character varying(255) NOT NULL,
    cta_link character varying(255) NOT NULL,
    extra_note character varying(255),
    note_title character varying(255),
    note_text text,
    note_icon character varying(255),
    bg_style character varying(255) DEFAULT 'light'::character varying NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.edu_fund_sections OWNER TO postgres;

--
-- Name: edu_fund_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.edu_fund_sections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.edu_fund_sections_id_seq OWNER TO postgres;

--
-- Name: edu_fund_sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.edu_fund_sections_id_seq OWNED BY public.edu_fund_sections.id;


--
-- Name: edu_fund_sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_sections ALTER COLUMN id SET DEFAULT nextval('public.edu_fund_sections_id_seq'::regclass);


--
-- Data for Name: edu_fund_sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.edu_fund_sections (id, key, heading_prefix, heading_highlight, description, cta_label, cta_link, extra_note, note_title, note_text, note_icon, bg_style, sort_order, created_at, updated_at) FROM stdin;
1	scholarship	Scholarships that	reduce your burden	Scholarships are the first funding layer — they can cover fees, maintenance, and study support based on category, merit, income, and course type. Apply early, keep documents ready, and track renewal timelines.	Explore Scholarships	/scholarship/overview	\N	How West Bengal supports students	Through scholarship portals, minority-focused assistance, institutional support, and verified information — the goal is to ensure students can continue studies without financial stress.	Landmark	light	1	2026-07-20 18:34:31	2026-07-20 18:34:31
2	loan	Education Loans that	unlock opportunity	When course cost is higher than scholarship coverage, education loans become the bridge. For eligible students in West Bengal, WBMDFC provides an education loan support option with special interest slabs (as per income/category).	Explore Education Loans	/scholarship/education-loans	<b>Best for:</b> Professional/technical courses where total fees are high.<br/><b>Smart strategy:</b> Combine scholarships + loan (only when needed).	\N	\N	\N	white	2	2026-07-20 18:34:31	2026-07-20 18:34:31
\.


--
-- Name: edu_fund_sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.edu_fund_sections_id_seq', 2, true);


--
-- Name: edu_fund_sections edu_fund_sections_key_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_sections
    ADD CONSTRAINT edu_fund_sections_key_unique UNIQUE (key);


--
-- Name: edu_fund_sections edu_fund_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_sections
    ADD CONSTRAINT edu_fund_sections_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict G8i08dKjjCxkhMTeP9LMLSf6ah6EUfOHUIhcqTG6OMwBGBZgDgff9XFzw93Rase

