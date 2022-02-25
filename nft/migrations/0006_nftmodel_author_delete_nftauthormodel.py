# Generated by Django 4.0.1 on 2022-02-25 14:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('nft', '0005_remove_nftmodel_author_nftmodel_id_nftauthormodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='nftmodel',
            name='author',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='nft.nftauthor'),
        ),
        migrations.DeleteModel(
            name='NftAuthorModel',
        ),
    ]
