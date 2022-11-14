/* Replace with your SQL commands */

CREATE TABLE public.users (
    id integer NOT NULL,
    lastname character varying(255),
    firstname character varying(255),
    email character varying(255),
    sub character varying(255) NOT NULL
);

CREATE TABLE public.favorites (
    park_code character varying(250) NOT NULL,
    sub_user character varying(250)
);

CREATE TABLE public.newsletter_subscribers (
    name character varying(250),
    email character varying(250),
    id integer NOT NULL
);


SELECT pg_catalog.setval('public.users_id_seq', 3, true);

