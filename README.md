# ecommerce-lab
Very simple ecommerce webpage to integration login with keycloak authentication.
This is a lab to understand how authorization code flow works

Generate a image:
docker build -t loxinha/ecommerce:latest .     

RUN a container
docker run -d -p 4200:80 loxinha/ecommerce:latest