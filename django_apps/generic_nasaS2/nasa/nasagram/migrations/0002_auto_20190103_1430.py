# Generated by Django 2.1.4 on 2019-01-03 14:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nasagram', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='NasaComments',
            new_name='NasaComment',
        ),
    ]