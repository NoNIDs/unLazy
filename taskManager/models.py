from django.db import models
from accounts.models import User


class Task(models.Model):
    task_user = models.ForeignKey(User,
                                  on_delete=models.CASCADE,
                                  related_name="task",
                                  null=True)
    task_id = models.AutoField(primary_key=True)
    taskName = models.CharField(max_length=100)
    taskDesc = models.TextField()
    deadlineDate = models.DateField(blank=True)
    priority = models.PositiveIntegerField()
    complexity = models.PositiveIntegerField()

    def __str__(self):
        return self.task_id


class TaskStatistic(models.Model):
    statistic_user = models.ForeignKey(User,
                                       on_delete=models.CASCADE,
                                       related_name="statistic",
                                       null=True)
    username = models.CharField(max_length=20, default="None")
    pointsLevel = models.PositiveIntegerField(default=0)
    countCompletedTasks = models.PositiveIntegerField(default=0)
    countFailedTasks = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.statistic_user