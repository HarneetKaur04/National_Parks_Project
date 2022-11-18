/* Replace with your SQL commands */

CREATE TABLE users (
    id integer NOT NULL,
    lastname character varying(255),
    firstname character varying(255),
    email character varying(255),
    sub character varying(255) NOT NULL
);

CREATE TABLE favorites (
    park_code character varying(250) NOT NULL,
    sub_user character varying(250)
);

CREATE TABLE newsletter_subscribers (
    name character varying(250),
    email character varying(250),
    id integer NOT NULL
);

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

COPY public.newsletter_subscribers (name, email, id) FROM stdin;
Harneet	harneetsaini40@gmail.com	1
Nancy	nancy@test1.com	2
john	doe@test.com	3
\.

COPY public.users (id, lastname, firstname, email, sub) FROM stdin;
1	saini	harneet	harneetsaini40@gmail.com	google-oauth2|113617657896702362889
2	\N	\N	johndoe@yahoo.com	auth0|636416f36cf7991a3edbc470
3	\N	\N	abc@test.com	auth0|6369c68bcf91d2a76e94387f
\.

SELECT pg_catalog.setval('public.users_id_seq', 3, true);

