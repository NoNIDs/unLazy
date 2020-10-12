from rest_framework import viewsets

from .serializers import ArticleSerializer
from .models import Article


# Get Articles API
class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.all().order_by("-pub_date")

    def perform_create(self, serializer):
        serializer.save()