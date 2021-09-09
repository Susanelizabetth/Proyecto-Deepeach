# Proyecto-Deepeach
Creación de pagina web 

### Install and setup (Django)

`virtualenv enviroment_3_8_2` crear un entorno virtual

`source enviroment_3_8_2/bin/active`  para preparar el entorno para instalar lo que usuaremos, si no tengo un entorno virtual puedo installarlo con `pip install virtualenv`  

activar entorno en windows especificamente en el cmd `myenviroment\Scripts\activate.bat`

`pip install django` instalar django 

`pip install django-rest-framework`

`pip install django-cors-headers` CROSS RESOURCE ORIGIN HTTPS HEADER

`pip install djoser` autenticación de los usuarios

`pip install pillow` cambiar el tamaño de las imagenes, version de python

`pip install stripe` backend

crear un proyecto de django

`django-admin startproject name` 

`cd name`

`ls name manage.py`

 

add in [settings.py](http://settings.py) line40 

```python
		'rest_framework',
		'rest_framework.authtoken',
		'corsheaders',
		'djoser',

CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",
]

#add in middleware 
		'corsheaders.middleware.CorsMiddleware',

#in urls.py 

```

username: admin

password: admin123

email: castillosusana55@gmail.com

`py [manage.py](http://manage.py/) runserver` para correr django 

### Veu create

`npm i -g @vue/cli @vue/cli-service-global` install vue

`vue --v` 

`vue create name-proyect`

seleccionar opciones 

`cd name-proyect` 

`npm install axios` esta biblioteca nos ayudara a hablar con el backend

`npm install bulma` es un marco css para pensar mucho en el estilo

`npm run serve`

### Crear app dejango y los modulos para los productos

`py [manage.py](http://manage.py/) startapp product`

`py [manage.py](http://manage.py/) makemigrations`

`py [manage.py](http://manage.py/) migrate`
