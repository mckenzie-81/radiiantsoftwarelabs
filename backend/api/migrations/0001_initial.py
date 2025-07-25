# Generated by Django 5.2.4 on 2025-07-18 21:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ContactSubmission",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("full_name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254)),
                ("company", models.CharField(blank=True, max_length=255)),
                ("message", models.TextField()),
                ("submitted_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
