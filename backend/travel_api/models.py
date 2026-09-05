from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Destination(models.Model):
    title = models.CharField(max_length=70)
    location = models.CharField(max_length=50)
    description = models.TextField()
    image_url = models.URLField(blank=True, null=True)
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Itinerary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="itineraries")
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.destination.title}"
    

