from rest_framework import serializers
from core.models import productos

class productosSerializer(serializers.ModelSerializer):
    class Meta:
        model = productos
        fields = '__all__'