from rest_framework.views import APIView
from rest_framework.response import Response
from ..utils.serializer import UserSerializer
class RegisterView(APIView):
    permission_classes = ()
    def post(self,request,*args,**kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('yes')
        return Response('NO')