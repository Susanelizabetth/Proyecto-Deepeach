from django.urls import path
from django.urls.conf import include, path

from product import views

urlpatterns = [
    path('latest-products/',views.LatestProductsList.as_view())

]