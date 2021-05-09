from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from apiv1.serializers import TaskSerializer
from task.models import Task


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
