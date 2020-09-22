from rest_framework import routers
from django.urls import path, include

from .api import TaskViewSet, TaskStatisticAPI

router = routers.DefaultRouter()
router.register('api/task', TaskViewSet, 'taskManager')

urlpatterns = [
    path('api/statistic', TaskStatisticAPI.as_view()),
    path('', include(router.urls))
]