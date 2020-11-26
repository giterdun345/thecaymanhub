from django.shortcuts import render
from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_TERMS,
    LOOKUP_FILTER_RANGE,
    LOOKUP_FILTER_PREFIX,
    LOOKUP_FILTER_WILDCARD,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_EXCLUDE,
)
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    OrderingFilterBackend,
    DefaultOrderingFilterBackend,
    CompoundSearchFilterBackend,
)
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet

# Example app models
# from search_indexes.document 
from .document import ReviewDocument 
# from search_indexes.serializers
from .serializers import ReviewDocumentSerializer 

class ReviewDocumentView(DocumentViewSet):
    """The ReviewDocument view."""

    document = ReviewDocument
    serializer_class = ReviewDocumentSerializer
    lookup_field = 'id'
    filter_backends = [
        FilteringFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        CompoundSearchFilterBackend,
    ]
    # Define search fields
    search_fields = (
        'comment',
        'headline',
        'biz_title',
        'category',
        'high_category',
        'tags'
    )
    # Define filtering fields
    filter_fields = {
        'id': {
            'field': '_id',
            'lookups': [
                LOOKUP_FILTER_RANGE,
                LOOKUP_QUERY_IN,
            ],
        },
        'headline': {
            'field':'headline',
              'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
            ],
        },  
        'comment': {
            'field':'comment',
              'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
            ],
        },  
        'biz_title': {
            'field':'biz_title.raw',
              'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
            ],
        },  
        'category': {
            'field':'category.raw',
            'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
            ],
        },
        'high_category': {
            'field':'high_category.raw',
            'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
            ],
        },
        'tags': {
            'field': 'tags',
            'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
            ],
        },
        
        'author':'author.raw',
        'rating':'rating.raw',
        'created':'created.raw',

        # 'tags.raw': {
        #     'field': 'tags.raw',
        #     'lookups': [
        #         LOOKUP_FILTER_TERMS,
        #         LOOKUP_FILTER_PREFIX,
        #         LOOKUP_FILTER_WILDCARD,
        #         LOOKUP_QUERY_IN,
        #         LOOKUP_QUERY_EXCLUDE,
        #     ],
        # },
        # I dont know why this was used with the raw property? 
    }


    # Define ordering fields
    ordering_fields = {
        'created':'created',
        # 'id': 'id',
        # 'title': 'title.raw',
        # 'price': 'price.raw',
        # 'state': 'state.raw',
        # 'publication_date': 'publication_date',
    }
    # Specify default ordering
    ordering = ('created', )

