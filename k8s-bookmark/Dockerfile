FROM php:8.0-apache

WORKDIR /var/www/html

COPY ./api .
COPY ./config ../config
COPY ./db ../db

RUN apt-get update && \
    apt-get install -y libmariadb-dev libpq-dev && \
    docker-php-ext-install mysqli pdo pdo_mysql && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    sed -i 's/Listen 80/Listen 8080/' /etc/apache2/ports.conf && \
    sed -i 's/:80/:8080/' /etc/apache2/sites-available/000-default.conf && \
    echo "ServerName localhost" >> /etc/apache2/apache2.conf  # Add ServerName

EXPOSE 8080

CMD ["apache2-foreground"]
