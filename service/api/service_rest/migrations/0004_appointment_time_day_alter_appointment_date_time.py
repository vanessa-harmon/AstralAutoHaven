# Generated by Django 4.0.3 on 2023-09-08 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_alter_appointment_date_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='time_day',
            field=models.TimeField(null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date_time',
            field=models.DateField(null=True),
        ),
    ]
