--
-- PostgreSQL database dump
--

\restrict TVBGfpgKATbyBLb10jDECpaCKJQslyRIaj12bnGfwRc18aBqkdsAOQtYvxraq9M

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
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    avatar character varying(255)
);


ALTER TABLE public.admins OWNER TO postgres;

--
-- Name: admins_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admins_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admins_id_seq OWNER TO postgres;

--
-- Name: admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admins_id_seq OWNED BY public.admins.id;


--
-- Name: admission_supports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admission_supports (
    id bigint NOT NULL,
    category character varying(255) NOT NULL,
    university character varying(255),
    name character varying(255) NOT NULL,
    phone character varying(255),
    email character varying(255),
    sort_order integer DEFAULT 0 NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.admission_supports OWNER TO postgres;

--
-- Name: admission_supports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admission_supports_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admission_supports_id_seq OWNER TO postgres;

--
-- Name: admission_supports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admission_supports_id_seq OWNED BY public.admission_supports.id;


--
-- Name: answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.answers (
    id bigint NOT NULL,
    question_id bigint NOT NULL,
    user_id bigint NOT NULL,
    content text NOT NULL,
    is_verified_by_counselor boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    upvotes bigint DEFAULT 0
);


ALTER TABLE public.answers OWNER TO postgres;

--
-- Name: answers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.answers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.answers_id_seq OWNER TO postgres;

--
-- Name: answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.answers_id_seq OWNED BY public.answers.id;


--
-- Name: cache; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cache (
    key character varying(255) NOT NULL,
    value text NOT NULL,
    expiration integer NOT NULL
);


ALTER TABLE public.cache OWNER TO postgres;

--
-- Name: cache_locks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cache_locks (
    key character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    expiration integer NOT NULL
);


ALTER TABLE public.cache_locks OWNER TO postgres;

--
-- Name: career_domains; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.career_domains (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    subtitle character varying(255),
    image character varying(255),
    link character varying(255),
    details text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.career_domains OWNER TO postgres;

--
-- Name: career_domains_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.career_domains_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.career_domains_id_seq OWNER TO postgres;

--
-- Name: career_domains_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.career_domains_id_seq OWNED BY public.career_domains.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: central_universities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.central_universities (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    city character varying(255),
    state character varying(255),
    website character varying(255),
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.central_universities OWNER TO postgres;

--
-- Name: central_universities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.central_universities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.central_universities_id_seq OWNER TO postgres;

--
-- Name: central_universities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.central_universities_id_seq OWNED BY public.central_universities.id;


--
-- Name: cm_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cm_messages (
    id bigint NOT NULL,
    content text,
    image character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.cm_messages OWNER TO postgres;

--
-- Name: cm_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cm_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cm_messages_id_seq OWNER TO postgres;

--
-- Name: cm_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cm_messages_id_seq OWNED BY public.cm_messages.id;


--
-- Name: coaching_supports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coaching_supports (
    id bigint NOT NULL,
    subject character varying(255) NOT NULL,
    institution_name character varying(255) NOT NULL,
    web_contact character varying(255),
    is_active boolean DEFAULT true NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    note text
);


ALTER TABLE public.coaching_supports OWNER TO postgres;

--
-- Name: coaching_supports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.coaching_supports_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coaching_supports_id_seq OWNER TO postgres;

--
-- Name: coaching_supports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.coaching_supports_id_seq OWNED BY public.coaching_supports.id;


--
-- Name: counselor_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.counselor_details (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    qualification text,
    subject text,
    bio text,
    profile_image character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.counselor_details OWNER TO postgres;

--
-- Name: counselor_details_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.counselor_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.counselor_details_id_seq OWNER TO postgres;

--
-- Name: counselor_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.counselor_details_id_seq OWNED BY public.counselor_details.id;


--
-- Name: failed_jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.failed_jobs OWNER TO postgres;

--
-- Name: failed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.failed_jobs_id_seq OWNER TO postgres;

--
-- Name: failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;


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
-- Name: important_web_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.important_web_links (
    id bigint NOT NULL,
    subject character varying(255) NOT NULL,
    web_link character varying(500) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    category character varying(100)
);


ALTER TABLE public.important_web_links OWNER TO postgres;

--
-- Name: important_web_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.important_web_links_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.important_web_links_id_seq OWNER TO postgres;

--
-- Name: important_web_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.important_web_links_id_seq OWNED BY public.important_web_links.id;


--
-- Name: iti_colleges; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.iti_colleges (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(255) DEFAULT 'Government'::character varying NOT NULL,
    address character varying(255),
    phone character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    CONSTRAINT iti_colleges_type_check CHECK (((type)::text = ANY ((ARRAY['government'::character varying, 'private'::character varying, 'women'::character varying, 'sponsored'::character varying, 'special'::character varying])::text[])))
);


ALTER TABLE public.iti_colleges OWNER TO postgres;

--
-- Name: iti_colleges_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.iti_colleges_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.iti_colleges_id_seq OWNER TO postgres;

--
-- Name: iti_colleges_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.iti_colleges_id_seq OWNED BY public.iti_colleges.id;


--
-- Name: iti_trades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.iti_trades (
    id bigint NOT NULL,
    iti_college_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    duration character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    CONSTRAINT iti_trades_duration_check CHECK (((duration)::text = ANY ((ARRAY['2YR'::character varying, '1YR'::character varying, '6MO'::character varying])::text[])))
);


ALTER TABLE public.iti_trades OWNER TO postgres;

--
-- Name: iti_trades_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.iti_trades_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.iti_trades_id_seq OWNER TO postgres;

--
-- Name: iti_trades_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.iti_trades_id_seq OWNED BY public.iti_trades.id;


--
-- Name: job_batches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.job_batches (
    id character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    total_jobs integer NOT NULL,
    pending_jobs integer NOT NULL,
    failed_jobs integer NOT NULL,
    failed_job_ids text NOT NULL,
    options text,
    cancelled_at integer,
    created_at integer NOT NULL,
    finished_at integer
);


ALTER TABLE public.job_batches OWNER TO postgres;

--
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    id bigint NOT NULL,
    queue character varying(255) NOT NULL,
    payload text NOT NULL,
    attempts smallint NOT NULL,
    reserved_at integer,
    available_at integer NOT NULL,
    created_at integer NOT NULL
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- Name: jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jobs_id_seq OWNER TO postgres;

--
-- Name: jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jobs_id_seq OWNED BY public.jobs.id;


--
-- Name: leader_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.leader_messages (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    post character varying(255),
    designation character varying(255),
    about text,
    image character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.leader_messages OWNER TO postgres;

--
-- Name: leader_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.leader_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.leader_messages_id_seq OWNER TO postgres;

--
-- Name: leader_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.leader_messages_id_seq OWNED BY public.leader_messages.id;


--
-- Name: loan_sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.loan_sections (
    id bigint NOT NULL,
    type character varying(255) NOT NULL,
    icon character varying(255),
    title character varying(255),
    description text,
    short character varying(255),
    link character varying(255),
    "order" integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.loan_sections OWNER TO postgres;

--
-- Name: loan_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.loan_sections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.loan_sections_id_seq OWNER TO postgres;

--
-- Name: loan_sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.loan_sections_id_seq OWNED BY public.loan_sections.id;


--
-- Name: menu_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_groups (
    id bigint NOT NULL,
    sub_category_id bigint NOT NULL,
    title character varying(255) NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.menu_groups OWNER TO postgres;

--
-- Name: menu_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menu_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menu_groups_id_seq OWNER TO postgres;

--
-- Name: menu_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menu_groups_id_seq OWNED BY public.menu_groups.id;


--
-- Name: menu_item_tab_contents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_item_tab_contents (
    id bigint NOT NULL,
    menu_item_tab_id bigint NOT NULL,
    title character varying(255),
    subtitle character varying(255),
    html_content text,
    sort_order integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.menu_item_tab_contents OWNER TO postgres;

--
-- Name: menu_item_tab_contents_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menu_item_tab_contents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menu_item_tab_contents_id_seq OWNER TO postgres;

--
-- Name: menu_item_tab_contents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menu_item_tab_contents_id_seq OWNED BY public.menu_item_tab_contents.id;


--
-- Name: menu_item_tabs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_item_tabs (
    id bigint NOT NULL,
    menu_item_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    icon character varying(255),
    sort_order integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.menu_item_tabs OWNER TO postgres;

--
-- Name: menu_item_tabs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menu_item_tabs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menu_item_tabs_id_seq OWNER TO postgres;

--
-- Name: menu_item_tabs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menu_item_tabs_id_seq OWNED BY public.menu_item_tabs.id;


--
-- Name: menu_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_items (
    id bigint NOT NULL,
    sub_category_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    description text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    group_id bigint
);


ALTER TABLE public.menu_items OWNER TO postgres;

--
-- Name: menu_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menu_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menu_items_id_seq OWNER TO postgres;

--
-- Name: menu_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menu_items_id_seq OWNED BY public.menu_items.id;


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
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: minority_schemes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.minority_schemes (
    id bigint NOT NULL,
    subject character varying(255) NOT NULL,
    web_link character varying(500) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.minority_schemes OWNER TO postgres;

--
-- Name: minority_schemes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.minority_schemes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.minority_schemes_id_seq OWNER TO postgres;

--
-- Name: minority_schemes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.minority_schemes_id_seq OWNED BY public.minority_schemes.id;


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
-- Name: page_contents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.page_contents (
    id bigint NOT NULL,
    menu_id bigint NOT NULL,
    html_content text,
    meta_title character varying(255),
    meta_description text,
    is_published boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.page_contents OWNER TO postgres;

--
-- Name: page_contents_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.page_contents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.page_contents_id_seq OWNER TO postgres;

--
-- Name: page_contents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.page_contents_id_seq OWNED BY public.page_contents.id;


--
-- Name: password_reset_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.password_reset_tokens (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);


ALTER TABLE public.password_reset_tokens OWNER TO postgres;

--
-- Name: questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questions (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    category_id json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    "isBookmarked" boolean DEFAULT false,
    by_bookmarked integer DEFAULT 0
);


ALTER TABLE public.questions OWNER TO postgres;

--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.questions_id_seq OWNER TO postgres;

--
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;


--
-- Name: replies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.replies (
    id bigint NOT NULL,
    answer_id bigint NOT NULL,
    user_id bigint NOT NULL,
    content text NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    upvotes bigint DEFAULT 0
);


ALTER TABLE public.replies OWNER TO postgres;

--
-- Name: replies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.replies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.replies_id_seq OWNER TO postgres;

--
-- Name: replies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.replies_id_seq OWNED BY public.replies.id;


--
-- Name: reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reports (
    id bigint NOT NULL,
    reportable_type character varying(255) NOT NULL,
    reportable_id bigint NOT NULL,
    user_id bigint NOT NULL,
    reason character varying(255) NOT NULL,
    details text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    status character varying(20) DEFAULT 'pending'::character varying
);


ALTER TABLE public.reports OWNER TO postgres;

--
-- Name: reports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reports_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reports_id_seq OWNER TO postgres;

--
-- Name: reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reports_id_seq OWNED BY public.reports.id;


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
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id character varying(255) NOT NULL,
    user_id bigint,
    ip_address character varying(45),
    user_agent text,
    payload text NOT NULL,
    last_activity integer NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: settings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.settings (
    id bigint NOT NULL,
    key character varying(255) NOT NULL,
    value text,
    type character varying(255) DEFAULT 'text'::character varying NOT NULL,
    "group" character varying(255) DEFAULT 'general'::character varying NOT NULL,
    options text,
    label character varying(255) NOT NULL,
    description text,
    "order" integer DEFAULT 0 NOT NULL,
    is_public boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.settings OWNER TO postgres;

--
-- Name: settings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.settings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.settings_id_seq OWNER TO postgres;

--
-- Name: settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.settings_id_seq OWNED BY public.settings.id;


--
-- Name: sub_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sub_categories (
    id bigint NOT NULL,
    category_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.sub_categories OWNER TO postgres;

--
-- Name: sub_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sub_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sub_categories_id_seq OWNER TO postgres;

--
-- Name: sub_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sub_categories_id_seq OWNED BY public.sub_categories.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    is_active smallint DEFAULT '1'::smallint NOT NULL,
    avatar character varying(255),
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    role character varying(255) DEFAULT 'user'::character varying NOT NULL,
    mobile character varying(50),
    is_blocked boolean DEFAULT false,
    blocked_at timestamp without time zone,
    is_online boolean DEFAULT false NOT NULL,
    last_activity timestamp without time zone,
    deleted_at timestamp(0) without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: waqf_run_hostels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.waqf_run_hostels (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    address text NOT NULL,
    seat_capacity integer NOT NULL,
    contact_no text NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.waqf_run_hostels OWNER TO postgres;

--
-- Name: waqf_run_hostels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.waqf_run_hostels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.waqf_run_hostels_id_seq OWNER TO postgres;

--
-- Name: waqf_run_hostels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.waqf_run_hostels_id_seq OWNED BY public.waqf_run_hostels.id;


--
-- Name: admins id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admins_id_seq'::regclass);


--
-- Name: admission_supports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admission_supports ALTER COLUMN id SET DEFAULT nextval('public.admission_supports_id_seq'::regclass);


--
-- Name: answers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers ALTER COLUMN id SET DEFAULT nextval('public.answers_id_seq'::regclass);


--
-- Name: career_domains id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.career_domains ALTER COLUMN id SET DEFAULT nextval('public.career_domains_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: central_universities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.central_universities ALTER COLUMN id SET DEFAULT nextval('public.central_universities_id_seq'::regclass);


--
-- Name: cm_messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cm_messages ALTER COLUMN id SET DEFAULT nextval('public.cm_messages_id_seq'::regclass);


--
-- Name: coaching_supports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coaching_supports ALTER COLUMN id SET DEFAULT nextval('public.coaching_supports_id_seq'::regclass);


--
-- Name: counselor_details id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.counselor_details ALTER COLUMN id SET DEFAULT nextval('public.counselor_details_id_seq'::regclass);


--
-- Name: failed_jobs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);


--
-- Name: forum_categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forum_categories ALTER COLUMN id SET DEFAULT nextval('public.forum_categories_id_seq'::regclass);


--
-- Name: hero_slides id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hero_slides ALTER COLUMN id SET DEFAULT nextval('public.hero_slides_id_seq'::regclass);


--
-- Name: important_web_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.important_web_links ALTER COLUMN id SET DEFAULT nextval('public.important_web_links_id_seq'::regclass);


--
-- Name: iti_colleges id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.iti_colleges ALTER COLUMN id SET DEFAULT nextval('public.iti_colleges_id_seq'::regclass);


--
-- Name: iti_trades id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.iti_trades ALTER COLUMN id SET DEFAULT nextval('public.iti_trades_id_seq'::regclass);


--
-- Name: jobs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs ALTER COLUMN id SET DEFAULT nextval('public.jobs_id_seq'::regclass);


--
-- Name: leader_messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leader_messages ALTER COLUMN id SET DEFAULT nextval('public.leader_messages_id_seq'::regclass);


--
-- Name: loan_sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.loan_sections ALTER COLUMN id SET DEFAULT nextval('public.loan_sections_id_seq'::regclass);


--
-- Name: menu_groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_groups ALTER COLUMN id SET DEFAULT nextval('public.menu_groups_id_seq'::regclass);


--
-- Name: menu_item_tab_contents id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_item_tab_contents ALTER COLUMN id SET DEFAULT nextval('public.menu_item_tab_contents_id_seq'::regclass);


--
-- Name: menu_item_tabs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_item_tabs ALTER COLUMN id SET DEFAULT nextval('public.menu_item_tabs_id_seq'::regclass);


--
-- Name: menu_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_items ALTER COLUMN id SET DEFAULT nextval('public.menu_items_id_seq'::regclass);


--
-- Name: menus id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menus ALTER COLUMN id SET DEFAULT nextval('public.menus_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: minority_schemes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.minority_schemes ALTER COLUMN id SET DEFAULT nextval('public.minority_schemes_id_seq'::regclass);


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Name: page_contents id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_contents ALTER COLUMN id SET DEFAULT nextval('public.page_contents_id_seq'::regclass);


--
-- Name: questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);


--
-- Name: replies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.replies ALTER COLUMN id SET DEFAULT nextval('public.replies_id_seq'::regclass);


--
-- Name: reports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports ALTER COLUMN id SET DEFAULT nextval('public.reports_id_seq'::regclass);


--
-- Name: sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);


--
-- Name: settings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.settings ALTER COLUMN id SET DEFAULT nextval('public.settings_id_seq'::regclass);


--
-- Name: sub_categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sub_categories ALTER COLUMN id SET DEFAULT nextval('public.sub_categories_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: waqf_run_hostels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.waqf_run_hostels ALTER COLUMN id SET DEFAULT nextval('public.waqf_run_hostels_id_seq'::regclass);


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admins (id, name, email, password, remember_token, created_at, updated_at, avatar) FROM stdin;
1	Super Admin	admin	$2y$12$fKX.9DdtH9uG3cVBNosrcuvMvc2LR4UdWkTPjdhZSRVN17rM4kxwm	\N	2025-12-25 08:18:47	2026-01-16 16:09:49	avatars/QojR4BrOrZdHItaayGgKr4Yw5gicWjtKp0FXfXoz.jpg
\.


--
-- Data for Name: admission_supports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admission_supports (id, category, university, name, phone, email, sort_order, is_active, created_at, updated_at) FROM stdin;
66	Connecting		Dr. Abdul Matin	9868560974 / 9968747845	abdulhcu@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
67	Indian University	Aliah University, Kolkata	Samim	9734583633	masamim18@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
68	Indian University	Aligarh Muslim University (AMU)	Ekramul Haque	8096566743	ekramul.india@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
69	Indian University	Assam University, Silchar	Maidul Rahaman	8876415415	maidul61@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
70	Indian University	Banaras Hindu University (BHU)	Mehebub	9151408782	mehebubalampintu@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
71	Indian University	Central University of Himachal Pradesh	Masadul	7831867390	masadulislam01@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
72	Indian University	Central University of Jharkhand	Md. Humayun Sk	9708317705	mdhumayunsk@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
73	Indian University	Central University of Orissa	Naznin Sultana	-	naznin.niki@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
74	Indian University	Central University of Punjab	Washim Sajjad	9815210421	washimsajjad9@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
75	Indian University	Delhi University	Jamilur	9999506220	jamilur2525@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
76	Indian University	Dibrugarh University	Johirul Islam	9508441448	johirulmon@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
77	Indian University	EFL University (EFLU), Hyderabad	Somel	7416815327	somelbgl@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
78	Indian University	IIT (ISM) Dhanbad	Shah Al Mamun	8292371432	samsarkarism@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
79	Indian University	IIT Bombay	Wasim	9716229956	w.akram.iitb@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
80	Indian University	IIT Chennai	Yousuf Sk	7092090008	yousufsk01@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
81	Indian University	IIT Guwahati	Tarik	9734378771	tarik@iitg.ac.in	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
82	Indian University	IIT Hyderabad	Rezwanul	7207500270	rezntpc@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
83	Indian University	IIT Indore	Ruhul Amin	9045726975	-	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
84	Indian University	IIT Kharagpur	Shakilur Rahman	8101713850	shakilur.biochem@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
85	Indian University	INST Mohali	Abdul Selim	8791130184	abdulselim93@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
86	Indian University	International Institute of Population Sciences, Mumbai	Samarul	9820311372	samarulislam123@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
87	Indian University	ISI Kolkata	Nadim	8332905227	nadimskshahid@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
88	Indian University	Jadavpur University, Kolkata	Muktada Hasan	8967727726	muktadahasan35@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
89	Indian University	Jamia Millia Islamia, Delhi	Akil Sir	8447269080	akilhm@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
90	Indian University	JNU Delhi	Matin	9868560974	abdulmatinjnu@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
91	Indian University	Kalyani University	Hasan	8926173531	mhdhabak@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
92	Indian University	Kazi Nazrul University	Maidul	8876415415	maidul61@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
93	Indian University	MANUU Hyderabad	Md. Samaun Sk	7337206670	samaunskmanuu@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
94	Indian University	NIMS University, Jaipur	Nazmul	8900649120	nazmul10@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
95	Indian University	North Bengal University	Feroja Parveen	-	-	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
96	Indian University	Pondicherry University	Mohaiminul Islam	9398029022	mdmohaiminul@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
97	Indian University	Rabindra Bharati University	Insan Ali	9832965170	insanali.10@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
98	Indian University	Raiganj University	Hasan	8926173531	mhdhabak@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
99	Indian University	Ravenshaw University, Odisha	Mir Mahammad Ali	9932364898	mahammadali1990@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
100	Indian University	Sikkim University	Md Daud Hossain	9091659894	daudjkp@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
101	Foreign University	Hebrew University of Jerusalem	Sazzad Ali Biswas		azzad.jumath@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
102	Foreign University	Oklahoma State University, USA	Wasikul Islam		wasikul@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
103	Foreign University	Karlsruhe Institute of Technology, Germany	Mijanur Rahaman		Mija.chem@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
104	Foreign University	Yeungnam University, Korea	Md Rakibuddin		mdrakibchem@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
105	Foreign University	Victoria University of Wellington, New Zealand	Mirza Wasim Ahmed		mirza.wasim0@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
106	Foreign University	Kent State University, USA	Ajaharul Islam		ajaharulislam25@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
107	Foreign University	Kyushu University, Japan	Sagir Husain Peada		sagirjucivil@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
108	Foreign University	Nanjing University, China	Syed Mehboob Elahi		sunnyelahi@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
109	Foreign University	Lily University, France	Rakibul Islam		rakibulphysics@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
110	Foreign University	Polish Academy of Science (IFPAN)	Rajibul Islam		rajibul.islam@magtop.ifpan.edu.pl	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
111	Foreign University	University of Leeds, England	Nazimul Islam		nazimul-link@leeds.ac.uk	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
112	Foreign University	Hacettepe University, Turkiye	Md Sajid Khan		mdsajidkhan70@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
113	Foreign University	University of New Hampshire, USA	Hafijul Islam		hislam09@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
114	Foreign University	Ohio State University, USA	Wasir Kunda Bukhsh		khudabukhsh.2@osu.edu	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
115	Foreign University	National Taiwan University of Science and Technology	Nasim Kamely		kamelynasim@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
116	Foreign University	Harper Adams University, UK	Akib Jahir		jahirakib29@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
117	Foreign University	Oxford University, England	Adil Hossain		adilhossain43@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
118	Foreign University	University of Tokyo, Japan	Faruk Azam		farukaz29@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
65	Connecting	\N	Dr. Abu Saleh	9494242645	abusalehenglish@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 09:47:18
119	Foreign University	Cleveland State University, USA	Abdus Sayeed		skabdussayeed@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
120	Foreign University	Hochschule Bremen, Germany	Mohammad Basel		mdbasel007@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
121	Foreign University	University of Florida, USA	Dr. Chowdhury Masoom Hossain		masoomchowdhury@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
122	Foreign University	Madinah University, Saudi Arabia	Sk Md. Ibrahi		mdibrahi@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
123	Foreign University	Central European University	Debojit Thakur		debojitthakur90@gmail.com	0	t	2026-01-04 15:13:18	2026-01-04 15:13:18
\.


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.answers (id, question_id, user_id, content, is_verified_by_counselor, created_at, updated_at, upvotes) FROM stdin;
5	3	36	dfdjfjs	f	2026-01-06 16:02:38	2026-03-14 09:49:52	1
6	6	89	its is a reply	f	2026-03-14 10:04:57	2026-03-14 10:05:05	1
\.


--
-- Data for Name: cache; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cache (key, value, expiration) FROM stdin;
careerbuilder-cache-frontend_menus	a:12:{i:0;a:6:{s:3:"key";s:7:"careers";s:5:"label";s:7:"Careers";s:6:"tabbed";b:1;s:10:"noDropdown";b:0;s:4:"href";N;s:4:"tabs";a:3:{i:0;a:3:{s:3:"key";s:8:"by-stage";s:5:"label";s:8:"By Stage";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:23:"Choose by Class / Stage";s:5:"links";a:8:{i:0;a:2:{s:5:"label";s:13:"After Class 8";s:4:"href";s:43:"http://localhost:8000/careers/after-class-8";}i:1;a:2:{s:5:"label";s:14:"After Class 10";s:4:"href";s:44:"http://localhost:8000/careers/after-class-10";}i:2;a:2:{s:5:"label";s:23:"After Class 12 • Arts";s:4:"href";s:49:"http://localhost:8000/careers/after-class-12-arts";}i:3;a:2:{s:5:"label";s:27:"After Class 12 • Commerce";s:4:"href";s:53:"http://localhost:8000/careers/after-class-12-commerce";}i:4;a:2:{s:5:"label";s:26:"After Class 12 • Science";s:4:"href";s:52:"http://localhost:8000/careers/after-class-12-science";}i:5;a:2:{s:5:"label";s:16:"After Graduation";s:4:"href";s:46:"http://localhost:8000/careers/after-graduation";}i:6;a:2:{s:5:"label";s:30:"After Class 12 • Engineering";s:4:"href";s:56:"http://localhost:8000/careers/after-class-12-engineering";}i:7;a:2:{s:5:"label";s:38:"After Class 12 • Medical/Paramedical";s:4:"href";s:52:"http://localhost:8000/careers/after-class-12-medical";}}}}}i:1;a:3:{s:3:"key";s:13:"by-profession";s:5:"label";s:13:"By Profession";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:26:"Popular Professional Paths";s:5:"links";a:11:{i:0;a:2:{s:5:"label";s:11:"Engineering";s:4:"href";s:41:"http://localhost:8000/careers/engineering";}i:1;a:2:{s:5:"label";s:25:"Medical • Doctor (MBBS)";s:4:"href";s:49:"http://localhost:8000/careers/medical-doctor-mbbs";}i:2;a:2:{s:5:"label";s:23:"Nursing & Allied Health";s:4:"href";s:44:"http://localhost:8000/careers/nursing-allied";}i:3;a:2:{s:5:"label";s:8:"Pharmacy";s:4:"href";s:38:"http://localhost:8000/careers/pharmacy";}i:4;a:2:{s:5:"label";s:25:"Chartered Accountant (CA)";s:4:"href";s:53:"http://localhost:8000/careers/chartered-accountant-ca";}i:5;a:2:{s:5:"label";s:21:"Law (LLB, Integrated)";s:4:"href";s:48:"http://localhost:8000/careers/law-llb-integrated";}i:6;a:2:{s:5:"label";s:32:"Design (Fashion, Graphic, Arch.)";s:4:"href";s:57:"http://localhost:8000/careers/design-fashion-graphic-arch";}i:7;a:2:{s:5:"label";s:21:"Hospitality & Tourism";s:4:"href";s:49:"http://localhost:8000/careers/hospitality-tourism";}i:8;a:2:{s:5:"label";s:18:"Media & Journalism";s:4:"href";s:46:"http://localhost:8000/careers/media-journalism";}i:9;a:2:{s:5:"label";s:14:"Civil Services";s:4:"href";s:44:"http://localhost:8000/careers/civil-services";}i:10;a:2:{s:5:"label";s:14:"Defence Forces";s:4:"href";s:44:"http://localhost:8000/careers/defence-forces";}}}}}i:2;a:3:{s:3:"key";s:12:"future-paths";s:5:"label";s:26:"Future & Alternative Paths";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:31:"Long-Term & Alternative Careers";s:5:"links";a:3:{i:0;a:2:{s:5:"label";s:14:"Research & PhD";s:4:"href";s:42:"http://localhost:8000/careers/research-phd";}i:1;a:2:{s:5:"label";s:27:"Entrepreneurship / Startups";s:4:"href";s:55:"http://localhost:8000/careers/entrepreneurship-startups";}i:2;a:2:{s:5:"label";s:18:"Social Work / NGOs";s:4:"href";s:46:"http://localhost:8000/careers/social-work-ngos";}}}}}}}i:1;a:6:{s:3:"key";s:7:"courses";s:5:"label";s:7:"Courses";s:6:"tabbed";b:1;s:10:"noDropdown";b:0;s:4:"href";N;s:4:"tabs";a:6:{i:0;a:3:{s:3:"key";s:16:"vocational-skill";s:5:"label";s:18:"Vocational & Skill";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:26:"Vocational & Skill Courses";s:5:"links";a:4:{i:0;a:2:{s:5:"label";s:26:"Class 8+ Vocational Trades";s:4:"href";s:55:"http://localhost:8000/courses/class-8-vocational-trades";}i:1;a:2:{s:5:"label";s:27:"Class 10+ Vocational Trades";s:4:"href";s:56:"http://localhost:8000/courses/class-10-vocational-trades";}i:2;a:2:{s:5:"label";s:16:"ITI & ITC Trades";s:4:"href";s:44:"http://localhost:8000/courses/iti-itc-trades";}i:3;a:2:{s:5:"label";s:22:"MSME Tool Room Courses";s:4:"href";s:52:"http://localhost:8000/courses/msme-tool-room-courses";}}}}}i:1;a:3:{s:3:"key";s:12:"diploma-poly";s:5:"label";s:21:"Diploma & Polytechnic";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:30:"Diploma & Polytechnic Programs";s:5:"links";a:4:{i:0;a:2:{s:5:"label";s:36:"Diploma in Engineering (Polytechnic)";s:4:"href";s:64:"http://localhost:8000/courses/diploma-in-engineering-polytechnic";}i:1;a:2:{s:5:"label";s:22:"Diploma in Paramedical";s:4:"href";s:52:"http://localhost:8000/courses/diploma-in-paramedical";}i:2;a:2:{s:5:"label";s:29:"Diploma in Pharmacy (D.Pharm)";s:4:"href";s:56:"http://localhost:8000/courses/diploma-in-pharmacy-dpharm";}i:3;a:2:{s:5:"label";s:24:"Diploma in Computer / IT";s:4:"href";s:52:"http://localhost:8000/courses/diploma-in-computer-it";}}}}}i:2;a:3:{s:3:"key";s:18:"streamlined-degree";s:5:"label";s:26:"Streamlined Degree Courses";s:8:"sections";a:2:{i:0;a:2:{s:5:"title";s:35:"Graduation Courses (After Class 12)";s:5:"links";a:3:{i:0;a:2:{s:5:"label";s:37:"Arts Graduation Courses (BA & Allied)";s:4:"href";s:63:"http://localhost:8000/courses/arts-graduation-courses-ba-allied";}i:1;a:2:{s:5:"label";s:44:"Commerce Graduation Courses (B.Com & Allied)";s:4:"href";s:69:"http://localhost:8000/courses/commerce-graduation-courses-bcom-allied";}i:2;a:2:{s:5:"label";s:42:"Science Graduation Courses (B.Sc & Allied)";s:4:"href";s:67:"http://localhost:8000/courses/science-graduation-courses-bsc-allied";}}}i:1;a:2:{s:5:"title";s:23:"Post Graduation Courses";s:5:"links";a:3:{i:0;a:2:{s:5:"label";s:34:"Arts PG Courses (MA, MSW & Allied)";s:4:"href";s:59:"http://localhost:8000/courses/arts-pg-courses-ma-msw-allied";}i:1;a:2:{s:5:"label";s:36:"Commerce PG Courses (M.Com & Allied)";s:4:"href";s:61:"http://localhost:8000/courses/commerce-pg-courses-mcom-allied";}i:2;a:2:{s:5:"label";s:34:"Science PG Courses (M.Sc & Allied)";s:4:"href";s:59:"http://localhost:8000/courses/science-pg-courses-msc-allied";}}}}}i:3;a:3:{s:3:"key";s:19:"medical-paramedical";s:5:"label";s:21:"Medical & Paramedical";s:8:"sections";a:4:{i:0;a:2:{s:5:"title";s:22:"Core Medical & Nursing";s:5:"links";a:2:{i:0;a:2:{s:5:"label";s:33:"Nursing (ANM / GNM / B.Sc / M.Sc)";s:4:"href";s:57:"http://localhost:8000/courses/nursing-anm-gnm-bsc-nursing";}i:1;a:2:{s:5:"label";s:27:"MBBS & Core Medical Degrees";s:4:"href";s:42:"http://localhost:8000/courses/medical/mbbs";}}}i:1;a:2:{s:5:"title";s:27:"Paramedical & Allied Health";s:5:"links";a:4:{i:0;a:2:{s:5:"label";s:38:"Diploma Paramedical Courses (After 10)";s:4:"href";s:50:"http://localhost:8000/courses/paramedical-diplomas";}i:1;a:2:{s:5:"label";s:35:"UG Paramedical Degrees (After 10+2)";s:4:"href";s:52:"http://localhost:8000/courses/ug-paramedical-degrees";}i:2;a:2:{s:5:"label";s:22:"PG Paramedical Courses";s:4:"href";s:40:"http://localhost:8000/courses/medical/pg";}i:3;a:2:{s:5:"label";s:51:"Allied Health Sciences (Physio, MLT, Radiology, OT)";s:4:"href";s:51:"http://localhost:8000/courses/medical/allied-health";}}}i:2;a:2:{s:5:"title";s:8:"Pharmacy";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:48:"Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)";s:4:"href";s:66:"http://localhost:8000/courses/pharmacy-dpharm-bpharm-mpharm-pharmd";}}}i:3;a:2:{s:5:"title";s:28:"AYUSH & Alternative Medicine";s:5:"links";a:2:{i:0;a:2:{s:5:"label";s:44:"AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)";s:4:"href";s:43:"http://localhost:8000/courses/medical/ayush";}i:1;a:2:{s:5:"label";s:18:"Naturopathy & Yoga";s:4:"href";s:54:"http://localhost:8000/courses/medical/naturopathy-yoga";}}}}}i:4;a:3:{s:3:"key";s:14:"engineering-it";s:5:"label";s:28:"Engineering, Technology & IT";s:8:"sections";a:2:{i:0;a:2:{s:5:"title";s:24:"Engineering & Technology";s:5:"links";a:3:{i:0;a:2:{s:5:"label";s:21:"B.Tech / B.E Programs";s:4:"href";s:47:"http://localhost:8000/courses/btech-be-programs";}i:1;a:2:{s:5:"label";s:6:"B.Arch";s:4:"href";s:35:"http://localhost:8000/courses/barch";}i:2;a:2:{s:5:"label";s:6:"M.Tech";s:4:"href";s:35:"http://localhost:8000/courses/mtech";}}}i:1;a:2:{s:5:"title";s:13:"Computer & IT";s:5:"links";a:4:{i:0;a:2:{s:5:"label";s:3:"BCA";s:4:"href";s:33:"http://localhost:8000/courses/bca";}i:1;a:2:{s:5:"label";s:26:"B.Sc Computer Science / IT";s:4:"href";s:53:"http://localhost:8000/courses/bsc-computer-science-it";}i:2;a:2:{s:5:"label";s:3:"MCA";s:4:"href";s:33:"http://localhost:8000/courses/mca";}i:3;a:2:{s:5:"label";s:26:"M.Sc Computer Science / IT";s:4:"href";s:33:"http://localhost:8000/courses/msc";}}}}}i:5;a:3:{s:3:"key";s:19:"business-management";s:5:"label";s:21:"Business & Management";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:19:"Commerce & Business";s:5:"links";a:5:{i:0;a:2:{s:5:"label";s:23:"B.Com & Allied Programs";s:4:"href";s:50:"http://localhost:8000/courses/bcom-allied-programs";}i:1;a:2:{s:5:"label";s:19:"M.Com & PG Commerce";s:4:"href";s:34:"http://localhost:8000/courses/mcom";}i:2;a:2:{s:5:"label";s:19:"BBA & UG Management";s:4:"href";s:33:"http://localhost:8000/courses/bba";}i:3;a:2:{s:5:"label";s:10:"MBA / PGDM";s:4:"href";s:38:"http://localhost:8000/courses/mba-pgdm";}i:4;a:2:{s:5:"label";s:37:"CA / CS / CMA (Professional Commerce)";s:4:"href";s:57:"http://localhost:8000/courses/finance-taxation-accounting";}}}}}}}i:2;a:6:{s:3:"key";s:8:"colleges";s:5:"label";s:8:"Colleges";s:6:"tabbed";b:1;s:10:"noDropdown";b:0;s:4:"href";N;s:4:"tabs";a:4:{i:0;a:3:{s:3:"key";s:19:"national-institutes";s:5:"label";s:19:"National Institutes";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:33:"Institutes of National Importance";s:5:"links";a:6:{i:0;a:2:{s:5:"label";s:40:"IITs – Indian Institutes of Technology";s:4:"href";s:67:"http://localhost:8000/colleges/iits-indian-institutes-of-technology";}i:1;a:2:{s:5:"label";s:42:"NITs – National Institutes of Technology";s:4:"href";s:69:"http://localhost:8000/colleges/nits-national-institutes-of-technology";}i:2;a:2:{s:5:"label";s:30:"IIMs – Management Institutes";s:4:"href";s:57:"http://localhost:8000/colleges/iims-management-institutes";}i:3;a:2:{s:5:"label";s:28:"AIIMS – Medical Institutes";s:4:"href";s:55:"http://localhost:8000/colleges/aiims-medical-institutes";}i:4;a:2:{s:5:"label";s:31:"NIFT / NID – Fashion & Design";s:4:"href";s:54:"http://localhost:8000/colleges/nift-nid-fashion-design";}i:5;a:2:{s:5:"label";s:32:"National Law Universities (NLUs)";s:4:"href";s:61:"http://localhost:8000/colleges/national-law-universities-nlus";}}}}}i:1;a:3:{s:3:"key";s:12:"universities";s:5:"label";s:12:"Universities";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:21:"Types of Universities";s:5:"links";a:3:{i:0;a:2:{s:5:"label";s:20:"Central Universities";s:4:"href";s:51:"http://localhost:8000/colleges/central-universities";}i:1;a:2:{s:5:"label";s:18:"State Universities";s:4:"href";s:49:"http://localhost:8000/colleges/state-universities";}i:2;a:2:{s:5:"label";s:45:"Open & Distance Universities (IGNOU, NSOU...)";s:4:"href";s:68:"http://localhost:8000/colleges/open-distance-universities-ignou-nsou";}}}}}i:2;a:3:{s:3:"key";s:8:"by-field";s:5:"label";s:17:"By Field of Study";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:20:"Stream-wise Colleges";s:5:"links";a:8:{i:0;a:2:{s:5:"label";s:20:"Engineering Colleges";s:4:"href";s:51:"http://localhost:8000/colleges/engineering-colleges";}i:1;a:2:{s:5:"label";s:30:"Medical & Paramedical Colleges";s:4:"href";s:59:"http://localhost:8000/colleges/medical-paramedical-colleges";}i:2;a:2:{s:5:"label";s:16:"Nursing Colleges";s:4:"href";s:47:"http://localhost:8000/colleges/nursing-colleges";}i:3;a:2:{s:5:"label";s:17:"Pharmacy Colleges";s:4:"href";s:48:"http://localhost:8000/colleges/pharmacy-colleges";}i:4;a:2:{s:5:"label";s:30:"Management & Business Colleges";s:4:"href";s:59:"http://localhost:8000/colleges/management-business-colleges";}i:5;a:2:{s:5:"label";s:12:"Law Colleges";s:4:"href";s:43:"http://localhost:8000/colleges/law-colleges";}i:6;a:2:{s:5:"label";s:33:"Agriculture & Veterinary Colleges";s:4:"href";s:62:"http://localhost:8000/colleges/agriculture-veterinary-colleges";}i:7;a:2:{s:5:"label";s:32:"Teacher Training / B.Ed Colleges";s:4:"href";s:60:"http://localhost:8000/colleges/teacher-training-bed-colleges";}}}}}i:3;a:3:{s:3:"key";s:20:"vocational-technical";s:5:"label";s:33:"Vocational & Technical Institutes";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:40:"Vocational, Skill & Technical Institutes";s:5:"links";a:4:{i:0;a:2:{s:5:"label";s:28:"ITI Centres (Govt / Private)";s:4:"href";s:55:"http://localhost:8000/colleges/iti-centres-govt-private";}i:1;a:2:{s:5:"label";s:20:"Polytechnic Colleges";s:4:"href";s:51:"http://localhost:8000/colleges/polytechnic-colleges";}i:2;a:2:{s:5:"label";s:25:"MSME Tool Room Institutes";s:4:"href";s:56:"http://localhost:8000/colleges/msme-tool-room-institutes";}i:3;a:2:{s:5:"label";s:25:"Skill Development Centres";s:4:"href";s:56:"http://localhost:8000/colleges/skill-development-centres";}}}}}}}i:3;a:6:{s:3:"key";s:5:"exams";s:5:"label";s:5:"Exams";s:6:"tabbed";b:1;s:10:"noDropdown";b:0;s:4:"href";N;s:4:"tabs";a:6:{i:0;a:3:{s:3:"key";s:22:"engineering-tech-exams";s:5:"label";s:18:"Engineering & Tech";s:8:"sections";a:3:{i:0;a:2:{s:5:"title";s:20:"Engineering Entrance";s:5:"links";a:3:{i:0;a:2:{s:5:"label";s:14:"National Level";s:4:"href";s:67:"http://localhost:8000/exams/national-level-eg-jee-main-jee-advanced";}i:1;a:2:{s:5:"label";s:11:"State Level";s:4:"href";s:49:"http://localhost:8000/exams/state-level-wbjee-etc";}i:2;a:2:{s:5:"label";s:16:"University Level";s:4:"href";s:50:"http://localhost:8000/exams/university-level-exams";}}}i:1;a:2:{s:5:"title";s:21:"Computer Applications";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:18:"MCA Entrance Exams";s:4:"href";s:31:"http://localhost:8000/exams/mca";}}}i:2;a:2:{s:5:"title";s:12:"Architecture";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:36:"Architecture Exams (NATA/AAT/TANATA)";s:4:"href";s:40:"http://localhost:8000/exams/architecture";}}}}}i:1;a:3:{s:3:"key";s:20:"medical-allied-exams";s:5:"label";s:16:"Medical & Allied";s:8:"sections";a:4:{i:0;a:2:{s:5:"title";s:16:"Medical Entrance";s:5:"links";a:2:{i:0;a:2:{s:5:"label";s:14:"National Level";s:4:"href";s:53:"http://localhost:8000/exams/national-level-eg-neet-ug";}i:1;a:2:{s:5:"label";s:32:"State Level (NEET replaced list)";s:4:"href";s:53:"http://localhost:8000/exams/state-level-medical-exams";}}}i:1;a:2:{s:5:"title";s:7:"Nursing";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:22:"Nursing & Allied Exams";s:4:"href";s:58:"http://localhost:8000/exams/university-level-medical-exams";}}}i:2;a:2:{s:5:"title";s:10:"PG Medical";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:24:"MS/MD & PG Medical Exams";s:4:"href";s:30:"http://localhost:8000/exams/pg";}}}i:3;a:2:{s:5:"title";s:8:"Pharmacy";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:23:"Pharmacy Entrance Exams";s:4:"href";s:36:"http://localhost:8000/exams/pharmacy";}}}}}i:2;a:3:{s:3:"key";s:25:"hospitality-tourism-exams";s:5:"label";s:21:"Hospitality & Tourism";s:8:"sections";a:1:{i:0;a:2:{s:5:"title";s:21:"Hotel Management (UG)";s:5:"links";a:4:{i:0;a:2:{s:5:"label";s:14:"National Level";s:4:"href";s:53:"http://localhost:8000/exams/hotel-management/national";}i:1;a:2:{s:5:"label";s:11:"State Level";s:4:"href";s:50:"http://localhost:8000/exams/hotel-management/state";}i:2;a:2:{s:5:"label";s:16:"University Level";s:4:"href";s:55:"http://localhost:8000/exams/hotel-management/university";}i:3;a:2:{s:5:"label";s:26:"Hotel-run / Industry Exams";s:4:"href";s:54:"http://localhost:8000/exams/hotel-management/hotel-run";}}}}}i:3;a:3:{s:3:"key";s:28:"law-management-finance-exams";s:5:"label";s:30:"Law • Management • Finance";s:8:"sections";a:3:{i:0;a:2:{s:5:"title";s:3:"Law";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:18:"Law Entrance Exams";s:4:"href";s:35:"http://localhost:8000/exams/law/law";}}}i:1;a:2:{s:5:"title";s:10:"Management";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:22:"MBA & Management Exams";s:4:"href";s:42:"http://localhost:8000/exams/law/management";}}}i:2;a:2:{s:5:"title";s:18:"Finance & Accounts";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:25:"CA / CS / CMA / CFA Exams";s:4:"href";s:48:"http://localhost:8000/exams/law/finance-accounts";}}}}}i:4;a:3:{s:3:"key";s:29:"design-media-humanities-exams";s:5:"label";s:31:"Design • Media • Humanities";s:8:"sections";a:4:{i:0;a:2:{s:5:"title";s:16:"Fashion & Design";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:22:"Design & Fashion Exams";s:4:"href";s:41:"http://localhost:8000/exams/design/design";}}}i:1;a:2:{s:5:"title";s:17:"Media & Mass Comm";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:15:"Mass Comm Exams";s:4:"href";s:44:"http://localhost:8000/exams/design/mass-comm";}}}i:2;a:2:{s:5:"title";s:27:"Humanities & Social Science";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:16:"Humanities Exams";s:4:"href";s:45:"http://localhost:8000/exams/design/humanities";}}}i:3;a:2:{s:5:"title";s:11:"Mathematics";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:33:"Mathematics (UG) Admissions/Tests";s:4:"href";s:46:"http://localhost:8000/exams/design/mathematics";}}}}}i:5;a:3:{s:3:"key";s:25:"agri-defence-school-exams";s:5:"label";s:27:"Agri • Defence • School";s:8:"sections";a:4:{i:0;a:2:{s:5:"title";s:11:"Agriculture";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:17:"Agriculture Exams";s:4:"href";s:44:"http://localhost:8000/exams/agri/agriculture";}}}i:1;a:2:{s:5:"title";s:18:"Veterinary Science";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:16:"Veterinary Exams";s:4:"href";s:43:"http://localhost:8000/exams/agri/veterinary";}}}i:2;a:2:{s:5:"title";s:16:"Defence & Marine";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:32:"Defence Exams (NDA/CDS/TES etc.)";s:4:"href";s:40:"http://localhost:8000/exams/agri/defence";}}}i:3;a:2:{s:5:"title";s:12:"School-level";s:5:"links";a:1:{i:0;a:2:{s:5:"label";s:33:"School Scholarship / Talent Exams";s:4:"href";s:39:"http://localhost:8000/exams/agri/school";}}}}}}}i:4;a:5:{s:3:"key";s:5:"forum";s:5:"label";s:11:"Scholarship";s:6:"tabbed";b:0;s:10:"noDropdown";b:1;s:4:"href";s:42:"http://localhost:8000/scholarship/overview";}i:5;a:5:{s:3:"key";s:5:"about";s:5:"label";s:21:"Counsellors Directory";s:6:"tabbed";b:0;s:10:"noDropdown";b:1;s:4:"href";s:43:"http://localhost:8000/counsellors/directory";}i:6;a:5:{s:3:"key";s:4:"jobs";s:5:"label";s:18:"Jobs Opportunities";s:6:"tabbed";b:0;s:10:"noDropdown";b:1;s:4:"href";s:40:"http://localhost:8000/jobs/opportunities";}i:7;a:5:{s:3:"key";s:7:"schemes";s:5:"label";s:16:"Minority Schemes";s:6:"tabbed";b:0;s:10:"noDropdown";b:1;s:4:"href";s:38:"http://localhost:8000/minority/schemes";}i:8;a:5:{s:3:"key";s:6:"hostel";s:5:"label";s:15:"Waqf Run Hostel";s:6:"tabbed";b:0;s:10:"noDropdown";b:1;s:4:"href";s:37:"http://localhost:8000/waqf-run-hostel";}i:9;a:5:{s:3:"key";s:7:"support";s:5:"label";s:17:"Admission Support";s:6:"tabbed";b:0;s:10:"noDropdown";b:1;s:4:"href";s:39:"http://localhost:8000/admission/support";}i:10;a:5:{s:3:"key";s:8:"coaching";s:5:"label";s:16:"Coaching Support";s:6:"tabbed";b:0;s:10:"noDropdown";b:1;s:4:"href";s:38:"http://localhost:8000/coaching/support";}i:11;a:5:{s:3:"key";s:5:"links";s:5:"label";s:19:"Important Web Links";s:6:"tabbed";b:0;s:10:"noDropdown";b:1;s:4:"href";s:41:"http://localhost:8000/important-web-links";}}	1779815700
\.


--
-- Data for Name: cache_locks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cache_locks (key, owner, expiration) FROM stdin;
\.


--
-- Data for Name: career_domains; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.career_domains (id, title, subtitle, image, link, details, created_at, updated_at) FROM stdin;
1	Diploma In Paramedical	Healthcare diploma programs for clinical and allied medical roles.	career-domains/OtBwnmV1uMSvrQzh63UKdNd5O8MUGVuKVz1sCcCD.webp	courses.diploma.paramedical	Allied health diplomas, medical support careers, lab technology, radiology, nursing assistant programs and guidance for training & placements.	2026-04-27 07:56:25	2026-04-27 07:56:25
2	Diploma In Engineering	Technical diploma paths across core and modern engineering fields.	career-domains/IcpdiyRFCSTD8uqYDOrt8nHGA3UNgFJqHDECTrpy.webp	courses.diploma.engineering	Core engineering streams, computer science, IT and multidisciplinary tech pathways. Info about entrance tests, scholarships and training programs.	2026-04-27 08:05:05	2026-04-27 08:05:05
3	Diploma In Computer/IT	IT and computer-focused diploma programs for tech careers.	career-domains/YwmuvqeikaLJsVqwDlJjm8q4rgY4fgx1JROL0jjN.webp	courses.diploma.it	Computer applications, IT support, software fundamentals, networking pathways, and career guidance for internships and certifications.	2026-04-27 08:08:01	2026-04-27 08:08:01
4	Vocational & Skill	Hands-on skill training and practical career-oriented courses.	career-domains/cOqJjSCPxh9b2H081S8C4Go9zzp1aYmPzpINqMXr.webp	courses.vocational.class8plus	Courses, colleges, scholarships and career paths in skill-based and vocational fields. Guidance for training programs, practical learning and employment opportunities.	2026-04-27 08:09:25	2026-04-27 08:09:25
5	Scholarship & Loan	Financial support options for students across all fields.	career-domains/twl912517GCj3xzStl5LRihTnvboAIZp53jsuGZB.webp	scholarship.overview	Scholarship schemes, education loans, eligibility guidance and financial assistance routes for students, including minority-focused programs.	2026-04-27 08:11:00	2026-04-27 08:11:00
6	Study Abroad	Explore global education opportunities and pathways abroad.	career-domains/4ADkmOBube99VJE8ePjyhnfDJZwvfxok0RCaJ1ST.webp	study.abroad	International study options, admission requirements, exams, scholarships and support for students aiming to pursue education overseas.	2026-04-27 08:12:24	2026-04-27 08:19:27
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, slug, created_at, updated_at) FROM stdin;
2	Careers	careers	2025-11-07 18:48:31	2025-11-07 18:48:31
3	Courses	courses	2025-11-07 18:49:15	2025-11-07 18:49:15
4	Colleges	colleges	2025-11-07 18:49:27	2025-11-07 18:49:27
5	Exams	exams	2025-11-07 18:49:37	2025-11-07 18:49:37
\.


--
-- Data for Name: central_universities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.central_universities (id, name, city, state, website, is_active, created_at, updated_at) FROM stdin;
1	Central University of Andhra Pradesh	Andhra Pradesh	Anantapur	https://cuap.ac.in/	t	2026-01-04 11:55:33	2026-01-04 11:55:47
2	Central University of Andhra Pradesh	Anantapur	Andhra Pradesh	https://cuap.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
3	Central Tribal University of Andhra Pradesh	Vizianagaram	Andhra Pradesh	https://ctuap.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
4	National Sanskrit University	Tirupati	Andhra Pradesh	https://nsktu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
5	Rajiv Gandhi University	Doimukh (Itanagar)	Arunachal Pradesh	https://rgu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
6	Assam University	Silchar	Assam	https://aus.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
7	Tezpur University	Tezpur	Assam	https://www.tezu.ernet.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
8	Central University of South Bihar	Gaya	Bihar	https://www.cusb.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
9	Mahatma Gandhi Central University	Motihari	Bihar	https://mgcub.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
10	Nalanda University	Rajgir	Bihar	https://nalandauniv.edu.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
11	Dr. Rajendra Prasad Central Agricultural University	Pusa (Samastipur)	Bihar	https://www.rpcau.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
12	Guru Ghasidas Vishwavidyalaya	Bilaspur	Chhattisgarh	https://www.ggu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
13	University of Delhi	New Delhi	Delhi	https://www.du.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
14	Jawaharlal Nehru University	New Delhi	Delhi	https://www.jnu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
15	Jamia Millia Islamia	New Delhi	Delhi	https://www.jmi.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
16	Indira Gandhi National Open University (IGNOU)	New Delhi	Delhi	https://www.ignou.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
17	South Asian University	New Delhi	Delhi	https://www.sau.int/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
18	Central Sanskrit University	New Delhi	Delhi	https://www.sanskrit.nic.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
19	Shri Lal Bahadur Shastri National Sanskrit University	New Delhi	Delhi	https://www.slbsrsv.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
20	Central University of Gujarat	Gandhinagar	Gujarat	https://www.cug.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
21	Gati Shakti Vishwavidyalaya	Vadodara	Gujarat	https://gsv.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
22	Central University of Haryana	Mahendragarh	Haryana	https://www.cuh.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
23	Central University of Himachal Pradesh	Dharamshala	Himachal Pradesh	https://www.cuhimachal.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
24	Central University of Jammu	Samba	Jammu & Kashmir	https://www.cujammu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
25	Central University of Kashmir	Ganderbal	Jammu & Kashmir	https://www.cukashmir.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
26	Central University of Jharkhand	Ranchi	Jharkhand	https://www.cuj.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
27	Central University of Karnataka	Kalaburagi	Karnataka	https://www.cuk.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
28	Central University of Kerala	Kasaragod	Kerala	https://www.cukerala.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
29	Sindhu Central University	Ladakh	Ladakh	https://sindhucu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
30	Dr. Harisingh Gour Vishwavidyalaya	Sagar	Madhya Pradesh	https://www.dhsgsu.edu.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
31	Indira Gandhi National Tribal University	Amarkantak	Madhya Pradesh	https://www.igntu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
32	Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya	Wardha	Maharashtra	https://www.mgahv.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
33	Central Agricultural University	Imphal	Manipur	https://www.cau.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
34	Manipur University	Imphal	Manipur	https://www.manipuruniv.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
35	National Sports University	Imphal (Khuman Lampak)	Manipur	https://www.nsu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
36	North Eastern Hill University (NEHU)	Shillong	Meghalaya	https://www.nehu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
37	Mizoram University	Aizawl	Mizoram	https://www.mzu.edu.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
38	Nagaland University	Lumami	Nagaland	https://nagalanduniversity.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
39	Central University of Odisha	Koraput	Odisha	https://www.cuo.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
40	Pondicherry University	Puducherry	Puducherry	https://www.pondiuni.edu.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
41	Central University of Punjab	Bathinda	Punjab	https://www.cup.edu.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
42	Central University of Rajasthan	Ajmer	Rajasthan	https://www.curaj.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
43	Sikkim University	Gangtok	Sikkim	https://www.cus.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
44	Central University of Tamil Nadu	Thiruvarur	Tamil Nadu	https://www.cutn.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
45	Indian Maritime University	Chennai	Tamil Nadu	https://www.imu.edu.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
46	University of Hyderabad	Hyderabad	Telangana	https://uohyd.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
47	Maulana Azad National Urdu University	Hyderabad	Telangana	https://manuu.edu.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
48	English and Foreign Languages University (EFLU)	Hyderabad	Telangana	https://www.efluniversity.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
49	Rajiv Gandhi National Institute of Youth Development (RGNIYD)	Hyderabad	Telangana	https://www.rgniyd.gov.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
50	Tripura University	Agartala	Tripura	https://www.tripurauniv.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
51	Aligarh Muslim University (AMU)	Aligarh	Uttar Pradesh	https://www.amu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
52	Babasaheb Bhimrao Ambedkar University (BBAU)	Lucknow	Uttar Pradesh	https://www.bbau.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
53	Banaras Hindu University (BHU)	Varanasi	Uttar Pradesh	https://www.bhu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
54	University of Allahabad	Prayagraj	Uttar Pradesh	https://www.allduniv.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
55	Rajiv Gandhi National Aviation University	Amethi	Uttar Pradesh	https://www.rgnau.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
56	Rani Lakshmi Bai Central Agricultural University	Jhansi	Uttar Pradesh	https://www.rlbcau.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
57	Hemwati Nandan Bahuguna Garhwal University	Srinagar (Garhwal)	Uttarakhand	https://hnbgu.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
58	Visva-Bharati	Santiniketan	West Bengal	https://www.visvabharati.ac.in/	t	2026-01-04 17:34:43	2026-01-04 17:34:43
\.


--
-- Data for Name: cm_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cm_messages (id, content, image, created_at, updated_at) FROM stdin;
1	<div class="h-100 d-flex flex-column justify-content-center"><header class="mb-2 mb-md-3"><h2 class="section-heading text-muted mb-2 mb-lg-4">Message from the <span class="gradient-text">Hon’ble Chief Minister, WB</span></h2><p>“Find the Right Career for Life” – A Guiding Light for Our Youth</p></header><div class="cm-message-body"><p class="mb-2">West Bengal Minorities' Development and Finance Corporation is bringing out <strong>'Find the Right Career for Life'</strong>, a comprehensive guide book to various courses and career options.</p><p class="mb-2">The book seeks to provide valuable insight on various courses, options and opportunities available in the country in different areas of education and employment. I welcome this very significant initiative of the Corporation.</p><p class="mb-0">I hope the career guide will be of immense benefit to the students and youth of our state, including those belonging to the under-privileged sections of society, in choosing and pursuing the right career path, thus helping them achieve success and prosperity in their future life.</p><p class="mb-0"> </p></div></div>	cm/JgBUPHjTwgtIudbNW8zUcvY56JgNhb2Gspx3Fn2q.webp	2026-04-26 06:50:07	2026-05-02 11:49:02
\.


--
-- Data for Name: coaching_supports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coaching_supports (id, subject, institution_name, web_contact, is_active, sort_order, created_at, updated_at, note) FROM stdin;
22	UPSC Exam	Zakat Foundation of India, New Delhi	http://www.zakatindia.org/	t	1	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
23	UPSC Exam	Jamia Millia Islamia University, New Delhi	https://www.jmi.ac.in/cccp	t	2	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
24	UPSC Exam	Hamdard Study Circle, New Delhi	http://hamdardstudycircle.in/	t	3	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
25	UPSC Exam	Haj Committee, Mumbai	http://www.hajcommittee.gov.in/	t	4	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
26	UPSC Exam	Centre for Civil Services Coaching, Maulana Azad National Urdu University (MANUU), Hyderabad	http://www.manuu.ac.in/Eng-Php/index-english.php	t	5	2026-01-04 13:55:57	2026-01-04 13:55:57	See: ias_coaching.aspx (on MANUU site)
27	UPSC Exam	Jamia Hamdard Residential Coaching Academy, New Delhi	https://admission.nopaperforms.com/jamia-hamdard-residential-coaching-academy	t	6	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
28	UPSC Exam	Aligarh Muslim University Residential Coaching Academy	https://www.amu.ac.in/rcaacademy.jsp?did=10015	t	7	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
29	WB Civil Services Exam	Administrative Training Institute (ATI), West Bengal	http://www.atiwb.gov.in/	t	8	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
30	JEE Mains & Advanced (IIT)	Rahmani 30, Patna	http://www.rahmanimission.info/	t	9	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
31	Joint Entrance Exam & WB Civil Services Exam	Al Ameen Mission, West Bengal	https://alameenmission.org/	t	10	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
32	Joint Entrance Exam & WB Civil Services Exam	Al Ameen Mission (Free Coaching)	http://www.alameenmission.in/freecoaching/	t	11	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
33	WB Civil Services Exam	GD Academy, West Bengal	https://www.gdstudycircle.org/	t	12	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
34	VOICE Institute / WB Civil Services	Academic Association, West Bengal (Taratala, Kolkata)	http://academicassociation.in/	t	13	2026-01-04 13:55:57	2026-01-04 13:55:57	Email: md76monirul@gmail.com
35	WB Civil Services Exam	SNAP Academy, Kolkata, West Bengal	http://snapbengal.org/	t	14	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
36	WB Civil Services Exam	Urdu Academy, Kolkata, West Bengal	http://westbengalurduacademy.com/	t	15	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
37	WB Civil Services Exam	Educare Foundation for WBCS, Kolkata, West Bengal	educarewbcs@gmail.com	t	16	2026-01-04 13:55:57	2026-01-04 13:55:57	Mob: 8420058936 / 9433894666
38	WB Judicial Services Coaching	SNAP Academy, Kolkata, West Bengal	http://snapbengal.org/	t	17	2026-01-04 13:55:57	2026-01-04 13:55:57	Mob: 9748800146
39	WB Civil Services Exam & Combined Exam	DMWS Academy, Durgapur, West Bengal	-	t	18	2026-01-04 13:55:57	2026-01-04 13:55:57	Mob: 8910049878 / 9434590880
40	Law Coaching	CLATAPULT, West Bengal	https://www.clatapult.com/	t	19	2026-01-04 13:55:57	2026-01-04 13:55:57	\N
\.


--
-- Data for Name: counselor_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.counselor_details (id, user_id, qualification, subject, bio, profile_image, created_at, updated_at) FROM stdin;
43	51	M.Pharm (Gold Medalist), Ph.D (JU), Post-Doc (USA)	Pharmacy	\N	\N	2026-01-05 18:38:03	2026-01-05 18:38:03
44	51	Ph.D (Pharmacy)	GATE / GRE / TOEFL / IELTS	\N	\N	2026-01-05 18:38:03	2026-01-05 18:38:03
45	31	M.Com, MBA (HRM)	General Subjects (Science / Arts / Commerce)	\N	\N	2026-01-05 18:38:36	2026-01-05 18:38:36
46	52	Ph.D (Physics)	General Subjects (Science / Arts / Commerce)	\N	\N	2026-01-05 18:43:02	2026-01-05 18:43:02
47	52	Ph.D (Physics)	GATE / GRE / TOEFL / IELTS	\N	\N	2026-01-05 18:43:02	2026-01-05 18:43:02
48	53	Ph.D (English)	General Subjects (Science / Arts / Commerce)	\N	\N	2026-01-05 18:43:02	2026-01-05 18:43:02
49	54	MBBS, MD	Medical	\N	\N	2026-01-05 18:43:02	2026-01-05 18:43:02
50	56	M.Sc, B.Ed, M.Ed, Ph.D	D.Ed / B.Ed / M.Ed	\N	\N	2026-01-05 18:45:25	2026-01-05 18:45:25
53	59	B.Tech, MBA	BBA / MBA / BCA / MCA	\N	\N	2026-01-05 18:45:25	2026-01-05 18:45:25
54	60	B.Tech, MBA	BBA / MBA / BCA / MCA	\N	\N	2026-01-05 18:45:26	2026-01-05 18:45:26
55	61	Ph.D	Journalism & Mass Communication	\N	\N	2026-01-05 18:46:28	2026-01-05 18:46:28
57	63	DHMC and CT	Hotel Management	\N	\N	2026-01-05 18:46:28	2026-01-05 18:46:28
58	64	Ph.D	Paramedical Courses / Nursing	\N	\N	2026-01-05 18:46:28	2026-01-05 18:46:28
59	65	Ph.D	Biotechnology	\N	\N	2026-01-05 18:46:29	2026-01-05 18:46:29
60	65	Ph.D	Ocean Engineering / Marine Science / Petroleum Engg	\N	\N	2026-01-05 18:46:29	2026-01-05 18:46:29
61	66	M.A	Data Analysis / STATA / R / Software	\N	\N	2026-01-05 18:47:16	2026-01-05 18:47:16
62	67	Diploma in Animation	Graphic Design / Animation / Video Editing	\N	\N	2026-01-05 18:47:17	2026-01-05 18:47:17
63	68	Ph.D	Agriculture	\N	\N	2026-01-05 18:47:17	2026-01-05 18:47:17
64	69	Bachelor of Visual Arts, Master of Fine Arts, B.Ed, M.Ed	Visual / Fine Arts	\N	\N	2026-01-05 18:47:17	2026-01-05 18:47:17
65	70	Ph.D	Arabic Language	\N	\N	2026-01-05 18:47:17	2026-01-05 18:47:17
68	73	Ph.D	BLIS / MLIS	\N	\N	2026-01-05 18:47:47	2026-01-05 18:47:47
70	75	M.A	GIS & Remote Sensing	\N	\N	2026-01-05 18:47:48	2026-01-05 18:47:48
71	76	M.Phil, Ph.D	Population Science / Demography / Public Health	\N	\N	2026-01-05 18:48:22	2026-01-05 18:48:22
72	77	M.Sc, Ph.D	Disaster Management	\N	\N	2026-01-05 18:48:22	2026-01-05 18:48:22
73	78	M.A	Museology	\N	\N	2026-01-05 18:48:22	2026-01-05 18:48:22
74	79	M.A, M.Phil	Nutrition	\N	\N	2026-01-05 18:48:22	2026-01-05 18:48:22
75	80	M.Sc, M.Phil	Development Studies	\N	\N	2026-01-05 18:48:23	2026-01-05 18:48:23
77	82	Ph.D	Paramedical Courses / Nursing	\N	\N	2026-01-05 18:48:50	2026-01-05 18:48:50
78	83	Ph.D	Microbiology	\N	\N	2026-01-05 18:48:50	2026-01-05 18:48:50
79	81	M.A	Statistics	\N	\N	2026-01-05 19:00:35	2026-01-05 19:00:35
80	74	Chartered Accountant	Chartered Accountant	\N	\N	2026-01-05 19:01:21	2026-01-05 19:01:21
81	72	Master in Library Science	Japanese Language	\N	\N	2026-01-05 19:01:52	2026-01-05 19:01:52
82	62	Ph.D	BSW / MSW	\N	\N	2026-01-05 19:02:20	2026-01-05 19:02:20
83	58	B.Tech in CSE, M.E in CSE	Engineering (WBJEE / IIT JEE)	\N	\N	2026-01-05 19:02:49	2026-01-05 19:02:49
84	57	B.Tech, M.Tech, Ph.D	Vocational / ITI / Diploma	\N	\N	2026-01-05 19:03:17	2026-01-05 19:03:17
85	71	Ph.D	Persian Language	\N	\N	2026-01-05 19:10:21	2026-01-05 19:10:21
86	84	LLB, LLM, UGC-NET	Law / CLAT / Judicial / NET / SLET	\N	\N	2026-01-05 19:15:23	2026-01-05 19:15:23
87	85	B.Sc., M.Sc.	WBCS / UPSC Exam	\N	\N	2026-01-05 19:16:12	2026-01-05 19:16:12
\.


--
-- Data for Name: failed_jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.failed_jobs (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
\.


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
-- Data for Name: hero_slides; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hero_slides (id, title, title_gradient, subtitle, cta_text, cta_link, img_base, "order", created_at, updated_at) FROM stdin;
3	Discover the Path	Meant for You.	Take a guided career quiz to explore opportunities that match your interests, skills, and aspirations — and get your personalized roadmap to success.	\N	\N	hero-slides/WV0LTi8ymODX3y1cJroWGVz6ZcW8Trf3os1hwCdE.webp	0	2026-04-26 10:41:29	2026-04-26 12:00:45
6	Get Guidance	That Matters.	Speak to certified career counselors or join our student community to learn and grow together.	\N	\N	hero-slides/PB5RwMptCt2XFpgQ0TnhLGDj5VQTu47S8r2eV9HS.webp	0	2026-04-26 10:45:01	2026-04-26 12:00:59
5	Learn Smart.	Plan Ahead.	Find verified details on courses, colleges, entrance exams, and scholarships — all in one trusted platform.	\N	\N	hero-slides/mBqNsD7EsqpZGx4W1okwGMUHs70s3lIuLaWaHaZ5.webp	0	2026-04-26 10:43:26	2026-04-26 12:01:09
1	Find The Right	Career For Life	An initiative by the West Bengal Minorities’ Development & Finance Corporation (WBMDFC) — guiding students toward the right careers, scholarships, and brighter opportunities.	\N	\N	hero-slides/cJUVGvHk3zQ6lty3UcmZCrBignxIin44bLbLeT4j.webp	1	2026-04-26 10:05:38	2026-04-26 12:16:14
\.


--
-- Data for Name: important_web_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.important_web_links (id, subject, web_link, created_at, updated_at, category) FROM stdin;
3	WB Board of Secondary Education	www.wbbse.org	2026-01-04 13:41:03	2026-01-04 13:41:03	School
4	WB Council of Higher Secondary Education	www.wbchse.nic.in	2026-01-04 13:41:03	2026-01-04 13:41:03	School
5	WB State Council of Higher Secondary Education	http://www.wbsche.ac.in/	2026-01-04 13:41:03	2026-01-04 13:41:03	School
6	Department of School Education	www.wbsed.gov.in	2026-01-04 13:41:03	2026-01-04 13:41:03	School
7	PTTI / B.Ed / D.El.Ed	www.wbbpe.org	2026-01-04 13:41:03	2026-01-04 13:41:03	School
8	WB Board of Madrasha Education	http://www.wbbme.org/	2026-01-04 13:41:03	2026-01-04 13:41:03	School
9	Directorate of Madrasha Education	http://www.wbmadrasahdte.gov.in/	2026-01-04 13:41:03	2026-01-04 13:41:03	School
10	Minority Affairs & Madrasha Education Dept.	http://wbminorityaffairs.gov.in/	2026-01-04 13:41:03	2026-01-04 13:41:03	School
11	School Service Commission (SSC)	www.westbengalssc.com	2026-01-04 13:41:03	2026-01-04 13:41:03	School
12	Madrasa Service Commission (MSC)	http://wbmsc.com/	2026-01-04 13:41:03	2026-01-04 13:41:03	School
13	Navodaya Vidyalaya	http://navodaya.gov.in/nvs/en/Home1	2026-01-04 13:41:03	2026-01-04 13:41:03	School
14	Ramakrishna Mission Institutions	https://en.wikipedia.org/wiki/List_of_Ramakrishna_Mission_institutions	2026-01-04 13:41:03	2026-01-04 13:41:03	School
15	Kendriya Vidyalaya	http://kvsangathan.nic.in/	2026-01-04 13:41:03	2026-01-04 13:41:03	School
16	CBSE Board	http://cbse.nic.in/newsite/index.html	2026-01-04 13:41:03	2026-01-04 13:41:03	School
17	ICSE Board	http://cisce.org/	2026-01-04 13:41:03	2026-01-04 13:41:03	School
18	National Institute of Open Schooling (NIOS)	http://www.nios.ac.in/	2026-01-04 13:41:03	2026-01-04 13:41:03	School
19	District-wise List of Colleges in West Bengal	http://www.wbpublibnet.gov.in/node/2337	2026-01-04 13:41:15	2026-01-04 13:41:15	College
20	College Admission Information	http://www.collegeadmission.in/	2026-01-04 13:41:15	2026-01-04 13:41:15	College
21	WB College & University Professors' Association	http://wbcupa.org/	2026-01-04 13:41:15	2026-01-04 13:41:15	College
22	All Bengal Principals' Council	http://www.abpcinfo.org/	2026-01-04 13:41:15	2026-01-04 13:41:15	College
23	Index of Govt. Circulars	https://wbxpress.com/circulars/	2026-01-04 13:41:15	2026-01-04 13:41:15	College
24	List of B.Ed Colleges	http://www.ercncte.org/b_ed_west_bangal.html	2026-01-04 13:41:15	2026-01-04 13:41:15	College
25	College Service Commission (CSC)	http://wbcsc.ac.in	2026-01-04 13:41:15	2026-01-04 13:41:15	College
26	Public Service Commission (WB)	https://www.pscwbonline.gov.in/apps/home/	2026-01-04 13:41:15	2026-01-04 13:41:15	College
27	National Eligibility Test (NET)	https://cbsenet.nic.in/cms/public/home.aspx	2026-01-04 13:41:15	2026-01-04 13:41:15	College
28	State Level Eligibility Test (SLET)	http://sletne.org/	2026-01-04 13:41:15	2026-01-04 13:41:15	College
29	University Grants Commission (UGC)	https://www.ugc.ac.in/	2026-01-04 13:41:23	2026-01-04 13:41:23	University
30	Central Universities	https://www.ugc.ac.in/centraluniversity.aspx	2026-01-04 13:41:23	2026-01-04 13:41:23	University
31	State Universities	https://www.ugc.ac.in/stateuniversity.aspx	2026-01-04 13:41:23	2026-01-04 13:41:23	University
32	Deemed Universities	https://www.ugc.ac.in/page/Deemed-Universities.aspx	2026-01-04 13:41:23	2026-01-04 13:41:23	University
33	Private Universities	https://www.ugc.ac.in/privatuniversity.aspx	2026-01-04 13:41:23	2026-01-04 13:41:23	University
34	Fake Universities	https://www.ugc.ac.in/page/Fake-Universities.aspx	2026-01-04 13:41:23	2026-01-04 13:41:23	University
35	AICTE Approved Institutions	https://www.facilities.aicte-india.org/dashboard/pages/dashboardaicte.php	2026-01-04 13:41:23	2026-01-04 13:41:23	University
36	Indira Gandhi National Open University (IGNOU)	http://www.ignou.ac.in/	2026-01-04 13:41:23	2026-01-04 13:41:23	University
37	Netaji Subhas Open University	http://www.wbnsou.ac.in/	2026-01-04 13:41:23	2026-01-04 13:41:23	University
38	National Commission for Minority Educational Institutions	http://ncmei.gov.in/	2026-01-04 13:41:23	2026-01-04 13:41:23	University
39	India Results	http://www.indiaresults.com/select-state.htm	2026-01-04 13:41:32	2026-01-04 13:41:32	Results & Exams
40	WB Results	http://wbresults.nic.in/	2026-01-04 13:41:32	2026-01-04 13:41:32	Results & Exams
41	Entrance Exam Notifications	https://targetstudy.com/exams/	2026-01-04 13:41:32	2026-01-04 13:41:32	Results & Exams
42	Career India – Entrance Exams	https://www.careerindia.com/entrance-exam/	2026-01-04 13:41:32	2026-01-04 13:41:32	Results & Exams
43	GATE Forum	https://gateforum.com/	2026-01-04 13:41:32	2026-01-04 13:41:32	Results & Exams
44	GRE	https://www.ets.org/gre	2026-01-04 13:41:32	2026-01-04 13:41:32	Results & Exams
45	GK Today – Current Affairs	https://currentaffairs.gktoday.in/	2026-01-04 13:41:39	2026-01-04 13:41:39	Current Affairs & Job News
46	AffairsCloud	https://www.affairscloud.com/current-affairs/	2026-01-04 13:41:39	2026-01-04 13:41:39	Current Affairs & Job News
47	FreshersLive – Current Affairs	https://www.fresherslive.com/current-affairs/index	2026-01-04 13:41:39	2026-01-04 13:41:39	Current Affairs & Job News
48	Employment News	http://www.employmentnews.gov.in/	2026-01-04 13:41:39	2026-01-04 13:41:39	Current Affairs & Job News
49	Karma Sandhan	https://www.karmasandhan.com/	2026-01-04 13:41:39	2026-01-04 13:41:39	Current Affairs & Job News
50	Sarkari Naukri (WB)	https://www.sarkari-naukri.in/jobs-by-state/jobs-in-west-bengal/	2026-01-04 13:41:39	2026-01-04 13:41:39	Current Affairs & Job News
51	Employment Bank WB	https://employmentbankwb.gov.in/	2026-01-04 13:41:39	2026-01-04 13:41:39	Current Affairs & Job News
52	Ministry of Minority Affairs	http://www.minorityaffairs.gov.in/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
53	NMDFC	http://www.nmdfc.org/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
54	Maulana Azad Education Foundation	http://www.maef.nic.in/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
55	Begum Hazrat Mahal Scholarship	https://scholarship-maef.org/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
56	WB Minorities Development & Finance Corporation	www.wbmdfc.org	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
57	Board of Wakfs, West Bengal	http://auqafboardwb.org/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
58	Waqf Records Computerization Project	http://www.wakf.gov.in/homepage/homepage.php	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
59	West Bengal Urdu Academy	http://westbengalurduacademy.com/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
60	WB State Haj Committee	http://wbhaj.com/portal/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
61	Haj Committee of India	http://hajcommittee.gov.in/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
62	RTI Portal	http://rti.gov.in/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
63	West Bengal Information Commission	http://wbic.gov.in/home.do	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
64	National Commission for Minorities	http://ncm.nic.in/	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
65	Religion Census Data	https://www.census2011.co.in/religion.php	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
66	Districts of West Bengal	http://districts.nic.in/districts.php?sid=WB	2026-01-04 13:41:48	2026-01-04 13:41:48	Minority & Govt Websites
\.


--
-- Data for Name: iti_colleges; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.iti_colleges (id, name, type, address, phone, created_at, updated_at) FROM stdin;
52	ST. XAVIERS ITC	sponsored	P.O. BASANTI, DIST. SOUTH 24 PRGS., PIN-743312	03218-232224	2026-01-04 10:25:10	2026-01-04 10:25:10
53	ST. VINCENT ITC	sponsored	HALL VIEW PARK, ASANSOL, PIN-713304, DIST. BURDWAN	0341-2282343	2026-01-04 10:25:10	2026-01-04 10:25:10
7	ITI GARIAHAT	government	10 & 10/A GARIAHAT ROAD, KOLKATA-700 091	033-24404348	2026-01-04 10:15:16	2026-01-04 10:15:16
8	ITI TOLLYGUNJ	government	24, CHANDI GHOSH ROAD, KOLKATA 700 040	033-24113692	2026-01-04 10:16:02	2026-01-04 10:16:02
9	ITI HOWRAH	government	HOMES, PO. SANTRAGACHI, DIST. HOWRAH-711104	033-26271176	2026-01-04 10:16:02	2026-01-04 10:16:02
10	ITI HOOGHLY	government	PO. SAHAGUNJ, DIST. HOOGHLY-712104	033-26312327	2026-01-04 10:16:02	2026-01-04 10:16:02
11	ITI KALYANI	government	GHOSHPARA ROAD, KALYANI, DIST. NADIA-741235	033-25828360	2026-01-04 10:16:02	2026-01-04 10:16:02
12	ITI DURGAPUR	government	MUCHIPARA, PO. DURGAPUR-713222, DIST. BURDWAN	0343-2557371	2026-01-04 10:19:46	2026-01-04 10:19:46
13	ITI PURULIA	government	PO. RAGHUNATHPUR, DIST. PURULIA-723133	03251-255217	2026-01-04 10:19:46	2026-01-04 10:19:46
14	ITI SURI	government	PO. SURI, DIST. BIRBHUM-731101	03462-255453	2026-01-04 10:19:46	2026-01-04 10:19:46
15	ITI MIDNAPUR	government	PO. RANGAMATI, DIST. PASCIM MIDNAPUR-721101	03222-275412	2026-01-04 10:19:46	2026-01-04 10:19:46
16	ITI HALDIA	government	PO. DURGACHAK, DIST. PURBA MIDNAPUR	03224-274220	2026-01-04 10:19:46	2026-01-04 10:19:46
17	ITI JHARGRAM	government	PO. JHARGRAM, DIST. PASCHIM MIDNAPUR-721507	03221-255015	2026-01-04 10:20:57	2026-01-04 10:20:57
18	ITI BERHAMPORE	government	PO. KASHIMBAZAR RAJ, DIST. MURSHIDABAD-742102	03482-251458	2026-01-04 10:20:57	2026-01-04 10:20:57
19	ITI MALDA	government	PO. & DIST. MALDA-732101	03512-266322	2026-01-04 10:20:57	2026-01-04 10:20:57
20	ITI RAIGUNJ	government	PO. KARNAJORA, DIST. UTTAR DINAJPUR-733130	03523-252820	2026-01-04 10:20:57	2026-01-04 10:20:57
21	ITI SILIGURI	government	SEVOKE ROAD, PO. EKTIASAL, DIST. DARJEELING-734401	0353-2542281	2026-01-04 10:20:57	2026-01-04 10:20:57
22	ITI COOCHBEHAR	government	P.O. & DIST. COOCHBEHAR-736101	03582-227758	2026-01-04 10:21:38	2026-01-04 10:21:38
23	ITI TUNG	government	PO. TUNG, DIST. DARJEELING-734224	0354-2342057	2026-01-04 10:21:38	2026-01-04 10:21:38
24	WOMEN ITI BURDWAN	women	ALISHA BY-PASS MORE, G.T. ROAD, BURDWAN	0342-2540350	2026-01-04 10:21:38	2026-01-04 10:21:38
25	WOMEN ITI KOLKATA	women	10 & 10/1 GARIAHAT ROAD, KOLKATA-700019	033-24402786	2026-01-04 10:21:38	2026-01-04 10:21:38
26	WOMEN ITI SILIGURI	women	SEVOKE ROAD, PO. EKTIASAL, DIST. DARJEELING-734401	0353-2542281	2026-01-04 10:21:38	2026-01-04 10:21:38
27	WOMEN ITI BANIPUR	women	PO. BANIPUR, DIST. NORTH 24 PARAGANAS	03216-270743	2026-01-04 10:22:09	2026-01-04 10:22:09
28	ITI CHHATNA	government	KALAIBERIA, DIST. BANKURA	03242-277284	2026-01-04 10:22:09	2026-01-04 10:22:09
29	BASIC TRAINING CENTRE (CHEMICAL) HOOGHLY	government	PO. SAHAGUNJ, DIST. HOOGHLY	033-26312351	2026-01-04 10:22:09	2026-01-04 10:22:09
30	P. ROY ITI	private	AMTALA, PO. BISHNUPUR, AMTALA, DIST. SOUTH 24 PARAGANAS	033-24809040	2026-01-04 10:22:09	2026-01-04 10:22:09
31	ITI ALIPURDUAR	government	PO. ALIPURDUAR, DIST. JALPAIGURI	03564-204007	2026-01-04 10:22:09	2026-01-04 10:22:09
32	ITI TOOFANGUNJ	government	DIST. COOCHBEHAR	03582-246803	2026-01-04 10:22:54	2026-01-04 10:22:54
33	ITI SHIBPUR	government	P.O. SHIBPUR, HOWRAH	033-26684675	2026-01-04 10:22:54	2026-01-04 10:22:54
34	ITI FOR PHYSICALLY CHALLENGED	special	KOLKATA KARIGARI BHAVAN, 110 S.N. BANERJEE ROAD, KOLKATA-700013	02227-8077	2026-01-04 10:22:54	2026-01-04 10:22:54
35	ITI BARRACKPORE	government	P.O. B.D. SOPAN, KHARDAH, DIST. 24 PARGANAS (N)	2523-3065	2026-01-04 10:22:54	2026-01-04 10:22:54
36	ITI FULIA	government	P.O. FULIA, DIST. NADIA	03473-234478	2026-01-04 10:22:54	2026-01-04 10:22:54
37	ITI BALURGHAT	government	P.O. BELTALA PARK, DIST. DAKSHIN DINAJPUR	03522-256407	2026-01-04 10:23:26	2026-01-04 10:23:26
38	BAPRADAS PAL CHOWDHURY ITI	private	P.O. KRISHNANAGAR, DIST. NADIA, PIN-741101	03472-252413	2026-01-04 10:23:26	2026-01-04 10:23:26
39	ITI JALPAIGURI	government	P.O. & DIST. JALPAIGURI, PIN-735101	03561-255498	2026-01-04 10:23:26	2026-01-04 10:23:26
40	ITI SUBHASNAGAR	government	P.O. BENGAI, DIST. HOOGHLY, PIN-712611	03211-246388	2026-01-04 10:23:26	2026-01-04 10:23:26
41	ITI RUPNARAYANPUR	government	P.O. HINUSTAN CABLES, DIST. BURDWAN, PIN-713335	0341-2525323	2026-01-04 10:23:26	2026-01-04 10:23:26
42	ITI HIJLI	government	P.O. KHARAGPUR (I.I.T. CAMPUS), DIST. MIDNAPORE, PIN-721302	03222-277153	2026-01-04 10:24:03	2026-01-04 10:24:03
43	ITI CHINSURAH (HOOGHLY ITC)	government	P.O. & DIST. HOOGHLY, PIN-712103	2680-2064	2026-01-04 10:24:03	2026-01-04 10:24:03
44	ITI CHHOTAJAGULIA	government	P.O. CHHOTAJAGULIA, DIST. NORTH 24 PRGS.	2552-3329	2026-01-04 10:24:03	2026-01-04 10:24:03
45	SATISH CHANDRA ITI	private	P.O. KALANABAGRAM, DIST. BURDWAN, PIN-713124	0342-2586367	2026-01-04 10:24:03	2026-01-04 10:24:03
46	SARAJU PRASAD JUNIOR ENGINEERING ITI	private	P.O. DURGI, VIA-JHALDA, DIST. PURULIA, PIN-723202	03254-255307	2026-01-04 10:24:03	2026-01-04 10:24:03
47	ITI KALIAGUNGE	government	P.O. KALIAGUNGE, DIST. UTTAR DINAJPUR, PIN-733129	03523-258023	2026-01-04 10:24:35	2026-01-04 10:24:35
48	ITI KANYAPUR	government	P.O. ASANSOL-4, DIST. BURDWAN, PIN-713304	0341-2252933	2026-01-04 10:24:35	2026-01-04 10:24:35
49	ITI SABRAKONE	government	P.O. SABRAKONE, DIST. BANKURA	03244-264231	2026-01-04 10:24:35	2026-01-04 10:24:35
50	SEVAYATAN ITC	sponsored	P.O. SEVAYATAN, VIA-JHARGRAM, DIST-PASCHIM MEDINIPUR, PIN-721514	03221-255119	2026-01-04 10:24:35	2026-01-04 10:24:35
51	ITI KALIMPONG	sponsored	P.O. TOPKHANA, KALIMPONG, DIST. DARJEELING, PIN-734316	03552-255505	2026-01-04 10:24:35	2026-01-04 10:24:35
54	RAMKRISHNA MISSION SILPAYATAN	sponsored	P.O. BELUR MATH, DIST. HOWRAH, PIN-711202	2654-1052	2026-01-04 10:25:10	2026-01-04 10:25:10
55	SWAMI MAHADEVANANDA SILPA VIDYAPEETH	sponsored	28, RIVER SIDE ROAD, BARRACKPORE, DIST. NORTH 24 PRGS., PIN-700120	\N	2026-01-04 10:25:10	2026-01-04 10:25:10
56	DON BOSCO TECHNICAL SCHOOL	private	P.O. LILUAH, HOWRAH-711204	2655-5431	2026-01-04 10:25:10	2026-01-04 10:25:10
\.


--
-- Data for Name: iti_trades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.iti_trades (id, iti_college_id, name, duration, created_at, updated_at) FROM stdin;
28	7	DRAFTSMAN CIVIL	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
29	7	DRAFTSMAN MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
30	7	ELECTRICIAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
31	7	ELECTRONICS MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
32	7	FITTER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
33	7	MACHINIST	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
34	7	MACHINIST (GRINDER)	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
35	7	INSTRUMENT MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
36	7	REF & AC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
37	7	RADIO & TV MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
38	7	SURVEYOR	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
39	7	TURNER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
40	7	WIREMAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
41	7	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
42	7	PAINTER GENERAL	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
43	7	DIESEL MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
44	7	CARPENTER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
45	7	FOUNDRYMAN	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
46	7	SHEET METAL WORKER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
47	7	WELDER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
48	7	PLUMBER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
49	7	CUTTING & SEWING	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
50	8	DRAFTSMAN CIVIL	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
51	8	DRAFTSMAN MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
52	8	ELECTRICIAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
53	8	ELECTRONICS MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
54	8	FITTER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
55	8	MACHINIST	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
56	8	MACHINIST (GRINDER)	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
57	8	REF & AC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
58	8	RADIO & TV MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
59	8	SURVEYOR	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
60	8	TURNER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
61	8	WIREMAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
62	8	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
63	8	PAINTER GENERAL	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
64	8	DIESEL MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
65	8	COMPUTER OPERATOR & PROGRAMMING ASSISTANT	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
66	9	DRAFTSMAN CIVIL	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
67	9	DRAFTSMAN MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
68	9	ELECTRICIAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
69	9	ELECTRONICS MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
70	9	FITTER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
71	9	MACHINIST	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
72	9	MACHINIST (GRINDER)	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
73	9	REF & AC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
74	9	RADIO & TV MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
75	9	SURVEYOR	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
76	9	TURNER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
77	9	WIREMAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
78	9	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
79	9	DIESEL MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
80	9	CARPENTER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
81	9	FOUNDRYMAN	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
82	9	SHEET METAL WORKER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
83	9	WELDER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
84	9	CUTTING & SEWING	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
85	9	COMPUTER OPERATOR & PROGRAMMING ASSISTANT	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
86	10	DRAFTSMAN CIVIL	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
87	10	DRAFTSMAN MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
88	10	ELECTRICIAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
89	10	ELECTRONICS MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
90	10	FITTER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
91	10	MACHINIST	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
92	10	MACHINIST (GRINDER)	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
93	10	REF & AC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
94	10	RADIO & TV MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
95	10	SURVEYOR	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
96	10	TURNER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
97	10	WIREMAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
98	10	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
99	10	DIESEL MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
100	10	CARPENTER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
101	10	FOUNDRYMAN	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
102	10	SHEET METAL WORKER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
103	10	WELDER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
104	11	DRAFTSMAN CIVIL	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
105	11	DRAFTSMAN MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
106	11	ELECTRICIAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
107	11	ELECTRONICS MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
108	11	FITTER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
109	11	MACHINIST	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
110	11	MACHINIST (GRINDER)	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
111	11	REF & AC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
112	11	RADIO & TV MECHANIC	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
113	11	SURVEYOR	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
114	11	TURNER	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
115	11	WIREMAN	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
116	11	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
117	11	DIESEL MECH	2YR	2026-01-04 10:16:02	2026-01-04 10:16:02
118	11	CARPENTER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
119	11	FOUNDRYMAN	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
120	11	SHEET METAL WORKER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
121	11	WELDER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
122	11	PLUMBER	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
123	11	CUTTING & SEWING	1YR	2026-01-04 10:16:02	2026-01-04 10:16:02
124	12	DRAFTSMAN CIVIL	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
125	12	DRAFTSMAN MECH	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
126	12	ELECTRICIAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
127	12	ELECTRONICS MECHANIC	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
128	12	FITTER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
129	12	MACHINIST	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
130	12	MACHINIST (GRINDER)	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
131	12	REF & AC	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
132	12	RADIO & TV MECHANIC	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
133	12	TURNER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
134	12	WIREMAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
135	12	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
136	12	DIESEL MECH	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
137	12	CARPENTER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
138	12	FOUNDRYMAN	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
139	12	SHEET METAL WORKER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
140	12	WELDER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
141	12	COMPUTER OPERATOR & PROGRAMMING ASSISTANT	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
142	12	PLASTIC PROCESSING OPERATOR	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
143	13	ELECTRICIAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
144	13	FITTER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
145	13	MACHINIST	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
146	13	MACHINIST (GRINDER)	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
147	13	RADIO & TV MECHANIC	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
148	13	TURNER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
149	13	WIREMAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
150	13	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
151	13	DIESEL MECH	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
152	13	SURVEYOR	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
153	13	CARPENTER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
154	13	FOUNDRYMAN	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
155	13	SHEET METAL WORKER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
156	13	WELDER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
157	14	ELECTRICIAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
158	14	FITTER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
159	14	MACHINIST	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
160	14	MACHINIST (GRINDER)	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
161	14	TURNER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
162	14	WIREMAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
163	14	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
164	14	PLASTIC PROCESSING OPERATOR	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
165	14	FOUNDRYMAN	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
166	14	WELDER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
167	15	ELECTRICIAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
168	15	FITTER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
169	15	MACHINIST	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
170	15	TURNER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
171	15	WIREMAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
172	15	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
173	15	PLASTIC PROCESSING OPERATOR	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
174	15	FOUNDRYMAN	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
175	15	WELDER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
176	15	CARPENTER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
177	16	ELECTRICIAN	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
178	16	FITTER	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
179	16	DIESEL MECH	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
180	16	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
181	16	PAINTER GENERAL	2YR	2026-01-04 10:19:46	2026-01-04 10:19:46
182	16	PLASTIC PROCESSING OPERATOR	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
183	16	WELDER	1YR	2026-01-04 10:19:46	2026-01-04 10:19:46
184	17	ELECTRICIAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
185	17	FITTER	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
186	17	DRAFTSMAN CIVIL	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
187	17	WIREMAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
188	17	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
189	17	SHEET METAL WORKER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
190	17	CUTTING & SEWING	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
191	17	WELDER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
192	17	CARPENTER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
193	18	ELECTRICIAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
194	18	FITTER	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
195	18	MACHINIST	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
196	18	TURNER	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
197	18	WIREMAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
198	18	SURVEYOR	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
199	18	DIESEL MECH	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
200	18	FOUNDRYMAN	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
201	18	WELDER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
202	18	CARPENTER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
203	18	SHEET METAL WORKER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
204	19	ELECTRICIAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
205	19	FITTER	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
206	19	MACHINIST	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
207	19	TURNER	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
208	19	WIREMAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
209	19	RADIO & TV	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
210	19	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
211	19	REF & AC	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
212	19	FOUNDRYMAN	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
213	19	WELDER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
214	19	CARPENTER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
215	20	ELECTRICIAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
216	20	FITTER	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
217	20	DRAFTSMAN MECHANIC	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
218	20	DRAFTSMAN CIVIL	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
219	20	WIREMAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
220	20	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
221	20	CUTTING & SEWING	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
222	20	WELDER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
223	20	CARPENTER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
224	21	ELECTRICIAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
225	21	FITTER	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
226	21	DRAFTSMAN MECHANIC	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
227	21	DRAFTSMAN CIVIL	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
228	21	WIREMAN	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
229	21	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
230	21	REF & AC	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
231	21	SURVEYOR	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
232	21	TURNER	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
233	21	DIESEL MECH	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
234	21	RADIO & TV	2YR	2026-01-04 10:20:57	2026-01-04 10:20:57
235	21	PLASTIC PROCESSING OPERATOR	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
236	21	WELDER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
237	21	SHEET METAL WORKER	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
238	21	STENOGRAPHY	1YR	2026-01-04 10:20:57	2026-01-04 10:20:57
239	22	ELECTRICIAN	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
240	22	FITTER	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
241	22	DRAFTSMAN MECHANIC	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
242	22	WIREMAN	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
243	22	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
244	22	SURVEYOR	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
245	22	TURNER	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
246	22	PAINTER GENERAL	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
247	22	CARPENTER	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
248	22	WELDER	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
249	22	SHEET METAL WORKER	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
250	23	ELECTRICIAN	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
251	23	FITTER	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
252	23	DRAFTSMAN CIVIL	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
253	23	WIREMAN	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
254	23	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
255	23	RADIO & TV	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
256	23	DIESEL MECH	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
257	23	CARPENTER	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
258	23	CUTTING & SEWING	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
259	24	ELECTRONICS MECHANIC	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
260	24	RADIO & TV	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
261	24	COMPUTER OPERATOR & PROGRAMMING ASSISTANT	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
262	25	ELECTRONICS MECHANIC	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
263	25	RADIO & TV	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
264	25	COMPUTER OPERATOR & PROGRAMMING ASSISTANT	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
265	25	HAIR & SKIN CARE	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
266	25	SECRETARIAL PRACTICE	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
267	26	ELECTRONICS MECHANIC	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
268	26	RADIO & TV	2YR	2026-01-04 10:21:38	2026-01-04 10:21:38
269	26	COMPUTER OPERATOR & PROGRAMMING ASSISTANT	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
270	26	HAIR & SKIN CARE	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
271	26	SECRETARIAL PRACTICE	1YR	2026-01-04 10:21:38	2026-01-04 10:21:38
272	27	ELECTRONICS MECHANIC	2YR	2026-01-04 10:22:09	2026-01-04 10:22:09
273	27	SECRETARIAL PRACTICE	1YR	2026-01-04 10:22:09	2026-01-04 10:22:09
274	28	ELECTRONICS MECHANIC	2YR	2026-01-04 10:22:09	2026-01-04 10:22:09
275	28	RADIO & TV	2YR	2026-01-04 10:22:09	2026-01-04 10:22:09
276	28	FITTER	2YR	2026-01-04 10:22:09	2026-01-04 10:22:09
277	29	LABORATORY ASSTT. CHEMICAL PLANT	1YR	2026-01-04 10:22:09	2026-01-04 10:22:09
278	30	ELECTRONICS MECHANIC	2YR	2026-01-04 10:22:09	2026-01-04 10:22:09
279	30	RADIO & TV	2YR	2026-01-04 10:22:09	2026-01-04 10:22:09
280	31	ELECTRONICS MECHANIC	2YR	2026-01-04 10:22:09	2026-01-04 10:22:09
281	32	ELECTRONICS MECHANIC	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
282	33	ELECTRICIAN	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
283	33	FITTER	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
284	33	DRAFTSMAN MECHANIC	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
285	33	MECHINIST	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
286	33	MECHANIC MOTOR VEHICLES	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
287	33	TURNER	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
288	33	TOOL & DIE MAKING	1YR	2026-01-04 10:22:54	2026-01-04 10:22:54
289	34	DESK TOP PUBLISHING	1YR	2026-01-04 10:22:54	2026-01-04 10:22:54
290	34	DRESS MAKING	1YR	2026-01-04 10:22:54	2026-01-04 10:22:54
291	35	NETWORK TECHNICIAN	6MO	2026-01-04 10:22:54	2026-01-04 10:22:54
292	35	SANITARY HARDWARE FITTER	6MO	2026-01-04 10:22:54	2026-01-04 10:22:54
293	36	ELECTRICIAN	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
294	36	FITTER	2YR	2026-01-04 10:22:54	2026-01-04 10:22:54
295	36	WELDER	1YR	2026-01-04 10:22:54	2026-01-04 10:22:54
296	36	DRESS MAKING	1YR	2026-01-04 10:22:54	2026-01-04 10:22:54
297	36	COMPUTER OPERATOR & PROGRAMMING ASSISTANT	1YR	2026-01-04 10:22:54	2026-01-04 10:22:54
298	37	ELECTRONICS MECHANIC	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
299	37	RADIO & TV	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
300	38	ELECTRICIAN	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
301	38	FITTER	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
302	38	TURNER	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
303	38	WIREMEN	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
304	38	MECHANIC MOTOR VEHICLE	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
305	38	DRAUGHTS MAN MECHANICAL	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
306	38	CARPENTER	1YR	2026-01-04 10:23:26	2026-01-04 10:23:26
307	38	WELDER	1YR	2026-01-04 10:23:26	2026-01-04 10:23:26
308	38	FORGER HEAT TREATER (D)	1YR	2026-01-04 10:23:26	2026-01-04 10:23:26
309	39	ELECTRICIAN	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
310	39	TURNER	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
311	39	WELDER	1YR	2026-01-04 10:23:26	2026-01-04 10:23:26
312	40	FITTER	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
313	40	TURNER	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
314	40	WIREMEN	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
315	41	FITTER	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
316	41	ELECTRICIAN	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
317	41	TURNER	2YR	2026-01-04 10:23:26	2026-01-04 10:23:26
318	42	FITTER	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
319	42	DRAUGHTSMEN MECHANICAL	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
320	42	ELECTRONIC MECHANIC	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
321	43	FITTER	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
322	43	ELECTRICIAN	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
323	43	WELDER	1YR	2026-01-04 10:24:03	2026-01-04 10:24:03
324	44	FITTER	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
325	44	ELECTRICIAN	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
326	44	TURNER	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
327	44	DRAUGHTS MAN MECHANICAL	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
328	44	WELDER	1YR	2026-01-04 10:24:03	2026-01-04 10:24:03
329	45	TURNER	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
330	45	ELECTRICIAN	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
331	45	WELDER	1YR	2026-01-04 10:24:03	2026-01-04 10:24:03
332	46	FITTER	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
333	46	ELECTRICIAN	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
334	46	TURNER	2YR	2026-01-04 10:24:03	2026-01-04 10:24:03
335	47	FITTER	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
336	47	ELECTRICIAN	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
337	47	WELDER	1YR	2026-01-04 10:24:35	2026-01-04 10:24:35
338	48	FITTER	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
339	48	ELECTRICIAN	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
340	48	MACHINIST	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
341	48	DRAUGHTS MAN MECHANICAL	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
342	48	WELDER	1YR	2026-01-04 10:24:35	2026-01-04 10:24:35
343	49	FITTER	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
344	49	ELECTRICIAN	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
345	49	TURNER	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
346	50	FITTER	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
347	50	ELECTRICIAN	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
348	50	TURNER	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
349	50	WELDER	1YR	2026-01-04 10:24:35	2026-01-04 10:24:35
350	51	MECHANIC MOTOR VEHICLE	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
351	51	WIREMAN	2YR	2026-01-04 10:24:35	2026-01-04 10:24:35
352	51	CARPENTER	1YR	2026-01-04 10:24:35	2026-01-04 10:24:35
353	52	TURNER	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
354	52	ELECTRICIAN	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
355	52	WELDER	1YR	2026-01-04 10:25:10	2026-01-04 10:25:10
356	53	TURNER	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
357	53	ELECTRICIAN	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
358	53	WELDER	1YR	2026-01-04 10:25:10	2026-01-04 10:25:10
359	54	FITTER	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
360	54	ELECTRICIAN	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
361	54	TURNER	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
362	54	WELDER	1YR	2026-01-04 10:25:10	2026-01-04 10:25:10
368	56	MACHINIST	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
369	56	TURNER	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
370	56	FITTER	2YR	2026-01-04 10:25:10	2026-01-04 10:25:10
376	55	MECHANIC REFRIGERATION & AIR CONDITION	2YR	2026-01-04 11:32:04	2026-01-04 11:32:04
377	55	ELECTRICIAN	2YR	2026-01-04 11:32:04	2026-01-04 11:32:04
378	55	TURNER	2YR	2026-01-04 11:32:04	2026-01-04 11:32:04
379	55	DRAUGHTS MAN MECHANICAL	2YR	2026-01-04 11:32:04	2026-01-04 11:32:04
380	55	WELDER	1YR	2026-01-04 11:32:04	2026-01-04 11:32:04
\.


--
-- Data for Name: job_batches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.job_batches (id, name, total_jobs, pending_jobs, failed_jobs, failed_job_ids, options, cancelled_at, created_at, finished_at) FROM stdin;
\.


--
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jobs (id, queue, payload, attempts, reserved_at, available_at, created_at) FROM stdin;
\.


--
-- Data for Name: leader_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.leader_messages (id, name, post, designation, about, image, created_at, updated_at) FROM stdin;
2	Taheruzzaman	WBCS (Exe.)	Managing Director, WBMDFC	<p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">The West Bengal Minorities’ Development and Finance Corporation (WBMDFC), a statutory Corporation of Govt. of West Bengal takes up various schemes for Economic Welfare, Scholarships, Education loan, mass awareness for persons belonging to the notified minority communities i.e, Buddhist, Christian, Jain, Muslim, Parsees and Sikh for their economic upliftment. WBMDFC also organizes Career counselling programmes to help students choose a field that is in tune with their skills and their job expectations. Thus, with the help of career counselling, most candidates end up choosing the right career, and perform their level best, which ultimately helps them succeed and upgrade their skills.</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Careers are now increasingly seen not as being 'chosen' but as being constructed through the series of choices about learning and work that people make throughout their lives. Career also plays a vital role in everybody’s life because social and economic profile for the major part of one’s life depends upon the career. It is very difficult for a student, ordinary or meritorious, to make decisions when presented with two or more options about career. Making the right career choice is not an easy task for a student of today.</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">With a view to providing adequate and updated information on various institutions offering various kinds of courses as well as guidance for the students of this state, West Bengal Minorities’ Development and Finance Corporation has published this much-desired Handbook entitled, "A Comprehensive Guidebook to Various Courses and Career options" so that this guide book will help boys and girls from the Minority community to a great extent to avail the opportunities to find a right career/choice in every sphere of education. Accordingly they may opt for pursuing higher education, technical education and vocational courses.</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">I hope that this book will become instrumental as well for thousands of volunteers and teachers, in providing Career Counselling to guide the students in their respective areas how to choose a right career.</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">It would never have been possible to complete the publishing of this book without inspiring support and encouragement from Dr. P. B. Salim, IAS, Chairman, WBMDFC and the dedicated effort of the General Managers, Sudipta Porel, Ms. Taneeya Parveen and the office staff of WBMDFC.</p>	leaders/YR4V8TXAcoqtPaRRnVET62B5TpJX2tgdJ7yDPTqH.jpg	2026-04-26 20:54:52	2026-04-26 16:00:48
1	Dr. P.B. Salim	IAS	Secretary, MA & ME Deptt	<p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Underscoring the criticality of quality education and of skills, with an emphasis on making it universally accessible, the Government of West Bengal in the last few years has taken an all out effort in enabling activities such as building of schools, colleges, hostel buildings and skill development centres in areas inhabited by such backward sections of societies. The scholarship programme especially has brought about notable change amongst the students of such communities, who are increasingly becoming confident of pursuing both technical and higher studies for a brighter future.</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">For quite some time now the WBMDFC, through its various activities has been running various scholarship programmes for students amongst minorities. The programmes undertaken by this Corporation have played a vital role for the spread of education among the boys and girls from minority communities and the upliftment of the community as a whole.</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">In a bid to cater to adequate information on the institutions offering courses as well as credible guidance for all the students of this state, West Bengal Minorities’ Development and Finance Corporation has in collaboration with Association SNAP, a philanthropic organization published this much-needed Handbook entitled, "A Comprehensive Guidebook to Various Courses and Career options" so that more and more boys and girls from the backward sections of the society may also avail the opportunities to avail higher education.</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">It is worth mentioning that publication of this is the first step in the direction of providing adequate information on different career options and courses and this will become instrumental for thousands of volunteers and teachers, in setting up Career Counselling Centres in their respective areas to guide the students throughout the state.</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Poppins, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">It would never have been possible to complete the publishing of this book without the inspiring support of our Honourable Chief Minister and the dedicated efforts of Mr. Mriganka Biswas, our Managing Director, the General Managers, Shri Sudipta Porel, Mrs. Taneeya Parveen and the office staff of WBMDFC.</p>	leaders/Ci56AiIOUrdgBlRGGKADApqTYy6buXVQgw4b7gcV.png	2026-04-26 20:54:52	2026-04-26 15:59:52
\.


--
-- Data for Name: loan_sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.loan_sections (id, type, icon, title, description, short, link, "order", created_at, updated_at) FROM stdin;
6	fact_card	CreditCard	Easy Student Loans	Transparent, low-interest education loans. Powered by official partners only.	\N	\N	2	2026-05-02 14:32:25	2026-05-02 14:32:25
7	fact_card	ShieldCheck	Trusted, Secure, Verified	Zero scam risk, all programs manually verified each year with government sources.	\N	\N	3	2026-05-02 14:32:25	2026-05-02 14:32:25
8	fact_card	Users	Empowering Every Student	Open for all backgrounds, with a focus on minority, girl, and rural empowerment.	\N	\N	4	2026-05-02 14:32:25	2026-05-02 14:32:25
9	scheme	\N	Swami Vivekananda Merit-cum-Means Scholarship	\N	Swami Vivekananda\\nScholarship	https://svmcm.wb.gov.in/	1	2026-05-02 14:32:25	2026-05-02 14:32:25
10	scheme	\N	Aikyashree Minority Scholarship	\N	Aikyashree	https://www.wbmdfc.org/	2	2026-05-02 14:32:25	2026-05-02 14:32:25
11	scheme	\N	Student Credit Card Scheme	\N	Student Credit\\nCard Scheme	https://wb.gov.in/	3	2026-05-02 14:32:25	2026-05-02 14:32:25
12	scheme	\N	Kanyashree Prakalpa	\N	Kanyashree	https://wb.gov.in/	4	2026-05-02 14:32:25	2026-05-02 14:32:25
13	scheme	\N	Talent Support Program	\N	Talent Support\\nProgram	#	5	2026-05-02 14:32:25	2026-05-02 14:32:25
5	fact_card	School	Genuine Scholarship Data	All West Bengal and central government student schemes—no out-of-date listings.	\N	\N	1	2026-05-02 14:32:25	2026-05-02 09:45:01
\.


--
-- Data for Name: menu_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_groups (id, sub_category_id, title, sort_order, is_active, created_at, updated_at) FROM stdin;
6	2	Popular Professional Paths	0	t	2025-12-25 17:41:03	2025-12-25 17:41:03
7	3	Long-Term & Alternative Careers	0	t	2025-12-25 17:41:46	2025-12-25 17:41:46
8	4	Vocational & Skill Courses	0	t	2025-12-25 18:10:15	2025-12-25 18:10:15
9	5	Diploma & Polytechnic Programs	0	t	2025-12-25 18:11:03	2025-12-25 18:11:03
10	6	Graduation Courses (After Class 12)	0	t	2025-12-25 18:11:50	2025-12-25 18:11:50
11	6	Post Graduation Courses (After Graduation)	1	t	2025-12-25 18:11:50	2025-12-25 18:11:50
12	23	Medical & Allied Health	0	t	2025-12-25 18:12:23	2025-12-25 18:12:23
13	24	Engineering & Technology	0	t	2025-12-25 18:12:51	2025-12-25 18:12:51
14	24	Computer & IT	1	t	2025-12-25 18:12:51	2025-12-25 18:12:51
15	25	Commerce & Business	0	t	2025-12-25 18:13:17	2025-12-25 18:13:17
16	26	Research-Oriented Programs	0	t	2025-12-25 18:13:36	2025-12-25 18:13:36
17	7	Institutes of National Importance	0	t	2025-12-26 05:59:52	2025-12-26 05:59:52
18	8	Types of Universities	0	t	2025-12-26 06:00:25	2025-12-26 06:00:25
19	9	Stream-wise Colleges	0	t	2025-12-26 06:00:53	2025-12-26 06:00:53
20	27	Skill & Technical Institutes	0	t	2025-12-26 06:01:17	2025-12-26 06:01:17
21	13	Other Exams	0	t	2025-12-26 06:02:02	2025-12-26 06:02:02
22	12	Management & Law Entrance	0	t	2025-12-26 06:02:27	2025-12-26 06:02:27
23	11	Medical Entrance Exams	0	t	2025-12-26 06:02:45	2025-12-26 06:02:45
24	10	Engineering Entrance Exams	0	t	2025-12-26 06:02:57	2025-12-26 06:02:57
5	1	Choose by Class / Stage	0	t	2025-12-23 13:12:26	2025-12-26 07:28:55
\.


--
-- Data for Name: menu_item_tab_contents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_item_tab_contents (id, menu_item_tab_id, title, subtitle, html_content, sort_order, created_at, updated_at) FROM stdin;
1	10	Career	\N	<main class="container"><div class="AfterClass8_contentSection__IzEjz" style="opacity: 1; transform: none;"><div class="AfterClass8_grid__Mfu1a"><div class="AfterClass8_card__5bsz7"><div class="AfterClass8_cardHeader__hIeVm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open AfterClass8_cardIcon__LPw_D" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg><div><h4 class="AfterClass8_cardTitle__oiLQA">Continue Regular Schooling</h4><span class="AfterClass8_cardType__FDSW6">School Education</span></div></div><p class="AfterClass8_cardDescription__7fqWq">Continue with class 9 in your current school or switch to a different school</p><div class="AfterClass8_features__JxlAP"><h6>Available Options:</h6><ul><li>State Board (WBBSE)</li><li>CBSE Board</li><li>ICSE Board</li><li>Madrasa Education</li></ul></div><div class="AfterClass8_features__JxlAP"><h6>Key Features:</h6><ul><li>Regular curriculum</li><li>Extracurricular activities</li><li>Guidance from teachers</li></ul></div></div><div class="AfterClass8_card__5bsz7"><div class="AfterClass8_cardHeader__hIeVm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap AfterClass8_cardIcon__LPw_D" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg><div><h4 class="AfterClass8_cardTitle__oiLQA">National Institute of Open Schooling</h4><span class="AfterClass8_cardType__FDSW6">NIOS</span></div></div><p class="AfterClass8_cardDescription__7fqWq">Flexible schooling option for students who need alternative education</p><div class="AfterClass8_features__JxlAP"><h6>Available Options:</h6><ul><li>Secondary Course (Class 9-10)</li><li>Flexible exam schedule</li><li>Multiple admission cycles</li></ul></div><div class="AfterClass8_features__JxlAP"><h6>Key Features:</h6><ul><li>Distance learning</li><li>Self-paced study</li><li>Recognized by Govt. of India</li></ul></div></div></div></div></main>	0	2025-11-08 12:21:16	2025-11-08 12:22:04
3	7	\N	\N	<p>&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br>&lt;body&gt;<br><br>&lt;h1&gt;My First Heading&lt;/h1&gt;</p><p>&lt;h2&gt;My First Heading 2&lt;/h2&gt;<br>&lt;p&gt;My first paragraph.&lt;/p&gt;<br><br>&lt;/body&gt;<br>&lt;/html&gt;</p>	0	2025-12-03 07:46:55	2025-12-03 07:48:34
2	11	\N	\N	<h2>CAREER OPTIONS AFTER CLASS-12</h2><p>Six distinct entry paths — exact options listed below.</p><p>&nbsp;</p><p>School Exam</p><p>Class XI / Class XII (Sc / Arts / Com)</p><p>School Exam → Class XI (Sc/Arts/Com) → School Exam → Class XII (Sc/Arts/Com)</p><p>&nbsp;</p><p>JHMAT Exam</p><p>(Reqd 50% in Cl X)</p><p>JHMAT Exam (Reqd 50% in Cl X)</p><p>Diploma in Hotel Management (3 yrs) → Bachelor in Hotel Management (3 yrs) → Master in Hotel Management (2 yrs) → MBA in Hotel Management (2 yrs)</p><p>&nbsp;</p><p>Class X Marks Basis</p><p>(Girls only)</p><p>Class X Marks Basis (Girls only) → Auxiliary Nursing &amp; Midwifery (ANM) 18 months</p><p>&nbsp;</p><p>JEXPO Exam</p><p>POLYTECHNIC DIPLOMA</p><p>JEXPO Exam → POLYTECHNIC DIPLOMA</p><p>AMIE → GATE EXAM → M.Tec → Ph.D.</p><p>B.E. → GATE EXAM → M.Tec → Ph.D.</p><p>Part Time B.E. → GATE EXAM → M.Tec → Ph.D.</p><p>Post Diploma</p><p>VOCLET Exam → POLYTECHNIC DIPLOMA → JELET Exam (2 yrs lat entry)</p><p>AT IGNOU → B.Tech in Construction Management / B.Tech in Water Resource Engg</p><p>Part Time B.E. (Jadavpur University &amp; B.E. (5 yrs evening)) → GATE Exam → M.Tec → Ph.D.</p><p>&nbsp;</p><p>VOCATIONAL COURSE</p><p>Equivalent to Cl XII (2 yrs) Course</p><p>Vocational Course at (X+2) Level</p><p>Business &amp; Commerce (BC) 2 yrs:</p><p>1. Marketing &amp; Salesmanship</p><p>2. Modern office practice</p><p>3. Library &amp; Information Science</p><p>4. Travel &amp; Tourism</p><p>&nbsp;</p><p>Engineering &amp; Technology (E) 2 yrs:</p><p>1. Civil Construction &amp; Maintenance Technology</p><p>2. Automobile Mechanics</p><p>3. Air-Conditioner &amp; Refrigerator mechanic</p><p>4. Computer Assembly &amp; Maintenance</p><p>5. Pump Operator &amp; Maintenance</p><p>6. IT Enabled Services</p><p>7. Maintenance &amp; repair of Elec. Domestic Appliances</p><p>8. Consumer &amp; Industrial Electronics Mechanics</p><p>&nbsp;</p><p>Agriculture (AG) 2 yrs:</p><p>1. Pisciculture</p><p>2. Dairy Farming</p><p>3. Preservation &amp; Processing of Fruits &amp; Vegetables</p><p>4. Horticulture nursery management</p><p>5. Compost &amp; vermicompost</p><p>6. Plantation worker</p><p>&nbsp;</p><p>Home Science (HS) 2 yrs:</p><p>1. Health Care</p><p>2. Food preservation &amp; processing</p><p>3. Mother and child care</p><p>4. Interior Decoration</p><p>&nbsp;</p><p>For details please visit Website — www.wbscvet.org</p><p>&nbsp;</p><p>ITI / ITC / JR POLYTECHNIC</p><p>(Equivalent to Cl XI &amp; XII (2 yrs) Course)</p><p>ITI After Class X (M &amp; B Category)</p><p>M-Category (examples):</p><p>Tool &amp; Die maker — 3 yrs</p><p>Draftsman mechanical — 2 yrs</p><p>Draftsman civil — 2 yrs</p><p>Electrician — 2 yrs</p><p>Fitter — 2 yrs</p><p>Electronic mechanic — 2 yrs</p><p>Grinder — 2 yrs</p><p>Instrument mechanic — 2 yrs</p><p>Machinist — 2 yrs</p><p>Radio &amp; TV Mechanic — 2 yrs</p><p>Refrigeration &amp; Air Cond. Mechanic — 2 yrs</p><p>Surveyor — 2 yrs</p><p>Turner — 2 yrs</p><p>Motor vehicle Mechanic — 2 yrs</p><p>Information Technology &amp; Electronic System Maintenance — 2 yrs</p><p>Plastic Processing Operator — 1 yrs</p><p>Desk Making — 1 yrs</p><p>Hair &amp; skin care — 1 yrs</p><p>Diesel Mechanic — 1 yrs</p><p>&nbsp;</p><p>B-Category (examples):</p><p>Automobile — 1 yrs</p><p>Production &amp; manufacturing — 1 yrs</p><p>Instrumentation — 1 yrs</p><p>Chemical — 1 yrs</p><p>Electrical — 1 yrs</p><p>Construction &amp; Wood working — 1 yrs</p><p>Information Technology — 1 yrs</p><p>Apparel — 1 yrs</p><p>Agricultural Machinery — 1 yrs</p><p>Food Processing — 1 yrs</p><p>Hospitality — 1 yrs</p><p>Electronic — 1 yrs</p><p>Fabrication – Fitting &amp; Welding — 1 yrs</p><p>&nbsp;</p><p>For details please visit Website — www.ctwb.org</p><p>10% seat reserved for NCVT students</p><p>60% in Class X (Polytechnic Diploma)</p><p>Content above is the literal transcribed chart content.</p>	0	2025-11-08 12:45:49	2025-12-03 07:49:47
\.


--
-- Data for Name: menu_item_tabs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_item_tabs (id, menu_item_id, name, icon, sort_order, created_at, updated_at) FROM stdin;
5	1	School Exam & NIOS	fa	0	2025-11-08 11:41:56	2025-11-08 12:07:18
7	1	Vocational Courses	\N	1	2025-11-08 11:51:29	2025-11-08 12:11:49
8	1	ITI / ITC / Junior Polytechnic	\N	2	2025-11-08 11:51:54	2025-11-08 12:11:58
9	1	Scholarships	\N	3	2025-11-08 11:52:20	2025-11-08 12:12:03
10	1	Career Counselling	\N	4	2025-11-08 11:52:42	2025-11-08 12:12:07
11	2	Overview	\N	0	2025-11-08 12:44:31	2025-11-08 12:44:31
12	2	Stream Selection	\N	0	2025-11-08 12:44:54	2025-11-08 12:44:54
13	2	Vocational Courses	\N	0	2025-11-08 12:45:12	2025-11-08 12:45:12
\.


--
-- Data for Name: menu_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_items (id, sub_category_id, name, slug, description, created_at, updated_at, group_id) FROM stdin;
41	23	Nursing (ANM / GNM / B.Sc Nursing)	nursing-anm-gnm-bsc-nursing	\N	2025-12-25 18:21:57	2025-12-25 18:21:57	12
2	1	After Class 10	after-class-10	\N	2025-11-08 10:56:25	2025-12-25 17:39:48	5
3	1	After Class 12 • Arts	after-class-12-arts	\N	2025-11-08 11:44:39	2025-12-25 17:39:56	5
4	1	After Class 12 • Commerce	after-class-12-commerce	\N	2025-11-08 11:44:56	2025-12-25 17:40:10	5
5	1	After Class 12 • Science	after-class-12-science	\N	2025-11-08 11:45:11	2025-12-25 17:40:18	5
6	1	After Graduation	after-graduation	\N	2025-11-08 11:45:30	2025-12-25 17:40:25	5
7	2	Engineering	engineering	B.Tech, BE, branches	2025-11-08 11:46:01	2025-12-25 17:42:15	6
8	2	Medical • Doctor (MBBS)	medical-doctor-mbbs	MBBS, NEET	2025-11-08 11:46:31	2025-12-25 17:42:25	6
9	2	Nursing & Allied	nursing-allied	\N	2025-11-08 11:47:00	2025-12-25 17:42:31	6
10	2	Pharmacy	pharmacy	\N	2025-11-08 11:47:12	2025-12-25 17:42:39	6
11	2	Chartered Accountant (CA)	chartered-accountant-ca	\N	2025-11-08 11:47:28	2025-12-25 17:42:48	6
12	2	Law (LLB, Integrated)	law-llb-integrated	\N	2025-11-08 11:47:45	2025-12-25 17:42:56	6
13	2	Design (Fashion, Graphic, Arch.)	design-fashion-graphic-arch	\N	2025-11-08 11:48:02	2025-12-25 17:43:06	6
14	2	Hospitality & Tourism	hospitality-tourism	\N	2025-11-08 11:48:23	2025-12-25 17:43:11	6
15	2	Media & Journalism	media-journalism	\N	2025-11-08 11:48:36	2025-12-25 17:43:16	6
16	2	Civil Services	civil-services	\N	2025-11-08 11:48:49	2025-12-25 17:43:21	6
17	2	Defence Forces	defence-forces	\N	2025-11-08 11:49:01	2025-12-25 17:43:25	6
18	3	Research & PhD	research-phd	\N	2025-11-08 11:49:25	2025-12-25 17:43:45	7
19	3	Entrepreneurship / Startups	entrepreneurship-startups	\N	2025-11-08 11:49:38	2025-12-25 17:43:49	7
20	3	Social Work / NGOs	social-work-ngos	\N	2025-11-08 11:49:50	2025-12-25 17:43:52	7
1	1	After Class 8	after-class-8	\N	2025-11-08 10:54:35	2025-12-25 17:45:17	5
26	4	Class 8+ Vocational Trades	class-8-vocational-trades	\N	2025-12-25 18:15:07	2025-12-25 18:15:07	8
27	4	Class 10+ Vocational Trades	class-10-vocational-trades	\N	2025-12-25 18:15:40	2025-12-25 18:15:40	8
28	4	ITI & ITC Trades	iti-itc-trades	\N	2025-12-25 18:15:57	2025-12-25 18:15:57	8
29	4	MSME Tool Room Courses	msme-tool-room-courses	\N	2025-12-25 18:16:15	2025-12-25 18:16:15	8
30	5	Diploma in Engineering (Polytechnic)	diploma-in-engineering-polytechnic	\N	2025-12-25 18:16:51	2025-12-25 18:16:51	9
31	5	Diploma in Paramedical	diploma-in-paramedical	\N	2025-12-25 18:17:09	2025-12-25 18:17:09	9
32	5	Diploma in Pharmacy (D.Pharm)	diploma-in-pharmacy-dpharm	\N	2025-12-25 18:17:25	2025-12-25 18:17:25	9
33	5	Diploma in Computer / IT	diploma-in-computer-it	\N	2025-12-25 18:17:39	2025-12-25 18:17:39	9
34	6	Arts Graduation Courses (BA & Allied)	arts-graduation-courses-ba-allied	\N	2025-12-25 18:18:28	2025-12-25 18:18:28	10
35	6	Commerce Graduation Courses (B.Com & Allied)	commerce-graduation-courses-bcom-allied	\N	2025-12-25 18:18:43	2025-12-25 18:18:43	10
36	6	Science Graduation Courses (B.Sc & Allied)	science-graduation-courses-bsc-allied	\N	2025-12-25 18:18:59	2025-12-25 18:18:59	10
37	6	Arts PG Courses (MA, MSW & Allied)	arts-pg-courses-ma-msw-allied	\N	2025-12-25 18:19:28	2025-12-25 18:19:28	11
38	6	Commerce PG Courses (M.Com & Allied)	commerce-pg-courses-mcom-allied	\N	2025-12-25 18:19:56	2025-12-25 18:19:56	11
39	6	Science PG Courses (M.Sc & Allied)	science-pg-courses-msc-allied	\N	2025-12-25 18:20:13	2025-12-25 18:20:13	11
40	6	Career Options After Graduation	career-options-after-graduation	\N	2025-12-25 18:20:28	2025-12-25 18:20:28	11
42	23	Paramedical Diplomas	paramedical-diplomas	\N	2025-12-25 18:22:12	2025-12-25 18:22:12	12
43	23	UG Paramedical Degrees	ug-paramedical-degrees	\N	2025-12-25 18:22:26	2025-12-25 18:22:26	12
44	23	Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)	pharmacy-dpharm-bpharm-mpharm-pharmd	\N	2025-12-25 18:22:45	2025-12-25 18:22:45	12
45	24	B.Tech / B.E Programs	btech-be-programs	\N	2025-12-25 18:23:05	2025-12-25 18:23:05	13
46	24	B.Arch	barch	\N	2025-12-25 18:23:20	2025-12-25 18:23:20	13
47	24	M.Tech	mtech	\N	2025-12-25 18:23:35	2025-12-25 18:23:35	13
48	24	Tool & Die / MSME Technical Courses	tool-die-msme-technical-courses	\N	2025-12-25 18:23:50	2025-12-25 18:23:50	13
49	24	BCA	bca	\N	2025-12-25 18:24:12	2025-12-25 18:24:12	14
50	24	B.Sc Computer Science / IT	bsc-computer-science-it	\N	2025-12-25 18:24:31	2025-12-25 18:24:31	14
51	24	MCA	mca	\N	2025-12-25 18:24:49	2025-12-25 18:24:49	14
52	25	B.Com & Allied Programs	bcom-allied-programs	\N	2025-12-25 18:25:36	2025-12-25 18:25:36	15
53	25	BBA & UG Management	bba-ug-management	\N	2025-12-25 18:25:56	2025-12-25 18:25:56	15
54	25	MBA / PGDM	mba-pgdm	\N	2025-12-25 18:26:14	2025-12-25 18:26:14	15
55	25	Finance / Taxation / Accounting	finance-taxation-accounting	\N	2025-12-25 18:26:28	2025-12-25 18:26:28	15
56	26	Integrated B.Sc–M.Sc / B.Tech–M.Tech	integrated-bsc-msc-btech-mtech	\N	2025-12-25 18:26:47	2025-12-25 18:26:47	16
57	26	M.Tech / M.Sc Research	mtech-msc-research	\N	2025-12-25 18:26:59	2025-12-25 18:26:59	16
58	26	PhD & Research Programs	phd-research-programs	\N	2025-12-25 18:27:14	2025-12-25 18:27:14	16
59	26	Fellowships & National Research Schemes	fellowships-national-research-schemes	\N	2025-12-25 18:27:28	2025-12-25 18:27:28	16
60	7	IITs – Indian Institutes of Technology	iits-indian-institutes-of-technology	\N	2025-12-26 06:04:10	2025-12-26 06:04:10	17
61	7	NITs – National Institutes of Technology	nits-national-institutes-of-technology	\N	2025-12-26 06:04:32	2025-12-26 06:04:32	17
63	7	IIMs – Management Institutes	iims-management-institutes	\N	2025-12-26 06:05:53	2025-12-26 06:05:53	17
64	7	AIIMS – Medical Institutes	aiims-medical-institutes	\N	2025-12-26 06:06:07	2025-12-26 06:06:07	17
65	7	NIFT / NID – Fashion & Design	nift-nid-fashion-design	\N	2025-12-26 06:06:20	2025-12-26 06:06:20	17
66	7	National Law Universities (NLUs)	national-law-universities-nlus	\N	2025-12-26 06:06:36	2025-12-26 06:06:36	17
67	8	Central Universities	central-universities	\N	2025-12-26 06:07:03	2025-12-26 06:07:03	18
68	8	State Universities	state-universities	\N	2025-12-26 06:07:18	2025-12-26 06:07:18	18
69	8	Private & Deemed Universities	private-deemed-universities	\N	2025-12-26 06:07:31	2025-12-26 06:07:31	18
70	8	Open & Distance Universities (IGNOU, NSOU...)	open-distance-universities-ignou-nsou	\N	2025-12-26 06:07:45	2025-12-26 06:07:45	18
71	9	Engineering Colleges	engineering-colleges	\N	2025-12-26 06:08:07	2025-12-26 06:08:07	19
72	9	Medical & Paramedical Colleges	medical-paramedical-colleges	\N	2025-12-26 06:08:20	2025-12-26 06:08:20	19
73	9	Nursing Colleges	nursing-colleges	\N	2025-12-26 06:08:36	2025-12-26 06:08:36	19
74	9	Pharmacy Colleges	pharmacy-colleges	\N	2025-12-26 06:08:49	2025-12-26 06:08:49	19
75	9	Management & Business Colleges	management-business-colleges	\N	2025-12-26 06:09:03	2025-12-26 06:09:03	19
76	9	Law Colleges	law-colleges	\N	2025-12-26 06:09:23	2025-12-26 06:09:23	19
77	9	Agriculture & Veterinary Colleges	agriculture-veterinary-colleges	\N	2025-12-26 06:09:39	2025-12-26 06:09:39	19
78	9	Teacher Training / B.Ed Colleges	teacher-training-bed-colleges	\N	2025-12-26 06:09:53	2025-12-26 06:09:53	19
79	27	ITI Centres (Govt / Private)	iti-centres-govt-private	\N	2025-12-26 06:10:14	2025-12-26 06:10:14	20
80	27	Polytechnic Colleges	polytechnic-colleges	\N	2025-12-26 06:10:26	2025-12-26 06:10:26	20
81	27	MSME Tool Room Institutes	msme-tool-room-institutes	\N	2025-12-26 06:10:40	2025-12-26 06:10:40	20
82	27	Skill Development Centres	skill-development-centres	\N	2025-12-26 06:10:52	2025-12-26 06:10:52	20
83	10	National Level (e.g. JEE Main, JEE Advanced)	national-level-eg-jee-main-jee-advanced	\N	2025-12-26 06:11:26	2025-12-26 06:11:26	24
84	10	State Level (WBJEE, etc.)	state-level-wbjee-etc	\N	2025-12-26 06:11:44	2025-12-26 06:11:44	24
85	10	University Level Exams	university-level-exams	\N	2025-12-26 06:11:58	2025-12-26 06:11:58	24
86	11	National Level (e.g. NEET UG)	national-level-eg-neet-ug	\N	2025-12-26 06:12:15	2025-12-26 06:12:15	23
87	11	State Level Medical Exams	state-level-medical-exams	\N	2025-12-26 06:12:26	2025-12-26 06:12:26	23
88	11	University Level Medical Exams	university-level-medical-exams	\N	2025-12-26 06:12:41	2025-12-26 06:12:41	23
89	12	MBA: CAT / XAT / MAT etc.	mba-cat-xat-mat-etc	\N	2025-12-26 06:12:57	2025-12-26 06:12:57	22
90	12	Law: CLAT / AILET / Others	law-clat-ailet-others	\N	2025-12-26 06:13:10	2025-12-26 06:13:10	22
91	13	Defence Exams (NDA / CDS)	defence-exams-nda-cds	\N	2025-12-26 06:13:24	2025-12-26 06:13:24	21
92	13	Civil Services & Govt Exams	civil-services-govt-exams	\N	2025-12-26 06:13:35	2025-12-26 06:13:35	21
93	13	International: GRE / GMAT / IELTS / TOEFL	international-gre-gmat-ielts-toefl	\N	2025-12-26 06:13:51	2025-12-26 06:13:51	21
\.


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
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, migration, batch) FROM stdin;
1	0001_01_01_000000_create_users_table	1
2	0001_01_01_000001_create_cache_table	1
3	0001_01_01_000002_create_jobs_table	1
4	2025_11_03_201708_create_settings_table	1
5	2025_11_07_100145_create_categories_table	1
6	2025_11_07_100242_create_sub_categories_table	1
7	2025_11_07_100307_create_menu_items_table	1
8	2025_11_07_100556_create_menu_item_tabs_table	1
9	2025_11_07_100910_create_menu_item_tab_contents_table	1
10	2025_12_07_092231_add_role_to_users_table	2
11	2025_12_07_101118_create_forum_categories_table	3
12	2025_12_07_102921_create_iti_colleges_table	4
13	2025_12_07_103041_create_iti_trades_table	4
14	2025_12_08_074055_update_type_constraint_in_iti_colleges_table	5
15	2025_12_09_145021_create_counselor_details_table	6
16	2025_12_09_161825_rename_description_to_category_icon_in_forum_categories_table	7
17	2025_12_10_090448_create_questions_table	8
18	2025_12_10_090510_create_answers_table	8
19	2025_12_10_090532_create_replies_table	8
20	2025_12_10_090556_create_reports_table	8
21	2025_12_23_124728_create_menu_groups_table	8
22	2025_12_25_081111_create_admins_table	9
23	2026_01_04_062031_create_coaching_supports_table	10
24	2026_01_04_062440_create_waqf_run_hostels_table	11
25	2026_01_04_062644_create_important_web_links_table	12
26	2026_01_04_062850_create_minority_schemes_table	13
27	2026_01_04_085326_create_admission_supports_table	14
28	2026_01_04_113753_create_central_universities_table	15
29	2026_04_26_062011_create_cm_messages_table	16
30	2026_04_26_094824_create_hero_slides_table	17
31	2026_04_26_150856_create_leader_messages_table	18
32	2026_04_26_160925_add_deleted_at_to_users_table	19
33	2026_04_27_073446_create_career_domains_table	20
34	2026_05_02_080435_create_news_table	21
35	2026_05_02_083933_create_loan_sections_table	22
36	2026_05_02_185814_create_sections_table	23
37	2026_04_28_000001_create_menus_table	24
38	2026_04_29_000001_create_page_contents_table	24
39	2026_05_10_000001_add_soft_deletes_to_menus_table	25
40	2026_05_20_122250_add_slug_to_news_table	26
\.


--
-- Data for Name: minority_schemes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.minority_schemes (id, subject, web_link, created_at, updated_at) FROM stdin;
3	Centrally Sponsored Scholarship Schemes	https://scholarships.gov.in/	2026-01-04 12:47:30	2026-01-04 12:47:30
4	Post Matric Scholarship under Talent Support Programme (WBMDFC)	https://tsp.wbmdfc.co.in	2026-01-04 12:47:30	2026-01-04 12:47:30
5	Swami Vivekananda Merit-cum-Means Scholarship	https://svmcm.wbhed.gov.in/	2026-01-04 12:47:30	2026-01-04 12:47:30
6	Wakf Scholarship and Stipend for Muslim Students	http://auqafboardwb.org/	2026-01-04 12:47:30	2026-01-04 12:47:30
7	Haji Md Mohsin Scholarship	http://www.wbmdfc.org/notice/haji-md.-mohsin-scholarship.html	2026-01-04 12:47:30	2026-01-04 12:47:30
8	Begum Hazrat Mahal National Scholarship for Girls	https://scholarship-maef.org/	2026-01-04 12:47:30	2026-01-04 12:47:30
9	Education Loan for Minorities	http://www.wbmdfc.net/	2026-01-04 12:47:30	2026-01-04 12:47:30
10	UGC Scholarship and Fellowship	https://www.ugc.ac.in/page/Scholarships-and-Fellowships.aspx	2026-01-04 12:47:30	2026-01-04 12:47:30
11	MANF – Maulana Azad National Fellowship for Minority Students	https://www.ugc.ac.in/manf/	2026-01-04 12:47:30	2026-01-04 12:47:30
12	Term Loan for Minorities	http://wbmdfc.org/form/form-list.php	2026-01-04 12:47:30	2026-01-04 12:47:30
13	Nai Udaan – Support for preparation of UPSC/SSC/State PSC Exams	http://naiudaan-moma.gov.in/	2026-01-04 12:47:30	2026-01-04 12:47:30
14	Nai Roshni – Leadership Development Programme for Minority Women	http://nairoshni-moma.gov.in/	2026-01-04 12:47:30	2026-01-04 12:47:30
15	Nai Manzil – Integrated Education and Livelihood initiative	http://naimanzil.minorityaffairs.gov.in/	2026-01-04 12:47:30	2026-01-04 12:47:30
16	Seekho aur Kamao (Learn & Earn) – Skill development schemes of minorities	http://seekhoaurkamao-moma.gov.in/	2026-01-04 12:47:30	2026-01-04 12:47:30
18	USTTAD – Upgrading the Skills and Training in Traditional Arts & Crafts	http://www.minorityaffairs.gov.in/schemesperformance/usttad-upgrading-skills-and-training-traditional-arts-crafts-development	2026-01-04 12:47:30	2026-01-04 12:47:30
19	Hamari Dharohar – Preserve Heritage of Minority Communities	http://www.minorityaffairs.gov.in/schemesperformance/%E2%80%9Chamari-dharohar%E2%80%9D-scheme-preserve-rich-heritage-minority-communities-india-under-overall-concept	2026-01-04 12:47:30	2026-01-04 12:47:30
20	Pradhan Mantri Jan Vikas Karyakram (PMJVK) – Previously MSDP	http://www.minorityaffairs.gov.in/pradhan-mantri-jan-vikas-karyakram-pmjvk-0	2026-01-04 12:47:30	2026-01-04 12:47:30
21	Khwaja Gharib Nawaz Skill Development Training for Minorities	http://www.maef.nic.in/CategoryContent.aspx?Id=359	2026-01-04 12:47:30	2026-01-04 12:47:30
22	Cyber Gram Yojana	http://www.cybergramyojana.in/	2026-01-04 12:47:30	2026-01-04 12:47:30
23	Scheme to Provide Quality Education in Madrasas (SPQEM)	http://mhrd.gov.in/spqem	2026-01-04 12:47:30	2026-01-04 12:47:30
24	Infrastructure Development in Minority Institutes (IDMI)	http://mhrd.gov.in/idmi	2026-01-04 12:47:30	2026-01-04 12:47:30
25	Construction of Boundary Wall around Graveyard/Mosque/Idgah/Mazar (Online Application)	http://wbminorityaffairs.in/	2026-01-04 12:47:30	2026-01-04 12:47:30
17	Padho Pardesh – Interest Subsidy on Educational Loans for Overseas Studies	https://www.minorityaffairs.gov.in/schemesperformance/padho-pardesh-scheme-interest-subsidy-educational-loans-overseas-studies-students-belonging-minority	2026-01-04 12:47:30	2026-01-04 08:40:03
\.


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
\.


--
-- Data for Name: page_contents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.page_contents (id, menu_id, html_content, meta_title, meta_description, is_published, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: password_reset_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.password_reset_tokens (email, token, created_at) FROM stdin;
\.


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questions (id, user_id, title, content, category_id, created_at, updated_at, "isBookmarked", by_bookmarked) FROM stdin;
3	37	test	test	["Engineering","Entrance Exams","Diploma Courses"]	2026-01-04 17:14:17	2026-01-04 17:14:17	f	0
6	37	React Js	Javascript	["Career Guidance","Colleges","Courses"]	2026-03-14 09:48:47	2026-03-14 10:04:02	t	89
7	36	Student Question	student description	["Arts & Humanities"]	2026-03-14 10:08:11	2026-03-14 10:08:11	f	0
8	36	student question 2	answer2	["Arts & Humanities","Career Guidance","Commerce"]	2026-03-14 10:08:30	2026-03-14 10:08:30	f	0
9	57	counselor	coulselor	["Career Guidance","Colleges","Commerce"]	2026-04-22 20:16:16	2026-04-22 20:16:16	f	0
\.


--
-- Data for Name: replies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.replies (id, answer_id, user_id, content, created_at, updated_at, upvotes) FROM stdin;
3	5	37	yes its reply	2026-03-14 09:59:17	2026-03-14 09:59:27	1
4	5	37	ok now i am replying	2026-03-14 10:00:43	2026-03-14 10:00:43	0
5	5	36	OMG	2026-03-14 10:09:33	2026-03-14 10:09:33	0
\.


--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reports (id, reportable_type, reportable_id, user_id, reason, details, created_at, updated_at, status) FROM stdin;
15	App\\Models\\Question	3	36	Abusive or harmful content	test vraud	2026-01-06 16:18:54	2026-01-06 16:19:26	action_taken
16	App\\Models\\Question	4	36	Incorrect or unsafe guidance	sds	2026-01-07 18:09:41	2026-01-07 18:09:41	pending
17	App\\Models\\Answer	5	37	Spam or misleading	fgfgf	2026-03-14 09:58:44	2026-03-14 09:58:44	pending
18	App\\Models\\Question	6	89	Incorrect or unsafe guidance	its bookmark	2026-03-14 10:04:41	2026-03-14 10:04:41	pending
\.


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
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, user_id, ip_address, user_agent, payload, last_activity) FROM stdin;
zY0t3NwhwiwoFtIFIAxGAVCB0sN5C1tSzuDxUtyT	\N	127.0.0.1	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36	YTo1OntzOjk6Il9wcmV2aW91cyI7YToyOntzOjM6InVybCI7czo1NzoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLndvZmYyIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM6InVybCI7YTowOnt9czo1MjoibG9naW5fYWRtaW5fNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6NjoiX3Rva2VuIjtzOjQwOiJoRGt5bEpGQXdhMEVLYVhkcTA2YW8zWG5Kd3JkakpGbkZmckVSa3dQIjt9	1779382989
046qkToSVhYvwFIuHWfkApQhHUQDwOYIOUNhrVQJ	\N	127.0.0.1	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36	YTozOntzOjY6Il90b2tlbiI7czo0MDoibHU1cWhYb2tYSVNlbEFFU0JBTzBOelpLc1FrSW5Vczh1UWM5bWF5ZiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb250cy9wb3BwaW5zL1BvcHBpbnMtUmVndWxhci53b2ZmMiI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==	1779698105
H7t41zFpBAj921KSCeN4BTzZ7IhfiYMsPQtAzHRQ	\N	127.0.0.1	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36	YTozOntzOjY6Il90b2tlbiI7czo0MDoiRzZzVU54eWx6TlE0enBEQkhIVDBKeEZuamxTSVRRUXdUWk43VllzeCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb250cy9wb3BwaW5zL1BvcHBpbnMtUmVndWxhci53b2ZmMiI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==	1779812104
\.


--
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.settings (id, key, value, type, "group", options, label, description, "order", is_public, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: sub_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sub_categories (id, category_id, name, slug, created_at, updated_at) FROM stdin;
1	2	By Stage	by-stage	2025-11-08 10:33:07	2025-11-08 10:33:07
2	2	By Profession	by-profession	2025-11-08 10:46:16	2025-11-08 10:46:16
8	4	Universities	universities	2025-11-08 12:48:37	2025-11-08 12:48:37
10	5	Engineering	engineering	2025-11-08 12:49:02	2025-11-08 12:49:02
11	5	Medical	medical	2025-11-08 12:49:13	2025-11-08 12:49:13
12	5	Management & Law	management-law	2025-11-08 12:49:25	2025-11-08 12:49:25
3	2	Future & Alternative Paths	future-paths	2025-11-08 10:46:28	2025-12-25 17:41:46
4	3	Vocational & Skill	ug-diploma-cert	2025-11-08 10:47:02	2025-12-25 18:10:15
5	3	Diploma & Polytechnic	professional-vocational	2025-11-08 10:47:13	2025-12-25 18:11:03
6	3	Streamlined Degree Courses	research-higher-studies	2025-11-08 12:48:10	2025-12-25 18:11:50
23	3	Medical & Paramedical	medical-paramedical	2025-12-25 18:12:23	2025-12-25 18:12:23
24	3	Engineering, Technology & IT	engineering-technology-it	2025-12-25 18:12:51	2025-12-25 18:12:51
25	3	Business & Management	business-management	2025-12-25 18:13:17	2025-12-25 18:13:17
26	3	Research & Higher Studies	research-higher-studies-1	2025-12-25 18:13:36	2025-12-25 18:13:36
7	4	National Institutes	institutes-of-national-importance	2025-11-08 12:48:26	2025-12-26 05:59:52
9	4	By Field of Study	vocational-training	2025-11-08 12:48:49	2025-12-26 06:00:53
27	4	Vocational & Technical Institutes	vocational-technical-institutes	2025-12-26 06:01:17	2025-12-26 06:01:17
13	5	Other Competitive & International	other	2025-11-08 12:49:35	2025-12-26 06:02:02
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, email_verified_at, password, is_active, avatar, remember_token, created_at, updated_at, role, mobile, is_blocked, blocked_at, is_online, last_activity, deleted_at) FROM stdin;
51	Dr Chowdhury Masoom Hossain	masoomchowdhury@gmail.com	\N	$2y$12$/HLg8GcYlllwLGocXOSW3eZT3y3S5Tio8/JSN/Au0ig5BQn4RUHEm	1	avatars/oElbxHzwBfpIqXJHWt5rRIADtj6hKkwudfEjsRp6.jpg	\N	2026-01-05 18:33:21	2026-01-05 18:38:03	counselor	7001686560	f	\N	f	\N	\N
56	Dr Mosarraf Hossain	mosarrafhossain2103@gmail.com	\N	$2y$12$rz.KVgnXUm2fXitNuzekS.vpG1j07821vrzO9opu9pAzP.1xUO2ie	1	\N	\N	2026-01-05 18:45:25	2026-01-05 18:45:25	counselor	8617705375	f	\N	f	\N	\N
59	Y R Gazi	gaziengg@gmail.com	\N	$2y$12$2URPtcVNh7DMtQWD6O12HOu74Kb.qSE1RvUEN20wgCXtDDP5WoRDq	1	\N	\N	2026-01-05 18:45:25	2026-01-05 18:45:25	counselor	9775100771	f	\N	f	\N	\N
60	Md Nazimuddin	suman_2266@yahoo.co.in	\N	$2y$12$emf046.LpDiTB1DJGrf7OOUfbTKLWZgkmJ5uxXIghu5guFZCCaOLS	1	\N	\N	2026-01-05 18:45:26	2026-01-05 18:45:26	counselor	9474411115	f	\N	f	\N	\N
66	Sabir Ahamed	sabirahamed@gmail.com	\N	$2y$12$QlIbEZsHrrrDNDHE4Jkbzu6iEsREADuzu2Z3cNiPlHOYJNeLYaGYS	1	\N	\N	2026-01-05 18:47:16	2026-01-05 18:47:16	counselor	9831632697	f	\N	f	\N	\N
67	Jahangir Alam	jahangir.net@gmail.com	\N	$2y$12$F4ZVwvlnUt.AsqJJ8D76S.KbQmYuR4nbMCB3BBJdNaFULlADGEdo6	1	\N	\N	2026-01-05 18:47:17	2026-01-05 18:47:17	counselor	9339961668	f	\N	f	\N	\N
68	Dr Aftabuz Zaman	profazaman@gmail.com	\N	$2y$12$eC8/LSCBI6z/nP0YCO7LMO.syHmVLoKozoin41Y3SFwHSpmqyW7jK	1	\N	\N	2026-01-05 18:47:17	2026-01-05 18:47:17	counselor	9433208363	f	\N	f	\N	\N
69	Touhidul Islam	touhidulislam132@gmail.com	\N	$2y$12$RqoDlvothcxgvKqfEJBGUOp7OWGgZEFXaYAUAV10M.qhldpLk3H1u	1	\N	\N	2026-01-05 18:47:17	2026-01-05 18:47:17	counselor	9609732404	f	\N	f	\N	\N
70	Dr Mohd. Tabish Khan	tabishkhan05@gmail.com	\N	$2y$12$3up6Yy0jPbNXgNgNg0u10.hQgpP8pPpH8T3RGF2Z5E94SwaX/p3Ri	1	\N	\N	2026-01-05 18:47:17	2026-01-05 18:47:17	counselor	8972815804	f	\N	f	\N	\N
76	Samarul Islam	samarulislam123@gmail.com	\N	$2y$12$EojlvSaE2VVGQZj7r0BKMOE60u0y4PeVCNnSmRPe0OchN0HeQxR/m	1	\N	\N	2026-01-05 18:48:22	2026-01-05 18:48:22	counselor	7407359942	f	\N	f	\N	\N
77	Nasidul Islam	nasidulphd@gmail.com	\N	$2y$12$1LMzJ07k5ZqTbZJMmut90.JHJojAL2F9cDBHtP7rHgpBBKuUa37yy	1	\N	\N	2026-01-05 18:48:22	2026-01-05 18:48:22	counselor	8850009490	f	\N	f	\N	\N
78	Debarghya Dey	debarghya.dey@gmail.com	\N	$2y$12$vyZFWzWqre8dd9O2ym.rf.7uhFljwN1T2k1AVvT8J7eQl/Rfvhz6C	1	\N	\N	2026-01-05 18:48:22	2026-01-05 18:48:22	counselor	9083786793	f	\N	f	\N	\N
79	Sultana Parvin	p.sulu2018@gmail.com	\N	$2y$12$Od5VLoqibRZ5jnPCOy59fOsQRygwuWQykA0VZNJGzXhORfrJbBVHe	1	\N	\N	2026-01-05 18:48:22	2026-01-05 18:48:22	counselor	7585063330	f	\N	f	\N	\N
80	Mohona Maitra	mohona.maitra@gmail.com	\N	$2y$12$stYm5J/fOI8jztNquSRcyukLBSx9l7CiHC4QjHQe6or3P8td3EIsG	1	\N	\N	2026-01-05 18:48:23	2026-01-05 18:48:23	counselor	9830042676	f	\N	f	\N	\N
58	Kh. Jinnatul Islam	kjislam@gmail.com	\N	$2y$12$K9RIOXE.6UPyAzqHLnB8ue7NJd8MgKES4.Yc/9oEP4yQ5/BhHxUIy	1	\N	\N	2026-01-05 18:45:25	2026-01-05 19:02:49	counselor	9830072424/9748383342	f	\N	f	\N	\N
57	Dr Syed Mahamud Hossain	mahamud123@gmail.com	\N	$2y$12$KMauBFGK0nD9hmolHt3ehOJXBK14lGedprolAps/n3KNuZmlccYRq	1	\N	\N	2026-01-05 18:45:25	2026-04-23 16:54:28	counselor	9143467342/9475890484	f	\N	f	2026-04-23 16:54:28	\N
84	Wasif Reza	wasifreza@yahoo.in	\N	$2y$12$Q20.8osblHq5RNug5vSadO9/C4f6D5pV6D2tRwcCZVZHMtSplbA/e	1	\N	\N	2026-01-05 19:15:23	2026-01-05 19:15:23	counselor	9681145095	f	\N	f	\N	\N
86	sarah israr	sarah.israr@carneytechnologies.com	\N	$2y$12$hC9meaPJDhqERd1LeV7U8.sGz8abhOGqC4K4AXdDi7iEJc67H5MIG	1	\N	\N	2026-01-05 19:27:44	2026-02-18 11:26:21	student	\N	f	\N	f	2026-02-18 11:26:21	\N
90	Deepak	deepaktest@gmail.com	\N	$2y$12$B/r1sevFHKpVQWC4kwQzyuMKgHuajxC2hl2clHearPuuB.XYuAMca	1	\N	\N	2026-04-23 16:55:46	2026-05-02 07:48:05	counselor	8384000238	f	\N	f	2026-05-02 07:48:05	\N
22	Deepak Singh	deepaksingh@careerhub.com	\N	$2y$12$R4HctVJaFHFaktmBdZLh2.i6ttSkdAlI6xGJL2jVM6eGaMvYWB6K.	1	\N	QaLj9Vm1aW0wT2Ofrg3s3DvSk5zJmNLXQnFScdKmuD8ss2I07iqz7GqD624J	2025-12-07 11:26:17	2025-12-07 11:26:17	user	\N	f	\N	f	\N	\N
33	ekta Panchal	ektapanchal@gmail.com	\N	$2y$12$k7TW3JWF7zsgoQ/W9tMMQeAY.hWz1LeiL.1XxkLU/9wGys6QpultW	1	\N	\N	2025-12-16 16:00:05	2025-12-16 16:00:05	user	\N	f	\N	f	\N	\N
92	new	new@gmail.com	\N	$2y$12$rIwq5euv1EcAqfAXN3lQyOBJKauZPmhLYqHaccKtQk0I1/BUoMLe.	1	\N	\N	2026-05-02 07:52:39	2026-05-08 21:57:48	counselor	8855221144	f	\N	f	2026-05-02 07:54:22	\N
31	Anwarul Haque (Commerce)	molla_anwarul@yahoo.com	\N	$2y$12$vYw5PB2.oQEYLzL4RRQ8hu2anHCalRJNVzgtqF.XONnvvIxwy/fTG	1	\N	\N	2025-12-10 09:53:48	2026-01-05 18:38:36	counselor	9007276709	f	\N	f	\N	\N
52	Dr Nurul Alam	nurulalam.ju@gmail.com	\N	$2y$12$QAVOGZN7yalb06lBRPg6ve.1jblISzTtBkGmtg31b7L9nH1bPtS/a	1	\N	\N	2026-01-05 18:43:02	2026-01-05 18:43:02	counselor	8906964777	f	\N	f	\N	\N
53	Dr Abu Saleh	abusalehenglish@gmail.com	\N	$2y$12$H19zk/f6CPFgJ.WBQR3QXO1SqQJYWtNqXUrQmvry.PgQ.ZehinsIe	1	\N	\N	2026-01-05 18:43:02	2026-01-05 18:43:02	counselor	9494242645	f	\N	f	\N	\N
54	Dr Anwar Sadat Halder	anwarpg786@gmail.com	\N	$2y$12$Fk524oatcUAXdyjpjCtpDOjireYZz8eoikf/o7DgeSrOJouWzsJgu	1	\N	\N	2026-01-05 18:43:02	2026-01-05 18:43:02	counselor	8902408420	f	\N	f	\N	\N
61	Dr Md Reyaz	reyazmd@gmail.com	\N	$2y$12$cZQtyPBzKMGVCnTjr5zE6ucrx6SSaI/3gGKkuxlp/Yd4VqZKqpb32	1	\N	\N	2026-01-05 18:46:28	2026-01-05 18:46:28	counselor	8017596380	f	\N	f	\N	\N
37	Teacher	teacher@gmail.com	\N	$2y$12$pGx3UB1NihHLIEgf1gtMWugNW0LngxVGWBomnHkrQseQ.i49V3Siu	1	avatars/NaLfFtnknZTlsyevoofJNoM4rbRgemWyYhJkzstf.jpg	\N	2025-12-25 07:18:24	2026-03-14 10:07:22	teacher	\N	f	\N	f	2026-03-14 10:07:22	\N
108	Deepak Panchal	panchaldeepak40069@gmail.com	2026-05-11 20:02:33	$2y$12$SSNDEH3kJGswcT18Nqj72OzW2l6WoOchyTsYI13IgPR4C2/v4E3mK	1	\N	\N	2026-05-11 20:01:44	2026-05-11 20:03:59	student	\N	f	\N	f	2026-05-11 20:03:59	\N
63	Enam Ali	enam.himalaya@gmail.com	\N	$2y$12$Ile8aitLaURbEdKBeEf0qul60DlbD0RCO2jw3lbVmUETZi9IMbuxi	1	\N	\N	2026-01-05 18:46:28	2026-01-05 18:46:28	counselor	9836121110	f	\N	f	\N	\N
64	Dr Iqbal	iqbalasc@yahoo.com	\N	$2y$12$lFspzJdSB4U8ndW4FWxVG.BG0EOpWWnQRSe.E.HsAQvE8HRcJ2Ox.	1	\N	\N	2026-01-05 18:46:28	2026-01-05 18:46:28	counselor	9953971178	f	\N	f	\N	\N
65	Dr Abdus Samad	abdussamad77@yahoo.co.in	\N	$2y$12$APB/3Im53jlk6kaCppw8ru1QD6XOzTrLElaQRSgJU6jj2pQcbRthm	1	\N	\N	2026-01-05 18:46:29	2026-01-05 18:46:29	counselor	9500130279	f	\N	f	\N	\N
73	Dr Ziaur Rahman	ziaurnbu@gmail.com	\N	$2y$12$m9qoJARAgPQpUo20RZMUbuacw3oc/cUeNmTCDX/4yeZcGuJfhqfRm	1	\N	\N	2026-01-05 18:47:47	2026-01-05 18:47:47	counselor	9434890165	f	\N	f	\N	\N
75	Tanvir Islam	tanvir888islam@gmail.com	\N	$2y$12$9sMwgPoQiIWiBn7jMxxYpO4YMDsWkxp0a2SRY1MLp3/eaPo3I0n6C	1	\N	\N	2026-01-05 18:47:48	2026-01-05 18:47:48	counselor	9831140809	f	\N	f	\N	\N
82	Dr Abdus Samad (Medicine)	profdrsasamad@gmail.com	\N	$2y$12$uYpNDwGeNCKGLXWsgywiKuUMIJYjq5kVIuhLNYVIZ5WkWxbCr9Dm6	1	\N	\N	2026-01-05 18:48:50	2026-01-05 18:48:50	counselor	8777607967	f	\N	f	\N	\N
83	Dr Mir Musaraf Hussain	mirmusaraf@rediffmail.com	\N	$2y$12$LJf5NofzD7jRTa8uvou3Y.QqVYV8XLrYB.PdpH06baebtSU17XCFK	1	\N	\N	2026-01-05 18:48:50	2026-01-05 18:48:50	counselor	9434306914	f	\N	f	\N	\N
81	Siddhartha Mitra	siddhartha.13mitra@gmail.com	\N	$2y$12$jViC4q3A7IGoqtnlM3YqCem7Kus/g1p/Mw0aR71BNE5PK5Nb4eBNe	1	\N	\N	2026-01-05 18:48:49	2026-01-05 19:00:35	counselor	7059787929/9674216255	f	\N	f	\N	\N
74	Dr Abdur Rahim Faiz Anwar	arahimcal@gmail.com	\N	$2y$12$RKqCusWhY15VNzYdp9dQM.8JMTHG/mKC0hkAYQBFwvzropJzjaCo6	1	\N	\N	2026-01-05 18:47:47	2026-01-05 19:01:21	counselor	8100051555/8444057949	f	\N	f	\N	\N
72	Sk Sabir Ali	sksabirali333@gmail.com	\N	$2y$12$iBz2.2sr5lRxbFndiZEC7OylcCij6OZj5m62L6Zu.f80UOmZqx7CO	1	\N	\N	2026-01-05 18:47:47	2026-01-05 19:01:52	counselor	9153121883/7384835499	f	\N	f	\N	\N
62	Ruksar Khatun	ruksar1khatun@gmail.com	\N	$2y$12$TdlqwwhIQ6i3LwImGU8HMeO5.MSmuya7UDgceFjt6tQg27FOayVQG	1	\N	\N	2026-01-05 18:46:28	2026-01-05 19:02:20	counselor	6295823627/8967449086	f	\N	f	\N	\N
71	Sk. Md. Hafizur	dummy_email@gmail.com	\N	$2y$12$HNNM7VfWgEPH1uo.daCofeGX3GcUkaeQ4xnREGt3aTaN7z5N2ggL6	1	\N	\N	2026-01-05 18:47:47	2026-01-05 19:10:21	counselor	9891144521	f	\N	f	\N	\N
85	Aaqueel Khan	aaquelkhan72@gmail.com	\N	$2y$12$O4PGY9z1t7LQzdD/le16B.BxZia7TcpOM9ORdECGNbLzkO7nA188G	1	\N	\N	2026-01-05 19:16:12	2026-05-21 16:54:45	counselor	7003121151	f	\N	f	2026-05-21 16:54:45	\N
36	deepak student	student@gmail.com	\N	$2y$12$TDcy1MOxCbLCT4wFjPTjSe1J0ECi/S8UhL3JPlG7T/dEpEgb6CNG2	1	\N	\N	2025-12-25 06:39:40	2026-04-26 16:25:11	student	\N	f	\N	t	2026-03-14 11:21:33	\N
87	super admin	superadmin@gmail.com	\N	$2y$12$TqEMHVCRZTxT45uIoLNntuPNQ7Tiilv4QZ4CtcvtqI3EmB0h7wRVO	1	\N	\N	2026-01-07 06:58:56	2026-03-11 19:55:42	super_admin	9871184692	f	\N	f	2026-03-11 19:55:42	\N
89	Parent	parent@gmail.com	\N	$2y$12$kvWiRvXcrc7L./tKJdON5.mfrbU6N7cU18bv4sp02gOvMy3/mybEq	1	\N	\N	2026-01-07 19:31:36	2026-04-26 16:22:42	parent	8384000235	f	\N	f	2026-03-14 10:05:50	\N
102	Deepak Panchal	panchaldeepak400@gmail.com	2026-05-02 21:31:27	$2y$12$WGUvBKbJU6zylXFmsWIDTuhEr//LmR9roZmsnnPlG19BbkpMbKJVC	1	\N	\N	2026-05-02 21:31:05	2026-05-21 16:55:14	student	\N	f	\N	f	2026-05-21 16:55:14	\N
\.


--
-- Data for Name: waqf_run_hostels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.waqf_run_hostels (id, name, address, seat_capacity, contact_no, created_at, updated_at) FROM stdin;
5	Suri Muslim Boys’ Hostel	P.O. & P.S. Suri, Dist. Birbhum	65	9475365138	2026-01-04 12:50:53	2026-01-04 12:50:53
6	Burdwan Muslim Girls’ Hostel	127, B.C. Road, Boro Bazar, Dist. Burdwan	95	9734796791	2026-01-04 12:50:53	2026-01-04 12:50:53
7	Berhampore Muslim Girls’ Hostel	P.O. & P.S. Berhampore, Dist. Murshidabad	235	0342-22566226	2026-01-04 12:50:53	2026-01-04 12:50:53
8	Sayedul Hoque Muslim Girls’ Hostel	Narohari Mukherjee Lane, Judge Court Para, Krishnanagar, Dist. Nadia	111	9474078424	2026-01-04 12:50:53	2026-01-04 12:50:53
9	Bashirhat Begum Rokeya Muslim Girls’ Hostel	P.O. Bashirhat, Dist. North 24 Parganas	60	9732973866	2026-01-04 12:50:53	2026-01-04 12:50:53
10	Midnapore Muslim Girls’ Hostel	Shipai Bazar, Dist. West Midnapore	60	9434438733	2026-01-04 12:50:53	2026-01-04 12:50:53
11	Maldah Muslim Girls’ Hostel	Kuttitola Lane, Malda Town, Dist. Malda	58	9233302173	2026-01-04 12:50:53	2026-01-04 12:50:53
12	Islampur Muslim Girls’ Hostel	P.O. & P.S. Islampur, Dist. Uttar Dinajpur	66	9434676162	2026-01-04 12:50:53	2026-01-04 12:50:53
13	Balurghat Muslim Girls’ Hostel	P.O. & P.S. Balurghat, Dist. Dakshin Dinajpur	95	8906708042	2026-01-04 12:50:53	2026-01-04 12:50:53
14	Purulia Muslim Girls’ Hostel	P.O. & P.S. Purulia, Dist. Purulia	21	0351-2251304	2026-01-04 12:50:53	2026-01-04 12:50:53
15	Boo-Ali Muslim Boys’ Hostel & Empowerment Centre	1, No. Kaiser Street, Kolkata – 09	140	7031931750	2026-01-04 12:50:53	2026-01-04 12:50:53
16	A.K. Fazlul Hoque Muslim Girls’ Hostel	31, Dilkhusa Street, Park Circus, Kolkata – 17	113	9002913922	2026-01-04 12:50:53	2026-01-04 12:50:53
17	Abdul Hakim Boys’ Waqf Hostel	20A, Peary Mohan Ray Road, Chetla, Kolkata – 27	120	9932601811	2026-01-04 12:50:53	2026-01-04 12:50:53
18	Kolkata Muslim Girls’ Hostel	43, Dilkhusa Street, Park Circus, Kolkata – 17	276	9883852617 / 8622076799 / 033-22901701 / 9433185651	2026-01-04 12:50:53	2026-01-04 12:50:53
4	Suri Muslim Girls’ Hostel	P.O. & P.S. Suri, Dist. Birbhum	84	9734271936	2026-01-04 12:50:53	2026-01-04 08:36:41
\.


--
-- Name: admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admins_id_seq', 1, true);


--
-- Name: admission_supports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admission_supports_id_seq', 123, true);


--
-- Name: answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.answers_id_seq', 6, true);


--
-- Name: career_domains_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.career_domains_id_seq', 8, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 9, true);


--
-- Name: central_universities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.central_universities_id_seq', 58, true);


--
-- Name: cm_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cm_messages_id_seq', 1, true);


--
-- Name: coaching_supports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coaching_supports_id_seq', 40, true);


--
-- Name: counselor_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.counselor_details_id_seq', 89, true);


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);


--
-- Name: forum_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forum_categories_id_seq', 50, true);


--
-- Name: hero_slides_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hero_slides_id_seq', 7, true);


--
-- Name: important_web_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.important_web_links_id_seq', 66, true);


--
-- Name: iti_colleges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.iti_colleges_id_seq', 57, true);


--
-- Name: iti_trades_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.iti_trades_id_seq', 382, true);


--
-- Name: jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jobs_id_seq', 1, false);


--
-- Name: leader_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.leader_messages_id_seq', 2, true);


--
-- Name: loan_sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.loan_sections_id_seq', 13, true);


--
-- Name: menu_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_groups_id_seq', 24, true);


--
-- Name: menu_item_tab_contents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_item_tab_contents_id_seq', 3, true);


--
-- Name: menu_item_tabs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_item_tabs_id_seq', 14, true);


--
-- Name: menu_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_items_id_seq', 93, true);


--
-- Name: menus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menus_id_seq', 171, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 40, true);


--
-- Name: minority_schemes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.minority_schemes_id_seq', 26, true);


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_id_seq', 16, true);


--
-- Name: page_contents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.page_contents_id_seq', 1, false);


--
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questions_id_seq', 9, true);


--
-- Name: replies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.replies_id_seq', 5, true);


--
-- Name: reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reports_id_seq', 18, true);


--
-- Name: sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sections_id_seq', 4, true);


--
-- Name: settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.settings_id_seq', 1, false);


--
-- Name: sub_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sub_categories_id_seq', 27, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 108, true);


--
-- Name: waqf_run_hostels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.waqf_run_hostels_id_seq', 18, true);


--
-- Name: admins admins_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_email_unique UNIQUE (email);


--
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);


--
-- Name: admission_supports admission_supports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admission_supports
    ADD CONSTRAINT admission_supports_pkey PRIMARY KEY (id);


--
-- Name: answers answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (id);


--
-- Name: cache_locks cache_locks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cache_locks
    ADD CONSTRAINT cache_locks_pkey PRIMARY KEY (key);


--
-- Name: cache cache_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cache
    ADD CONSTRAINT cache_pkey PRIMARY KEY (key);


--
-- Name: career_domains career_domains_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.career_domains
    ADD CONSTRAINT career_domains_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: categories categories_slug_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_slug_unique UNIQUE (slug);


--
-- Name: central_universities central_universities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.central_universities
    ADD CONSTRAINT central_universities_pkey PRIMARY KEY (id);


--
-- Name: cm_messages cm_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cm_messages
    ADD CONSTRAINT cm_messages_pkey PRIMARY KEY (id);


--
-- Name: coaching_supports coaching_supports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coaching_supports
    ADD CONSTRAINT coaching_supports_pkey PRIMARY KEY (id);


--
-- Name: counselor_details counselor_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.counselor_details
    ADD CONSTRAINT counselor_details_pkey PRIMARY KEY (id);


--
-- Name: failed_jobs failed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);


--
-- Name: failed_jobs failed_jobs_uuid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE (uuid);


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
-- Name: hero_slides hero_slides_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hero_slides
    ADD CONSTRAINT hero_slides_pkey PRIMARY KEY (id);


--
-- Name: important_web_links important_web_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.important_web_links
    ADD CONSTRAINT important_web_links_pkey PRIMARY KEY (id);


--
-- Name: iti_colleges iti_colleges_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.iti_colleges
    ADD CONSTRAINT iti_colleges_pkey PRIMARY KEY (id);


--
-- Name: iti_trades iti_trades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.iti_trades
    ADD CONSTRAINT iti_trades_pkey PRIMARY KEY (id);


--
-- Name: job_batches job_batches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job_batches
    ADD CONSTRAINT job_batches_pkey PRIMARY KEY (id);


--
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);


--
-- Name: leader_messages leader_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leader_messages
    ADD CONSTRAINT leader_messages_pkey PRIMARY KEY (id);


--
-- Name: loan_sections loan_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.loan_sections
    ADD CONSTRAINT loan_sections_pkey PRIMARY KEY (id);


--
-- Name: menu_groups menu_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_groups
    ADD CONSTRAINT menu_groups_pkey PRIMARY KEY (id);


--
-- Name: menu_item_tab_contents menu_item_tab_contents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_item_tab_contents
    ADD CONSTRAINT menu_item_tab_contents_pkey PRIMARY KEY (id);


--
-- Name: menu_item_tabs menu_item_tabs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_item_tabs
    ADD CONSTRAINT menu_item_tabs_pkey PRIMARY KEY (id);


--
-- Name: menu_items menu_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_items
    ADD CONSTRAINT menu_items_pkey PRIMARY KEY (id);


--
-- Name: menu_items menu_items_slug_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_items
    ADD CONSTRAINT menu_items_slug_unique UNIQUE (slug);


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
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: minority_schemes minority_schemes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.minority_schemes
    ADD CONSTRAINT minority_schemes_pkey PRIMARY KEY (id);


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
-- Name: page_contents page_contents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_contents
    ADD CONSTRAINT page_contents_pkey PRIMARY KEY (id);


--
-- Name: password_reset_tokens password_reset_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.password_reset_tokens
    ADD CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (email);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- Name: replies replies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.replies
    ADD CONSTRAINT replies_pkey PRIMARY KEY (id);


--
-- Name: reports reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (id);


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
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: settings settings_key_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT settings_key_unique UNIQUE (key);


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (id);


--
-- Name: sub_categories sub_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sub_categories
    ADD CONSTRAINT sub_categories_pkey PRIMARY KEY (id);


--
-- Name: sub_categories sub_categories_slug_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sub_categories
    ADD CONSTRAINT sub_categories_slug_unique UNIQUE (slug);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: waqf_run_hostels waqf_run_hostels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.waqf_run_hostels
    ADD CONSTRAINT waqf_run_hostels_pkey PRIMARY KEY (id);


--
-- Name: jobs_queue_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX jobs_queue_index ON public.jobs USING btree (queue);


--
-- Name: reports_reportable_type_reportable_id_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX reports_reportable_type_reportable_id_index ON public.reports USING btree (reportable_type, reportable_id);


--
-- Name: sessions_last_activity_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sessions_last_activity_index ON public.sessions USING btree (last_activity);


--
-- Name: sessions_user_id_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sessions_user_id_index ON public.sessions USING btree (user_id);


--
-- Name: answers answers_question_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_question_id_foreign FOREIGN KEY (question_id) REFERENCES public.questions(id) ON DELETE CASCADE;


--
-- Name: answers answers_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: counselor_details counselor_details_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.counselor_details
    ADD CONSTRAINT counselor_details_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: iti_trades iti_trades_iti_college_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.iti_trades
    ADD CONSTRAINT iti_trades_iti_college_id_foreign FOREIGN KEY (iti_college_id) REFERENCES public.iti_colleges(id) ON DELETE CASCADE;


--
-- Name: menu_groups menu_groups_sub_category_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_groups
    ADD CONSTRAINT menu_groups_sub_category_id_foreign FOREIGN KEY (sub_category_id) REFERENCES public.sub_categories(id) ON DELETE CASCADE;


--
-- Name: menu_item_tab_contents menu_item_tab_contents_menu_item_tab_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_item_tab_contents
    ADD CONSTRAINT menu_item_tab_contents_menu_item_tab_id_foreign FOREIGN KEY (menu_item_tab_id) REFERENCES public.menu_item_tabs(id) ON DELETE CASCADE;


--
-- Name: menu_item_tabs menu_item_tabs_menu_item_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_item_tabs
    ADD CONSTRAINT menu_item_tabs_menu_item_id_foreign FOREIGN KEY (menu_item_id) REFERENCES public.menu_items(id) ON DELETE CASCADE;


--
-- Name: menu_items menu_items_group_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_items
    ADD CONSTRAINT menu_items_group_id_foreign FOREIGN KEY (group_id) REFERENCES public.menu_groups(id) ON DELETE SET NULL;


--
-- Name: menu_items menu_items_sub_category_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_items
    ADD CONSTRAINT menu_items_sub_category_id_foreign FOREIGN KEY (sub_category_id) REFERENCES public.sub_categories(id) ON DELETE CASCADE;


--
-- Name: menus menus_parent_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_parent_id_foreign FOREIGN KEY (parent_id) REFERENCES public.menus(id) ON DELETE SET NULL;


--
-- Name: page_contents page_contents_menu_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_contents
    ADD CONSTRAINT page_contents_menu_id_foreign FOREIGN KEY (menu_id) REFERENCES public.menus(id) ON DELETE CASCADE;


--
-- Name: questions questions_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: replies replies_answer_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.replies
    ADD CONSTRAINT replies_answer_id_foreign FOREIGN KEY (answer_id) REFERENCES public.answers(id) ON DELETE CASCADE;


--
-- Name: replies replies_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.replies
    ADD CONSTRAINT replies_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: reports reports_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: sub_categories sub_categories_category_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sub_categories
    ADD CONSTRAINT sub_categories_category_id_foreign FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict TVBGfpgKATbyBLb10jDECpaCKJQslyRIaj12bnGfwRc18aBqkdsAOQtYvxraq9M

