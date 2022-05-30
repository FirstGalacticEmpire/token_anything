import os

from celery import Celery


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'physical_nft_creator.settings')

app = Celery('physical_nft_creator')


app.config_from_object('django.conf:settings', namespace='CELERY')


app.conf.beat_schedule = {
    'Request UC': {
        'task': 'request.tasks.execute',
        'schedule': 30,
    },
}

app.conf.timezone = 'UTC'
app.autodiscover_tasks()

