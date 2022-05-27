"""
WSGI config for physical_nft_creator project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os

from django.contrib.auth import get_user_model
from django.core.wsgi import get_wsgi_application

from nft.models.NftAuthor import NftAuthor
from nft.models.NftModel import NftModel

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'physical_nft_creator.settings')

application = get_wsgi_application()

User = get_user_model()
if not User.objects.filter(username="root").exists():
    User.objects.create_superuser(username="root",
                                  password="rootroot",
                                  email="root2@root.com",
                                  first_name="rooot",
                                  last_name="roooot")

authors = [NftAuthor.objects.get_or_create(first_name="Monica", last_name="Lucas", country="Brazil",
                                           about="I am a great person", image="images/author_1.jpg")[0],
           NftAuthor.objects.get_or_create(first_name="Mamie", last_name="Barnett", country="Brazil",
                                           about="I am a great person", image="images/author_2.jpg")[0],
           NftAuthor.objects.get_or_create(first_name="Ida", last_name="Chapman", country="Brazil",
                                           about="I am a great person", image="images/author_3.jpg")[0],
           NftAuthor.objects.get_or_create(first_name="Fred", last_name="Ryan", country="Brazil",
                                           about="I am a great person", image="images/author_4.jpg")[0],
           ]

nfts = [NftModel.objects.get_or_create(name="Pinky Ocean",
                                       description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                       image="images/large_big_1.jpg",
                                       price=0.08, year_of_production=2021, author_id=1),
        NftModel.objects.get_or_create(name="Deep Sea Phantasy",
                                       description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                       image="images/medium_crs_2.jpg",
                                       price=0.06, year_of_production=2022, author_id=2),
        NftModel.objects.get_or_create(name="Rainbow Style",
                                       description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                       image="images/porto_4.jpg",
                                       price=0.05, year_of_production=2021, author_id=3),
        NftModel.objects.get_or_create(name="Two Tigers",
                                       description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                       image="images/small_big_2.jpg",
                                       price=0.08, year_of_production=2022, author_id=4),
        NftModel.objects.get_or_create(name="The Truth",
                                       description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                       image="images/thumbnail_1.jpg",
                                       price=0.08, year_of_production=2023, author_id=1),
        NftModel.objects.get_or_create(name="Running Puppets",
                                       description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                       image="images/thumbnail_2.jpg",
                                       price=0.08, year_of_production=2020, author_id=2),
        NftModel.objects.get_or_create(name="USA Wordmation",
                                       description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                       image="images/thumbnail_3.jpg",
                                       price=0.07, year_of_production=2021, author_id=3),
        NftModel.objects.get_or_create(name="Loop Donut",
                                       description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                                       image="images/thumbnail_crs_5.jpg",
                                       price=0.08, year_of_production=2022, author_id=4)
        ]
