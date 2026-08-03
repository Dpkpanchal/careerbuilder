--
-- PostgreSQL database dump
--

\restrict zeu9CUnzUCRuNg8TmVVdIjjmYlQejw3nnpgDMaFR7CmoX4sNNpeErLl2yNGbUDA

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
-- Name: edu_fund_cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.edu_fund_cards (
    id bigint NOT NULL,
    section_id bigint NOT NULL,
    icon character varying(255) DEFAULT 'Award'::character varying NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    status boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.edu_fund_cards OWNER TO postgres;

--
-- Name: edu_fund_cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.edu_fund_cards_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.edu_fund_cards_id_seq OWNER TO postgres;

--
-- Name: edu_fund_cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.edu_fund_cards_id_seq OWNED BY public.edu_fund_cards.id;


--
-- Name: edu_fund_cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_cards ALTER COLUMN id SET DEFAULT nextval('public.edu_fund_cards_id_seq'::regclass);


--
-- Data for Name: edu_fund_cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.edu_fund_cards (id, section_id, icon, title, content, sort_order, status, created_at, updated_at) FROM stdin;
4	2	BadgeIndianRupee	WBMDFC Education Loan — a bridge to higher studies	<div class="small text-muted">Designed to support eligible minority students in West Bengal when course costs are higher than what scholarships can cover. A trusted state initiative that enables serious higher education journeys.</div>	1	t	2026-07-20 18:34:31	2026-07-20 18:34:31
5	2	UserCheck	Best fit for career-building courses	<ul><li>Professional / technical programmes</li><li>High-fee UG/PG courses where family support is limited</li><li>Students who want to invest in long-term career outcomes</li></ul>	2	t	2026-07-20 18:34:31	2026-07-20 18:34:31
6	2	Landmark	Why WBMDFC loan matters	<ul><li>Connects deserving students to structured financial support</li><li>Helps continue education without compromising the course choice</li><li>Complements scholarships (use both smartly)</li></ul>	3	t	2026-07-20 18:34:31	2026-07-20 18:34:31
10	1	Award	Scholarships at a glance	<div class="small">\n<div class="d-flex justify-content-between gap-2"><b>Pre-Matric</b> <span class="text-muted">School level support</span></div>\n<div class="d-flex justify-content-between gap-2"><b>Post-Matric</b> <span class="text-muted">UG/PG and above</span></div>\n<div class="d-flex justify-content-between gap-2"><b>Merit-based</b> <span class="text-muted">Rewards academic effort</span></div>\n<div class="d-flex justify-content-between gap-2"><b>Means-based</b> <span class="text-muted">Supports financial need</span></div>\n</div>	0	t	2026-07-20 19:12:32	2026-07-20 19:12:32
11	1	GraduationCap	What scholarships usually support	<ul><li>Tuition / course fees (full or partial)</li><li>Maintenance support for study continuity</li><li>Special support for professional / technical pathways</li><li>Renewal-based help across years (where applicable)</li></ul>	1	t	2026-07-20 19:12:32	2026-07-20 19:12:32
12	1	ShieldCheck	Why this matters after this stage	<div class="small text-muted"><b>After Class 12</b>, costs rise (course fees, coaching, travel, hostel, books). Scholarships reduce drop-out risk and help students focus on learning instead of financial stress.</div>	2	t	2026-07-20 19:12:32	2026-07-20 19:12:32
\.


--
-- Name: edu_fund_cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.edu_fund_cards_id_seq', 12, true);


--
-- Name: edu_fund_cards edu_fund_cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_cards
    ADD CONSTRAINT edu_fund_cards_pkey PRIMARY KEY (id);


--
-- Name: edu_fund_cards edu_fund_cards_section_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_cards
    ADD CONSTRAINT edu_fund_cards_section_id_foreign FOREIGN KEY (section_id) REFERENCES public.edu_fund_sections(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict zeu9CUnzUCRuNg8TmVVdIjjmYlQejw3nnpgDMaFR7CmoX4sNNpeErLl2yNGbUDA

