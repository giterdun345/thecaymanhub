from django.contrib import admin
from .models import Biz


class BizAdmin(admin.ModelAdmin):
    model = Biz
    list_display = ('id', 'title', 'category', 'pic', 'address', 'email', 'phone', 'confirmed')
    list_display_links = ('id', 'category', )
    list_per_page = 25
    exclude = ('slug', )

admin.site.register(Biz, BizAdmin)