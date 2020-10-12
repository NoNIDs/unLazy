# Generated by Django 3.1.1 on 2020-10-06 07:12

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('article_id', models.AutoField(primary_key=True, serialize=False)),
                ('pub_date', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('article_headline', models.CharField(max_length=100)),
                ('article_content', models.TextField()),
            ],
        ),
    ]