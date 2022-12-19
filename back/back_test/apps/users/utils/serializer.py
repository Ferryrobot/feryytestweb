from rest_framework import serializers
from ..models import User

class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ['mobile', 'username', 'password']
            extra_kwargs = {'password': {'write_only': True}}

        def create(self, validated_data):
            user = User(
                mobile=validated_data['mobile'],
                username=validated_data['username']
            )
            user.set_password(validated_data['password'])
            user.save()
            return user