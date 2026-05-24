--
-- PostgreSQL database dump
--

\restrict cN4guJRwWG1wRutJ9vwkXeAqV0QLepNUXzAh9TnpXVUX4VM3KLNtwE3JbjGJyLj

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
-- Name: hero_slides; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hero_slides (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    title_gradient character varying(255),
    subtitle text,
    cta_text character varying(255),
    cta_link character varying(255),
    img_base character varying(255),
    "order" integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.hero_slides OWNER TO postgres;

--
-- Name: hero_slides_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hero_slides_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hero_slides_id_seq OWNER TO postgres;

--
-- Name: hero_slides_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hero_slides_id_seq OWNED BY public.hero_slides.id;


--
-- Name: hero_slides id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hero_slides ALTER COLUMN id SET DEFAULT nextval('public.hero_slides_id_seq'::regclass);


--
-- Data for Name: hero_slides; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hero_slides (id, title, title_gradient, subtitle, cta_text, cta_link, img_base, "order", created_at, updated_at) FROM stdin;
3	Discover the Path	Meant for You.	Take a guided career quiz to explore opportunities that match your interests, skills, and aspirations — and get your personalized roadmap to success.	\N	\N	hero-slides/WV0LTi8ymODX3y1cJroWGVz6ZcW8Trf3os1hwCdE.webp	0	2026-04-26 10:41:29	2026-04-26 12:00:45
6	Get Guidance	That Matters.	Speak to certified career counselors or join our student community to learn and grow together.	\N	\N	hero-slides/PB5RwMptCt2XFpgQ0TnhLGDj5VQTu47S8r2eV9HS.webp	0	2026-04-26 10:45:01	2026-04-26 12:00:59
5	Learn Smart.	Plan Ahead.	Find verified details on courses, colleges, entrance exams, and scholarships — all in one trusted platform.	\N	\N	hero-slides/mBqNsD7EsqpZGx4W1okwGMUHs70s3lIuLaWaHaZ5.webp	0	2026-04-26 10:43:26	2026-04-26 12:01:09
1	Find The Right	Career For Life	An initiative by the West Bengal Minorities’ Development & Finance Corporation (WBMDFC) — guiding students toward the right careers, scholarships, and brighter opportunities.	\N	\N	hero-slides/cJUVGvHk3zQ6lty3UcmZCrBignxIin44bLbLeT4j.webp	1	2026-04-26 10:05:38	2026-04-26 12:16:14
\.


--
-- Name: hero_slides_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hero_slides_id_seq', 7, true);


--
-- Name: hero_slides hero_slides_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hero_slides
    ADD CONSTRAINT hero_slides_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict cN4guJRwWG1wRutJ9vwkXeAqV0QLepNUXzAh9TnpXVUX4VM3KLNtwE3JbjGJyLj

