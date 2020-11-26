from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django_elasticsearch_dsl.registries import registry

@receiver(post_save)
def update_document(sender, **kwargs):
    """Update document on added/changed records.

    Update Review document index if related `Category` (`category`),
    `Biz` (`biz`), High Category ('high_category)) fields have been updated
    in the database.
    """
    app_label = sender._meta.app_label
    model_name = sender._meta.model_name
    instance = kwargs['instance']

    if app_label == 'businesses':
        # If it is `businesses.Biz` that is being updated.
        if model_name == 'biz':
            instances = instance.businesses.all()
            for _instance in instances:
                registry.update(_instance)

        # If it is `businesses.Categories` that is being updated.
        if model_name == 'categories':
            instances = instance.businesses.all()
            for _instance in instances:
                registry.update(_instance)

        # If it is `businesses.HighCategories` that is being updated.
        if model_name == 'highcategories':
            instances = instance.businesses.all()
            for _instance in instances:
                registry.update(_instance)