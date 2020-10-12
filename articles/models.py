from django.db import models
from django.utils.timezone import now


class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    pub_date = models.DateTimeField(default=now, blank=True)
    article_headline = models.CharField(max_length=100)
    article_content = models.TextField()

    def __str__(self):
        return self.article_headline