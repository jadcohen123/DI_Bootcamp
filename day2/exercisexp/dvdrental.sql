SELECT * 
FROM customer;
SELECT first_name || ' ' || last_name 
AS full_name 
FROM customer;
SELECT create_date
FROM customer;

SELECT * FROM customer 
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT address, phone
FROM address 
INNER JOIN customer
ON customer.customer_id = address.address_id
WHERE district = 'Texas';

SELECT * 
FROM film 
WHERE film_id 
IN(15, 150);

SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Fury';

SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title ILIKE 'Fa%'

SELECT * FROM film 
ORDER BY rental_rate ASC
LIMIT 10;
SELECT * FROM film 
ORDER BY rental_rate ASC
LIMIT 20;
SELECT amount, payment_date
FROM payment
INNER JOIN customer
ON customer.customer_id=payment.customer_id
ORDER BY payment_id ASC

SELECT title
FROM film
LEFT JOIN inventory
ON inventory.inventory_id = film.film_id
SELECT city, country
FROM country
INNER JOIN city
ON city.country_id = country.country_id