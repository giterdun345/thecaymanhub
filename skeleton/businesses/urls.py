from .views import BizListView, BizDetailView, BizCategoryView
from django.urls import path

urlpatterns = [
    path('', BizListView.as_view(), name ='biz-list'),
    path('<slug>', BizDetailView.as_view(), name ='biz-detail'),
    path('categories/', BizCategoryView.as_view(), name ='categories')
]

