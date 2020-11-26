from .views import ReviewDocumentView
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
reviews = router.register(r'',
                        ReviewDocumentView,
                        basename='reviewdocument')


urlpatterns = router.urls


