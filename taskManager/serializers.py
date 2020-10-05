from rest_framework import serializers
from .models import Task, TaskStatistic


# Task Serializer
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.task_user = validated_data.get('task_user',
                                                instance.task_user)
        instance.task_id = validated_data.get('task_id', instance.task_id)
        instance.taskName = validated_data.get('taskName', instance.taskName)
        instance.taskDesc = validated_data.get('taskDesc', instance.taskDesc)
        instance.deadlineDate = validated_data.get('deadlineDate',
                                                   instance.deadlineDate)
        instance.priority = validated_data.get('priority', instance.priority)
        instance.complexity = validated_data.get('complexity',
                                                 instance.complexity)
        instance.save()
        return instance


# Task Statistic Serializer
class TaskStatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskStatistic
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.statistic_user = validated_data.get('statistic_user',
                                                     instance.statistic_user)
        instance.username = validated_data.get('username', instance.username)
        instance.pointsLevel = validated_data.get('pointsLevel',
                                                  instance.pointsLevel)
        instance.countCompletedTasks = validated_data.get(
            'countCompletedTasks', instance.countCompletedTasks)
        instance.countFailedTasks = validated_data.get(
            'countFailedTasks', instance.countFailedTasks)
        instance.save()
        return instance


# Task Statistic Serializer
# class RatingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = TaskStatistic
#         fields = ("id", "pointsLevel", "username")
