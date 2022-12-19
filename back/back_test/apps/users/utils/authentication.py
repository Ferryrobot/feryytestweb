from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.db.models import Q
User=get_user_model()


# class CustomBackend(ModelBackend):
#    '''
#    自定义用户验证(setting.py)
#    '''
#    def authenticate(self, request, username=None, password=None, **kwargs):
#        try:
#            user=UserProfile.objects.get(Q(username=username)|Q(mobile=username))
#            if user.check_password(password):
#                return user
#        except Exception as e:
#            return None


def jwt_response_payload_handler(token, user=None, request=None):
  """
  设置jwt登陆返回的格式
  :param token:
  :param user:
  :param request:
  :return:
  """
  return {
    "msg": "登陆成功",
    "status": True,
    "data": [{
        # data自定义你接口想返回的信息
      'token': token,
      'username': user.username,
        'userid':user.id
    }]
  }


def jwt_response_payload_error_handler(serializer, request = None):
  return {
    "msg": "用户名或者密码错误",
    "status": False,
    "detail": serializer.errors
  }
