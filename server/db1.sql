--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

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
-- Name: favorites; Type: TABLE; Schema: public; Owner: tpl522_15
--

CREATE TABLE public.favorites (
    park_code character varying(250) NOT NULL,
    sub_user character varying(250)
);


ALTER TABLE public.favorites OWNER TO tpl522_15;

--
-- Name: newsletter_subscribers; Type: TABLE; Schema: public; Owner: tpl522_15
--

CREATE TABLE public.newsletter_subscribers (
    name character varying(250),
    email character varying(250),
    id integer NOT NULL
);


ALTER TABLE public.newsletter_subscribers OWNER TO tpl522_15;

--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_15
--

CREATE SEQUENCE public.newsletter_subscribers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.newsletter_subscribers_id_seq OWNER TO tpl522_15;

--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_15
--

ALTER SEQUENCE public.newsletter_subscribers_id_seq OWNED BY public.newsletter_subscribers.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_15
--

CREATE TABLE public.users (
    id integer NOT NULL,
    lastname character varying(255),
    firstname character varying(255),
    email character varying(255),
    sub character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO tpl522_15;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_15
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO tpl522_15;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_15
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: newsletter_subscribers id; Type: DEFAULT; Schema: public; Owner: tpl522_15
--

ALTER TABLE ONLY public.newsletter_subscribers ALTER COLUMN id SET DEFAULT nextval('public.newsletter_subscribers_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tpl522_15
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tpl522_15
--

COPY public.favorites (park_code, sub_user) FROM stdin;
pinn	google-oauth2|113617657896702362889
redw	google-oauth2|113617657896702362889
memy	google-oauth2|113617657896702362889
colm	google-oauth2|113617657896702362889
chis	google-oauth2|113617657896702362889
pinn	auth0|6369c68bcf91d2a76e94387f
gumo	auth0|6369c68bcf91d2a76e94387f
chic	auth0|6369c68bcf91d2a76e94387f
colo	auth0|6369c68bcf91d2a76e94387f
acad	auth0|6369c68bcf91d2a76e94387f
jotr	auth0|6369c68bcf91d2a76e94387f
home	auth0|6369c68bcf91d2a76e94387f
anac	auth0|6369c68bcf91d2a76e94387f
manz	auth0|6369c68bcf91d2a76e94387f
pinn	google-oauth2|113617657896702362889
redw	google-oauth2|113617657896702362889
memy	google-oauth2|113617657896702362889
colm	google-oauth2|113617657896702362889
chis	google-oauth2|113617657896702362889
pinn	auth0|6369c68bcf91d2a76e94387f
gumo	auth0|6369c68bcf91d2a76e94387f
chic	auth0|6369c68bcf91d2a76e94387f
colo	auth0|6369c68bcf91d2a76e94387f
acad	auth0|6369c68bcf91d2a76e94387f
jotr	auth0|6369c68bcf91d2a76e94387f
home	auth0|6369c68bcf91d2a76e94387f
anac	auth0|6369c68bcf91d2a76e94387f
manz	auth0|6369c68bcf91d2a76e94387f
\.


--
-- Data for Name: newsletter_subscribers; Type: TABLE DATA; Schema: public; Owner: tpl522_15
--

COPY public.newsletter_subscribers (name, email, id) FROM stdin;
Harneet	harneetsaini40@gmail.com	1
Nancy	nancy@test1.com	2
john	doe@test.com	3
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_15
--

COPY public.users (id, lastname, firstname, email, sub) FROM stdin;
1	saini	harneet	harneetsaini40@gmail.com	google-oauth2|113617657896702362889
2	\N	\N	johndoe@yahoo.com	auth0|636416f36cf7991a3edbc470
3	\N	\N	abc@test.com	auth0|6369c68bcf91d2a76e94387f
\.


--
-- Name: newsletter_subscribers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_15
--

SELECT pg_catalog.setval('public.newsletter_subscribers_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_15
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: newsletter_subscribers newsletter_subscribers_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_15
--

ALTER TABLE ONLY public.newsletter_subscribers
    ADD CONSTRAINT newsletter_subscribers_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_15
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (sub);


--
-- Name: favorites favorites_sub_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_15
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_sub_user_fkey FOREIGN KEY (sub_user) REFERENCES public.users(sub);


--
-- PostgreSQL database dump complete
--

