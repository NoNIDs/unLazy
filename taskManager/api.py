from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework import status

from .serializers import TaskSerializer, TaskStatisticSerializer
from .models import Task, TaskStatistic

from accounts.serializers import UserSerializer
from accounts.models import User


# Get Task API
class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TaskSerializer

    def get_queryset(self):
        return self.request.user.task.all()

    def perform_create(self, serializer):
        serializer.save(task_user=self.request.user)


# Get Task Statistic API
class TaskStatisticAPI(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TaskStatisticSerializer

    def put(self, request):
        data = request.data
        user = User.objects.get(username=request.user.username)
        serializer = UserSerializer(instance=user, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        return self.request.user.statistic.all()
