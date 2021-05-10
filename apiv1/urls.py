from django.urls import path, include
from rest_framework import routers

from apiv1 import views

router = routers.DefaultRouter()
router.register('tasks', views.TaskViewSet)

app_name = 'apiv1'
urlpatterns = [
    path('', include(router.urls)),
]
