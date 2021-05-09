from django.contrib import admin

from task.models import Task


class TaskModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'content')


admin.site.register(Task, TaskModelAdmin)
