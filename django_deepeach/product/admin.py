from django.contrib import admin

# Register your models here.
from django.contrib import admin


from .models import Product


@admin.register(Product)
class PartnersAdmin(admin.ModelAdmin):
    
    list_display = ('name','category','price','date_added')
    #list_display_links = ('code','identity')
    verbose_name = "Products"
    list_filter = ('category',)
    search_fields = ('name','category','price','date_added')
    list_editable = ('category','price')
    #readonly_fields = ('entity_type','code_type')