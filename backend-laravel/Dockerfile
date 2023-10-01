# Utiliser une image de base contenant PHP et Apache
FROM php:8.1-apache

# Définir le répertoire de travail dans le conteneur
WORKDIR /var/www/html

# Installer les dépendances système nécessaires
RUN apt-get update && apt-get install -y && apt-get install redis-server -y \
    libzip-dev \
    unzip \
    && rm -r /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev

# Installer les extensions PHP requises
RUN docker-php-ext-install pdo_mysql zip

# Installer l'extension PHP MongoDB
RUN pecl install redis && docker-php-ext-enable redis


# Installer l'extension GD pour les images PHP
RUN apt-get update && apt-get install -y libpng-dev
RUN docker-php-ext-install gd


# Copier les fichiers de l'application dans le conteneur
COPY . /var/www/html

# Installer les dépendances de l'application avec Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ENV COMPOSER_ALLOW_SUPERUSER=1
RUN composer update
RUN composer install --no-interaction --no-scripts --no-suggest --optimize-autoloader

# Définir les autorisations appropriées sur les répertoires de stockage
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R ug+rwx /var/www/html/storage /var/www/html/bootstrap/cache

COPY ./docker/apache.conf /etc/apache2/sites-available/000-default.conf
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
# Configurer le serveur Apache
RUN a2enmod rewrite

# Installer supervisord
RUN apt-get update && apt-get install -y supervisor
COPY ./docker/supervisor.conf /etc/supervisor/conf.d/supervisord.conf



# Installer Node.js
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update && apt-get install -y nodejs npm
# Installer laravel-echo-server de manière globale
RUN npm install -g laravel-echo-server



# Exposer les ports 80 et 6001 du conteneur
EXPOSE 80

# Exécuter supervisord pour gérer les processus Apache et WebSocket
CMD ["/usr/bin/supervisord", "-n"]