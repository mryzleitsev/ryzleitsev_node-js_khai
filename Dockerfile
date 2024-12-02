# Используем официальный образ nginx в качестве базового
FROM nginx

# Удаляем стандартные файлы из образа
RUN rm -rf /usr/share/nginx/html/*

# Копируем файл index.html в папку веб-сервера
COPY ./index.html /usr/share/nginx/html

# Открываем порт 80 для доступа
EXPOSE 80

# Запуск Nginx в режиме foreground
CMD ["nginx", "-g", "daemon off;"]
