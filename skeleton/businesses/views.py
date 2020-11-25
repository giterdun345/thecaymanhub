from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Biz
from .serializers import BizSerializer

class BizListView(ListAPIView):
    """grabs a list of all of the businesses in creation order"""
    queryset = Biz.objects.order_by('-created')
    # you have to call the variable queryset
    serializer_class = BizSerializer
    permission_classes = [ permissions.AllowAny ]
    lookup_field = 'slug'

class BizDetailView(RetrieveAPIView):
    """ In order to go into a Biz page and see the details of it"""
    queryset = Biz.objects.order_by('-created')
    serializer_class = BizSerializer
    permission_classes = [ permissions.AllowAny ]
    lookup_field = 'slug'

# class ReviewFeatureView(ListAPIView):
#     """gives us the featured review"""
#     queryset = Review.objects.all().filter(featured = True)
#     # have to call queryset
#     serializer_class = ReviewSerializer
#     permission_classes = [ permissions.AllowAny ]
#     lookup_field = 'slug'

class BizCategoryView(APIView):
    serializer_class = BizSerializer
    permission_classes = [ permissions.AllowAny ]
    
    def post(self, request, format = None):
        data = self.request.data
        category = data['category']
        queryset = Biz.objects.order_by('-created').filter(category__iexact = category)
        serializer = BizSerializer(queryset, many = True)
        return Response(serializer.data)
# perhaps ordering will be determined later on the rating
