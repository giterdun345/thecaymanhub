from .models import Biz
from rest_framework import viewsets, permissions
from .serializers import BizSerializer

# lead viewset 
# allows crud api without having explicitly state methods for create update delete etc

class BizViewset(viewsets.ModelViewSet):
    queryset = Biz.objects.all()
    permission_classes = [ permissions.AllowAny ]
    serializer_class = BizSerializer