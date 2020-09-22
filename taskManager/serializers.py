from rest_framework import serializers
from .models import Task, TaskStatistic


# Task Serializer
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


# Task Statistic Serializer
class TaskStatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskStatistic
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.statistic_user = validated_data.get('statistic_user',
                                                     instance.statistic_user)
        instance.pointsLevel = validated_data.get('pointsLevel',
                                                  instance.pointsLevel)
        instance.countCompletedTasks = validated_data.get(
            'countCompletedTasks', instance.countCompletedTasks)
        instance.countFailedTasks = validated_data.get(
            'countFailedTasks', instance.countFailedTasks)
        instance.save()
        return instance