from django_elasticsearch_dsl_drf.serializers import DocumentSerializer
from .document import ReviewDocument

class ReviewDocumentSerializer(DocumentSerializer):
    """Serializer python object => json """
    class Meta:
        model = ReviewDocument
        fields = '__all__'
        read_only_fields = fields
