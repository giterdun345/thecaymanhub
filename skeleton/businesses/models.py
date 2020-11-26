from django.db import models
from django.template.defaultfilters import slugify

class HighCategories(models.TextChoices):
    FOOD_DRINK = 'food and drink'
    ENTERTAINMENT = 'entertainment'
    SHOPPING = 'shopping'
    EDUCATION = 'education'
    PROFESSIONAL_SERVICES = 'professional services'
    OTHER_BUSINESSES = 'other businesses'

class Categories(models.TextChoices):
    # Food & Drink 
    RESTAURANTS = 'restaurants'
    BARS = 'bars'
    COFFEE ='coffee'
    FOOD_TRUCKS = 'food trucks'
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
    biz_title = models.CharField(max_length=50, blank=True)
    slug = models.SlugField()
    category = models.CharField(max_length = 50, choices = Categories.choices, default= Categories.BARS)
    high_category = models.CharField(max_length = 50, choices = HighCategories.choices, default= HighCategories.OTHER_BUSINESSES)
    created = models.DateTimeField(auto_now_add=True)
    pic = models.FileField(upload_to='media', blank=True)
    address = models.CharField(max_length=200, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=25, blank=True)
    confirmed = models.BooleanField(default=False)
    tags = models.CharField(max_length=1000)

# reference https://www.youtube.com/watch?v=l9M8J9UQBDM&list=PLJRGQoqpRwdcVLAoKo6WKHXbANBLeqfyX&index=2 
# time 16.37 choice fields for categories when creating a business
# also has thumbnails to use with businesses for card layout 


    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.biz_title

    def no_of_ratings(self):
        """ Gives the number of reviews for that business"""
        ratings = Review.objects.filter(biz_title=self)
        return len(ratings)
        
    def avg_rating(self):
        """creates an average based on the reviews given"""
        ratings = Review.objects.filter(biz_title=self)
        sum = 0
        for rating in ratings:
            sum += rating.stars
        if len(ratings) > 0:
            return sum / len(ratings)
        else:
            return 0

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

class Rate(models.IntegerChoices):
    worst = 1
    not_great = 2
    good = 3
    better = 4
    best = 5

class Review(models.Model):
    # pic = models.FileField(upload_to='media, blank=True)
    author = models.CharField(max_length=100)
    headline = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)        
    rating = models.IntegerField(choices = Rate.choices)
    comment = models.CharField(max_length=1000)
    # added for tracking reviews and to provide to elasticsearch document
    biz_title = models.ForeignKey(Biz, related_name='+', on_delete=models.DO_NOTHING)
    category = models.ForeignKey(Biz, related_name='+', on_delete=models.DO_NOTHING)
    high_category = models.ForeignKey(Biz, related_name='+', on_delete=models.DO_NOTHING)
    tags = models.ForeignKey(Biz, related_name='+', on_delete=models.DO_NOTHING)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.headline
    
    # The Biz information we're going to need in our document
    # is associated with the foriegn keys. {From docs<Since this isn't a required field,
    # we define a properly on a model level to avoid indexing errors on
    # non-existing relation.>} (just in case)
    @property
    def high_category_indexing(self):
        """high_category for indexing.

        Used in Elasticsearch indexing.
        """
        if self.high_category is not None:
            return self.high_category.name
    @property
    def biz_title_indexing(self):
        """Biz Title for indexing.

        Used in Elasticsearch indexing.
        """
        if self.biz_title is not None:
            return self.biz_title.name

    @property
    def category_indexing(self):
        """category for indexing.

        Used in Elasticsearch indexing.
        """
        if self.category is not None:
            return self.category.name
