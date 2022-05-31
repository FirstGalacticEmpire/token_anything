# Physical nft creator
Backend section of our application. 
Main tools that was used:
- Django
- Web3
- Celery (for task scheduling)
- Postgres

Main parts of the api: 
- Authentication (register, login, user information)
- Token Models (inormation about our tokens)
- Request (creating tokens by end user)
- Connector (solidity connector)

## Prerequisites
* **[Python: 3.8.0](https://www.python.org/downloads/release/python-380/)**
* **[Postman](https://www.postman.com/downloads/)** application for making requests. (Additional, not required)

## Installation
Firstly create your own virtual environment ([venv](https://docs.python.org/3/library/venv.html#module-venv)) in PyCharm or by terminal:
```bash
$ python3 -m venv /path/to/new/virtual/environment
```
The next step is to install the libraries:
```bash
$ pip install -r backend/requirements.txt
```

## Usage
```bash
$ python manage.py runserver
```
Server should run on http://127.0.0.1:8000/ by default.

## Useful commands

 - Migrate changed data/models:
```bash
$ python manage.py migrate
```
```bash
$ python manage.py makemigrations
```
- Create super-user:
```bash
$ python manage.py createsuperuser
```
- Create new app:
```bash
$ python manage.py startapp NAME_OF_APP
```
## How to run Redis for Celery
For Windows **wsl2 required**
```bash
$ sudo service redis-server start
```
For checking status:
```bash
$ sudo service redis-server status
```

## How to run backend Use Cases
```bash
$ celery -A physical_nft_creator beat -l INFO
```
```bash
$  celery -A physical_nft_creator worker -l INFO -P eventlet 
```
