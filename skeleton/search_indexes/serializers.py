from rest_framework import serializers
from businesses.models import Review

class ReviewDocumentSerializer(serializers.ModelSerializer):
    """Serializer python object => json """
    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = fields
