from rest_framework import routers
from django.urls import path, include

from .api import TaskViewSet, TaskStatisticAPI, CreateTaskStatisticAPI, RatingAPI

router = routers.DefaultRouter()
router.register('api/task', TaskViewSet, 'taskManager')
# router.register('api/rating', RatingAPI, 'taskManager')

urlpatterns = [
    path('api/statistic', TaskStatisticAPI.as_view()),
    path('api/statistic/create', CreateTaskStatisticAPI.as_view()),
    path('api/rating/', RatingAPI.as_view()),
    path('', include(router.urls))
]