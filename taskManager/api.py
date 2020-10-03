from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework import status

from .serializers import TaskSerializer, TaskStatisticSerializer
from .models import Task, TaskStatistic


# Get Task API
class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TaskSerializer

    def get_queryset(self):
        if self.request.method == "GET":
            queryparams = self.request.GET.get("sort", None)
            if queryparams is not None:
                return self.request.user.task.order_by(queryparams)
        return self.request.user.task.all()

    def perform_create(self, serializer):
        serializer.save(task_user=self.request.user)

    def partial_update(self, request):
        serializer = TaskSerializer(request.user,
                                    data=request.data,
                                    partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print(serializer)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create Task Statistic for User from Registration
class CreateTaskStatisticAPI(generics.CreateAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TaskStatisticSerializer

    def perform_create(self, serializer):
        serializer.save(statistic_user=self.request.user)


# Get Task Statistic API
class TaskStatisticAPI(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TaskStatisticSerializer

    def put(self, request):
        print("put")
        data = request.data
        statistic = TaskStatistic.objects.get(statistic_user=request.user)
        # print(statistic)
        serializer = TaskStatisticSerializer(instance=statistic,
                                             data=data,
                                             partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        print("get")
        return self.request.user.statistic.all()

    def get_object(self):
        return self.request.user.statistic.get(
            statistic_user=self.request.user)
