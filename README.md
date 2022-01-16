# Physical nft creator
TBC DESC OF APP
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
