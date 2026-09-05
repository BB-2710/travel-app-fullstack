from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView, DestinationViewSet, ItineraryViewSet

router = DefaultRouter()
router.register(r"destinations", DestinationViewSet)
router.register(r"itineraries", ItineraryViewSet, basename="itinerary")

urlpatterns = [
    path("auth/register/", RegisterView.as_view()),
    path("auth/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("", include(router.urls)),
]