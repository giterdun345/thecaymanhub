from django.contrib import admin
from .models import Biz, Review


class BizAdmin(admin.ModelAdmin):
    model = Biz
    list_display = ('id', 'biz_title', 'category', 'pic', 'address', 'email', 'phone', 'confirmed', 'tags')
    list_display_links = ('id', 'category', )
    list_per_page = 25
    exclude = ('slug', )

admin.site.register(Biz, BizAdmin)

class ReviewAdmin(admin.ModelAdmin):
    model = Review
    list_display = ('id', 'author', 'headline', 'rating', 'comment', 'tags')
    list_display_links = ('id',)
    list_per_page = 25
    search_fields = ('author', 'rating')

admin.site.register(Review, ReviewAdmin)