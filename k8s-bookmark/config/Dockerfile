FROM mysql:5.7
ENV MYSQL_ROOT_PASSWORD=root

COPY db.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
