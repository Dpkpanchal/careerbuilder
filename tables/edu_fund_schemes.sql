--
-- PostgreSQL database dump
--

\restrict 8R9ub8VruPfhvvdWcxJcjkVZ5gcX3ayTN9p7x6XKR1p4rWtpBaOTuHgrI9VulyP

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
-- Name: edu_fund_schemes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.edu_fund_schemes (
    id bigint NOT NULL,
    section_id bigint NOT NULL,
    full_name character varying(255) NOT NULL,
    short_name character varying(255) NOT NULL,
    href character varying(255) NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    status boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.edu_fund_schemes OWNER TO postgres;

--
-- Name: edu_fund_schemes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.edu_fund_schemes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.edu_fund_schemes_id_seq OWNER TO postgres;

--
-- Name: edu_fund_schemes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.edu_fund_schemes_id_seq OWNED BY public.edu_fund_schemes.id;


--
-- Name: edu_fund_schemes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_schemes ALTER COLUMN id SET DEFAULT nextval('public.edu_fund_schemes_id_seq'::regclass);


--
-- Data for Name: edu_fund_schemes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.edu_fund_schemes (id, section_id, full_name, short_name, href, sort_order, status, created_at, updated_at) FROM stdin;
\.


--
-- Name: edu_fund_schemes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.edu_fund_schemes_id_seq', 4, true);


--
-- Name: edu_fund_schemes edu_fund_schemes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_schemes
    ADD CONSTRAINT edu_fund_schemes_pkey PRIMARY KEY (id);


--
-- Name: edu_fund_schemes edu_fund_schemes_section_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.edu_fund_schemes
    ADD CONSTRAINT edu_fund_schemes_section_id_foreign FOREIGN KEY (section_id) REFERENCES public.edu_fund_sections(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict 8R9ub8VruPfhvvdWcxJcjkVZ5gcX3ayTN9p7x6XKR1p4rWtpBaOTuHgrI9VulyP

