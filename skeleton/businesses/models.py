from django.db import models
from django.template.defaultfilters import slugify

class HighCategories(models.TextChoices):
    FOOD_DRINK = 'food and drink'
    ENTERTAINMENT = 'entertainment'
    SHOPPING = 'shopping'
    EDUCATION = 'education'
    PROFESSIONAL_SERVICES = 'professional services'
    MORE_BUSINESSES = 'more businesses'

class Categories(models.TextChoices):
    # Food & Drink 
    RESTAURANTS = 'restaurants'
    BARS = 'bars'
    COFFEE ='coffee'
    FOOD_TRUCKS_MORE = 'food trucks more'
    # Entertainment 
    DIVE_SNORKEL = 'dive and snorkel'
    NIGHT_LIFE = 'night life'
    WATER_SPORTS = 'water sports'
    KID_CAMPS = 'kid camps'
    MUSIC = 'music'
    EXCURSIONS = 'excursions'
    PLACES_TO_SEE = 'places to see'
    ART_PHOTOGRAPHY ='art and photography'
    # Shopping
    CLOTHING = 'clothing'
    JEWELRY = 'jewelry'
    HOME_GOODS = 'home goods'
    OTHER_SHOPPING = 'other shopping'
    # Education
    DAY_CARE = 'day care'    
    SCHOOLS = 'schools'
    COLLEGE = 'college'
    OTHER_EDUCATION = 'other education'
    # Professional Services
    HOME_SERVICES = 'home services'
    CONSTRUCTION = 'construction'
    MECHANICS = 'mechanics'
    OTHER_SERVICES = 'other services'
    # More Categories 
    HEALTH_MEDICINE = 'health and medicine'
    REAL_ESTATE = 'real estate'
    BEAUTY = 'beauty'
    TRANSPORTATION = 'transportation'
    RELIGION = 'religion'
    TECHNOLOGY = 'technology'
    ANIMALS = 'animals'
    OTHER_BUSINESSES = 'other businesses'



# more categories to be added upon initial setup
# reference https://www.youtube.com/watch?v=l9M8J9UQBDM&list=PLJRGQoqpRwdcVLAoKo6WKHXbANBLeqfyX&index=2 
# time 16.37 choice fields for categories when creating a business
# also has thumbnails to use with businesses for card layout 


class Biz (models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length = 50, choices = Categories.choices, default= Categories.BARS)

    created = models.DateTimeField(auto_now_add=True)
    pic = models.FileField(upload_to='media')
    address = models.CharField(max_length=200, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=25, blank=True)
    confirmed = models.BooleanField(default=False)
# reference https://www.youtube.com/watch?v=l9M8J9UQBDM&list=PLJRGQoqpRwdcVLAoKo6WKHXbANBLeqfyX&index=2 
# time 16.37 choice fields for categories when creating a business
# also has thumbnails to use with businesses for card layout 


    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.title

    def save(self, **kwargs):
        """sluggifies the headline"""
        original_slug = slugify(self.title)
        queryset = Biz.objects.all().filter(slug__iexact = original_slug).count()
        # counts how many headlines were the same not required only added for tut part inspect any relevance
        count = 5
        slug = original_slug
        while(queryset):
            #run until you find a slug that isn't the same 
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Biz.objects.all().filter(slug__iexact = slug).count()

        self.slug = slug
        super(Biz, self).save( **kwargs)


