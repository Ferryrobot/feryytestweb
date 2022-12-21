from rest_framework.views import APIView
from rest_framework.response import Response
from ..utils.serializer import UserSerializer
class RegisterView(APIView):
    permission_classes = ()
    def post(self,request,*args,**kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"result":True,"status":200,"msg":"注册成功"})
        return Response({"result":False,"status":400,"msg":list(serializer.errors.values())[0][0]})