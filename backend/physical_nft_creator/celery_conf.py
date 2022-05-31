import os

from celery import Celery
from celery.bin import worker

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'physical_nft_creator.settings')

app = Celery('physical_nft_creator')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.conf.beat_schedule = {
    'Request UC': {
        'task': 'request.tasks.execute',
        'schedule': 10,
    },
}

app.conf.timezone = 'UTC'
app.autodiscover_tasks(packages=['request'])

if __name__ == '__main__':
    app.start(['-A', 'physical_nft_creator', 'worker', '-l', 'INFO'])
    # worker = worker.worker()
    # options = {
    #     'loglevel': 'INFO',
    # }
    #
    # worker.run(**options)
