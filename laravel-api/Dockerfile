FROM wyveo/nginx-php-fpm:latest

COPY . /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN ln -s public html

RUN apt update && apt install vim -y

RUN chown -R $USER:daemon storage/ && \
    chown -R $USER:daemon bootstrap/cache/ && \
    chmod -R 775 storage && \
    chmod -R 775 bootstrap/cache

EXPOSE 80
