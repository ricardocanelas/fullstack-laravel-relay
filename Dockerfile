# Debian 10 (Buster)
# getting info: `cat /etc/os-release`
FROM php:7.3-apache

# Enable mod_rewrite - https://httpd.apache.org/docs/2.4/rewrite/
RUN a2enmod rewrite

# Getting information on the newest versions of packages
# https://linux.die.net/man/8/apt-get - Advanced Package Tool
RUN apt-get update -yqq

# Installing packages
# getting info: https://packages.debian.org/buster/[package]
RUN apt-get install -yqq --no-install-recommends \
  openssl \
  libzip-dev zip unzip \
  git

# Clear cache - also free up some disk space.
# It’s a great way to clean up any unused libraries and packages you don’t need.
# RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Installing extensions
# https://docs.docker.com/samples/library/php/
# https://laravel.com/docs/5.8 - server requirements
RUN docker-php-ext-install pdo_mysql zip
# RUN docker-php-ext-install zip exif pcntl bcmath opcache
# RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/
# RUN docker-php-ext-install gd

# Installing composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installing Node & Yarn
# https://github.com/nodesource/distributions/blob/master/README.md
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs && apt-get install -y yarn