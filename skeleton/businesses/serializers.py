from rest_framework import serializers
from .models import Biz, Review


class BizSerializer(serializers.ModelSerializer):
    """Serializer python object => json """
    class Meta:
        model = Biz
        fields = '__all__'
        lookup_field = 'slug'

class ReviewSerializer(serializers.ModelSerializer):
    """Serializer python object => json """
    class Meta:
        model = Review
        fields = '__all__'
