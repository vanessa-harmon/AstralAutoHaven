# Generated by Django 4.0.3 on 2023-09-11 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_appointment_time_day_alter_appointment_date_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vip',
            field=models.BooleanField(default=False),
        ),
    ]
